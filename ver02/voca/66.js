const VOCA_WORDS = [
  {
    "answer": "screen",
    "short_mean": "màn hình",
    "mean": "Bề mặt phẳng hiển thị hình ảnh của ti-vi.",
    "en_ex": "Clean the television screen with a soft cloth.",
    "vi_ex": "Lau sạch màn hình ti-vi bằng một miếng vải mềm."
  },
  {
    "answer": "remote",
    "short_mean": "điều khiển từ xa (remote)",
    "mean": "Thiết bị nhỏ dùng để điều khiển ti-vi từ xa.",
    "en_ex": "I can't find the remote to change the channel.",
    "vi_ex": "Tôi không tìm thấy điều khiển từ xa để chuyển kênh."
  },
  {
    "answer": "TV set",
    "short_mean": "chiếc ti-vi",
    "mean": "Thiết bị thu phát hình ảnh truyền hình.",
    "en_ex": "They bought a 55-inch smart TV set for their living room.",
    "vi_ex": "Họ đã mua một chiếc ti-vi thông minh 55 inch cho phòng khách."
  },
  {
    "answer": "channel",
    "short_mean": "kênh truyền hình",
    "mean": "Kênh tần số phát các chương trình ti-vi.",
    "en_ex": "Switch to channel 5 to watch the football match.",
    "vi_ex": "Chuyển sang kênh 5 để xem trận đấu bóng đá."
  },
  {
    "answer": "show/programme",
    "short_mean": "chương trình ti-vi",
    "mean": "Nội dung phát sóng trên truyền hình.",
    "en_ex": "What is your favorite television show?",
    "vi_ex": "Chương trình truyền hình yêu thích của bạn là gì?"
  },
  {
    "answer": "cable TV",
    "short_mean": "truyền hình cáp",
    "mean": "Dịch vụ truyền hình phát qua mạng cáp hữu tuyến.",
    "en_ex": "Cable TV offers hundreds of entertainment channels.",
    "vi_ex": "Truyền hình cáp cung cấp hàng trăm kênh giải trí."
  },
  {
    "answer": "satellite TV",
    "short_mean": "truyền hình vệ tinh",
    "mean": "Dịch vụ truyền hình phát tín hiệu qua vệ tinh và đĩa thu.",
    "en_ex": "Satellite TV guarantees clear reception even in remote areas.",
    "vi_ex": "Truyền hình vệ tinh đảm bảo thu sóng rõ nét ngay cả ở vùng sâu vùng xa."
  },
  {
    "answer": "video on demand",
    "short_mean": "video theo yêu cầu (VOD)",
    "mean": "Dịch vụ cho phép người dùng chọn xem video bất cứ lúc nào.",
    "en_ex": "Streaming services provide video on demand for subscribers.",
    "vi_ex": "Các dịch vụ phát trực tuyến cung cấp video theo yêu cầu cho người đăng ký."
  },
  {
    "answer": "episode",
    "short_mean": "tập phim",
    "mean": "Một phần phát sóng nằm trong chuỗi phim nhiều tập.",
    "en_ex": "Tonight is the season finale episode of the series.",
    "vi_ex": "Tối nay là tập phim cuối cùng của mùa phim."
  },
  {
    "answer": "season/series",
    "short_mean": "mùa phim / bộ phim truyền hình",
    "mean": "Tập hợp các tập phim phát trong một khoảng thời gian.",
    "en_ex": "The show has been renewed for a second season.",
    "vi_ex": "Chương trình đã được gia hạn cho mùa phim thứ hai."
  },
  {
    "answer": "subtitles",
    "short_mean": "phụ đề",
    "mean": "Dòng chữ dịch lời thoại hiển thị ở dưới màn hình.",
    "en_ex": "I prefer watching foreign movies with subtitles.",
    "vi_ex": "Tôi thích xem phim nước ngoài có phụ đề hơn."
  },
  {
    "answer": "commercial break/adverts",
    "short_mean": "nghỉ quảng cáo",
    "mean": "Khoảng thời gian tạm dừng chương trình để phát quảng cáo.",
    "en_ex": "I will grab a snack during the commercial break.",
    "vi_ex": "Tôi sẽ đi lấy đồ ăn vặt trong lúc nghỉ quảng cáo."
  },
  {
    "answer": "interview",
    "short_mean": "cuộc phỏng vấn",
    "mean": "Buổi hỏi đáp giữa người dẫn chương trình và khách mời.",
    "en_ex": "The host conducted an exclusive interview with the singer.",
    "vi_ex": "Người dẫn chương trình đã thực hiện một cuộc phỏng vấn độc quyền với ca sĩ."
  },
  {
    "answer": "TV guide/schedule",
    "short_mean": "lịch phát sóng ti-vi",
    "mean": "Danh sách lịch trình giờ phát các chương trình.",
    "en_ex": "Check the TV guide to see when the news starts.",
    "vi_ex": "Xem lịch phát sóng ti-vi để biết khi nào bản tin bắt đầu."
  },
  {
    "answer": "preview",
    "short_mean": "đoạn xem trước / trailer",
    "mean": "Đoạn video ngắn giới thiệu nội dung sắp phát.",
    "en_ex": "The channel showed a preview of next week's episode.",
    "vi_ex": "Kênh đã chiếu đoạn xem trước của tập phim tuần tới."
  },
  {
    "answer": "presenter",
    "short_mean": "người dẫn chương trình",
    "mean": "Người giới thiệu và điều phối trên ti-vi.",
    "en_ex": "The TV presenter introduced the guest performance.",
    "vi_ex": "Người dẫn chương trình ti-vi đã giới thiệu phần biểu diễn của khách mời."
  },
  {
    "answer": "host",
    "short_mean": "chủ trì / người dẫn talkshow",
    "mean": "Người chủ trì chương trình đối thoại hoặc trò chơi.",
    "en_ex": "The talk show host cracked a witty joke.",
    "vi_ex": "Người chủ trì chương trình trò chuyện đã đưa ra một lời nói đùa dí dỏm."
  },
  {
    "answer": "news anchor/newsreader",
    "short_mean": "biên tập viên / phát thanh viên thời sự",
    "mean": "Người ngồi tại studio trực tiếp đọc tin tức thời sự.",
    "en_ex": "The news anchor delivered the evening breaking news.",
    "vi_ex": "Biên tập viên thời sự đã truyền tải bản tin nóng buổi tối."
  },
  {
    "answer": "reporter",
    "short_mean": "phóng viên hiện trường",
    "mean": "Người đi thu thập và báo cáo tin tức tại hiện trường.",
    "en_ex": "The reporter was broadcasting live from the scene of the accident.",
    "vi_ex": "Phóng viên đang phát sóng trực tiếp từ hiện trường vụ tai nạn."
  },
  {
    "answer": "weather forecaster",
    "short_mean": "MC phát thanh viên thời tiết",
    "mean": "Người trình bày dự báo thời tiết trên truyền hình.",
    "en_ex": "The weather forecaster predicts heavy rain tomorrow.",
    "vi_ex": "MC thời tiết dự báo sẽ có mưa lớn vào ngày mai."
  },
  {
    "answer": "couch potato",
    "short_mean": "người nghiện nằm xem ti-vi",
    "mean": "Người dành quá nhiều thời gian nằm trên ghế sofa xem ti-vi.",
    "en_ex": "Don't be a couch potato; go outside and get some fresh air.",
    "vi_ex": "Đừng làm một người nghiện ti-vi nữa; hãy ra ngoài hít thở không khí trong lành."
  },
  {
    "answer": "to turn on",
    "short_mean": "bật ti-vi",
    "mean": "Khởi động thiết bị ti-vi.",
    "en_ex": "He turned on the TV to watch the morning news.",
    "vi_ex": "Anh ấy đã bật ti-vi để xem tin tức buổi sáng."
  },
  {
    "answer": "to turn off",
    "short_mean": "tắt ti-vi",
    "mean": "Ngắt nguồn thiết bị ti-vi.",
    "en_ex": "Please turn off the TV before you go to bed.",
    "vi_ex": "Vui lòng tắt ti-vi trước khi bạn đi ngủ."
  },
  {
    "answer": "to turn up the volume",
    "short_mean": "tăng âm lượng",
    "mean": "Vặn âm thanh ti-vi to hơn.",
    "en_ex": "Can you turn up the volume? I can't hear clearly.",
    "vi_ex": "Bạn có thể tăng âm lượng lên không? Tôi không nghe rõ."
  },
  {
    "answer": "to turn down the volume",
    "short_mean": "giảm âm lượng",
    "mean": "Vặn âm thanh ti-vi nhỏ lại.",
    "en_ex": "Please turn down the volume; the baby is sleeping.",
    "vi_ex": "Vui lòng giảm âm lượng xuống; em bé đang ngủ."
  },
  {
    "answer": "to change channel",
    "short_mean": "đổi kênh ti-vi",
    "mean": "Chuyển sang xem kênh truyền hình khác.",
    "en_ex": "He uses the remote to change the channel.",
    "vi_ex": "Anh ấy dùng điều khiển để đổi kênh."
  },
  {
    "answer": "to record",
    "short_mean": "ghi lại / thu lại chương trình",
    "mean": "Lưu chương trình ti-vi để xem lại sau.",
    "en_ex": "I will record the show so I can watch it later.",
    "vi_ex": "Tôi sẽ ghi lại chương trình để có thể xem lại sau."
  },
  {
    "answer": "cooking show",
    "short_mean": "chương trình dạy nấu ăn",
    "mean": "Chương trình hướng dẫn thực hành chế biến món ăn.",
    "en_ex": "She loves watching cooking shows to learn new recipes.",
    "vi_ex": "Cô ấy thích xem các chương trình dạy nấu ăn để học công thức mới."
  },
  {
    "answer": "talk show/chat show",
    "short_mean": "chương trình trò chuyện / talkshow",
    "mean": "Chương trình trò chuyện đối thoại với khách mời.",
    "en_ex": "Celebrities love appearing on popular talk shows.",
    "vi_ex": "Các ngôi sao rất thích xuất hiện trên các chương trình talkshow nổi tiếng."
  },
  {
    "answer": "sports show/programme",
    "short_mean": "chương trình thể thao",
    "mean": "Chương trình tổng hợp và bình luận thể thao.",
    "en_ex": "He never misses his weekend sports show.",
    "vi_ex": "Anh ấy không bao giờ bỏ lỡ chương trình thể thao cuối tuần của mình."
  },
  {
    "answer": "documentary",
    "short_mean": "phim tài liệu",
    "mean": "Phim ghi lại sự thật lịch sử, khoa học hoặc xã hội.",
    "en_ex": "We watched an educational documentary about space.",
    "vi_ex": "Chúng tôi đã xem một bộ phim tài liệu mang tính giáo dục về vũ trụ."
  },
  {
    "answer": "nature documentary",
    "short_mean": "phim tài liệu thiên nhiên",
    "mean": "Phim quay lại cuộc sống của động thực vật hoang dã.",
    "en_ex": "BBC is famous for producing stunning nature documentaries.",
    "vi_ex": "BBC nổi tiếng với việc sản xuất những bộ phim tài liệu thiên nhiên tuyệt đẹp."
  },
  {
    "answer": "period/costume drama",
    "short_mean": "phim cổ trang / phim trang phục lịch sử",
    "mean": "Phim tái hiện bối cảnh lịch sử thời xưa.",
    "en_ex": "Downton Abbey is a famous British period drama.",
    "vi_ex": "Downton Abbey là một bộ phim cổ trang Anh nổi tiếng."
  },
  {
    "answer": "sitcom",
    "short_mean": "phim hài tình huống (sitcom)",
    "mean": "Phim hài ngắn xoay quanh bối cảnh sinh hoạt cố định.",
    "en_ex": "Friends is one of the most popular sitcoms of all time.",
    "vi_ex": "Friends là một trong những bộ phim hài tình huống phổ biến nhất mọi thời đại."
  },
  {
    "answer": "quiz show",
    "short_mean": "trò chơi đố vui truyền hình",
    "mean": "Chương trình thi đấu giải đáp câu hỏi trí tuệ.",
    "en_ex": "Contestants win cash prizes on the quiz show.",
    "vi_ex": "Thí sinh giành giải thưởng tiền mặt trên trò chơi đố vui truyền hình."
  },
  {
    "answer": "current affairs",
    "short_mean": "chương trình thời sự / sự kiện nóng",
    "mean": "Chương trình phân tích sâu các sự kiện thời sự nổi bật.",
    "en_ex": "He watches current affairs programmes to stay informed.",
    "vi_ex": "Anh ấy xem các chương trình thời sự để nắm bắt thông tin."
  },
  {
    "answer": "news",
    "short_mean": "bản tin thời sự",
    "mean": "Bản tin phát sóng cập nhật thông tin trong ngày.",
    "en_ex": "Turn on the TV to catch the 6 o'clock news.",
    "vi_ex": "Bật ti-vi để theo dõi bản tin thời sự 6 giờ."
  },
  {
    "answer": "weather",
    "short_mean": "dự báo thời tiết",
    "mean": "Bản tin cập nhật diễn biến thời tiết.",
    "en_ex": "Stay tuned for the weather report after the news.",
    "vi_ex": "Hãy đón xem bản tin thời tiết ngay sau thời sự."
  },
  {
    "answer": "soap opera",
    "short_mean": "phim truyền hình dài tập (xà phòng)",
    "mean": "Phim truyền hình nhiều tập khai thác tình cảm gia đình, đời sống.",
    "en_ex": "My grandmother has been following this soap opera for ten years.",
    "vi_ex": "Bà tôi đã theo dõi bộ phim truyền hình dài tập này suốt mười năm qua."
  },
  {
    "answer": "game show",
    "short_mean": "trò chơi truyền hình",
    "mean": "Chương trình thi đấu giải trí nhận phần thưởng.",
    "en_ex": "The family enjoys playing along with the game show on Friday nights.",
    "vi_ex": "Gia đình thích thú chơi theo chương trình trò chơi truyền hình vào tối thứ Sáu."
  },
  {
    "answer": "comedy",
    "short_mean": "chương trình hài",
    "mean": "Nội dung giải trí mang lại tiếng cười.",
    "en_ex": "Stand-up comedy is very popular on television.",
    "vi_ex": "Hài độc thoại rất phổ biến trên truyền hình."
  },
  {
    "answer": "drama",
    "short_mean": "phim kịch tính / chính kịch",
    "mean": "Thể loại phim có chiều sâu về tâm lý.",
    "en_ex": "This new medical drama has captivated millions of viewers.",
    "vi_ex": "Bộ phim chính kịch y khoa mới này đã thu hút hàng triệu người xem."
  },
  {
    "answer": "cartoon",
    "short_mean": "phim hoạt hình",
    "mean": "Chương trình vẽ hình hoạt họa.",
    "en_ex": "The children watch cartoons on Sunday morning.",
    "vi_ex": "Các em nhỏ xem phim hoạt hình vào sáng Chủ nhật."
  },
  {
    "answer": "crime",
    "short_mean": "phim hình sự / tội phạm",
    "mean": "Phim về phá án và hành vi phạm tội.",
    "en_ex": "Sherlock Holmes is a classic crime story.",
    "vi_ex": "Sherlock Holmes là một câu chuyện hình sự cổ điển."
  },
  {
    "answer": "thriller",
    "short_mean": "phim ly kỳ giật gân",
    "mean": "Phim tạo không khí căng thẳng hồi hộp.",
    "en_ex": "The suspenseful thriller kept us guessing until the end.",
    "vi_ex": "Bộ phim ly kỳ đầy căng thẳng khiến chúng tôi phải đoán mò cho đến phút cuối."
  },
  {
    "answer": "satire",
    "short_mean": "phim/chương trình châm biếm",
    "mean": "Chương trình dùng tiếng cười châm biếm các vấn đề xã hội.",
    "en_ex": "The political satire show pokes fun at current policy leaders.",
    "vi_ex": "Chương trình châm biếm chính trị đùa giỡn về các lãnh đạo chính sách hiện tại."
  },
  {
    "answer": "children's show/TV",
    "short_mean": "chương trình thiếu nhi",
    "mean": "Chương trình truyền hình thiết kế riêng cho trẻ em.",
    "en_ex": "Educational children's TV helps toddlers learn numbers and colors.",
    "vi_ex": "Truyền hình thiếu nhi mang tính giáo dục giúp trẻ nhỏ học chữ số và màu sắc."
  },
  {
    "answer": "breakfast TV",
    "short_mean": "truyền hình buổi sáng",
    "mean": "Chương trình phát sóng sáng sớm cập nhật tin tức và giải trí.",
    "en_ex": "I watch breakfast TV while drinking my morning coffee.",
    "vi_ex": "Tôi xem truyền hình buổi sáng trong lúc uống cà phê sáng."
  },
  {
    "answer": "reality TV",
    "short_mean": "truyền hình thực tế",
    "mean": "Chương trình quay lại tình huống thực tế của người tham gia.",
    "en_ex": "Reality TV shows often create huge online discussions.",
    "vi_ex": "Các chương trình truyền hình thực tế thường tạo ra các cuộc thảo luận lớn trên mạng."
  },
  {
    "answer": "catch-up TV",
    "short_mean": "dịch vụ xem lại truyền hình",
    "mean": "Tính năng cho phép xem lại các chương trình đã phát sóng.",
    "en_ex": "If you missed the show, you can watch it on catch-up TV.",
    "vi_ex": "Nếu bạn bỏ lỡ chương trình, bạn có thể xem lại trên dịch vụ xem lại."
  },
  {
    "answer": "shopping channel",
    "short_mean": "kênh mua sắm truyền hình",
    "mean": "Kênh phát sóng quảng cáo giới thiệu sản phẩm bán hàng.",
    "en_ex": "She ordered a kitchen blender from a home shopping channel.",
    "vi_ex": "Cô ấy đã đặt một chiếc máy sinh tố từ kênh mua sắm truyền hình."
  },
  {
    "answer": "music channel",
    "short_mean": "kênh ca nhạc",
    "mean": "Kênh phát sóng các video ca nhạc 24/7.",
    "en_ex": "MTV used to be the premier music channel worldwide.",
    "vi_ex": "MTV từng là kênh ca nhạc hàng đầu thế giới."
  }
];
