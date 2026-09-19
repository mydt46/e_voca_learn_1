const VOCA_WORDS = [
  {
    answer: "organized",
    short_mean: "ngăn nắp, có tổ chức",
    mean: "Biết sắp xếp công việc, tài liệu khoa học",
    en_ex: "She keeps all project documents organized and updated.",
    vi_ex:
      "Cô ấy giữ cho tất cả các tài liệu dự án được sắp xếp ngăn nắp và cập nhật.",
  },
  {
    answer: "patient",
    short_mean: "kiên nhẫn",
    mean: "Bình tĩnh, không nóng vội khi giải quyết vấn đề.",
    en_ex: "He is always patient when explaining tasks to new interns.",
    vi_ex:
      "Anh ấy luôn kiên nhẫn khi giải thích công việc cho các thực tập sinh mới.",
  },
  {
    answer: "accurate",
    short_mean: "chính xác",
    mean: "Làm việc chuẩn xác, không có sai sót.",
    en_ex: "Her financial calculations are always 100% accurate.",
    vi_ex: "Các phép tính tài chính của cô ấy luôn chính xác 100%.",
  },
  {
    answer: "creative",
    short_mean: "sáng tạo",
    mean: "Có nhiều ý tưởng mới mẻ và độc đáo.",
    en_ex: "The design team needs creative ideas for the new campaign.",
    vi_ex: "Đội ngũ thiết kế cần những ý tưởng sáng tạo cho chiến dịch mới.",
  },
  {
    answer: "honest",
    short_mean: "trung thực",
    mean: "Thật thà, thẳng thắn nhận lỗi và minh bạch.",
    en_ex: "He was honest about the bug in his code and fixed it immediately.",
    vi_ex:
      "Anh ấy đã trung thực về lỗi trong mã nguồn của mình và sửa nó ngay lập tức.",
  },
  {
    answer: "practical",
    short_mean: "thực tế, tháo vát",
    mean: "Chú trọng tính khả thi và giải pháp áp dụng được ngay.",
    en_ex: "She proposed a practical solution instead of theoretical ideas.",
    vi_ex:
      "Cô ấy đề xuất một giải pháp thực tế thay vì những ý tưởng mang tính lý thuyết.",
  },
  {
    answer: "professional",
    short_mean: "chuyên nghiệp",
    mean: "Có tác phong, thái độ và kỹ năng chuẩn mực.",
    en_ex: "Always maintain a professional tone in client emails.",
    vi_ex:
      "Hãy luôn duy trì giọng điệu chuyên nghiệp trong email gửi khách hàng.",
  },
  {
    answer: "adaptable",
    short_mean: "dễ thích nghi",
    mean: "Nhanh chóng quen với thay đổi hoặc môi trường mới.",
    en_ex: "An adaptable developer learns new frameworks easily.",
    vi_ex:
      "Một lập trình viên dễ thích nghi sẽ học các framework mới một cách dễ dàng.",
  },
  {
    answer: "ambitious",
    short_mean: "có hoài bão, cầu tiến",
    mean: "Luôn đặt mục tiêu cao và nỗ lực đạt được.",
    en_ex: "He is ambitious and aims to become a Tech Lead in two years.",
    vi_ex:
      "Anh ấy rất cầu tiến và đặt mục tiêu trở thành Tech Lead trong vòng hai năm.",
  },
  {
    answer: "calm",
    short_mean: "bình tĩnh",
    mean: "Giữ được sự điềm đạm trước áp lực hoặc khủng hoảng.",
    en_ex: "Keep calm when the production server goes down.",
    vi_ex:
      "Hãy giữ bình tĩnh khi máy chủ production gặp sự cố ngừng hoạt động.",
  },
  {
    answer: "confident",
    short_mean: "tự tin",
    mean: "Tin tưởng vào năng lực của bản thân.",
    en_ex: "She is confident when presenting her proposal to executives.",
    vi_ex:
      "Cô ấy rất tự tin khi trình bày đề xuất của mình trước ban điều hành.",
  },
  {
    answer: "punctual",
    short_mean: "đúng giờ",
    mean: "Luôn đến đúng giờ và giao việc đúng hạn.",
    en_ex: "He is punctual for every daily standup meeting.",
    vi_ex: "Anh ấy luôn đúng giờ trong mọi cuộc họp daily standup.",
  },
  {
    answer: "reliable",
    short_mean: "đáng tin cậy",
    mean: "Người có thể yên tâm giao phó công việc.",
    en_ex: "She is a reliable teammate who never misses a deadline.",
    vi_ex: "Cô ấy là một đồng đội đáng tin cậy, không bao giờ trễ hạn chót.",
  },
  {
    answer: "customer-focused",
    short_mean: "hướng đến khách hàng",
    mean: "Đặt sự hài lòng của khách hàng làm trọng tâm.",
    en_ex:
      "Our product team uses a customer-focused approach to design features.",
    vi_ex:
      "Đội ngũ phát triển sản phẩm của chúng tôi áp dụng cách tiếp cận hướng đến khách hàng để thiết kế các tính năng.",
  },
  {
    answer: "independent",
    short_mean: "tự chủ, làm việc độc lập",
    mean: "Tự thực hiện công việc mà không cần giám sát liên tục.",
    en_ex: "He can work independently on complex backend tasks.",
    vi_ex: "Anh ấy có thể làm việc độc lập trên các tác vụ backend phức tạp.",
  },
  {
    answer: "efficient",
    short_mean: "hiệu quả, tối ưu",
    mean: "Làm việc năng suất, tiết kiệm thời gian/nguồn lực.",
    en_ex: "Writing clean code makes debugging much more efficient.",
    vi_ex: "Viết code sạch giúp quá trình gỡ lỗi hiệu quả hơn nhiều.",
  },
  {
    answer: "energetic",
    short_mean: "năng động, tràn đầy năng lượng",
    mean: "Làm việc nhiệt huyết, tích cực.",
    en_ex: "Her energetic attitude motivates the entire team.",
    vi_ex:
      "Thái độ tràn đầy năng lượng của cô ấy tiếp thêm động lực cho toàn đội.",
  },
  {
    answer: "flexible",
    short_mean: "linh hoạt",
    mean: "Sẵn sàng thay đổi kế hoạch/nhiệm vụ theo tình hình thực tế.",
    en_ex: "We need flexible schedules to coordinate across time zones.",
    vi_ex:
      "Chúng tôi cần lịch trình linh hoạt để phối hợp nhịp nhàng giữa các múi giờ.",
  },
  {
    answer: "hardworking",
    short_mean: "chăm chỉ",
    mean: "Cần cù, nỗ lực hết mình cho công việc.",
    en_ex: "She is hardworking and always stays until the task is complete.",
    vi_ex:
      "Cô ấy rất chăm chỉ và luôn ở lại cho đến khi hoàn thành xong nhiệm vụ.",
  },
  {
    answer: "responsible",
    short_mean: "có trách nhiệm",
    mean: "Chịu trách nhiệm với kết quả công việc của mình.",
    en_ex: "He is responsible for deploying the latest release.",
    vi_ex: "Anh ấy chịu trách nhiệm triển khai phiên bản phát hành mới nhất.",
  },
  {
    answer: "innovative",
    short_mean: "đổi mới, đột phá",
    mean: "Thích cải tiến, tạo ra cái mới tối ưu hơn.",
    en_ex: "The startup succeeded thanks to its innovative business model.",
    vi_ex:
      "Công ty khởi nghiệp đã thành công nhờ mô hình kinh doanh đổi mới đột phá.",
  },
  {
    answer: "motivated",
    short_mean: "có động lực",
    mean: "Tự giác, nhiệt huyết và có mục tiêu rõ ràng.",
    en_ex: "A highly motivated team delivers high-quality results.",
    vi_ex:
      "Một đội ngũ tràn đầy động lực luôn mang lại những kết quả chất lượng cao.",
  },
  {
    answer: "determined",
    short_mean: "quyết tâm, kiên định",
    mean: "Quyết chí theo đuổi mục tiêu dù gặp khó khăn.",
    en_ex: "They were determined to fix the performance issue before launch.",
    vi_ex: "Họ đã rất quyết tâm khắc phục vấn đề hiệu năng trước khi ra mắt.",
  },
  {
    answer: "team player",
    short_mean: "người biết phối hợp nhóm",
    mean: "Hợp tác tốt, vì lợi ích chung của tập thể.",
    en_ex: "He is a great team player who shares knowledge with others.",
    vi_ex:
      "Anh ấy là một người phối hợp nhóm tuyệt vời, luôn sẵn lòng chia sẻ kiến thức với người khác.",
  },
  {
    answer: "competitive",
    short_mean: "có tinh thần cạnh tranh",
    mean: "Luôn muốn làm tốt hơn, dẫn đầu thị trường.",
    en_ex: "Our competitive pricing strategy attracted many new clients.",
    vi_ex:
      "Chiến lược giá mang tính cạnh tranh của chúng tôi đã thu hút được rất nhiều khách hàng mới.",
  },
  {
    answer: "organization",
    short_mean: "kỹ năng tổ chức/sắp xếp",
    mean: "Khả năng quy hoạch công việc khoa học.",
    en_ex: "Good organization helps prevent missing important tasks.",
    vi_ex:
      "Kỹ năng tổ chức tốt giúp ngăn ngừa việc bỏ sót các nhiệm vụ quan trọng.",
  },
  {
    answer: "IT/computing",
    short_mean: "tin học / công nghệ thông tin",
    mean: "Kỹ năng sử dụng máy tính, phần mềm.",
    en_ex: "Strong IT skills are essential for remote work.",
    vi_ex:
      "Kỹ năng công nghệ thông tin vững vàng là điều thiết yếu đối với công việc từ xa.",
  },
  {
    answer: "administration",
    short_mean: "kỹ năng hành chính/quản trị",
    mean: "Quản lý giấy tờ, quy trình nội bộ.",
    en_ex: "She handles office administration and paperwork smoothly.",
    vi_ex:
      "Cô ấy xử lý các thủ tục hành chính và giấy tờ văn phòng một cách trơn tru.",
  },
  {
    answer: "problem-solving",
    short_mean: "giải quyết vấn đề",
    mean: "Khả năng tìm nguyên nhân và đưa ra giải pháp.",
    en_ex: "Debugging requires excellent problem-solving ability.",
    vi_ex: "Việc gỡ lỗi đòi hỏi khả năng giải quyết vấn đề xuất sắc.",
  },
  {
    answer: "data analysis",
    short_mean: "phân tích dữ liệu",
    mean: "Đọc hiểu, tổng hợp và rút ra kết luận từ số liệu.",
    en_ex: "Data analysis showed a 20% increase in user signups.",
    vi_ex:
      "Phân tích dữ liệu cho thấy lượng đăng ký người dùng mới đã tăng 20%.",
  },
  {
    answer: "decision-making",
    short_mean: "ra quyết định",
    mean: "Khả năng lựa chọn phương án tối ưu một cách quyết đoán.",
    en_ex: "Fast decision-making is critical during a system outage.",
    vi_ex:
      "Việc ra quyết định nhanh chóng là vô cùng quan trọng khi hệ thống gặp sự cố sập nguồn.",
  },
  {
    answer: "teamwork",
    short_mean: "làm việc nhóm",
    mean: "Phối hợp hiệu quả với các thành viên khác.",
    en_ex: "Successful sprint delivery relies on good teamwork.",
    vi_ex:
      "Việc bàn giao sprint thành công phụ thuộc rất nhiều vào kỹ năng làm việc nhóm tốt.",
  },
  {
    answer: "fast learner",
    short_mean: "người tiếp thu nhanh",
    mean: "Nhanh chóng nắm bắt công nghệ/kiến thức mới.",
    en_ex:
      "Being a fast learner helped him adapt to the new tech stack in one week.",
    vi_ex:
      "Là một người tiếp thu nhanh đã giúp anh ấy thích ứng với bộ công nghệ mới chỉ trong vòng một tuần.",
  },
  {
    answer: "numeracy",
    short_mean: "kỹ năng tính toán / làm việc với số liệu",
    mean: "Sự thành thạo về số học.",
    en_ex: "Accounting roles require a high level of numeracy.",
    vi_ex:
      "Các vị trí kế toán đòi hỏi trình độ làm việc với số liệu và tính toán ở mức độ cao.",
  },
  {
    answer: "customer service",
    short_mean: "dịch vụ khách hàng",
    mean: "Kỹ năng chăm sóc và hỗ trợ người dùng.",
    en_ex: "Good customer service improves user retention rate.",
    vi_ex:
      "Dịch vụ chăm sóc khách hàng tốt giúp cải thiện đáng kể tỷ lệ giữ chân người dùng.",
  },
  {
    answer: "interpersonal skills",
    short_mean: "kỹ năng giao tiếp xã hội",
    mean: "Kỹ năng tương tác, kết nối giữa người với người.",
    en_ex: "Interpersonal skills help resolve conflicts between teammates.",
    vi_ex:
      "Kỹ năng giao tiếp ứng xử tốt giúp giải quyết các mâu thuẫn giữa các thành viên trong đội.",
  },
  {
    answer: "leadership",
    short_mean: "khả năng lãnh đạo",
    mean: "Dẫn dắt, định hướng và tạo cảm hứng cho đội ngũ.",
    en_ex: "Her strong leadership guided the project through tough deadlines.",
    vi_ex:
      "Năng lực lãnh đạo vững vàng của cô ấy đã chèo lái dự án vượt qua những hạn chót đầy căng thẳng.",
  },
  {
    answer: "research",
    short_mean: "nghiên cứu, tìm tòi",
    mean: "Khả năng tìm kiếm, đào sâu thông tin.",
    en_ex: "Do thorough research before adopting a new third-party library.",
    vi_ex:
      "Hãy nghiên cứu kỹ lưỡng trước khi đưa vào áp dụng một thư viện của bên thứ ba mới.",
  },
  {
    answer: "fluent in languages",
    short_mean: "thông thạo ngoại ngữ",
    mean: "Khả năng sử dụng trôi chảy các ngôn ngữ.",
    en_ex: "Being fluent in English allows you to work with global clients.",
    vi_ex:
      "Việc thông thạo tiếng Anh cho phép bạn làm việc với các khách hàng toàn cầu.",
  },
  {
    answer: "attention to detail",
    short_mean: "sự tỉ mỉ, chú ý từng chi tiết",
    mean: "Cẩn thận, không bỏ sót lỗi nhỏ.",
    en_ex: "Code review requires sharp attention to detail.",
    vi_ex:
      "Quá trình kiểm duyệt mã nguồn đòi hỏi sự chú ý tỉ mỉ đến từng chi tiết.",
  },
  {
    answer: "negotiating",
    short_mean: "kỹ năng đàm phán",
    mean: "Thuyết phục, thương lượng để đạt thỏa thuận đôi bên cùng có lợi.",
    en_ex: "He used his negotiating skills to secure a better contract price.",
    vi_ex:
      "Anh ấy đã vận dụng kỹ năng đàm phán của mình để đạt được mức giá hợp đồng tốt hơn.",
  },
  {
    answer: "public speaking",
    short_mean: "thuyết trình / nói trước đám đông",
    mean: "Trình bày mạch lạc trước nhiều người.",
    en_ex: "Joining tech meetups helps improve public speaking skills.",
    vi_ex:
      "Tham gia các buổi giao lưu công nghệ giúp nâng cao kỹ năng nói trước đám đông.",
  },
  {
    answer: "written communication",
    short_mean: "kỹ năng giao tiếp bằng văn bản",
    mean: "Viết email, tài liệu, báo cáo rõ ràng.",
    en_ex:
      "Clear written communication is vital for writing technical documentation.",
    vi_ex:
      "Kỹ năng giao tiếp bằng văn bản rõ ràng là yếu tố sống còn khi biên soạn tài liệu kỹ thuật.",
  },
  {
    answer: "initiative",
    short_mean: "sự chủ động / sáng kiến",
    mean: "Tự bắt tay vào làm mà không cần đợi sai bảo.",
    en_ex: "She showed great initiative by automating the manual test process.",
    vi_ex:
      "Cô ấy đã thể hiện sự chủ động tuyệt vời khi tự động hóa quy trình kiểm thử thủ công.",
  },
  {
    answer: "telephone manner",
    short_mean: "tác phong nghe/nói điện thoại",
    mean: "Cách chào hỏi, phản hồi lịch sự qua điện thoại.",
    en_ex: "A polite telephone manner creates a great first impression.",
    vi_ex:
      "Tác phong nghe điện thoại lịch thiệp sẽ tạo nên ấn tượng đầu tiên rất tốt.",
  },
  {
    answer: "work well under pressure",
    short_mean: "chịu được áp lực cao",
    mean: "Giữ hiệu suất tốt khi gặp hạn chót gấp hoặc sự cố.",
    en_ex: "Emergency on-call engineers must work well under pressure.",
    vi_ex:
      "Các kỹ sư trực sự cố khẩn cấp phải có khả năng làm việc tốt dưới áp lực cao.",
  },
  {
    answer: "able to drive",
    short_mean: "có khả năng lái xe",
    mean: "Có bằng lái và tự điều khiển phương tiện khi công việc cần di chuyển.",
    en_ex: "This sales role requires candidates who are able to drive.",
    vi_ex:
      "Vị trí nhân viên kinh doanh này yêu cầu các ứng viên phải có khả năng lái xe.",
  },
  {
    answer: "project management",
    short_mean: "quản lý dự án",
    mean: "Lên kế hoạch, theo dõi tiến độ và điều phối nguồn lực.",
    en_ex:
      "Effective project management ensures the product launches on schedule.",
    vi_ex:
      "Kỹ năng quản lý dự án hiệu quả đảm bảo sản phẩm được ra mắt đúng tiến độ đề ra.",
  },
  {
    answer: "time management",
    short_mean: "quản lý thời gian",
    mean: "Sắp xếp công việc hợp lý để tối ưu hiệu suất.",
    en_ex: "Time management techniques like Pomodoro help maintain deep focus.",
    vi_ex:
      "Các phương pháp quản lý thời gian như Pomodoro giúp duy trì sự tập trung sâu.",
  },
  {
    answer: "businesslike attitude",
    short_mean: "tác phong chuyên nghiệp, chuẩn mực công sở",
    mean: "Thái độ nghiêm túc, tôn trọng đối tác và công việc.",
    en_ex:
      "Maintain a businesslike attitude throughout the stakeholder meeting.",
    vi_ex:
      "Hãy duy trì tác phong làm việc chuẩn mực và chuyên nghiệp trong suốt buổi họp với các bên liên quan.",
  },
];
