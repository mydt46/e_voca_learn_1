const VOCA_WORDS = [
  {
    "answer": "to see",
    "short_mean": "nhìn thấy, quan sát",
    "mean": "Nhận biết hình ảnh bằng thị giác.",
    "en_ex": "I can see the mountains clearly from my window.",
    "vi_ex": "Tôi có thể nhìn thấy những ngọn núi rõ ràng từ cửa sổ của mình."
  },
  {
    "answer": "to lick",
    "short_mean": "liếm",
    "mean": "Dùng lưỡi lướt qua bề mặt của cái gì đó.",
    "en_ex": "The dog began to lick the ice cream cone.",
    "vi_ex": "Con chó bắt đầu liếm kem."
  },
  {
    "answer": "to taste",
    "short_mean": "nếm, có vị",
    "mean": "Cảm nhận vị giác bằng lưỡi.",
    "en_ex": "Taste the soup to see if it needs more salt.",
    "vi_ex": "Hãy nếm món súp xem nó có cần thêm muối không."
  },
  {
    "answer": "to smell",
    "short_mean": "ngửi, có mùi",
    "mean": "Cảm nhận mùi hương bằng khứu giác.",
    "en_ex": "I can smell fresh bread baking in the kitchen.",
    "vi_ex": "Tôi có thể ngửi thấy mùi bánh mì tươi đang nướng trong bếp."
  },
  {
    "answer": "to listen",
    "short_mean": "lắng nghe",
    "mean": "Tập trung tai để nghe âm thanh.",
    "en_ex": "Listen carefully to the teacher's instructions.",
    "vi_ex": "Hãy lắng nghe kỹ hướng dẫn của giáo viên."
  },
  {
    "answer": "to work",
    "short_mean": "làm việc",
    "mean": "Thực hiện công việc hoặc nhiệm vụ.",
    "en_ex": "She works as a software engineer at an IT company.",
    "vi_ex": "Cô ấy làm việc với tư cách là kỹ sư phần mềm tại một công ty CNTT."
  },
  {
    "answer": "to play",
    "short_mean": "chơi đùa",
    "mean": "Tham gia trò chơi giải trí.",
    "en_ex": "Children love to play in the park after school.",
    "vi_ex": "Trẻ em thích chơi đùa trong công viên sau giờ học."
  },
  {
    "answer": "to kick",
    "short_mean": "đá",
    "mean": "Dùng chân tác động lực vào vật gì đó.",
    "en_ex": "He ran up to kick the ball into the net.",
    "vi_ex": "Anh ấy chạy đến để đá quả bóng vào lưới."
  },
  {
    "answer": "to throw",
    "short_mean": "ném, quăng",
    "mean": "Dùng tay văng một vật đi xa.",
    "en_ex": "Throw the ball to me and I will catch it.",
    "vi_ex": "Hãy ném quả bóng cho tôi và tôi sẽ bắt nó."
  },
  {
    "answer": "to hit",
    "short_mean": "đánh, đập",
    "mean": "Tác động mạnh vào cái gì đó bằng tay hoặc dụng cụ.",
    "en_ex": "He hit the baseball with the bat.",
    "vi_ex": "Anh ấy đã đánh quả bóng chày bằng gậy."
  },
  {
    "answer": "to whisper",
    "short_mean": "thì thầm",
    "mean": "Nói nhỏ nhẹ vào tai người khác.",
    "en_ex": "She leaned over to whisper a secret to her friend.",
    "vi_ex": "Cô ấy ghé sát vào để thì thầm một điều bí mật với bạn mình."
  },
  {
    "answer": "to dance",
    "short_mean": "khiêu vũ, nhảy múa",
    "mean": "Di chuyển cơ thể theo nhịp điệu âm nhạc.",
    "en_ex": "They danced together all night at the wedding party.",
    "vi_ex": "Họ đã nhảy múa cùng nhau suốt đêm tại tiệc cưới."
  },
  {
    "answer": "to run",
    "short_mean": "chạy",
    "mean": "Di chuyển bằng chân với tốc độ nhanh.",
    "en_ex": "He ran fast to catch the departing bus.",
    "vi_ex": "Anh ấy đã chạy nhanh để bắt kịp chuyến xe buýt đang khởi hành."
  },
  {
    "answer": "to crawl",
    "short_mean": "bò, trườn",
    "mean": "Di chuyển bằng cả tay và đầu gối sát mặt đất.",
    "en_ex": "The baby learned to crawl before she could walk.",
    "vi_ex": "Em bé đã học bò trước khi có thể đi."
  },
  {
    "answer": "to jump",
    "short_mean": "nhảy lên",
    "mean": "Bật nẩy cơ thể lên khỏi mặt đất.",
    "en_ex": "The cat jumped onto the high fence.",
    "vi_ex": "Con mèo nhảy lên hàng rào cao."
  },
  {
    "answer": "to repair",
    "short_mean": "sửa chữa",
    "mean": "Khắc phục hư hỏng để vật dụng hoạt động lại.",
    "en_ex": "He knows how to repair broken bicycles.",
    "vi_ex": "Anh ấy biết cách sửa chữa những chiếc xe đạp bị hỏng."
  },
  {
    "answer": "to shake",
    "short_mean": "rung, lắc, bắt tay",
    "mean": "Di chuyển qua lại nhanh chóng hoặc bắt tay.",
    "en_ex": "Shake the bottle well before opening it.",
    "vi_ex": "Lắc đều chai trước khi mở."
  },
  {
    "answer": "to make (a snowman)",
    "short_mean": "nặn/làm (người tuyết)",
    "mean": "Tạo hình và dựng nên người tuyết.",
    "en_ex": "Children went outside to make a snowman in the garden.",
    "vi_ex": "Trẻ em đi ra ngoài để làm một người tuyết trong vườn."
  },
  {
    "answer": "to do (homework)",
    "short_mean": "làm (bài tập về nhà)",
    "mean": "Hoàn thành nhiệm vụ học tập được giao.",
    "en_ex": "You must do your homework before watching TV.",
    "vi_ex": "Con phải làm bài tập về nhà trước khi xem ti-vi."
  },
  {
    "answer": "to think",
    "short_mean": "suy nghĩ",
    "mean": "Sử dụng trí óc để suy ngẫm hoặc đưa ra ý kiến.",
    "en_ex": "Give me a minute to think about your question.",
    "vi_ex": "Cho tôi một phút để suy nghĩ về câu hỏi của bạn."
  },
  {
    "answer": "to understand",
    "short_mean": "hiểu",
    "mean": "Nắm được ý nghĩa hoặc bản chất của vấn đề.",
    "en_ex": "Do you understand what the teacher explained?",
    "vi_ex": "Bạn có hiểu những gì thầy giáo đã giải thích không?"
  },
  {
    "answer": "to spell",
    "short_mean": "đánh vần",
    "mean": "Đọc từng chữ cái cấu tạo nên từ.",
    "en_ex": "Can you spell your full name for the record?",
    "vi_ex": "Bạn có thể đánh vần tên đầy đủ của mình để lưu hồ sơ không?"
  },
  {
    "answer": "to move",
    "short_mean": "di chuyển, cử động",
    "mean": "Thay đổi vị trí hoặc động đậy cơ thể.",
    "en_ex": "Please move the table closer to the window.",
    "vi_ex": "Vui lòng di chuyển chiếc bàn lại gần cửa sổ."
  },
  {
    "answer": "to dig",
    "short_mean": "đào đất",
    "mean": "Tạo lỗ trên mặt đất bằng xẻng hoặc tay.",
    "en_ex": "The dog started to dig a hole to bury its bone.",
    "vi_ex": "Con chó bắt đầu đào một cái lỗ để giấu khúc xương."
  },
  {
    "answer": "to fall",
    "short_mean": "ngã, rơi",
    "mean": "Rơi từ trên cao xuống hoặc ngã gục.",
    "en_ex": "Be careful not to fall on the slippery floor.",
    "vi_ex": "Hãy cẩn thận kẻo ngã trên sàn nhà trơn trượt."
  },
  {
    "answer": "to carry",
    "short_mean": "mang, vác, bế",
    "mean": "Cầm giữ vật và di chuyển từ nơi này sang nơi khác.",
    "en_ex": "He helped her carry the heavy shopping bags.",
    "vi_ex": "Anh ấy đã giúp cô ấy xách những túi mua sắm nặng."
  },
  {
    "answer": "to climb",
    "short_mean": "leo, trèo",
    "mean": "Trèo lên vị trí cao như núi hoặc cây.",
    "en_ex": "They plan to climb the mountain tomorrow morning.",
    "vi_ex": "Họ dự định leo núi vào sáng mai."
  },
  {
    "answer": "to stand up",
    "short_mean": "đứng dậy",
    "mean": "Nâng cơ thể từ tư thế ngồi/nằm sang tư thế đứng.",
    "en_ex": "Please stand up when your name is called.",
    "vi_ex": "Vui lòng đứng dậy khi tên của bạn được gọi."
  },
  {
    "answer": "to sit down",
    "short_mean": "ngồi xuống",
    "mean": "Hạ cơ thể xuống ghế hoặc mặt đất.",
    "en_ex": "Take a seat and sit down comfortably.",
    "vi_ex": "Hãy lấy một chiếc ghế và ngồi xuống thoải mái."
  },
  {
    "answer": "to lift",
    "short_mean": "nâng lên, nhấc lên",
    "mean": "Nâng một vật từ vị trí thấp lên vị trí cao hơn.",
    "en_ex": "He is strong enough to lift the heavy box by himself.",
    "vi_ex": "Anh ấy đủ khỏe để tự mình nhấc chiếc hộp nặng lên."
  },
  {
    "answer": "to add",
    "short_mean": "cộng thêm, thêm vào",
    "mean": "Tính tổng hoặc cho thêm một thành phần khác.",
    "en_ex": "Add five and three to get eight.",
    "vi_ex": "Cộng năm với ba để được tám."
  },
  {
    "answer": "to subtract",
    "short_mean": "trừ đi",
    "mean": "Bớt đi một số lượng từ tổng số.",
    "en_ex": "If you subtract four from ten, you get six.",
    "vi_ex": "Nếu bạn trừ bốn khỏi mười, bạn được sáu."
  },
  {
    "answer": "to count",
    "short_mean": "đếm",
    "mean": "Liệt kê số lượng theo thứ tự chữ số.",
    "en_ex": "The teacher asked the kids to count from one to twenty.",
    "vi_ex": "Cô giáo yêu cầu các bé đếm từ một đến hai mươi."
  },
  {
    "answer": "to sing",
    "short_mean": "hát",
    "mean": "Tạo ra giai điệu bằng giọng nói.",
    "en_ex": "She sings beautifully in the school band.",
    "vi_ex": "Cô ấy hát rất hay trong ban nhạc của trường."
  },
  {
    "answer": "to catch",
    "short_mean": "bắt lấy, đón lấy",
    "mean": "Nắm giữ một vật đang bay hoặc di chuyển.",
    "en_ex": "The dog ran to catch the flying frisbee.",
    "vi_ex": "Con chó chạy theo để bắt lấy đĩa bay."
  },
  {
    "answer": "to talk",
    "short_mean": "trò chuyện, nói chuyện",
    "mean": "Trao đổi lời nói với người khác.",
    "en_ex": "They sat on the bench to talk about their day.",
    "vi_ex": "Họ ngồi trên ghế băng để trò chuyện về một ngày của mình."
  },
  {
    "answer": "to speak",
    "short_mean": "nói (ngôn ngữ)",
    "mean": "Phát ra lời nói hoặc sử dụng một ngôn ngữ.",
    "en_ex": "Can you speak English fluently?",
    "vi_ex": "Bạn có thể nói tiếng Anh trôi chảy không?"
  },
  {
    "answer": "to shout",
    "short_mean": "hét lên, la to",
    "mean": "Phát ra âm thanh nói thật to.",
    "en_ex": "Don't shout at me; I can hear you clearly.",
    "vi_ex": "Đừng quát la tôi; tôi có thể nghe thấy bạn rõ ràng mà."
  },
  {
    "answer": "to push",
    "short_mean": "đẩy",
    "mean": "Tác động lực đẩy một vật ra xa khỏi mình.",
    "en_ex": "Push the door open to enter the building.",
    "vi_ex": "Đẩy cửa mở ra để bước vào tòa nhà."
  },
  {
    "answer": "to pull",
    "short_mean": "kéo",
    "mean": "Tác động lực kéo một vật lại gần mình.",
    "en_ex": "Pull the handle to open the drawer.",
    "vi_ex": "Kéo tay cầm để mở ngăn kéo."
  },
  {
    "answer": "to act",
    "short_mean": "diễn xuất, hành động",
    "mean": "Đóng vai trong kịch/phim hoặc đưa ra hành động.",
    "en_ex": "He acted brilliantly in the lead role of the play.",
    "vi_ex": "Anh ấy đã diễn xuất tuyệt vời trong vai chính của vở kịch."
  },
  {
    "answer": "to blow",
    "short_mean": "thổi",
    "mean": "Phun luồng không khí từ miệng ra.",
    "en_ex": "Make a wish and blow out the birthday candles.",
    "vi_ex": "Hãy ước một điều và thổi nến sinh nhật."
  },
  {
    "answer": "to copy",
    "short_mean": "sao chép, chép lại",
    "mean": "Làm theo hoặc làm giống hệt bản mẫu.",
    "en_ex": "Students were asked to copy the sentences from the whiteboard.",
    "vi_ex": "Học sinh được yêu cầu chép lại các câu từ trên bảng trắng."
  },
  {
    "answer": "to decide",
    "short_mean": "quyết định",
    "mean": "Lựa chọn phương án sau khi cân nhắc.",
    "en_ex": "They need to decide where to go for dinner.",
    "vi_ex": "Họ cần quyết định xem sẽ đi đâu ăn tối."
  },
  {
    "answer": "to remember",
    "short_mean": "ghi nhớ, nhớ lại",
    "mean": "Lưu giữ thông tin trong trí nhớ.",
    "en_ex": "I always remember to turn off the lights before leaving.",
    "vi_ex": "Tôi luôn nhớ tắt đèn trước khi ra ngoài."
  },
  {
    "answer": "to hold",
    "short_mean": "nắm giữ, cầm",
    "mean": "Cầm giữ một vật trong tay.",
    "en_ex": "Please hold my hand while crossing the street.",
    "vi_ex": "Vui lòng nắm lấy tay tôi khi sang đường."
  },
  {
    "answer": "to point",
    "short_mean": "chỉ tay",
    "mean": "Dùng ngón tay hướng về phía một vật.",
    "en_ex": "He pointed at the map to show us the location.",
    "vi_ex": "Anh ấy chỉ tay vào bản đồ để chỉ cho chúng tôi vị trí."
  },
  {
    "answer": "to pack",
    "short_mean": "đóng gói đồ đạc",
    "mean": "Cho đồ đạc vào vali hoặc thùng carton.",
    "en_ex": "I need to pack my luggage before tomorrow morning.",
    "vi_ex": "Tôi cần đóng gói hành lý của mình trước sáng mai."
  },
  {
    "answer": "to fly",
    "short_mean": "bay",
    "mean": "Di chuyển trên không trung.",
    "en_ex": "Birds fly south during the winter season.",
    "vi_ex": "Chim bay về hướng nam trong mùa đông."
  },
  {
    "answer": "to ride",
    "short_mean": "cưỡi, đi (xe máy/xe đạp)",
    "mean": "Điều khiển và di chuyển trên xe hai bánh hoặc ngựa.",
    "en_ex": "He learned to ride a bicycle when he was six years old.",
    "vi_ex": "Anh ấy học đi xe đạp khi mới sáu tuổi."
  }
];
