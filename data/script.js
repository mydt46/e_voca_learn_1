// script.js — Logic dùng chung cho mọi trang học từ vựng.
// Mỗi trang HTML cần load 1 file data (định nghĩa biến PAGE_WORDS) TRƯỚC khi load file này.

(function () {
  const board = document.getElementById("board");
  const scoreEl = document.getElementById("score");
  const totalEl = document.getElementById("total");
  const checkAllBtn = document.getElementById("checkAllBtn");
  const resetBtn = document.getElementById("resetBtn");

  if (!board || typeof PAGE_WORDS === "undefined") {
    console.error("Thiếu #board trong HTML hoặc chưa load file data (PAGE_WORDS).");
    return;
  }

  const words = PAGE_WORDS;
  totalEl.textContent = `/ ${words.length}`;

  function normalize(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[’‘]/g, "'");
  }

  // Tạo URL audio phát âm theo cấu trúc của Oxford Learner's Dictionaries.
  // Ví dụ: "airport" -> .../us_pron/a/air/airpo/airport__us_1.mp3
  function buildOxfordAudioUrl(word) {
    const clean = word.toLowerCase().replace(/[^a-z]/g, "");
    if (!clean) return null;
    const l1 = clean.slice(0, 1);
    const l3 = clean.slice(0, Math.min(3, clean.length));
    const l5 = clean.slice(0, Math.min(5, clean.length));
    return `https://www.oxfordlearnersdictionaries.com/media/english/us_pron/${l1}/${l3}/${l5}/${clean}__us_1.mp3`;
  }

  // Phương án dự phòng: dùng giọng đọc của trình duyệt nếu không tìm được file mp3
  // (một số cụm từ nhiều chữ như "movie theater" có thể không tồn tại trên Oxford).
  function speakFallback(word) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = "en-US";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
  }

  function playPronunciation(word, btn) {
    const url = buildOxfordAudioUrl(word);
    btn.classList.add("playing");

    const stopPlaying = () => btn.classList.remove("playing");

    if (!url) {
      speakFallback(word);
      stopPlaying();
      return;
    }

    const audio = new Audio(url);
    audio.addEventListener("ended", stopPlaying);
    audio.addEventListener("error", () => {
      stopPlaying();
      speakFallback(word);
    });
    audio.play().catch(() => {
      stopPlaying();
      speakFallback(word);
    });
  }

  function updateScore() {
    const correctCount = board.querySelectorAll(".word-input.correct").length;
    scoreEl.textContent = `Đúng: ${correctCount}`;
  }

  function checkInput(input, answer) {
    const val = normalize(input.value);
    const correctAnswer = normalize(answer);

    input.classList.remove("correct", "wrong");

    if (val.length === 0) {
      updateScore();
      return;
    }

    if (val === correctAnswer) {
      input.classList.add("correct");
    } else {
      input.classList.add("wrong");
    }
    updateScore();
  }

  function buildInputs() {
    words.forEach((word, index) => {
      const wrap = document.createElement("div");
      wrap.className = "word-wrap";
      wrap.style.left = word.left + "%";
      wrap.style.top = word.top + "%";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "word-input";
      input.autocomplete = "off";
      input.spellcheck = false;
      input.style.width = word.width + "px";
      input.dataset.answer = word.answer;
      input.dataset.index = index;

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          checkInput(input, word.answer);
		  if (input.classList.contains("correct")) {
            playPronunciation(word.answer, audioBtn);
          }
          const next = board.querySelectorAll(".word-input")[index + 1];
          if (next) next.focus();
        }
      });

      input.addEventListener("input", () => {
        if (input.classList.contains("wrong") || input.classList.contains("correct")) {
          input.classList.remove("wrong", "correct");
        }
      });

      const audioBtn = document.createElement("button");
      audioBtn.type = "button";
      audioBtn.className = "audio-btn";
      audioBtn.title = "Nghe phát âm: " + word.answer;
      audioBtn.setAttribute("aria-label", "Nghe phát âm " + word.answer);
      audioBtn.innerHTML = "🔊";
      audioBtn.addEventListener("click", (e) => {
        e.preventDefault();
        playPronunciation(word.answer, audioBtn);
      });

      wrap.appendChild(input);
      wrap.appendChild(audioBtn);
      board.appendChild(wrap);
    });
  }

  if (checkAllBtn) {
    checkAllBtn.addEventListener("click", () => {
      board.querySelectorAll(".word-input").forEach((input) => {
        checkInput(input, input.dataset.answer);
      });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      board.querySelectorAll(".word-input").forEach((input) => {
        input.value = "";
        input.classList.remove("correct", "wrong");
      });
      updateScore();
    });
  }

  buildInputs();
})();