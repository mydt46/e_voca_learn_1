const VOCA_WORDS = [
  {
    "answer": "english",
    "short_mean": "môn tiếng Anh",
    "mean": "Môn học ngôn ngữ và văn học Anh.",
    "en_ex": "English is a required subject in many schools.",
    "vi_ex": "Tiếng Anh là môn học bắt buộc ở nhiều trường học."
  },
  {
    "answer": "art",
    "short_mean": "môn mỹ thuật, hội họa",
    "mean": "Môn học nghệ thuật vẽ và sáng tạo thị giác.",
    "en_ex": "Students painted landscapes in their art class.",
    "vi_ex": "Học sinh đã vẽ các bức tranh phong cảnh trong tiết học mỹ thuật."
  },
  {
    "answer": "history",
    "short_mean": "môn lịch sử",
    "mean": "Môn học nghiên cứu về các sự kiện quá khứ.",
    "en_ex": "We studied world history during the twentieth century.",
    "vi_ex": "Chúng tôi đã học lịch sử thế giới trong thế kỷ 20."
  },
  {
    "answer": "geography",
    "short_mean": "môn địa lý",
    "mean": "Môn học nghiên cứu về bề mặt Trái Đất và bản đồ.",
    "en_ex": "Geography teaches students about different countries and climates.",
    "vi_ex": "Địa lý dạy cho học sinh về các quốc gia và khí hậu khác nhau."
  },
  {
    "answer": "science",
    "short_mean": "môn khoa học",
    "mean": "Môn học nghiên cứu tự nhiên và vật chất.",
    "en_ex": "Students conducted experiments in science class.",
    "vi_ex": "Học sinh tiến hành các thí nghiệm trong giờ khoa học."
  },
  {
    "answer": "biology",
    "short_mean": "môn sinh học",
    "mean": "Môn khoa học nghiên cứu sự sống và sinh vật.",
    "en_ex": "Biology covers topics like genetics and ecosystems.",
    "vi_ex": "Sinh học bao gồm các chủ đề như di truyền học và hệ sinh thái."
  },
  {
    "answer": "physics",
    "short_mean": "môn vật lý",
    "mean": "Môn khoa học nghiên cứu năng lượng và chuyển động.",
    "en_ex": "Physics explains gravity and laws of motion.",
    "vi_ex": "Vật lý giải thích về trọng lực và các định luật chuyển động."
  },
  {
    "answer": "chemistry",
    "short_mean": "môn hóa học",
    "mean": "Môn khoa học nghiên cứu cấu trúc chất và phản ứng hóa học.",
    "en_ex": "Wear safety goggles during chemistry experiments.",
    "vi_ex": "Đeo kính bảo hộ trong suốt các thí nghiệm hóa học."
  },
  {
    "answer": "math/maths",
    "short_mean": "môn toán học",
    "mean": "Môn học làm việc với các con số và đại số.",
    "en_ex": "Solving math equations requires logical thinking.",
    "vi_ex": "Giải các phương trình toán học đòi hỏi tư duy logic."
  },
  {
    "answer": "medicine",
    "short_mean": "ngành y khoa",
    "mean": "Ngành học chẩn đoán và điều trị bệnh tật.",
    "en_ex": "She wants to study medicine to become a doctor.",
    "vi_ex": "Cô ấy muốn học ngành y khoa để trở thành một bác sĩ."
  },
  {
    "answer": "economics",
    "short_mean": "ngành kinh tế học",
    "mean": "Ngành học quản lý tài chính và thị trường.",
    "en_ex": "Economics analyzes supply and demand in markets.",
    "vi_ex": "Kinh tế học phân tích cung và cầu trên các thị trường."
  },
  {
    "answer": "law",
    "short_mean": "ngành luật học",
    "mean": "Ngành học hệ thống pháp luật và tư pháp.",
    "en_ex": "He graduated with a degree in international law.",
    "vi_ex": "Anh ấy tốt nghiệp với tấm bằng luật quốc tế."
  },
  {
    "answer": "business studies",
    "short_mean": "môn quản trị kinh doanh",
    "mean": "Ngành học vận hành doanh nghiệp và thương mại.",
    "en_ex": "Business studies prepares students for corporate careers.",
    "vi_ex": "Môn quản trị kinh doanh chuẩn bị cho sinh viên các sự nghiệp trong doanh nghiệp."
  },
  {
    "answer": "engineering",
    "short_mean": "ngành kỹ thuật",
    "mean": "Ngành ứng dụng khoa học để thiết kế máy móc, công trình.",
    "en_ex": "Civil engineering involves building bridges and roads.",
    "vi_ex": "Kỹ thuật dân dụng bao gồm việc xây dựng cầu đường."
  },
  {
    "answer": "architecture",
    "short_mean": "ngành kiến trúc",
    "mean": "Ngành học thiết kế và quy hoạch tòa nhà.",
    "en_ex": "She is studying architecture at the university.",
    "vi_ex": "Cô ấy đang học ngành kiến trúc tại trường đại học."
  },
  {
    "answer": "psychology",
    "short_mean": "ngành tâm lý học",
    "mean": "Ngành nghiên cứu tâm trí và hành vi con người.",
    "en_ex": "Psychology helps explain human behavioral patterns.",
    "vi_ex": "Tâm lý học giúp giải thích các mô hình hành vi của con người."
  },
  {
    "answer": "philosophy",
    "short_mean": "ngành triết học",
    "mean": "Ngành nghiên cứu các tư tưởng nhận thức và sự tồn tại.",
    "en_ex": "Philosophy encourages critical questioning of ideas.",
    "vi_ex": "Triết học khuyến khích việc truy vấn phản biện các ý tưởng."
  },
  {
    "answer": "music",
    "short_mean": "môn âm nhạc",
    "mean": "Môn học xướng âm và thực hành nhạc cụ.",
    "en_ex": "Students practice singing in music class.",
    "vi_ex": "Học sinh thực hành ca hát trong giờ âm nhạc."
  },
  {
    "answer": "drama",
    "short_mean": "môn kịch nghệ, diễn xuất",
    "mean": "Môn học thực hành diễn xuất và sân khấu.",
    "en_ex": "She joined the drama club to improve public speaking.",
    "vi_ex": "Cô ấy gia nhập câu lạc bộ kịch nghệ để cải thiện khả năng nói trước công chúng."
  },
  {
    "answer": "languages",
    "short_mean": "môn ngoại ngữ",
    "mean": "Ngành học ngôn ngữ nước ngoài.",
    "en_ex": "Learning modern languages expands career opportunities.",
    "vi_ex": "Học các ngôn ngữ hiện đại mở rộng các cơ hội nghề nghiệp."
  },
  {
    "answer": "design and technology",
    "short_mean": "môn thiết kế và công nghệ",
    "mean": "Môn học sáng tạo và gia công sản phẩm kỹ thuật.",
    "en_ex": "Students built model towers in design and technology class.",
    "vi_ex": "Học sinh xây dựng các mô hình tháp trong giờ thiết kế và công nghệ."
  },
  {
    "answer": "information technology",
    "short_mean": "môn tin học / công nghệ thông tin (IT)",
    "mean": "Môn học máy tính và phần mềm mạng.",
    "en_ex": "Information technology skills are vital nowadays.",
    "vi_ex": "Kỹ năng công nghệ thông tin là yếu tố sống còn ngày nay."
  },
  {
    "answer": "physical education",
    "short_mean": "môn thể dục (PE)",
    "mean": "Môn vận động thể thao rèn luyện sức khỏe.",
    "en_ex": "Students play basketball during physical education class.",
    "vi_ex": "Học sinh chơi bóng rổ trong giờ thể dục."
  },
  {
    "answer": "veterinary medicine",
    "short_mean": "ngành thú y",
    "mean": "Ngành y khoa điều trị bệnh cho động vật.",
    "en_ex": "Veterinary medicine requires passion for animal care.",
    "vi_ex": "Ngành thú y đòi hỏi niềm đam mê chăm sóc động vật."
  },
  {
    "answer": "geology",
    "short_mean": "ngành địa chất học",
    "mean": "Ngành nghiên cứu cấu trúc đá và lòng đất Trái Đất.",
    "en_ex": "Geology students examine rock and mineral samples.",
    "vi_ex": "Sinh viên ngành địa chất kiểm tra các mẫu đá và khoáng vật."
  },
  {
    "answer": "school",
    "short_mean": "trường học",
    "mean": "Cơ sở giáo dục dành cho học sinh.",
    "en_ex": "Children go to primary school at age six.",
    "vi_ex": "Trẻ em đi học trường tiểu học lúc sáu tuổi."
  },
  {
    "answer": "college/university",
    "short_mean": "trường đại học / cao đẳng",
    "mean": "Cơ sở giáo dục bậc cao cấp bằng cử nhân.",
    "en_ex": "She applied to a top university to study engineering.",
    "vi_ex": "Cô ấy đã nộp đơn vào một trường đại học hàng đầu để học ngành kỹ thuật."
  },
  {
    "answer": "library",
    "short_mean": "thư viện trường",
    "mean": "Nơi tự học và mượn sách nghiên cứu.",
    "en_ex": "The university library stays open late during exam week.",
    "vi_ex": "Thư viện trường đại học mở cửa muộn trong tuần thi."
  },
  {
    "answer": "classroom",
    "short_mean": "lớp học, phòng học",
    "mean": "Phòng học giảng dạy trong trường.",
    "en_ex": "The teacher entered the bright classroom.",
    "vi_ex": "Giáo viên bước vào phòng học sáng sủa."
  },
  {
    "answer": "laboratory",
    "short_mean": "phòng thí nghiệm",
    "mean": "Phòng trang bị dụng cụ làm thí nghiệm khoa học.",
    "en_ex": "Wear white coats inside the chemistry laboratory.",
    "vi_ex": "Mặc áo blouse trắng bên trong phòng thí nghiệm hóa học."
  },
  {
    "answer": "class",
    "short_mean": "tiết học, lớp học",
    "mean": "Giờ học một môn học cụ thể.",
    "en_ex": "Our English class starts at eight AM.",
    "vi_ex": "Tiết học tiếng Anh của chúng tôi bắt đầu lúc tám giờ sáng."
  },
  {
    "answer": "exam",
    "short_mean": "kỳ thi, bài thi",
    "mean": "Bài đánh giá năng lực học tập cuối kỳ.",
    "en_ex": "Students prepared hard for the final exam.",
    "vi_ex": "Học sinh chuẩn bị chăm chỉ cho kỳ thi cuối kỳ."
  },
  {
    "answer": "essay",
    "short_mean": "bài luận văn",
    "mean": "Bài viết trình bày quan điểm nghiên cứu về chủ đề.",
    "en_ex": "He submitted a 2,000-word history essay.",
    "vi_ex": "Anh ấy đã nộp một bài luận lịch sử 2.000 từ."
  },
  {
    "answer": "homework",
    "short_mean": "bài tập về nhà",
    "mean": "Bài tập giáo viên giao làm tại nhà.",
    "en_ex": "Do your homework before watching television.",
    "vi_ex": "Hãy làm bài tập về nhà trước khi xem ti-vi."
  },
  {
    "answer": "exercise book",
    "short_mean": "vở bài tập",
    "mean": "Cuốn sổ vở dùng ghi chép làm bài.",
    "en_ex": "Write your answers in your exercise book.",
    "vi_ex": "Hãy viết các câu trả lời của bạn vào vở bài tập."
  },
  {
    "answer": "textbook",
    "short_mean": "sách giáo khoa",
    "mean": "Sách chuẩn dùng giảng dạy môn học.",
    "en_ex": "Open your math textbook to page forty.",
    "vi_ex": "Hãy mở sách giáo khoa toán của bạn ra trang bốn mươi."
  },
  {
    "answer": "thesis",
    "short_mean": "luận văn tốt nghiệp",
    "mean": "Công trình nghiên cứu công phu để lấy bằng tốt nghiệp.",
    "en_ex": "She successfully defended her master's thesis.",
    "vi_ex": "Cô ấy đã bảo vệ thành công luận văn thạc sĩ của mình."
  },
  {
    "answer": "lecture",
    "short_mean": "bài giảng đại học",
    "mean": "Buổi thuyết giảng kiến thức của giảng viên.",
    "en_ex": "Over two hundred students attended the biology lecture.",
    "vi_ex": "Hơn hai trăm sinh viên đã tham dự bài giảng sinh học."
  },
  {
    "answer": "test",
    "short_mean": "bài kiểm tra ngắn",
    "mean": "Bài kiểm tra nhanh trình độ học sinh.",
    "en_ex": "We have a vocabulary test every Friday.",
    "vi_ex": "Chúng tôi có một bài kiểm tra từ vựng vào mỗi thứ Sáu."
  },
  {
    "answer": "diploma/qualification",
    "short_mean": "chứng chỉ, bằng cấp",
    "mean": "Văn bằng chứng nhận hoàn thành chương trình học.",
    "en_ex": "He earned a diploma in graphic design.",
    "vi_ex": "Anh ấy đã nhận được bằng chứng chỉ về thiết kế đồ họa."
  },
  {
    "answer": "degree",
    "short_mean": "bằng cử nhân / học vị đại học",
    "mean": "Bằng cấp do trường đại học cấp sau khi tốt nghiệp.",
    "en_ex": "She holds a bachelor's degree in economics.",
    "vi_ex": "Cô ấy sở hữu tấm bằng cử nhân kinh tế."
  },
  {
    "answer": "teacher",
    "short_mean": "giáo viên",
    "mean": "Người giảng dạy học sinh tại trường học.",
    "en_ex": "The teacher explained the lesson clearly.",
    "vi_ex": "Giáo viên đã giải thích bài học một cách rõ ràng."
  },
  {
    "answer": "professor / lecturer",
    "short_mean": "giáo sư / giảng viên đại học",
    "mean": "Thầy cô giảng dạy tại bậc đại học cao đẳng.",
    "en_ex": "The professor published a breakthrough research paper.",
    "vi_ex": "Vị giáo sư đã xuất bản một bài báo nghiên cứu mang tính đột phá."
  },
  {
    "answer": "student",
    "short_mean": "học sinh, sinh viên",
    "mean": "Người đang theo học tại trường.",
    "en_ex": "University students spend long hours in the library.",
    "vi_ex": "Các sinh viên đại học dành nhiều giờ trong thư viện."
  },
  {
    "answer": "graduate",
    "short_mean": "người tốt nghiệp",
    "mean": "Người đã hoàn thành chương trình đại học.",
    "en_ex": "Recent graduates are applying for corporate internships.",
    "vi_ex": "Các sinh viên mới tốt nghiệp đang nộp đơn xin thực tập tại doanh nghiệp."
  },
  {
    "answer": "to study a subject",
    "short_mean": "học một môn học",
    "mean": "Theo học kiến thức của một lĩnh vực.",
    "en_ex": "She chose to study physics at university.",
    "vi_ex": "Cô ấy chọn học môn vật lý tại trường đại học."
  },
  {
    "answer": "to review/to revise",
    "short_mean": "ôn tập kiến thức",
    "mean": "Xem lại bài học chuẩn bị cho kỳ thi.",
    "en_ex": "Revise your lecture notes before the exam.",
    "vi_ex": "Hãy ôn tập lại ghi chú bài giảng trước kỳ thi."
  },
  {
    "answer": "to sit an exam",
    "short_mean": "tham gia dự thi",
    "mean": "Nồi làm bài thi trong phòng thi.",
    "en_ex": "Students sit an exam at the end of each semester.",
    "vi_ex": "Học sinh tham gia dự thi vào cuối mỗi học kỳ."
  },
  {
    "answer": "to pass",
    "short_mean": "thi đỗ, vượt qua",
    "mean": "Đạt điểm chuẩn đậu kỳ thi.",
    "en_ex": "She was happy to pass her driving test.",
    "vi_ex": "Cô ấy rất vui vì đã thi đỗ kỳ thi sát hạch lái xe."
  },
  {
    "answer": "to fail",
    "short_mean": "thi trượt, thi hỏng",
    "mean": "Không đạt điểm sàn kỳ thi.",
    "en_ex": "If you don't study, you will fail the test.",
    "vi_ex": "Nếu bạn không học, bạn sẽ thi trượt bài kiểm tra."
  },
  {
    "answer": "to resit",
    "short_mean": "thi lại",
    "mean": "Dự thi lại lần hai môn chưa đỗ.",
    "en_ex": "He will resit the exam in August to improve his grade.",
    "vi_ex": "Anh ấy sẽ thi lại bài thi vào tháng Tám để cải thiện điểm số."
  }
];
