const VOCA_WORDS = [
  {
    "answer": "to do puzzles",
    "short_mean": "giải câu đố, xếp hình",
    "mean": "Thực hiện giải các trò chơi tư duy hoặc ghép hình.",
    "en_ex": "She likes to do crossword puzzles in the morning with coffee.",
    "vi_ex": "Cô ấy thích giải câu đố chữ vào buổi sáng cùng với cà phê."
  },
  {
    "answer": "to play cards",
    "short_mean": "chơi bài",
    "mean": "Tham gia trò chơi sử dụng bộ bài tây.",
    "en_ex": "The family gathered around the table to play cards after dinner.",
    "vi_ex": "Gia đình quây quần bên bàn để chơi bài sau bữa tối."
  },
  {
    "answer": "to play chess",
    "short_mean": "chơi cờ vua",
    "mean": "Tham gia trò chơi cờ chiến thuật trên bàn cờ 64 ô.",
    "en_ex": "He learned to play chess from his grandfather.",
    "vi_ex": "Anh ấy học chơi cờ vua từ ông nội của mình."
  },
  {
    "answer": "to play board games",
    "short_mean": "chơi trò chơi bàn cờ (cờ tỷ phú, cờ cá ngựa...)",
    "mean": "Chơi các trò chơi tương tác trên bàn cờ giấy/gỗ.",
    "en_ex": "We often play board games on rainy weekends.",
    "vi_ex": "Chúng tôi thường chơi các trò chơi bàn cờ vào những cuối tuần mưa."
  },
  {
    "answer": "to go to a book club",
    "short_mean": "tham gia câu lạc bộ đọc sách",
    "mean": "Đến các buổi sinh hoạt chia sẻ và thảo luận về sách.",
    "en_ex": "She joined a local book club to meet other reading enthusiasts.",
    "vi_ex": "Cô ấy đã tham gia câu lạc bộ đọc sách địa phương để gặp gỡ những người yêu thích đọc sách khác."
  },
  {
    "answer": "to play video games",
    "short_mean": "chơi trò chơi điện tử",
    "mean": "Giải trí bằng các trò chơi trên máy tính hoặc điện thoại.",
    "en_ex": "Teenagers love to play video games online with their friends.",
    "vi_ex": "Thanh thiếu niên thích chơi trò chơi điện tử trực tuyến với bạn bè."
  },
  {
    "answer": "to read",
    "short_mean": "đọc sách / đọc báo",
    "mean": "Xem và hiểu nội dung chữ viết trong sách báo.",
    "en_ex": "I enjoy reading novel books before going to sleep.",
    "vi_ex": "Tôi thích đọc tiểu thuyết trước khi đi ngủ."
  },
  {
    "answer": "to draw",
    "short_mean": "vẽ tranh (bằng bút chì/bút màu)",
    "mean": "Tạo hình ảnh bằng đường nét của bút chì hoặc bút mực.",
    "en_ex": "The little girl loves to draw animals in her sketchbook.",
    "vi_ex": "Cô bé thích vẽ các con vật trong cuốn sổ vẽ của mình."
  },
  {
    "answer": "to write",
    "short_mean": "viết lách / sáng tác",
    "mean": "Dùng chữ viết để tạo ra câu chuyện, thơ văn hoặc nhật ký.",
    "en_ex": "He writes short stories during his spare time.",
    "vi_ex": "Anh ấy viết các câu chuyện ngắn trong thời gian rảnh rỗi."
  },
  {
    "answer": "to paint",
    "short_mean": "sơn / vẽ tranh màu nước, sơn dầu",
    "mean": "Dùng cọ và màu vẽ để tạo nên bức tranh.",
    "en_ex": "She spent the afternoon painting a beautiful landscape.",
    "vi_ex": "Cô ấy dành cả buổi chiều vẽ một bức tranh phong cảnh tuyệt đẹp."
  },
  {
    "answer": "to take photos",
    "short_mean": "chụp ảnh",
    "mean": "Sử dụng máy ảnh hoặc điện thoại để lưu giữ hình ảnh.",
    "en_ex": "He loves to take photos of nature during his hikes.",
    "vi_ex": "Anh ấy thích chụp ảnh thiên nhiên trong những chuyến đi bộ dã ngoại."
  },
  {
    "answer": "to play a musical instrument",
    "short_mean": "chơi nhạc cụ",
    "mean": "Sử dụng các thiết bị âm nhạc như đàn guitar, piano...",
    "en_ex": "Learning to play a musical instrument boosts cognitive skills.",
    "vi_ex": "Học chơi một nhạc cụ giúp tăng cường kỹ năng tư duy."
  },
  {
    "answer": "to walk/to hike",
    "short_mean": "đi bộ / đi leo núi dã ngoại",
    "mean": "Di chuyển bằng chân để rèn luyện sức khỏe hoặc khám phá.",
    "en_ex": "They plan to hike up the trail this Saturday morning.",
    "vi_ex": "Họ dự định đi leo núi dã ngoại theo tuyến đường này vào sáng thứ Bảy."
  },
  {
    "answer": "to cook",
    "short_mean": "nấu ăn",
    "mean": "Chế biến thực phẩm thành các món ăn ngon.",
    "en_ex": "He learned to cook traditional Italian dishes from his mother.",
    "vi_ex": "Anh ấy học nấu các món ăn Ý truyền thống từ mẹ mình."
  },
  {
    "answer": "to bake",
    "short_mean": "nướng bánh",
    "mean": "Làm các loại bánh ngọt, bánh mì bằng lò nướng.",
    "en_ex": "She loves to bake chocolate cookies for her family.",
    "vi_ex": "Cô ấy thích nướng bánh quy sô-cô-la cho gia đình."
  },
  {
    "answer": "to sew",
    "short_mean": "may vá quần áo",
    "mean": "Dùng kim chỉ để may hoặc sửa đồ vải.",
    "en_ex": "Grandma taught me how to sew my own clothes.",
    "vi_ex": "Bà đã dạy tôi cách tự may quần áo cho mình."
  },
  {
    "answer": "to knit",
    "short_mean": "đan len",
    "mean": "Dùng que đan và sợi len để làm áo, khăn.",
    "en_ex": "She is knitting a warm sweater for her grandson.",
    "vi_ex": "Cô ấy đang đan một chiếc áo len ấm áp cho cháu trai."
  },
  {
    "answer": "to go to a party",
    "short_mean": "đi dự tiệc",
    "mean": "Tham gia các buổi tiệc tùng gặp gỡ bạn bè.",
    "en_ex": "We are excited to go to a birthday party tonight.",
    "vi_ex": "Chúng tôi rất hào hứng đi dự tiệc sinh nhật tối nay."
  },
  {
    "answer": "to do karaoke",
    "short_mean": "hát karaoke",
    "mean": "Hát theo nhạc nền có chữ hiển thị trên màn hình.",
    "en_ex": "They went out to do karaoke and had a lot of fun.",
    "vi_ex": "Họ đã đi hát karaoke và có một khoảng thời gian rất vui vẻ."
  },
  {
    "answer": "to watch television",
    "short_mean": "xem ti-vi",
    "mean": "Theo dõi các chương trình phát trên truyền hình.",
    "en_ex": "The family sits together to watch television in the evening.",
    "vi_ex": "Gia đình ngồi lại với nhau xem ti-vi vào buổi tối."
  },
  {
    "answer": "to watch a movie",
    "short_mean": "xem một bộ phim",
    "mean": "Thưởng thức tác phẩm điện ảnh tại nhà hoặc rạp.",
    "en_ex": "Let me know if you want to watch a movie tonight.",
    "vi_ex": "Cho tôi biết nếu bạn muốn xem một bộ phim vào tối nay nhé."
  },
  {
    "answer": "to see a play",
    "short_mean": "đi xem kịch",
    "mean": "Thưởng thức vở kịch do diễn viên biểu diễn trên sân khấu.",
    "en_ex": "We bought tickets to see a Shakespeare play at the local theater.",
    "vi_ex": "Chúng tôi đã mua vé để đi xem một vở kịch của Shakespeare tại nhà hát địa phương."
  },
  {
    "answer": "to do exercise",
    "short_mean": "tập thể dục",
    "mean": "Thực hiện các hoạt động thể chất vận động cơ thể.",
    "en_ex": "It is essential to do exercise regularly for good health.",
    "vi_ex": "Tập thể dục thường xuyên là điều thiết yếu để có sức khỏe tốt."
  },
  {
    "answer": "to go to the gym",
    "short_mean": "đi tập gym",
    "mean": "Đến phòng tập thể hình rèn luyện sức khỏe.",
    "en_ex": "He goes to the gym three times a week to lift weights.",
    "vi_ex": "Anh ấy đi tập gym ba lần một tuần để nâng tạ."
  },
  {
    "answer": "to do yoga",
    "short_mean": "tập yoga",
    "mean": "Thực hiện các tư thế uốn dẻo và hít thở yoga.",
    "en_ex": "Practicing yoga helps reduce stress and improve flexibility.",
    "vi_ex": "Tập yoga giúp giảm căng thẳng và cải thiện độ dẻo dai."
  },
  {
    "answer": "to listen to music",
    "short_mean": "nghe nhạc",
    "mean": "Thưởng thức các bài hát hoặc bản nhạc.",
    "en_ex": "I like listening to music while relaxing after work.",
    "vi_ex": "Tôi thích nghe nhạc trong lúc thư giãn sau giờ làm việc."
  },
  {
    "answer": "to go camping",
    "short_mean": "đi cắm trại",
    "mean": "Dựng lều ngủ ngoài trời ở nơi hoang sơ thiên nhiên.",
    "en_ex": "They went camping near the lake over the long weekend.",
    "vi_ex": "Họ đã đi cắm trại gần hồ trong kỳ nghỉ cuối tuần kéo dài."
  },
  {
    "answer": "to go birdwatching",
    "short_mean": "đi ngắm chim hoang dã",
    "mean": "Dùng ống nhòm quan sát các loài chim ngoài tự nhiên.",
    "en_ex": "He spent the morning in the forest to go birdwatching.",
    "vi_ex": "Anh ấy dành cả buổi sáng trong rừng để đi ngắm chim."
  },
  {
    "answer": "to go out for a meal",
    "short_mean": "đi ăn tiệm / ăn nhà hàng",
    "mean": "Đi ra ngoài nhà hàng ăn uống cùng bạn bè gia đình.",
    "en_ex": "We usually go out for a meal on special occasions.",
    "vi_ex": "Chúng tôi thường đi ăn nhà hàng vào những dịp đặc biệt."
  },
  {
    "answer": "to do the gardening",
    "short_mean": "làm vườn",
    "mean": "Chăm sóc cây cối và hoa trong sân vườn.",
    "en_ex": "My grandfather loves to do the gardening on sunny days.",
    "vi_ex": "Ông nội tôi rất thích làm vườn vào những ngày nắng đẹp."
  },
  {
    "answer": "to visit a museum/gallery",
    "short_mean": "đi thăm bảo tàng / phòng triển lãm",
    "mean": "Đến xem các hiện vật lịch sử hoặc tác phẩm nghệ thuật.",
    "en_ex": "Tourists came to visit a museum to learn about local history.",
    "vi_ex": "Du khách đến thăm bảo tàng để tìm hiểu về lịch sử địa phương."
  },
  {
    "answer": "to meet friends",
    "short_mean": "gặp gỡ bạn bè",
    "mean": "Tụ họp trò chuyện cùng bạn bè.",
    "en_ex": "I plan to meet friends at a local coffee shop this afternoon.",
    "vi_ex": "Tôi dự định gặp gỡ bạn bè tại một quán cà phê địa phương vào chiều nay."
  },
  {
    "answer": "to go on vacation/to go on holiday",
    "short_mean": "đi nghỉ mát, đi du lịch",
    "mean": "Thực hiện chuyên du lịch xa nhà để thư giãn.",
    "en_ex": "They are planning to go on vacation to Thailand next month.",
    "vi_ex": "Họ đang lên kế hoạch đi nghỉ mát tới Thái Lan vào tháng sau."
  },
  {
    "answer": "to go shopping",
    "short_mean": "đi mua sắm",
    "mean": "Đến cửa hàng chọn mua quần áo, đồ dùng.",
    "en_ex": "She went shopping at the mall to buy new clothes.",
    "vi_ex": "Cô ấy đã đi mua sắm ở trung tâm thương mại để mua quần áo mới."
  },
  {
    "answer": "to go to a concert",
    "short_mean": "đi xem ca nhạc / đại nhạc hội",
    "mean": "Đến thưởng thức buổi biểu diễn âm nhạc sống động.",
    "en_ex": "We bought tickets to go to a rock concert this Friday.",
    "vi_ex": "Chúng tôi đã mua vé để đi xem buổi ca nhạc nhạc rock thứ Sáu này."
  },
  {
    "answer": "to stay (at) home",
    "short_mean": "ở nhà",
    "mean": "Dành thời gian ở trong nhà không đi ra ngoài.",
    "en_ex": "On rainy days, I prefer to stay at home and read a book.",
    "vi_ex": "Vào những ngày mưa, tôi thích ở nhà và đọc sách hơn."
  },
  {
    "answer": "to have a picnic",
    "short_mean": "đi dã ngoại ăn uống ngoài trời",
    "mean": "Mang đồ ăn ra công viên hoặc đồng cỏ thưởng thức.",
    "en_ex": "They had a lovely picnic under the shade of a big tree.",
    "vi_ex": "Họ đã có một buổi dã ngoại tuyệt vời dưới bóng râm của một cây lớn."
  },
  {
    "answer": "to collect stamps",
    "short_mean": "sưu tầm tem thư",
    "mean": "Sưu tập và lưu giữ các con tem độc đáo.",
    "en_ex": "He has been collecting stamps since he was a teenager.",
    "vi_ex": "Anh ấy đã sưu tầm tem thư từ khi còn là thiếu niên."
  },
  {
    "answer": "to do pottery",
    "short_mean": "làm đồ gốm",
    "mean": "Tạo hình và nặn các vật dụng từ đất sét.",
    "en_ex": "Taking a class to do pottery is a creative way to unwind.",
    "vi_ex": "Tham gia một lớp làm đồ gốm là một cách sáng tạo để thư giãn."
  },
  {
    "answer": "to make models",
    "short_mean": "lắp ráp mô hình",
    "mean": "Tạo các mô hình thu nhỏ như máy bay, tàu hỏa.",
    "en_ex": "He spends hours making detailed airplane models.",
    "vi_ex": "Anh ấy dành hàng giờ để lắp ráp các mô hình máy bay chi tiết."
  },
  {
    "answer": "to surf/browse the internet",
    "short_mean": "lướt mạng internet",
    "mean": "Truy cập các trang web xem thông tin giải trí.",
    "en_ex": "She likes to surf the internet for new cooking recipes.",
    "vi_ex": "Cô ấy thích lướt mạng internet để tìm các công thức nấu ăn mới."
  },
  {
    "answer": "to call friends",
    "short_mean": "gọi điện cho bạn bè",
    "mean": "Trò chuyện điện thoại với bạn bè.",
    "en_ex": "I often call my old friends on weekends to catch up.",
    "vi_ex": "Tôi thường gọi điện cho bạn cũ vào cuối tuần để hỏi thăm tin tức."
  },
  {
    "answer": "to go to an evening class",
    "short_mean": "đi học lớp buổi tối",
    "mean": "Tham gia các khóa học nâng cao kỹ năng vào buổi tối.",
    "en_ex": "He goes to an evening class to improve his Spanish.",
    "vi_ex": "Anh ấy đi học lớp buổi tối để cải thiện tiếng Tây Ban Nha của mình."
  },
  {
    "answer": "to go to the beach",
    "short_mean": "đi ra bãi biển",
    "mean": "Đến bãi biển vui chơi tắm biển.",
    "en_ex": "We packed our towels and sunblock to go to the beach.",
    "vi_ex": "Chúng tôi chuẩn bị khăn tắm và kem chống nắng để đi ra bãi biển."
  },
  {
    "answer": "to fly a kite",
    "short_mean": "thả diều",
    "mean": "Điều khiển diều bay lên cao nhờ sức gió.",
    "en_ex": "Children ran around the park trying to fly a kite.",
    "vi_ex": "Trẻ em chạy quanh công viên cố gắng thả diều."
  },
  {
    "answer": "to ride a horse",
    "short_mean": "cưỡi ngựa",
    "mean": "Cưỡi trên lưng ngựa làm thú vui giải trí.",
    "en_ex": "She loves to ride a horse through the countryside trails.",
    "vi_ex": "Cô ấy thích cưỡi ngựa qua các con đường mòn ở vùng nông thôn."
  },
  {
    "answer": "to go jogging",
    "short_mean": "chạy bộ thể dục",
    "mean": "Chạy chậm rèn luyện sức bền thể chất.",
    "en_ex": "He goes jogging in the park every morning before work.",
    "vi_ex": "Anh ấy đi chạy bộ trong công viên mỗi sáng trước khi đi làm."
  },
  {
    "answer": "to sing in a choir",
    "short_mean": "hát trong dàn hợp xướng",
    "mean": "Tham gia nhóm ca hát tập thể cùng hoà giọng.",
    "en_ex": "She has been singing in a church choir for five years.",
    "vi_ex": "Cô ấy đã hát trong dàn hợp xướng nhà thờ được năm năm."
  },
  {
    "answer": "to arrange flowers",
    "short_mean": "cắm hoa",
    "mean": "Sắp xếp nghệ thuật các bông hoa tươi trong bình.",
    "en_ex": "She learned how to arrange flowers in a traditional Japanese style.",
    "vi_ex": "Cô ấy đã học cách cắm hoa theo phong cách truyền thống Nhật Bản."
  },
  {
    "answer": "to go foraging",
    "short_mean": "đi hái lượm nấm/quả dại",
    "mean": "Đi tìm kiếm và hái hoa quả, nấm tự nhiên trong rừng.",
    "en_ex": "In autumn, locals go foraging for wild mushrooms in the forest.",
    "vi_ex": "Vào mùa thu, người dân địa phương đi hái lượm nấm dại trong rừng."
  }
];
