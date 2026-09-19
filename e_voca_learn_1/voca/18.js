const VOCA_WORDS = [
  {
    "answer": "friendly",
    "short_mean": "thân thiện, cởi mở",
    "mean": "Hòa đồng và dễ mến với mọi người.",
    "en_ex": "Our new neighbor is extremely friendly and helpful.",
    "vi_ex": "Người hàng xóm mới của chúng tôi cực kỳ thân thiện và hay giúp đỡ."
  },
  {
    "answer": "unfriendly",
    "short_mean": "không thân thiện, lạnh lùng",
    "mean": "Khó gần và thiếu sự niềm nở.",
    "en_ex": "The receptionist gave an unfriendly look to visitors.",
    "vi_ex": "Nhân viên lễ tân trao một ánh nhìn không thân thiện với khách tham quan."
  },
  {
    "answer": "talkative",
    "short_mean": "hay nói, thích trò chuyện",
    "mean": "Thích nói chuyện nhiều.",
    "en_ex": "My classmate is very talkative during break time.",
    "vi_ex": "Bạn cùng lớp của tôi rất hay nói trong giờ giải lao."
  },
  {
    "answer": "enthusiastic",
    "short_mean": "hăng hái, nhiệt tình",
    "mean": "Tràn đầy nhiệt huyết và sự hứng thú.",
    "en_ex": "The team gave an enthusiastic response to the new proposal.",
    "vi_ex": "Cả đội đã có phản hồi hăng hái với đề xuất mới."
  },
  {
    "answer": "serious",
    "short_mean": "nghiêm túc, đứng đắn",
    "mean": "Cẩn trọng và không đùa giỡn vô cớ.",
    "en_ex": "He has a serious expression when working.",
    "vi_ex": "Anh ấy có biểu cảm nghiêm túc khi làm việc."
  },
  {
    "answer": "assertive",
    "short_mean": "quả quyết, quyết đoán",
    "mean": "Tự tin khẳng định ý kiến mà không rụt rè.",
    "en_ex": "An assertive leader communicates goals clearly.",
    "vi_ex": "Một nhà lãnh đạo quả quyết giao tiếp các mục tiêu một cách rõ ràng."
  },
  {
    "answer": "critical",
    "short_mean": "hay phê bình, khắt khe",
    "mean": "Thường chỉ ra khuyết điểm của người khác.",
    "en_ex": "Don't be too critical of your own mistakes.",
    "vi_ex": "Đừng quá khắt khe với những sai lầm của chính mình."
  },
  {
    "answer": "caring",
    "short_mean": "chu đáo, biết quan tâm",
    "mean": "Thể hiện lòng tốt và sự săn sóc người khác.",
    "en_ex": "She is a caring nurse who looks after patients attentively.",
    "vi_ex": "Cô ấy là một y tá chu đáo, chăm sóc bệnh nhân rất tận tình."
  },
  {
    "answer": "sensitive",
    "short_mean": "nhạy cảm, dễ xúc động",
    "mean": "Dễ bị tổn thương hoặc đồng cảm sâu sắc.",
    "en_ex": "He is sensitive to criticism from others.",
    "vi_ex": "Anh ấy nhạy cảm với những lời phê bình từ người khác."
  },
  {
    "answer": "insensitive",
    "short_mean": "vô cảm, thiếu tinh tế",
    "mean": "Không quan tâm đến cảm xúc của người khác.",
    "en_ex": "Making fun of his injury was insensitive.",
    "vi_ex": "Trêu chọc chấn thương của anh ấy là hành động vô cảm."
  },
  {
    "answer": "reasonable",
    "short_mean": "biết điều, hợp lý",
    "mean": "Lắng nghe lý lẽ và có cách cư xử đúng đắn.",
    "en_ex": "He listened to both sides and gave a reasonable solution.",
    "vi_ex": "Anh ấy đã lắng nghe cả hai phía và đưa ra giải pháp hợp lý."
  },
  {
    "answer": "unreasonable",
    "short_mean": "vô lý, ngang ngược",
    "mean": "Đưa ra yêu cầu không chấp nhận được.",
    "en_ex": "Demanding overtime without pay is unreasonable.",
    "vi_ex": "Yêu cầu làm thêm giờ không trả lương là điều vô lý."
  },
  {
    "answer": "kind",
    "short_mean": "tốt bụng, nhân hậu",
    "mean": "Sẵn lòng giúp đỡ người khác với lòng tốt.",
    "en_ex": "It was kind of her to offer me a ride home.",
    "vi_ex": "Cô ấy thật tốt bụng khi đề nghị cho tôi đi nhờ xe về nhà."
  },
  {
    "answer": "unkind",
    "short_mean": "tàn nhẫn, không tốt bụng",
    "mean": "Cư xử thiếu lòng tốt gây tổn thương.",
    "en_ex": "It is unkind to exclude someone from the group.",
    "vi_ex": "Loại ai đó ra khỏi nhóm là một hành động tàn nhẫn."
  },
  {
    "answer": "secretive",
    "short_mean": "kín kẽ, hay giấu giếm",
    "mean": "Ít chia sẻ thông tin cá nhân với người khác.",
    "en_ex": "He was secretive about his travel plans.",
    "vi_ex": "Anh ấy rất kín kẽ về các kế hoạch du lịch của mình."
  },
  {
    "answer": "mature",
    "short_mean": "chín chắn, trưởng thành",
    "mean": "Suy nghĩ và hành động như người lớn chín chắn.",
    "en_ex": "She handled the conflict in a mature manner.",
    "vi_ex": "Cô ấy đã xử lý xung đột theo một cách thức chín chắn."
  },
  {
    "answer": "immature",
    "short_mean": "trẻ con, chưa trưởng thành",
    "mean": "Hành xử bốc đồng như trẻ nhỏ.",
    "en_ex": "Laughing during serious meetings is immature behavior.",
    "vi_ex": "Cười đùa trong các cuộc họp nghiêm túc là hành vi trẻ con."
  },
  {
    "answer": "cautious",
    "short_mean": "thận trọng, cẩn giác",
    "mean": "Suy tính cẩn thận trước khi hành động để tránh rủi ro.",
    "en_ex": "Investors should be cautious when entering new markets.",
    "vi_ex": "Các nhà đầu tư nên thận trọng khi thâm nhập các thị trường mới."
  },
  {
    "answer": "generous",
    "short_mean": "hào phóng, rộng lượng",
    "mean": "Sẵn sàng chia sẻ tiền bạc, quà tặng cho người khác.",
    "en_ex": "He made a generous donation to the charity fund.",
    "vi_ex": "Anh ấy đã quyên góp một khoản hào phóng cho quỹ từ thiện."
  },
  {
    "answer": "mean",
    "short_mean": "keo kiệt, chơi xấu",
    "mean": "Bủn xỉn tiền bạc hoặc xử xấu với người khác.",
    "en_ex": "Don't be mean to your younger brother.",
    "vi_ex": "Đừng đối xử tệ bạc với em trai của bạn."
  },
  {
    "answer": "brave",
    "short_mean": "dũng cảm",
    "mean": "Không sợ hãi đối mặt với nguy hiểm hay khó khăn.",
    "en_ex": "The brave firefighter rescued the cat from the tree.",
    "vi_ex": "Người lính chữa cháy dũng cảm đã giải cứu con mèo khỏi cây."
  },
  {
    "answer": "funny",
    "short_mean": "hài hước, vui tính",
    "mean": "Giúp người khác bật cười vui vẻ.",
    "en_ex": "He told a funny joke that made everyone laugh.",
    "vi_ex": "Anh ấy kể một câu đùa hài hước làm mọi người bật cười."
  },
  {
    "answer": "patient",
    "short_mean": "kiên nhẫn",
    "mean": "Khả năng chờ đợi không nóng vội.",
    "en_ex": "A good teacher is patient with slow learners.",
    "vi_ex": "Một giáo viên giỏi luôn kiên nhẫn với học sinh tiếp thu chậm."
  },
  {
    "answer": "impatient",
    "short_mean": "nóng vội, thiếu kiên nhẫn",
    "mean": "Dễ nổi giận khi phải chờ đợi.",
    "en_ex": "He got impatient standing in the long queue.",
    "vi_ex": "Anh ấy trở nên nóng vội khi đứng trong hàng chờ dài."
  },
  {
    "answer": "lazy",
    "short_mean": "lười biếng",
    "mean": "Không thích vận động làm việc.",
    "en_ex": "Don't be lazy; finish your assignments today.",
    "vi_ex": "Đừng lười biếng; hãy hoàn thành các bài tập của bạn hôm nay."
  },
  {
    "answer": "laid-back",
    "short_mean": "thong thả, thư thái",
    "mean": "Thái độ sống bình tĩnh không lo âu căng thẳng.",
    "en_ex": "He has a laid-back attitude toward work deadlines.",
    "vi_ex": "Anh ấy có thái độ thong thả đối với các hạn chót công việc."
  },
  {
    "answer": "optimistic",
    "short_mean": "lạc quan",
    "mean": "Luôn nhìn vào mặt tích cực của cuộc sống.",
    "en_ex": "She remains optimistic despite the current challenges.",
    "vi_ex": "Cô ấy vẫn luôn lạc quan bất chấp những thách thức hiện tại."
  },
  {
    "answer": "outgoing",
    "short_mean": "hướng ngoại, cởi mở",
    "mean": "Thích gặp gỡ và giao lưu xã hội với mọi người.",
    "en_ex": "An outgoing person makes friends easily.",
    "vi_ex": "Một người hướng ngoại kết bạn một cách dễ dàng."
  },
  {
    "answer": "passionate",
    "short_mean": "đam mê, nhiệt huyết",
    "mean": "Dành tình yêu và tâm huyết lớn cho điều gì đó.",
    "en_ex": "She is passionate about environmental protection.",
    "vi_ex": "Cô ấy rất đam mê việc bảo vệ môi trường."
  },
  {
    "answer": "polite",
    "short_mean": "lịch sự, có lễ độ",
    "mean": "Cư xử đúng mực kính trên nhường dưới.",
    "en_ex": "It is polite to say thank you when receiving help.",
    "vi_ex": "Nói lời cảm ơn khi nhận sự giúp đỡ là hành động lịch sự."
  },
  {
    "answer": "rude",
    "short_mean": "bất lịch sự, vô lễ",
    "mean": "Thiếu tôn trọng người khác.",
    "en_ex": "Interrupting someone while speaking is rude.",
    "vi_ex": "Ngắt lời ai đó khi họ đang nói là bất lịch sự."
  },
  {
    "answer": "shy",
    "short_mean": "nhút nhát, e ấp",
    "mean": "Cảm thấy rụt rè ngượng ngùng khi gặp người lạ.",
    "en_ex": "The shy boy hid behind his mother.",
    "vi_ex": "Cậu bé nhút nhát trốn đằng sau mẹ."
  },
  {
    "answer": "intelligent",
    "short_mean": "thông minh, trí tuệ",
    "mean": "Khả năng tư duy nắm bắt kiến thức nhanh chóng.",
    "en_ex": "She solved the difficult math puzzle intelligently.",
    "vi_ex": "Cô ấy đã giải câu đố toán học khó một cách thông minh."
  },
  {
    "answer": "nervous",
    "short_mean": "hồi hộp, lo âu",
    "mean": "Cảm giác lo lắng trước sự kiện quan trọng.",
    "en_ex": "He felt nervous before stepping onto the stage.",
    "vi_ex": "Anh ấy cảm thấy hồi hộp trước khi bước ra sân khấu."
  },
  {
    "answer": "silly",
    "short_mean": "ngốc nghếch, ngớ ngẩn",
    "mean": "Đùa ngốc nghếch mang tính giải trí hoặc thiếu suy nghĩ.",
    "en_ex": "Don't make silly mistakes on your test paper.",
    "vi_ex": "Đừng mắc phải những lỗi ngớ ngẩn trong bài thi của bạn."
  },
  {
    "answer": "selfish",
    "short_mean": "ích kỷ",
    "mean": "Chỉ nghĩ đến lợi ích bản thân mà bỏ qua người khác.",
    "en_ex": "Refusing to share food was a selfish act.",
    "vi_ex": "Từ chối chia sẻ thức ăn là một hành động ích kỷ."
  },
  {
    "answer": "eccentric",
    "short_mean": "kỳ dị, lập dị",
    "mean": "Có thói quen phong cách khác người độc đáo.",
    "en_ex": "The eccentric artist wore mismatched shoes.",
    "vi_ex": "Họa sĩ lập dị đi đôi giày không ăn khớp nhau."
  },
  {
    "answer": "calm",
    "short_mean": "bình tĩnh, điềm tĩnh",
    "mean": "Giữ được sự điềm đạm trước biến cố.",
    "en_ex": "Stay calm during an emergency situation.",
    "vi_ex": "Hãy giữ bình tĩnh trong tình huống khẩn cấp."
  },
  {
    "answer": "confident",
    "short_mean": "tự tin",
    "mean": "Tin tưởng vào năng lực của bản thân.",
    "en_ex": "She feels confident about her interview performance.",
    "vi_ex": "Cô ấy cảm thấy tự tin về phần thể hiện phỏng vấn của mình."
  },
  {
    "answer": "honest",
    "short_mean": "trung thực, thật thà",
    "mean": "Nói thật và không gian dối.",
    "en_ex": "He was honest about losing the company keys.",
    "vi_ex": "Anh ấy đã trung thực về việc làm mất chìa khóa công ty."
  },
  {
    "answer": "dishonest",
    "short_mean": "dối trá, gian lận",
    "mean": "Không trung thực, gian dối.",
    "en_ex": "Cheating on exams is dishonest behavior.",
    "vi_ex": "Gian lận trong thi cử là hành vi dối trá."
  },
  {
    "answer": "supportive",
    "short_mean": "luôn ủng hộ, động viên",
    "mean": "Sẵn sàng hỗ trợ khích lệ người khác.",
    "en_ex": "Her parents are very supportive of her music career.",
    "vi_ex": "Cha mẹ cô ấy rất ủng hộ sự nghiệp âm nhạc của cô."
  },
  {
    "answer": "reliable",
    "short_mean": "đáng tin cậy",
    "mean": "Luôn hoàn thành lời hứa và nhiệm vụ.",
    "en_ex": "She is a reliable assistant who never forgets a task.",
    "vi_ex": "Cô ấy là một trợ lý đáng tin cậy, không bao giờ quên nhiệm vụ."
  },
  {
    "answer": "unreliable",
    "short_mean": "không đáng tin cậy",
    "mean": "Thường xuyên nuốt lời hoặc trễ hạn.",
    "en_ex": "An unreliable bus service frustrated commuters.",
    "vi_ex": "Một dịch vụ xe buýt không đáng tin cậy làm người đi làm thất vọng."
  },
  {
    "answer": "talented",
    "short_mean": "tài năng, có năng khiếu",
    "mean": "Sở hữu khả năng thiên bẩm xuất sắc.",
    "en_ex": "The young pianist is exceptionally talented.",
    "vi_ex": "Nghệ sĩ piano trẻ tuổi tài năng một cách kiệt xuất."
  },
  {
    "answer": "arrogant",
    "short_mean": "kiêu ngạo, ngạo mạn",
    "mean": "Tự cao coi thường người khác.",
    "en_ex": "His arrogant attitude made him unpopular with colleagues.",
    "vi_ex": "Thái độ kiêu ngạo của anh ấy khiến anh ấy không được đồng nghiệp ưa thích."
  },
  {
    "answer": "considerate",
    "short_mean": "tinh tế, hay nghĩ cho người khác",
    "mean": "Để ý và tinh tế quan tâm đến nhu cầu người xung quanh.",
    "en_ex": "It was considerate of him to lower his voice while I slept.",
    "vi_ex": "Thật tinh tế khi anh ấy hạ giọng xuống trong lúc tôi ngủ."
  },
  {
    "answer": "impulsive",
    "short_mean": "bốc đồng, hấp tấp",
    "mean": "Hành động theo cảm xúc nhất thời không suy tính.",
    "en_ex": "Buying expensive gadgets on impulse can lead to debt.",
    "vi_ex": "Mua đồ công nghệ đắt tiền một cách bốc đồng có thể dẫn đến nợ nần."
  },
  {
    "answer": "approachable",
    "short_mean": "dễ gần, dễ tiếp cận",
    "mean": "Tạo cảm giác thoải mái cho người khác đến bắt chuyện.",
    "en_ex": "The manager is friendly and approachable.",
    "vi_ex": "Quản lý rất thân thiện và dễ gần."
  },
  {
    "answer": "unapproachable",
    "short_mean": "khó gần, ngần ngại tiếp xúc",
    "mean": "Tạo khoảng cách khiến người khác e ngại.",
    "en_ex": "His stern face makes him look unapproachable.",
    "vi_ex": "Khuôn mặt nghiêm nghị khiến anh ấy trông có vẻ khó gần."
  }
];
