const VOCA_WORDS = [
  {
    "answer": "nice",
    "short_mean": "tốt, đẹp, dễ thương",
    "mean": "Mang lại cảm giác dễ chịu, tử tế.",
    "en_ex": "It was very nice of you to help me with the luggage.",
    "vi_ex": "Bạn thật tốt bụng khi giúp tôi xách hành lý."
  },
  {
    "answer": "fun",
    "short_mean": "vui vẻ, thú vị",
    "mean": "Mang lại cảm giác giải trí, sảng khoái.",
    "en_ex": "Playing board games with family is always fun.",
    "vi_ex": "Chơi các trò chơi bàn cờ cùng gia đình luôn luôn vui vẻ."
  },
  {
    "answer": "lovely",
    "short_mean": "đáng yêu, tuyệt vời",
    "mean": "Gây ấn tượng đẹp đẽ, ngọt ngào.",
    "en_ex": "We had a lovely evening walk along the beach.",
    "vi_ex": "Chúng tôi đã có một buổi tối đi dạo tuyệt vời dọc bãi biển."
  },
  {
    "answer": "delicious",
    "short_mean": "thơm ngon (đồ ăn)",
    "mean": "Có hương vị rất ngon miệng.",
    "en_ex": "The chef prepared a delicious seafood dinner.",
    "vi_ex": "Đầu bếp đã chuẩn bị một bữa tối hải sản ngon tuyệt."
  },
  {
    "answer": "exciting",
    "short_mean": "hào hứng, sôi động",
    "mean": "Gây cảm giác phấn khích và thích thú.",
    "en_ex": "Watching the final match was an exciting experience.",
    "vi_ex": "Xem trận đấu chung kết là một trải nghiệm hào hứng."
  },
  {
    "answer": "thrilling",
    "short_mean": "kịch tính, hồi hộp",
    "mean": "Gây cảm giác cực kỳ hồi hộp và ly kỳ.",
    "en_ex": "Riding the roller coaster was a thrilling adventure.",
    "vi_ex": "Đi tàu siêu tốc là một cuộc phiêu lưu kịch tính."
  },
  {
    "answer": "interesting",
    "short_mean": "thú vị, lôi cuốn",
    "mean": "Thu hút sự chú ý và tò mò.",
    "en_ex": "This book contains many interesting historical facts.",
    "vi_ex": "Cuốn sách này chứa nhiều sự thật lịch sử thú vị."
  },
  {
    "answer": "respectable",
    "short_mean": "đáng kính, đứng đắn",
    "mean": "Được xã hội tôn trọng và công nhận.",
    "en_ex": "He holds a respectable position in the community.",
    "vi_ex": "Anh ấy nắm giữ một vị trí đáng kính trong cộng đồng."
  },
  {
    "answer": "special",
    "short_mean": "đặc biệt",
    "mean": "Khác biệt với thông thường và có giá trị riêng.",
    "en_ex": "She prepared a special gift for her mother's birthday.",
    "vi_ex": "Cô ấy đã chuẩn bị một món quà đặc biệt cho sinh nhật của mẹ."
  },
  {
    "answer": "graceful",
    "short_mean": "duyên dáng, thanh thoát",
    "mean": "Di chuyển nhẹ nhàng, uyển chuyển.",
    "en_ex": "The ballet dancer performed graceful movements on stage.",
    "vi_ex": "Vũ công ba-lê thể hiện những động tác duyên dáng trên sân khấu."
  },
  {
    "answer": "pleasant",
    "short_mean": "dễ chịu, êm đềm",
    "mean": "Mang lại cảm giác thoải mái và hài lòng.",
    "en_ex": "We enjoyed a pleasant conversation over tea.",
    "vi_ex": "Chúng tôi đã tận hưởng một cuộc trò chuyện dễ chịu bên tách trà."
  },
  {
    "answer": "useful",
    "short_mean": "hữu ích, bổ ích",
    "mean": "Giúp ích nhiều trong thực tế.",
    "en_ex": "A smartphone is a very useful tool for daily tasks.",
    "vi_ex": "Điện thoại thông minh là một công cụ rất hữu ích cho công việc hằng ngày."
  },
  {
    "answer": "important",
    "short_mean": "quan trọng",
    "mean": "Có giá trị hoặc ảnh hưởng lớn.",
    "en_ex": "It is important to get enough sleep every night.",
    "vi_ex": "Giữ giấc ngủ đầy đủ mỗi đêm là điều quan trọng."
  },
  {
    "answer": "relaxing",
    "short_mean": "thư giãn",
    "mean": "Giúp giảm bớt mệt mỏi và căng thẳng.",
    "en_ex": "Listening to classical music is very relaxing.",
    "vi_ex": "Nghe nhạc cổ điển mang lại cảm giác rất thư giãn."
  },
  {
    "answer": "harmless",
    "short_mean": "vô hại",
    "mean": "Không gây tổn hại hay nguy hiểm.",
    "en_ex": "Don't worry; that small garter snake is harmless.",
    "vi_ex": "Đừng lo; con rắn nhỏ đó hoàn toàn vô hại."
  },
  {
    "answer": "frightening",
    "short_mean": "đáng sợ, hãi hùng",
    "mean": "Gây nên cảm giác hoảng sợ.",
    "en_ex": "The loud thunder was frightening to the young kids.",
    "vi_ex": "Tiếng sấm vang lớn thật đáng sợ đối với các em nhỏ."
  },
  {
    "answer": "shocking",
    "short_mean": "bàng hoàng, gây sốc",
    "mean": "Gây bất ngờ và ngỡ ngàng tiêu cực.",
    "en_ex": "The news of the accident was shocking to everyone.",
    "vi_ex": "Tin tức về vụ tai nạn gây bàng hoàng cho tất cả mọi người."
  },
  {
    "answer": "irritating",
    "short_mean": "gây bực mình",
    "mean": "Gây cảm giác bực bội và khó chịu nhẹ kéo dài.",
    "en_ex": "The mosquito buzzing sound was extremely irritating.",
    "vi_ex": "Tiếng muỗi vo ve thật vô cùng bực mình."
  },
  {
    "answer": "annoying",
    "short_mean": "phiền phức, làm phiền",
    "mean": "Gây quấy rầy mất tập trung.",
    "en_ex": "Loud phone calls on public transport are annoying.",
    "vi_ex": "Những cuộc điện thoại to tiếng trên xe công cộng thật phiền phức."
  },
  {
    "answer": "horrible",
    "short_mean": "tồi tệ, khủng khiếp",
    "mean": "Rất xấu hoặc cực kỳ khó chịu.",
    "en_ex": "The weather outside was cold and horrible.",
    "vi_ex": "Thời tiết bên ngoài thật lạnh lẽo và tồi tệ."
  },
  {
    "answer": "nasty",
    "short_mean": "xấu xa, kinh đởm",
    "mean": "Xấu tính hoặc có mùi/vị rất khó chịu.",
    "en_ex": "He made a nasty comment about her dress.",
    "vi_ex": "Anh ấy đã đưa ra một lời nhận xét xấu xa về chiếc váy của cô ấy."
  },
  {
    "answer": "old-fashioned",
    "short_mean": "lỗi thời, cổ hổi",
    "mean": "Mang phong cách cũ kỹ không hợp thời đại.",
    "en_ex": "He holds old-fashioned views about fashion.",
    "vi_ex": "Anh ấy có những quan điểm lỗi thời về thời trang."
  },
  {
    "answer": "unpleasant",
    "short_mean": "không dễ chịu, khó ưa",
    "mean": "Gây cảm giác không hài lòng.",
    "en_ex": "The room had an unpleasant chemical smell.",
    "vi_ex": "Căn phòng có một mùi hóa chất không dễ chịu."
  },
  {
    "answer": "disastrous",
    "short_mean": "thảm họa, thất bại thảm hại",
    "mean": "Gây hậu quả vô cùng tồi tệ.",
    "en_ex": "The heavy rain caused a disastrous flood.",
    "vi_ex": "Trận mưa lớn đã gây ra một trận lũ lụt thảm họa."
  },
  {
    "answer": "useless",
    "short_mean": "vô dụng",
    "mean": "Không mang lại hiệu quả hay lợi ích gì.",
    "en_ex": "This broken umbrella is completely useless.",
    "vi_ex": "Chiếc ô bị hỏng này hoàn toàn vô dụng."
  },
  {
    "answer": "stunning",
    "short_mean": "lộng lẫy, làm sững sờ",
    "mean": "Đẹp tới mức khiến người nhìn ngỡ ngàng.",
    "en_ex": "The sunset over the ocean was absolutely stunning.",
    "vi_ex": "Cảnh hoàng hôn trên đại dương đẹp lộng lẫy làm sững sờ."
  },
  {
    "answer": "magnificent",
    "short_mean": "tráng lệ, nguy nga",
    "mean": "Đồ sộ, đẹp đẽ xuất sắc.",
    "en_ex": "The royal palace is a magnificent building.",
    "vi_ex": "Cung điện hoàng gia là một công trình nguy nga tráng lệ."
  },
  {
    "answer": "pretty",
    "short_mean": "xinh đẹp, xinh xắn",
    "mean": "Dễ nhìn và cuốn hút.",
    "en_ex": "She wore a pretty floral dress.",
    "vi_ex": "Cô ấy mặc một chiếc váy hoa xinh xắn."
  },
  {
    "answer": "beautiful",
    "short_mean": "đẹp đẽ, xinh đẹp",
    "mean": "Có vẻ đẹp gây cuốn hút mạnh mẽ.",
    "en_ex": "The countryside looks beautiful in spring.",
    "vi_ex": "Vùng nông thôn trông rất đẹp đẽ vào mùa xuân."
  },
  {
    "answer": "disgusting",
    "short_mean": "kinh tởm, gớm ghiếc",
    "mean": "Gây cảm giác buồn nôn hoặc xua đuổi.",
    "en_ex": "The spoiled milk had a disgusting smell.",
    "vi_ex": "Sữa bị hỏng có một mùi kinh tởm."
  },
  {
    "answer": "boring",
    "short_mean": "nhàm chán, tẻ nhạt",
    "mean": "Không gây được sự hứng thú.",
    "en_ex": "The lecture was so boring that students fell asleep.",
    "vi_ex": "Bài giảng nhàm chán đến mức học sinh ngủ gật."
  },
  {
    "answer": "ugly",
    "short_mean": "xấu xí",
    "mean": "Không có tính thẩm mỹ, trông khó nhìn.",
    "en_ex": "That abandoned house looks old and ugly.",
    "vi_ex": "Ngôi nhà bỏ hoang đó trông cũ kỹ và xấu xí."
  },
  {
    "answer": "strange/odd",
    "short_mean": "kỳ lạ, kỳ quặc",
    "mean": "Khác thường gây ngạc nhiên.",
    "en_ex": "I heard a strange noise in the middle of the night.",
    "vi_ex": "Tôi nghe thấy một tiếng động kỳ lạ vào giữa đêm."
  },
  {
    "answer": "confusing",
    "short_mean": "gây khó hiểu, rối rắm",
    "mean": "Phức tạp làm người khác không hiểu rõ.",
    "en_ex": "The road signs in this city are confusing.",
    "vi_ex": "Các biển chỉ đường ở thành phố này rất khó hiểu."
  },
  {
    "answer": "tiring",
    "short_mean": "gây mệt mỏi",
    "mean": "Làm tiêu hao nhiều sức lực.",
    "en_ex": "Working twelve hours a day is extremely tiring.",
    "vi_ex": "Làm việc mười hai tiếng một ngày cực kỳ gây mệt mỏi."
  },
  {
    "answer": "remarkable",
    "short_mean": "đáng chú ý, phi thường",
    "mean": "Xuất sắc đáng ghi nhận.",
    "en_ex": "She made remarkable progress in learning English.",
    "vi_ex": "Cô ấy đã có sự tiến bộ đáng chú ý trong việc học tiếng Anh."
  },
  {
    "answer": "extraordinary",
    "short_mean": "phi thường, lạ thường",
    "mean": "Vượt xa mức bình thường.",
    "en_ex": "The magician showed an extraordinary talent.",
    "vi_ex": "Nhà ảo thuật đã thể hiện một tài năng phi thường."
  },
  {
    "answer": "breathtaking",
    "short_mean": "đẹp nín thở, ngoạn mục",
    "mean": "Cảnh quan đẹp tuyệt mỹ đến ngỡ ngàng.",
    "en_ex": "The view from the mountain top was breathtaking.",
    "vi_ex": "Tầm nhìn từ đỉnh núi đẹp nín thở."
  },
  {
    "answer": "outstanding",
    "short_mean": "nổi bật, xuất sắc",
    "mean": "Đạt thành tích trội hơn hẳn người khác.",
    "en_ex": "He received an award for his outstanding performance.",
    "vi_ex": "Anh ấy đã nhận được giải thưởng cho màn trình diễn xuất sắc của mình."
  },
  {
    "answer": "wonderful",
    "short_mean": "tuyệt vời",
    "mean": "Mang lại sự vui thích tuyệt đối.",
    "en_ex": "We had a wonderful vacation in Italy.",
    "vi_ex": "Chúng tôi đã có một kỳ nghỉ tuyệt vời ở Ý."
  },
  {
    "answer": "amazing",
    "short_mean": "kinh ngạc, tuyệt diệu",
    "mean": "Gây ấn tượng ngạc nhiên sâu sắc.",
    "en_ex": "The technology advances at an amazing speed.",
    "vi_ex": "Công nghệ tiến bộ với một tốc độ kinh ngạc."
  },
  {
    "answer": "fantastic",
    "short_mean": "cực kỳ tuyệt vời",
    "mean": "Tuyệt hảo không có gì chê.",
    "en_ex": "You did a fantastic job on this project.",
    "vi_ex": "Bạn đã làm một công việc cực kỳ tuyệt vời trong dự án này."
  },
  {
    "answer": "great",
    "short_mean": "rất tốt, tuyệt vời",
    "mean": "Có chất lượng cao hoặc đem lại niềm vui lớn.",
    "en_ex": "That is a great idea for our trip.",
    "vi_ex": "Đó là một ý tưởng rất tuyệt vời cho chuyến đi của chúng ta."
  },
  {
    "answer": "superb",
    "short_mean": "tuyệt hảo, xuất chúng",
    "mean": "Chất lượng hoàn hảo trên cả tuyệt vời.",
    "en_ex": "The hotel provided superb service to all guests.",
    "vi_ex": "Khách sạn cung cấp dịch vụ tuyệt hảo cho tất cả du khách."
  },
  {
    "answer": "brilliant",
    "short_mean": "rực rỡ, thông minh xuất sắc",
    "mean": "Rất tài giỏi hoặc cực kỳ sáng tạo.",
    "en_ex": "The scientist proposed a brilliant solution.",
    "vi_ex": "Nhà khoa học đã đề xuất một giải pháp thông minh xuất sắc."
  },
  {
    "answer": "incredible",
    "short_mean": "đáng kinh ngạc, không thể tin nổi",
    "mean": "Tuyệt vời đến mức khó tin.",
    "en_ex": "The athlete ran at an incredible speed.",
    "vi_ex": "Vận động viên chạy với một tốc độ đáng kinh ngạc."
  },
  {
    "answer": "awful",
    "short_mean": "khiếp đảm, tồi tệ",
    "mean": "Rất dở hoặc tệ hại.",
    "en_ex": "The food tasted awful so we left it untouched.",
    "vi_ex": "Thức ăn có vị tồi tệ nên chúng tôi không hề chạm vào."
  },
  {
    "answer": "mediocre",
    "short_mean": "xoàng xĩnh, tầm thường",
    "mean": "Chất lượng ở mức bình thường không có gì nổi bật.",
    "en_ex": "The movie received mediocre reviews from critics.",
    "vi_ex": "Bộ phim nhận được những lời đánh giá xoàng xĩnh từ các nhà phê bình."
  },
  {
    "answer": "terrible",
    "short_mean": "tồi tệ, thảm hại",
    "mean": "Gây cảm giác rất tệ hại.",
    "en_ex": "I made a terrible mistake in the calculation.",
    "vi_ex": "Tôi đã phạm một sai lầm tồi tệ trong tính toán."
  },
  {
    "answer": "disappointing",
    "short_mean": "gây thất vọng",
    "mean": "Không đạt được kỳ vọng mong đợi.",
    "en_ex": "The test results were disappointing for the student.",
    "vi_ex": "Kết quả kiểm tra gây thất vọng cho học sinh."
  }
];
