document.addEventListener("DOMContentLoaded", () => {
  const quizShortMeanEl = document.getElementById("quizShortMean");
  const quizMeanEl = document.getElementById("quizMean");
  const quizInputEl = document.getElementById("quizInput");
  const quizAnswerTextEl = document.getElementById("quizAnswerText");
  const quizHintMsgEl = document.getElementById("quizHintMsg");
  const quizCurrentCountEl = document.getElementById("quizCurrentCount");
  const quizTotalCountEl = document.getElementById("quizTotalCount");
  const quizProgressBarEl = document.getElementById("quizProgressBar");
  const quizBodyEl = document.getElementById("quizBody");
  const quizDoneEl = document.getElementById("quizDone");
  const quizRestartBtn = document.getElementById("quizRestartBtn");
  const confettiCanvas = document.getElementById("confettiCanvas");

  let remainingWords = [];
  let totalWordsCount = 0;
  let currentWord = null;
  let completedCount = 0;
  let isChecking = false;
  let timerId = null;

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function initQuiz() {
    if (typeof VOCA_WORDS === "undefined" || !VOCA_WORDS.length) {
      if (quizMeanEl) quizMeanEl.textContent = "Không tìm thấy dữ liệu từ vựng.";
      return;
    }

    remainingWords = shuffle(VOCA_WORDS);
    totalWordsCount = VOCA_WORDS.length;
    completedCount = 0;
    isChecking = false;
    if (timerId) clearTimeout(timerId);

    if (quizBodyEl) quizBodyEl.style.display = "block";
    if (quizDoneEl) quizDoneEl.style.display = "none";
    stopConfetti();

    if (quizTotalCountEl) quizTotalCountEl.textContent = totalWordsCount;
    updateProgress();
    nextQuestion();
  }

  function updateProgress() {
    if (quizCurrentCountEl) quizCurrentCountEl.textContent = completedCount;
    const percentage = totalWordsCount > 0 ? (completedCount / totalWordsCount) * 100 : 0;
    if (quizProgressBarEl) quizProgressBarEl.style.width = percentage + "%";
  }

  function nextQuestion() {
    isChecking = false;
    if (!quizInputEl) return;

    quizInputEl.value = "";
    quizInputEl.disabled = false;
    quizInputEl.classList.remove("correct", "wrong");
    if (quizHintMsgEl) {
      quizHintMsgEl.textContent = "";
      quizHintMsgEl.className = "quiz-hint-msg";
    }

    if (remainingWords.length === 0) {
      showDone();
      return;
    }

    currentWord = remainingWords.pop();
    if (quizShortMeanEl) quizShortMeanEl.textContent = currentWord.short_mean || "";
    if (quizMeanEl) quizMeanEl.textContent = currentWord.mean;
    if (quizAnswerTextEl) quizAnswerTextEl.textContent = currentWord.answer;
    quizInputEl.focus();
  }

  function checkAnswer() {
    if (isChecking || !currentWord || !quizInputEl) return;

    const userVal = quizInputEl.value.trim().toLowerCase();
    const correctVal = currentWord.answer.trim().toLowerCase();

    if (!userVal) return;

    if (userVal === correctVal) {
      isChecking = true;
      quizInputEl.classList.remove("wrong");
      quizInputEl.classList.add("correct");
      quizInputEl.disabled = true;

      if (quizHintMsgEl) {
        quizHintMsgEl.textContent = ` Chính xác! (${currentWord.answer})`;
        quizHintMsgEl.className = "quiz-hint-msg msg-correct";
      }

      completedCount++;
      updateProgress();

      timerId = setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else {
      quizInputEl.classList.remove("correct");
      quizInputEl.classList.add("wrong");

      if (quizHintMsgEl) {
        quizHintMsgEl.textContent = " Sai rồi, hãy thử lại!";
        quizHintMsgEl.className = "quiz-hint-msg msg-wrong";
      }

      // Re-trigger shake animation
      quizInputEl.style.animation = "none";
      quizInputEl.offsetHeight; /* trigger reflow */
      quizInputEl.style.animation = null;
    }
  }

  if (quizInputEl) {
    quizInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        checkAnswer();
      }
    });
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener("click", () => {
      initQuiz();
    });
  }

  function showDone() {
    if (quizBodyEl) quizBodyEl.style.display = "none";
    if (quizDoneEl) quizDoneEl.style.display = "block";
    startConfetti();
  }

  // --- Confetti Animation ---
  let confettiAnimationId = null;
  let confettiParticles = [];

  function startConfetti() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext("2d");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const colors = ["#f1c40f", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6", "#e67e22"];
    confettiParticles = [];
    for (let i = 0; i < 120; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 6 - 3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiParticles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > confettiCanvas.height) {
          p.y = -10;
          p.x = Math.random() * confettiCanvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      confettiAnimationId = requestAnimationFrame(animate);
    }
    animate();
  }

  function stopConfetti() {
    if (confettiAnimationId) {
      cancelAnimationFrame(confettiAnimationId);
      confettiAnimationId = null;
    }
    if (confettiCanvas) {
      const ctx = confettiCanvas.getContext("2d");
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  window.addEventListener("resize", () => {
    if (confettiCanvas && confettiAnimationId) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
  });

  initQuiz();
});
