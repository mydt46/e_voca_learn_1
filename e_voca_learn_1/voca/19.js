const VOCA_WORDS = [
  {
    "answer": "calm",
    "short_mean": "bình tĩnh, thanh thản",
    "mean": "Trạng thái tâm trí yên bình không lo âu.",
    "en_ex": "Deep breathing helps you stay calm under pressure.",
    "vi_ex": "Hít thở sâu giúp bạn giữ bình tĩnh dưới áp lực."
  },
  {
    "answer": "relaxed",
    "short_mean": "thư thái, thoải mái",
    "mean": "Cảm giác thả lỏng cơ thể và tâm trí.",
    "en_ex": "I felt completely relaxed after the spa treatment.",
    "vi_ex": "Tôi cảm thấy hoàn toàn thư thái sau liệu trình spa."
  },
  {
    "answer": "pleased",
    "short_mean": "hài lòng, vừa ý",
    "mean": "Cảm thấy vui sướng vì kết quả tốt.",
    "en_ex": "The boss was pleased with our project presentation.",
    "vi_ex": "Sếp rất hài lòng với phần trình bày dự án của chúng tôi."
  },
  {
    "answer": "cheerful",
    "short_mean": "vui vẻ, phấn khởi",
    "mean": "Tràn đầy tinh thần vui tươi và nụ cười.",
    "en_ex": "Her cheerful smile brightened up the whole office.",
    "vi_ex": "Nụ cười rạng rỡ của cô ấy làm bừng sáng cả văn phòng."
  },
  {
    "answer": "happy",
    "short_mean": "hạnh phúc, vui sướng",
    "mean": "Cảm xúc thoả nguyện và niềm vui lớn.",
    "en_ex": "They celebrated their happy wedding anniversary.",
    "vi_ex": "Họ đã kỷ niệm ngày cưới hạnh phúc của mình."
  },
  {
    "answer": "delighted",
    "short_mean": "vui mừng khôn siết",
    "mean": "Rất vui sướng trước điều may mắn.",
    "en_ex": "She was delighted to receive the award.",
    "vi_ex": "Cô ấy rất vui mừng khôn siết khi nhận được giải thưởng."
  },
  {
    "answer": "ecstatic",
    "short_mean": "vô cùng ngây ngất",
    "mean": "Trạng thái sung sướng tột độ.",
    "en_ex": "Fans were ecstatic when their team won the championship.",
    "vi_ex": "Người hâm mộ vô cùng ngây ngất khi đội bóng của họ vô địch."
  },
  {
    "answer": "grateful",
    "short_mean": "biết ơn",
    "mean": "Cảm thấy trân trọng lòng tốt của người khác.",
    "en_ex": "I am grateful for your kind assistance.",
    "vi_ex": "Tôi rất biết ơn sự giúp đỡ chân thành của bạn."
  },
  {
    "answer": "lucky",
    "short_mean": "may mắn",
    "mean": "Gặp được vận may tốt lành.",
    "en_ex": "He felt lucky to escape the accident unharmed.",
    "vi_ex": "Anh ấy cảm thấy may mắn khi thoát khỏi tai nạn mà không bị thương."
  },
  {
    "answer": "amused",
    "short_mean": "thích thú, buồn cười",
    "mean": "Cảm thấy buồn cười thích thú trước trò đùa.",
    "en_ex": "The audience was amused by the clever comedy skit.",
    "vi_ex": "Khán giả cảm thấy thích thú trước tiểu phẩm hài thông minh."
  },
  {
    "answer": "interested",
    "short_mean": "quan tâm, hứng thú",
    "mean": "Muốn tìm hiểu thêm về một chủ đề.",
    "en_ex": "She is interested in learning foreign languages.",
    "vi_ex": "Cô ấy hứng thú với việc học các ngôn ngữ nước ngoài."
  },
  {
    "answer": "curious",
    "short_mean": "hiếu kỳ, tò mò",
    "mean": "Khao khát muốn biết hoặc tìm hiểu điều gì.",
    "en_ex": "Children are naturally curious about the world.",
    "vi_ex": "Trẻ em theo bản năng rất tò mò về thế giới."
  },
  {
    "answer": "intrigued",
    "short_mean": "bị hấp dẫn, tò mò sâu sắc",
    "mean": "Bị thu hút mạnh mẽ bởi sự bí ẩn.",
    "en_ex": "Scientists were intrigued by the unusual signal.",
    "vi_ex": "Các nhà khoa học bị hấp dẫn bởi tín hiệu bất thường."
  },
  {
    "answer": "surprised",
    "short_mean": "ngạc nhiên, bất ngờ",
    "mean": "Cảm giác bất ngờ khi điều không ngờ tới xảy ra.",
    "en_ex": "She was surprised by the sudden birthday party.",
    "vi_ex": "Cô ấy rất ngạc nhiên trước tiệc sinh nhật bất ngờ."
  },
  {
    "answer": "shocked",
    "short_mean": "sốc, sửng sốt",
    "mean": "Bị chấn động tâm lý trước tin xấu.",
    "en_ex": "He was shocked by the tragic news.",
    "vi_ex": "Anh ấy bị sốc trước tin tức thảm thương."
  },
  {
    "answer": "excited",
    "short_mean": "phấn khích, nôn nao",
    "mean": "Cảm xúc háo hức chờ đợi điều vui vẻ.",
    "en_ex": "Kids are excited about going to Disneyland.",
    "vi_ex": "Trẻ em rất phấn khích khi được đi chơi Disneyland."
  },
  {
    "answer": "thrilled",
    "short_mean": "vui sướng ly kỳ",
    "mean": "Cực kỳ hào hứng và sung sướng.",
    "en_ex": "She was thrilled to land her dream job.",
    "vi_ex": "Cô ấy vô cùng vui sướng khi có được công việc mơ ước."
  },
  {
    "answer": "amazed",
    "short_mean": "kinh ngạc, sửng sốt tuyệt vời",
    "mean": "Cảm thấy ngạc nhiên khâm phục.",
    "en_ex": "We were amazed by the magician's tricks.",
    "vi_ex": "Chúng tôi kinh ngạc trước các màn ảo thuật."
  },
  {
    "answer": "confident",
    "short_mean": "tự tin",
    "mean": "Tin tưởng vững chắc vào bản thân.",
    "en_ex": "He walked onto the stage feeling confident.",
    "vi_ex": "Anh ấy bước ra sân khấu với cảm giác tự tin."
  },
  {
    "answer": "proud",
    "short_mean": "tự hào, hãnh diện",
    "mean": "Hãnh diện về thành quả của mình hoặc người thân.",
    "en_ex": "Parents are proud of their children's achievements.",
    "vi_ex": "Cha mẹ tự hào về những thành tựu của con cái."
  },
  {
    "answer": "sad",
    "short_mean": "buồn rầu",
    "mean": "Cảm xúc u buồn không vui.",
    "en_ex": "She felt sad after saying goodbye to her friend.",
    "vi_ex": "Cô ấy cảm thấy buồn sau khi nói lời tạm biệt bạn mình."
  },
  {
    "answer": "unhappy",
    "short_mean": "không hạnh phúc, thất vọng",
    "mean": "Trạng thái không hài lòng với cuộc sống.",
    "en_ex": "He was unhappy with his low test score.",
    "vi_ex": "Anh ấy không hạnh phúc với điểm kiểm tra thấp của mình."
  },
  {
    "answer": "upset",
    "short_mean": "bực bội, phật lòng",
    "mean": "Cảm giác mệt mỏi buồn phiền vì bị tác động.",
    "en_ex": "Don't get upset over minor mistakes.",
    "vi_ex": "Đừng quá bực bội vì những lỗi nhỏ."
  },
  {
    "answer": "miserable",
    "short_mean": "khổ sở, thương hại",
    "mean": "Rất buồn rầu và thiếu thốn hạnh phúc.",
    "en_ex": "He felt miserable lying in bed with flu.",
    "vi_ex": "Anh ấy cảm thấy khổ sở khi nằm trên giường bệnh cúm."
  },
  {
    "answer": "depressed",
    "short_mean": "chán nản, trầm cảm",
    "mean": "Tuyệt vọng u ủ mạn tính.",
    "en_ex": "Continuous stress made him feel depressed.",
    "vi_ex": "Căng thẳng kéo dài khiến anh ấy cảm thấy trầm cảm."
  },
  {
    "answer": "lonely",
    "short_mean": "cô đơn, cô độc",
    "mean": "Cảm giác một mình thiếu bạn bè.",
    "en_ex": "He felt lonely moving to a new city alone.",
    "vi_ex": "Anh ấy cảm thấy cô đơn khi chuyển đến thành phố mới một mình."
  },
  {
    "answer": "disappointed",
    "short_mean": "thất vọng",
    "mean": "Hụt hẫng vì không đạt được như kỳ vọng.",
    "en_ex": "She was disappointed with the canceled flight.",
    "vi_ex": "Cô ấy thất vọng vì chuyến bay bị hủy."
  },
  {
    "answer": "unimpressed",
    "short_mean": "không ấn tượng",
    "mean": "Không thấy có gì đặc sắc.",
    "en_ex": "Critics were unimpressed by the sequel movie.",
    "vi_ex": "Giới phê bình không ấn tượng với phần phim tiếp theo."
  },
  {
    "answer": "unenthusiastic",
    "short_mean": "thiếu nhiệt tình, uể oải",
    "mean": "Không hề có hứng thú hay nhiệt huyết.",
    "en_ex": "He gave an unenthusiastic nod to the idea.",
    "vi_ex": "Anh ấy gật đầu uể oải trước ý tưởng này."
  },
  {
    "answer": "disgusted",
    "short_mean": "kinh tởm, ghê tởm",
    "mean": "Bất bình phản cảm mạnh mẽ.",
    "en_ex": "They were disgusted by the messy condition of the room.",
    "vi_ex": "Họ kinh tởm tình trạng bừa bộn của căn phòng."
  },
  {
    "answer": "angry/mad",
    "short_mean": "tức giận, phát điên",
    "mean": "Cảm xúc bực tức bùng nổ.",
    "en_ex": "He was angry because his car was scratched.",
    "vi_ex": "Anh ấy tức giận vì xe của anh ấy bị trầy xước."
  },
  {
    "answer": "furious",
    "short_mean": "giận dữ cuồng bạo",
    "mean": "Tức giận ở mức độ cực kỳ dữ dội.",
    "en_ex": "She was furious when she discovered the lie.",
    "vi_ex": "Cô ấy giận dữ cuồng bạo khi phát hiện ra lời nói dối."
  },
  {
    "answer": "frustrated",
    "short_mean": "bế tắc, ức chế",
    "mean": "Bực bội vì bị cản trở không thể hoàn thành.",
    "en_ex": "He felt frustrated when the computer crashed again.",
    "vi_ex": "Anh ấy cảm thấy bế tắc ức chế khi máy tính lại bị sập."
  },
  {
    "answer": "annoyed",
    "short_mean": "bực mình",
    "mean": "Khó chịu nhẹ vì bị quấy rầy.",
    "en_ex": "She was annoyed by the constant noise outside.",
    "vi_ex": "Cô ấy bực mình vì tiếng ồn liên tục bên ngoài."
  },
  {
    "answer": "irritated",
    "short_mean": "bực bội, phát cáu",
    "mean": "Khó chịu tột cùng vì bị làm phiền.",
    "en_ex": "His slow response made her irritated.",
    "vi_ex": "Phản hồi chậm chạp của anh ấy khiến cô ấy phát cáu."
  },
  {
    "answer": "scared",
    "short_mean": "sợ hãi",
    "mean": "Cảm thấy e sợ mối đe dọa.",
    "en_ex": "The child was scared of the dark room.",
    "vi_ex": "Đứa trẻ sợ hãi căn phòng tối."
  },
  {
    "answer": "frightened",
    "short_mean": "hoảng sợ",
    "mean": "Bị dọa cho khiếp sợ.",
    "en_ex": "The loud explosion frightened the animals.",
    "vi_ex": "Vụ nổ lớn làm các con vật hoảng sợ."
  },
  {
    "answer": "terrified",
    "short_mean": "khiếp sợ tột cùng",
    "mean": "Sợ hãi ở mức tột độ.",
    "en_ex": "She is terrified of spiders.",
    "vi_ex": "Cô ấy khiếp sợ nhện tột cùng."
  },
  {
    "answer": "worried",
    "short_mean": "lo lắng",
    "mean": "Trăn trở về điều xấu có thể xảy ra.",
    "en_ex": "Parents are worried about their child's health.",
    "vi_ex": "Cha mẹ lo lắng về sức khỏe của con cái."
  },
  {
    "answer": "anxious",
    "short_mean": "bồn chồn, lo âu",
    "mean": "Nửa lo lắng nửa bất an.",
    "en_ex": "He felt anxious before taking the final exam.",
    "vi_ex": "Anh ấy cảm thấy bồn chồn lo âu trước khi bước vào kỳ thi kỳ cuối."
  },
  {
    "answer": "nervous",
    "short_mean": "hồi hộp",
    "mean": "Lo lắng tim đập nhanh trước giờ G.",
    "en_ex": "Speaking in public makes me feel nervous.",
    "vi_ex": "Phát biểu trước công chúng khiến tôi cảm thấy hồi hộp."
  },
  {
    "answer": "stressed",
    "short_mean": "bị căng thẳng, áp lực",
    "mean": "Mệt mỏi áp lực quá tải.",
    "en_ex": "He felt stressed due to heavy workload.",
    "vi_ex": "Anh ấy cảm thấy bị căng thẳng vì khối lượng công việc nặng nề."
  },
  {
    "answer": "jealous",
    "short_mean": "ghen tị, đố kỵ",
    "mean": "Thèm muốn sự may mắn/thành công của người khác.",
    "en_ex": "He was jealous of his friend's new car.",
    "vi_ex": "Anh ấy ghen tị với chiếc ô tô mới của bạn mình."
  },
  {
    "answer": "embarrassed",
    "short_mean": "ngượng ngùng, xấu hổ",
    "mean": "Ngượng ngùng vì phạm lỗi trước mặt nhiều người.",
    "en_ex": "She felt embarrassed when she spilled coffee on her dress.",
    "vi_ex": "Cô ấy cảm thấy ngượng ngùng khi làm đổ cà phê lên chiếc váy của mình."
  },
  {
    "answer": "confused",
    "short_mean": "bối rối, hoang mang",
    "mean": "Không hiểu rõ tình huống hoặc hướng giải quyết.",
    "en_ex": "He was confused by the complicated instructions.",
    "vi_ex": "Anh ấy bối rối trước những hướng dẫn phức tạp."
  },
  {
    "answer": "tired",
    "short_mean": "mệt mỏi",
    "mean": "Thiếu năng lượng cần nghỉ ngơi.",
    "en_ex": "I am tired after working all day.",
    "vi_ex": "Tôi mệt mỏi sau khi làm việc cả ngày."
  },
  {
    "answer": "exhausted",
    "short_mean": "kiệt sức",
    "mean": "Mệt mỏi tột cùng không còn sức lực.",
    "en_ex": "Marathon runners were exhausted after crossing the finish line.",
    "vi_ex": "Các vận động viên chạy marathon đã kiệt sức sau khi vượt qua vạch đích."
  },
  {
    "answer": "bored",
    "short_mean": "chán nản",
    "mean": "Cảm giác tẻ nhạt không có gì làm.",
    "en_ex": "Kids get bored quickly during rainy days.",
    "vi_ex": "Trẻ em bị chán nản nhanh chóng trong những ngày mưa."
  },
  {
    "answer": "distracted",
    "short_mean": "xao nhãng, mất tập trung",
    "mean": "Không thể tập trung vào công việc.",
    "en_ex": "Noise outside kept him distracted from reading.",
    "vi_ex": "Tiếng ồn bên ngoài khiến anh ấy bị xao nhãng khỏi việc đọc sách."
  },
  {
    "answer": "serious",
    "short_mean": "nghiêm trọng, trầm trọng",
    "mean": "Mang tính chất quan trọng đáng ngại.",
    "en_ex": "He had a serious conversation with his doctor.",
    "vi_ex": "Anh ấy đã có một cuộc trò chuyện nghiêm trọng với bác sĩ của mình."
  }
];
