const VOCA_WORDS = [
  {
    "answer": "robbery",
    "short_mean": "vụ cướp tài sản",
    "mean": "Hành vi dùng vũ lực hoặc đe dọa để chiếm đoạt tài sản.",
    "en_ex": "The armed robbery at the city bank was reported immediately.",
    "vi_ex": "Vụ cướp có vũ trang tại ngân hàng thành phố đã được trình báo ngay lập tức."
  },
  {
    "answer": "burglary",
    "short_mean": "vụ đột nhập trộm nhà",
    "mean": "Hành vi đột nhập trái phép vào nhà dân/tòa nhà để trộm đồ.",
    "en_ex": "The house was broken into in a midnight burglary.",
    "vi_ex": "Ngôi nhà đã bị đột nhập trong một vụ trộm đêm."
  },
  {
    "answer": "mugging",
    "short_mean": "vụ trấn lột trên đường",
    "mean": "Hành vi tấn công đe dọa người đi đường để cướp tiền.",
    "en_ex": "He was the victim of a street mugging late at night.",
    "vi_ex": "Anh ấy là nạn nhân của một vụ trấn lột trên đường vào lúc nửa đêm."
  },
  {
    "answer": "car theft",
    "short_mean": "vụ trộm xe ô tô",
    "mean": "Hành vi lấy cắp phương tiện ô tô.",
    "en_ex": "Car theft has decreased due to improved security systems.",
    "vi_ex": "Vụ trộm xe ô tô đã giảm nhờ các hệ thống an ninh cải tiến."
  },
  {
    "answer": "shoplifting",
    "short_mean": "hành vi trộm đồ trong cửa hàng",
    "mean": "Lấy trộm hàng hóa giấu mang ra khỏi cửa hàng không trả tiền.",
    "en_ex": "Security cameras caught the suspect shoplifting.",
    "vi_ex": "Camera an ninh đã ghi hình nghi phạm thực hiện hành vi trộm đồ trong cửa hàng."
  },
  {
    "answer": "pickpocketing",
    "short_mean": "hành vi móc túi",
    "mean": "Lén lút lấy tiền ví trong túi/ba lô của nạn nhân nơi đông người.",
    "en_ex": "Beware of pickpocketing at crowded tourist spots.",
    "vi_ex": "Hãy cẩn trọng với hành vi móc túi tại các địa điểm du lịch đông đúc."
  },
  {
    "answer": "vandalism",
    "short_mean": "tội phá hoại của công",
    "mean": "Cố ý đập phá làm hư hỏng tài sản công cộng.",
    "en_ex": "Acts of vandalism damaged the park benches.",
    "vi_ex": "Các hành vi phá hoại công cộng đã làm hư hỏng các ghế băng trong công viên."
  },
  {
    "answer": "graffiti",
    "short_mean": "vẽ bậy lên tường",
    "mean": "Hành vi sơn xịt chữ hình bậy lên tường công cộng trái phép.",
    "en_ex": "Subway walls were covered in colorful graffiti.",
    "vi_ex": "Những bức tường tàu điện ngầm ngập tràn các hình vẽ bậy nhiều màu sắc."
  },
  {
    "answer": "fraud",
    "short_mean": "tội lừa đảo tài chính",
    "mean": "Hành vi gian lận dối trá để chiếm đoạt tiền bạc.",
    "en_ex": "He was arrested for committing credit card fraud.",
    "vi_ex": "Anh ấy đã bị bắt vì thực hiện hành vi lừa đảo thẻ tín dụng."
  },
  {
    "answer": "hacking",
    "short_mean": "hành vi xâm nhập mạng / hack",
    "mean": "Truy cập trái phép vào hệ thống máy tính dữ liệu.",
    "en_ex": "Computer hacking poses a major cyber security threat.",
    "vi_ex": "Hành vi hack máy tính tạo ra một mối đe dọa an ninh mạng lớn."
  },
  {
    "answer": "hooliganism",
    "short_mean": "nạn côn đồ thể thao / hooligan",
    "mean": "Hành vi gây rối bạo lực của các nhóm cổ động viên côn đồ.",
    "en_ex": "Police deployed extra officers to prevent football hooliganism.",
    "vi_ex": "Cảnh sát đã triển khai thêm sĩ quan để ngăn chặn nạn côn đồ bóng đá."
  },
  {
    "answer": "drug dealing",
    "short_mean": "tội mua bán ma túy",
    "mean": "Hành vi buôn bán trái phép chất ma túy.",
    "en_ex": "He was charged with illegal drug dealing.",
    "vi_ex": "Anh ấy bị cáo buộc tội mua bán ma túy trái phép."
  },
  {
    "answer": "smuggling",
    "short_mean": "tội buôn lậu",
    "mean": "Vận chuyển lén lút hàng cấm hoặc trốn thuế qua biên giới.",
    "en_ex": "Customs officers intercepted a tobacco smuggling operation.",
    "vi_ex": "Các sĩ quan hải quan đã chặn đứng một đường dây buôn lậu thuốc lá."
  },
  {
    "answer": "speeding",
    "short_mean": "chạy quá tốc độ quy định",
    "mean": "Điều khiển xe chạy nhanh hơn tốc độ cho phép.",
    "en_ex": "He received a traffic fine for speeding on the highway.",
    "vi_ex": "Anh ấy bị phạt hành chính vì chạy quá tốc độ trên đường cao tốc."
  },
  {
    "answer": "bribery",
    "short_mean": "hành vi hối lộ, nhận hối lộ",
    "mean": "Đút lót tiền tài để chuộc lợi bất chính.",
    "en_ex": "The official was accused of accepting bribery.",
    "vi_ex": "Vị quan chức bị cáo buộc nhận hối lộ."
  },
  {
    "answer": "police",
    "short_mean": "lực lượng cảnh sát",
    "mean": "Cơ quan duy trì an ninh trật tự và thực thi pháp luật.",
    "en_ex": "Call the police immediately in an emergency.",
    "vi_ex": "Hãy gọi cảnh sát ngay lập tức trong tình huống khẩn cấp."
  },
  {
    "answer": "law court",
    "short_mean": "tòa án",
    "mean": "Nơi xét xử xử lý các vụ án pháp lý.",
    "en_ex": "The trial took place inside the city law court.",
    "vi_ex": "Phiên tòa diễn ra bên trong tòa án thành phố."
  },
  {
    "answer": "judge",
    "short_mean": "thẩm phán",
    "mean": "Người chủ trì phiên tòa và đưa ra phán quyết.",
    "en_ex": "The judge sentenced the defendant to three years in prison.",
    "vi_ex": "Thẩm phán tuyên án bị cáo ba năm tù."
  },
  {
    "answer": "lawyer",
    "short_mean": "luật sư",
    "mean": "Người tư vấn pháp lý và bào chữa trước tòa.",
    "en_ex": "The defense lawyer argued convincingly for his client.",
    "vi_ex": "Luật sư bào chữa đã tranh luận đầy thuyết phục cho thân chủ của mình."
  },
  {
    "answer": "jury",
    "short_mean": "bồi thẩm đoàn",
    "mean": "Nhóm công dân tham gia xem xét chứng cứ và đưa ra kết luận có tội hay không.",
    "en_ex": "The jury reached a unanimous verdict of guilty.",
    "vi_ex": "Bồi thẩm đoàn đã đưa ra phán quyết đồng thuận là có tội."
  },
  {
    "answer": "trial",
    "short_mean": "phiên tòa xét xử",
    "mean": "Quá trình thẩm vấn xem xét án tại tòa.",
    "en_ex": "The murder trial lasted for three weeks.",
    "vi_ex": "Phiên tòa xét xử vụ án mạng kéo dài trong ba tuần."
  },
  {
    "answer": "witness",
    "short_mean": "nhân chứng",
    "mean": "Người chứng kiến sự việc và ra làm chứng tại tòa.",
    "en_ex": "The key witness testified about what he saw.",
    "vi_ex": "Nhân chứng quan trọng đã làm chứng về những gì anh ấy nhìn thấy."
  },
  {
    "answer": "fine",
    "short_mean": "tiền phạt hành chính",
    "mean": "Khoản tiền phạt phải nộp do vi phạm luật.",
    "en_ex": "He paid a hefty fine for illegal parking.",
    "vi_ex": "Anh ấy đã nộp một khoản tiền phạt nặng vì đỗ xe trái phép."
  },
  {
    "answer": "prison",
    "short_mean": "nhà tù, trại giam",
    "mean": "Nơi giam giữ tội phạm thi hành án phạt tù.",
    "en_ex": "The criminal was sent to a maximum security prison.",
    "vi_ex": "Tên tội phạm bị đưa đến một nhà tù an ninh tối đa."
  },
  {
    "answer": "criminal record",
    "short_mean": "tiền án tiền sự, hồ sơ tội phạm",
    "mean": "Lịch sử vi phạm pháp luật được ghi nhận.",
    "en_ex": "A clean criminal record is required for security jobs.",
    "vi_ex": "Một lý lịch không có tiền án tiền sự được yêu cầu cho các công việc an ninh."
  }
];
