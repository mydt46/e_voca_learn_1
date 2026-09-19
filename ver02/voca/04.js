const VOCA_WORDS = [
  {
    "answer": "alarm goes off",
    "short_mean": "chuông báo thức reo",
    "mean": "Đồng hồ báo thức phát tiếng chuông báo giờ dậy.",
    "en_ex": "My alarm goes off at six o'clock every morning.",
    "vi_ex": "Chuông báo thức của tôi reo vào lúc sáu giờ mỗi sáng."
  },
  {
    "answer": "to wake up",
    "short_mean": "thức giấc, tỉnh dậy",
    "mean": "Tỉnh giấc sau khi ngủ.",
    "en_ex": "I usually wake up early on weekdays.",
    "vi_ex": "Tôi thường thức giấc sớm vào các ngày trong tuần."
  },
  {
    "answer": "to get up",
    "short_mean": "ra khỏi giường, thức dậy",
    "mean": "Bước ra khỏi giường sau khi đã tỉnh giấc.",
    "en_ex": "He stays in bed for ten minutes before getting up.",
    "vi_ex": "Anh ấy nằm thêm mười phút trên giường trước khi ra khỏi giường."
  },
  {
    "answer": "to take/have a shower",
    "short_mean": "tắm vòi hoa sen",
    "mean": "Tắm rửa sạch sẽ dưới vòi nước chảy.",
    "en_ex": "I like to take a shower right after morning exercise.",
    "vi_ex": "Tôi thích tắm vòi hoa sen ngay sau khi tập thể dục buổi sáng."
  },
  {
    "answer": "to take/have a bath",
    "short_mean": "tắm bồn",
    "mean": "Ngâm mình thư giãn trong bồn tắm.",
    "en_ex": "She loves to have a warm bath on cold winter evenings.",
    "vi_ex": "Cô ấy thích ngâm mình trong bồn tắm ấm áp vào những buổi tối mùa đông lạnh giá."
  },
  {
    "answer": "to put on make-up",
    "short_mean": "trang điểm",
    "mean": "Thoa phấn, son để làm đẹp khuôn mặt.",
    "en_ex": "It takes her fifteen minutes to put on make-up before going to work.",
    "vi_ex": "Cô ấy mất mười lăm phút để trang điểm trước khi đi làm."
  },
  {
    "answer": "to shave",
    "short_mean": "cạo râu",
    "mean": "Dùng dao cạo làm sạch râu trên mặt.",
    "en_ex": "He shaves every morning before eating breakfast.",
    "vi_ex": "Anh ấy cạo râu mỗi sáng trước khi ăn sáng."
  },
  {
    "answer": "to wash your hair",
    "short_mean": "gội đầu",
    "mean": "Làm sạch tóc bằng dầu gội và nước.",
    "en_ex": "I wash my hair every two days.",
    "vi_ex": "Tôi gội đầu hai ngày một lần."
  },
  {
    "answer": "to dry your hair",
    "short_mean": "sấy/làm khô tóc",
    "mean": "Dùng khăn hoặc máy sấy làm khô tóc ướt.",
    "en_ex": "Use a hairdryer to dry your hair after showering.",
    "vi_ex": "Dùng máy sấy tóc để làm khô tóc sau khi tắm."
  },
  {
    "answer": "to iron a shirt",
    "short_mean": "là/ủi áo sơ mi",
    "mean": "Dùng bàn ủi làm phẳng nếp nhăn trên áo.",
    "en_ex": "He irons a clean shirt for his business meeting.",
    "vi_ex": "Anh ấy ủi một chiếc áo sơ mi sạch cho cuộc họp công việc."
  },
  {
    "answer": "to get dressed",
    "short_mean": "mặc quần áo",
    "mean": "Khoác quần áo lên người để chuẩn bị ra ngoài.",
    "en_ex": "Get dressed quickly; the school bus is coming.",
    "vi_ex": "Hãy mặc quần áo nhanh lên; xe buýt trường học đang đến rồi."
  },
  {
    "answer": "to brush your teeth",
    "short_mean": "đánh răng",
    "mean": "Làm sạch răng miệng bằng bàn chải và kem đánh răng.",
    "en_ex": "You should brush your teeth twice a day.",
    "vi_ex": "Bạn nên đánh răng hai lần một ngày."
  },
  {
    "answer": "to wash your face",
    "short_mean": "rửa mặt",
    "mean": "Dùng nước và sữa rửa mặt làm sạch da mặt.",
    "en_ex": "Wash your face with cold water to feel refreshed.",
    "vi_ex": "Hãy rửa mặt bằng nước lạnh để cảm thấy tỉnh táo."
  },
  {
    "answer": "to brush your hair",
    "short_mean": "chải tóc",
    "mean": "Chải cho mái tóc gọn gàng bằng lược.",
    "en_ex": "She brushed her hair in front of the mirror.",
    "vi_ex": "Cô ấy chải tóc trước gương."
  },
  {
    "answer": "to make the bed",
    "short_mean": "dọn dẹp giường ngủ",
    "mean": "Gấp chăn mền và xếp gối nệm gọn gàng.",
    "en_ex": "I make the bed every morning after getting up.",
    "vi_ex": "Tôi dọn dẹp giường ngủ mỗi sáng sau khi dậy."
  },
  {
    "answer": "to have/eat breakfast",
    "short_mean": "ăn sáng",
    "mean": "Dùng bữa ăn đầu tiên trong ngày.",
    "en_ex": "We usually eat breakfast at seven o'clock.",
    "vi_ex": "Chúng tôi thường ăn sáng lúc bảy giờ."
  },
  {
    "answer": "to do the housework",
    "short_mean": "làm việc nhà",
    "mean": "Dọn dẹp và duy trì vệ sinh trong nhà.",
    "en_ex": "They split the chores to do the housework faster.",
    "vi_ex": "Họ chia nhau việc để làm việc nhà nhanh hơn."
  },
  {
    "answer": "to leave the house",
    "short_mean": "rời khỏi nhà",
    "mean": "Bước ra khỏi nhà để đi làm hoặc học.",
    "en_ex": "I leave the house at eight in the morning.",
    "vi_ex": "Tôi rời khỏi nhà lúc tám giờ sáng."
  },
  {
    "answer": "to go to work",
    "short_mean": "đi làm",
    "mean": "Di chuyển đến nơi làm việc.",
    "en_ex": "He goes to work by subway every day.",
    "vi_ex": "Anh ấy đi làm bằng tàu điện ngầm mỗi ngày."
  },
  {
    "answer": "to go to school",
    "short_mean": "đi học",
    "mean": "Di chuyển đến trường học.",
    "en_ex": "Children go to school from Monday to Friday.",
    "vi_ex": "Trẻ em đi học từ thứ Hai đến thứ Sáu."
  },
  {
    "answer": "to catch the train",
    "short_mean": "đón/bắt tàu hỏa",
    "mean": "Kịp lên chuyến tàu hỏa di chuyển.",
    "en_ex": "Hurry up if you want to catch the 8:15 train.",
    "vi_ex": "Nhanh lên nếu bạn muốn bắt chuyến tàu 8 giờ 15."
  },
  {
    "answer": "to catch the bus",
    "short_mean": "đón/bắt xe buýt",
    "mean": "Kịp lên chuyến xe buýt di chuyển.",
    "en_ex": "She walks fast to catch the morning bus.",
    "vi_ex": "Cô ấy đi bộ nhanh để kịp bắt chuyến xe buýt buổi sáng."
  },
  {
    "answer": "to drive",
    "short_mean": "lái xe ô tô",
    "mean": "Điều khiển xe di chuyển trên đường.",
    "en_ex": "He prefers to drive rather than take public transport.",
    "vi_ex": "Anh ấy thích tự lái xe hơn là đi phương tiện công cộng."
  },
  {
    "answer": "to arrive late",
    "short_mean": "đến muộn/trễ",
    "mean": "Đến sau mốc thời gian quy định.",
    "en_ex": "Traffic jams caused him to arrive late for the meeting.",
    "vi_ex": "Kẹt xe khiến anh ấy đến trễ cuộc họp."
  },
  {
    "answer": "to start work",
    "short_mean": "bắt đầu công việc",
    "mean": "Bắt đầu ca làm việc tại cơ quan.",
    "en_ex": "I start work at nine in the morning.",
    "vi_ex": "Tôi bắt đầu làm việc lúc chín giờ sáng."
  },
  {
    "answer": "to have a break",
    "short_mean": "nghỉ giải lao",
    "mean": "Tạm nghỉ công việc trong thời gian ngắn.",
    "en_ex": "Let's have a break and drink some coffee.",
    "vi_ex": "Chúng ta hãy nghỉ giải lao và uống chút cà phê."
  },
  {
    "answer": "to have/eat lunch",
    "short_mean": "ăn trưa",
    "mean": "Dùng bữa ăn giữa ngày.",
    "en_ex": "They have lunch in the company cafeteria at noon.",
    "vi_ex": "Họ ăn trưa tại nhà ăn công ty vào buổi trưa."
  },
  {
    "answer": "to finish work",
    "short_mean": "hoàn thành/kết thúc công việc",
    "mean": "Hết giờ ca làm việc trong ngày.",
    "en_ex": "What time do you usually finish work?",
    "vi_ex": "Mấy giờ bạn thường kết thúc công việc?"
  },
  {
    "answer": "to leave work",
    "short_mean": "rời khỏi nơi làm việc",
    "mean": "Đi ra khỏi công ty sau khi làm xong.",
    "en_ex": "She leaves work at five thirty every afternoon.",
    "vi_ex": "Cô ấy rời nơi làm việc lúc năm giờ rưỡi mỗi chiều."
  },
  {
    "answer": "to work overtime",
    "short_mean": "làm thêm giờ (OT)",
    "mean": "Làm việc ngoài giờ quy định để hoàn thành tiến độ.",
    "en_ex": "Engineers often have to work overtime before a project deadline.",
    "vi_ex": "Các kỹ sư thường phải làm thêm giờ trước hạn chót của dự án."
  },
  {
    "answer": "to go home",
    "short_mean": "trở về nhà",
    "mean": "Di chuyển từ nơi làm/học về nhà.",
    "en_ex": "I'm tired and just want to go home.",
    "vi_ex": "Tôi mệt và chỉ muốn trở về nhà."
  },
  {
    "answer": "to buy groceries",
    "short_mean": "đi mua thực phẩm/đồ tạp hóa",
    "mean": "Mua thức ăn và nhu yếu phẩm ở chợ/siêu thị.",
    "en_ex": "We stop at the supermarket to buy groceries for the week.",
    "vi_ex": "Chúng tôi ghé siêu thị để mua thực phẩm cho cả tuần."
  },
  {
    "answer": "to cook dinner",
    "short_mean": "nấu bữa tối",
    "mean": "Chế biến thức ăn cho bữa tối gia đình.",
    "en_ex": "My mother is cooking dinner in the kitchen.",
    "vi_ex": "Mẹ tôi đang nấu bữa tối trong bếp."
  },
  {
    "answer": "to have/eat dinner",
    "short_mean": "ăn tối",
    "mean": "Dùng bữa ăn chính buổi tối.",
    "en_ex": "The family eats dinner together at seven PM.",
    "vi_ex": "Gia đình ăn tối cùng nhau vào lúc bảy giờ tối."
  },
  {
    "answer": "to clear the table",
    "short_mean": "dọn bàn ăn",
    "mean": "Thu dọn bát đĩa sau bữa ăn.",
    "en_ex": "Kids helped to clear the table after dinner.",
    "vi_ex": "Trẻ em giúp dọn dẹp bàn ăn sau bữa tối."
  },
  {
    "answer": "to listen to the radio",
    "short_mean": "nghe đài đài đài phát thanh",
    "mean": "Thưởng thức tin tức âm nhạc trên sóng phát thanh.",
    "en_ex": "He likes to listen to the radio while driving.",
    "vi_ex": "Anh ấy thích nghe đài phát thanh trong khi lái xe."
  },
  {
    "answer": "to watch TV",
    "short_mean": "xem ti-vi",
    "mean": "Theo dõi các chương trình trên màn hình truyền hình.",
    "en_ex": "We watch TV in the living room every evening.",
    "vi_ex": "Chúng tôi xem ti-vi ở phòng khách vào mỗi buổi tối."
  },
  {
    "answer": "to check your emails",
    "short_mean": "kiểm tra hòm thư điện tử",
    "mean": "Xem các thư điện tử gửi đến.",
    "en_ex": "I check my emails first thing in the morning.",
    "vi_ex": "Tôi kiểm tra hòm thư điện tử ngay đầu giờ sáng."
  },
  {
    "answer": "to have/drink tea or coffee",
    "short_mean": "uống trà hoặc cà phê",
    "mean": "Thưởng thức thức uống thư giãn.",
    "en_ex": "She loves having hot tea in the afternoon.",
    "vi_ex": "Cô ấy thích uống trà nóng vào buổi chiều."
  },
  {
    "answer": "to do/wash the dishes",
    "short_mean": "rửa bát đĩa",
    "mean": "Rửa sạch bát đĩa sau bữa ăn.",
    "en_ex": "It is my turn to wash the dishes tonight.",
    "vi_ex": "Tối nay đến lượt tôi rửa bát đĩa."
  },
  {
    "answer": "to walk the dog",
    "short_mean": "dẫn chó đi dạo",
    "mean": "Đưa thú cưng đi dạo ngoài trời.",
    "en_ex": "He walks the dog in the park every morning.",
    "vi_ex": "Anh ấy dẫn chó đi dạo trong công viên mỗi sáng."
  },
  {
    "answer": "to read a newspaper",
    "short_mean": "đọc báo",
    "mean": "Xem tin tức cập nhật trên trang báo.",
    "en_ex": "Grandfather reads a newspaper with his breakfast.",
    "vi_ex": "Ông nội đọc báo cùng bữa sáng của mình."
  },
  {
    "answer": "to go out with friends",
    "short_mean": "đi chơi với bạn bè",
    "mean": "Ra ngoài giao lưu vui vẻ cùng bạn bè.",
    "en_ex": "Teenagers love to go out with friends on Saturday night.",
    "vi_ex": "Giới trẻ thích đi chơi với bạn bè vào tối thứ Bảy."
  },
  {
    "answer": "to go to a café",
    "short_mean": "đi quán cà phê",
    "mean": "Đến quán cà phê trò chuyện hoặc làm việc.",
    "en_ex": "We met to go to a café and catch up.",
    "vi_ex": "Chúng tôi gặp nhau đi quán cà phê để trò chuyện tâm sự."
  },
  {
    "answer": "to call a friend/your family",
    "short_mean": "gọi điện cho bạn bè / gia đình",
    "mean": "Liên lạc trò chuyện qua điện thoại.",
    "en_ex": "I call my family every Sunday evening.",
    "vi_ex": "Tôi gọi điện cho gia đình vào mỗi tối Chủ nhật."
  },
  {
    "answer": "to do homework",
    "short_mean": "làm bài tập về nhà",
    "mean": "Hoàn thành các bài tập giáo viên giao.",
    "en_ex": "Students must do homework before going out to play.",
    "vi_ex": "Học sinh phải làm bài tập về nhà trước khi ra ngoài chơi."
  },
  {
    "answer": "to put the children to bed",
    "short_mean": "dỗ trẻ đi ngủ",
    "mean": "Chăm sóc và dỗ các con ngủ đêm.",
    "en_ex": "She reads a bedtime story to put the children to bed.",
    "vi_ex": "Cô ấy đọc truyện cổ tích để dỗ các con đi ngủ."
  },
  {
    "answer": "to take out the trash/rubbish",
    "short_mean": "đi đổ rác",
    "mean": "Mang túi rác thải ra thùng rác công cộng.",
    "en_ex": "Don't forget to take out the trash before bedtime.",
    "vi_ex": "Đừng quên đi đổ rác trước khi đi ngủ."
  },
  {
    "answer": "to feed the dog/cat",
    "short_mean": "cho chó/mèo ăn",
    "mean": "Cung cấp thức ăn cho thú cưng.",
    "en_ex": "Remember to feed the cat before you leave.",
    "vi_ex": "Hãy nhớ cho mèo ăn trước khi bạn đi."
  },
  {
    "answer": "to go to bed",
    "short_mean": "đi ngủ",
    "mean": "Lên giường nằm ngủ nghỉ đêm.",
    "en_ex": "I usually go to bed at ten PM.",
    "vi_ex": "Tôi thường đi ngủ lúc mười giờ tối."
  }
];
