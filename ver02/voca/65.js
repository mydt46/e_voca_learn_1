const VOCA_WORDS = [
  {
    "answer": "movie theater/cinema",
    "short_mean": "rạp chiếu phim",
    "mean": "Nơi công cộng trang bị màn ảnh lớn để chiếu phim cho khán giả.",
    "en_ex": "We are going to the movie theater to watch the latest blockbuster.",
    "vi_ex": "Chúng tôi sẽ đến rạp chiếu phim để xem bộ phim bom tấn mới nhất."
  },
  {
    "answer": "movie/film",
    "short_mean": "bộ phim",
    "mean": "Tác phẩm điện ảnh gồm các hình ảnh chuyển động có âm thanh.",
    "en_ex": "Have you seen the new science fiction movie?",
    "vi_ex": "Bạn đã xem bộ phim khoa học viễn tưởng mới chưa?"
  },
  {
    "answer": "movie star/film star",
    "short_mean": "ngôi sao điện ảnh",
    "mean": "Diễn viên nổi tiếng chuyên đóng phim điện ảnh.",
    "en_ex": "The movie star walked down the red carpet gracefully.",
    "vi_ex": "Ngôi sao điện ảnh tự tin bước đi trên thảm đỏ."
  },
  {
    "answer": "main character",
    "short_mean": "nhân vật chính",
    "mean": "Nhân vật trung tâm của câu chuyện trong phim hoặc kịch.",
    "en_ex": "The main character in the story overcomes many challenges.",
    "vi_ex": "Nhân vật chính trong câu chuyện vượt qua nhiều thử thách."
  },
  {
    "answer": "hero",
    "short_mean": "anh hùng, nhân vật nam chính",
    "mean": "Nhân vật dũng cảm, có nghĩa khí trong tác phẩm.",
    "en_ex": "The hero saved the city from destruction.",
    "vi_ex": "Người anh hùng đã cứu thành phố khỏi sự sụp đổ."
  },
  {
    "answer": "villain",
    "short_mean": "nhân vật phản diện",
    "mean": "Nhân vật ác độc chống lại nhân vật chính trong phim.",
    "en_ex": "The actor played the role of a sinister villain.",
    "vi_ex": "Nam diễn viên đã đóng vai một nhân vật phản diện độc ác."
  },
  {
    "answer": "director",
    "short_mean": "đạo diễn",
    "mean": "Người chỉ đạo nghệ thuật và dàn dựng quá trình làm phim/kịch.",
    "en_ex": "The director won an award for best cinematography.",
    "vi_ex": "Vị đạo diễn đã giành giải thưởng cho quay phim xuất sắc nhất."
  },
  {
    "answer": "drama",
    "short_mean": "phim/kịch chính kịch",
    "mean": "Thể loại phim tập trung vào tâm lý nhân vật và tình huống xung đột.",
    "en_ex": "She prefers watching emotional drama to action movies.",
    "vi_ex": "Cô ấy thích xem phim chính kịch giàu cảm xúc hơn là phim hành động."
  },
  {
    "answer": "musical",
    "short_mean": "phim/kịch âm nhạc",
    "mean": "Thể loại kết hợp lời thoại với các bài hát và vũ đạo.",
    "en_ex": "La La Land is a hugely successful modern musical.",
    "vi_ex": "La La Land là một bộ phim ca nhạc hiện đại cực kỳ thành công."
  },
  {
    "answer": "science fiction",
    "short_mean": "phim khoa học viễn tưởng",
    "mean": "Thể loại phim dựng trên bối cảnh công nghệ tương lai hoặc vũ trụ.",
    "en_ex": "He loves science fiction stories about space exploration.",
    "vi_ex": "Anh ấy yêu thích những câu chuyện khoa học viễn tưởng về khám phá vũ trụ."
  },
  {
    "answer": "thriller",
    "short_mean": "phim giật gân, ly kỳ",
    "mean": "Thể loại phim gây cảm giác hồi hộp, giật gân cho khán giả.",
    "en_ex": "The thriller kept everyone on the edge of their seats.",
    "vi_ex": "Bộ phim giật gân khiến mọi người phải nín thở theo dõi."
  },
  {
    "answer": "comedy",
    "short_mean": "phim/kịch hài",
    "mean": "Thể loại tác phẩm mang lại tiếng cười vui vẻ.",
    "en_ex": "We watched a funny comedy and laughed all night.",
    "vi_ex": "Chúng tôi đã xem một bộ phim hài vui nhộn và cười suốt đêm."
  },
  {
    "answer": "action movie",
    "short_mean": "phim hành động",
    "mean": "Thể loại phim có nhiều cảnh rượt đuổi và võ thuật kịch tính.",
    "en_ex": "The action movie was packed with explosions and car chases.",
    "vi_ex": "Bộ phim hành động đầy tràn các cảnh cháy nổ và rượt đuổi xe."
  },
  {
    "answer": "horror",
    "short_mean": "phim kinh dị",
    "mean": "Thể loại phim gây cảm giác sợ hãi, ma mị.",
    "en_ex": "Don't watch horror movies alone late at night.",
    "vi_ex": "Đừng xem phim kinh dị một mình lúc nửa đêm."
  },
  {
    "answer": "cartoon",
    "short_mean": "phim hoạt hình",
    "mean": "Phim được dựng từ các hình vẽ hoạt họa.",
    "en_ex": "Children enjoy watching Saturday morning cartoons.",
    "vi_ex": "Trẻ em thích xem phim hoạt hình vào sáng thứ Bảy."
  },
  {
    "answer": "romantic comedy",
    "short_mean": "phim hài lãng mạn",
    "mean": "Phim kết hợp câu chuyện tình yêu lãng mạn với các yếu tố hài hước.",
    "en_ex": "They picked a romantic comedy for their date night.",
    "vi_ex": "Họ chọn một bộ phim hài lãng mạn cho buổi hẹn hò tối nay."
  },
  {
    "answer": "crime drama",
    "short_mean": "phim chính kịch tội phạm",
    "mean": "Phim khai thác các vụ án và hành vi tội phạm.",
    "en_ex": "The crime drama series follows a detective investigating murder cases.",
    "vi_ex": "Phim chính kịch tội phạm xoay quanh một thám tử điều tra các vụ án mạng."
  },
  {
    "answer": "western",
    "short_mean": "phim viễn tây",
    "mean": "Phim về cuộc sống các tay súng miền Tây nước Mỹ thời xưa.",
    "en_ex": "My grandfather is a big fan of classic western movies.",
    "vi_ex": "Ông nội tôi là một người rất hâm mộ các bộ phim viễn tây cổ điển."
  },
  {
    "answer": "special effects",
    "short_mean": "kỹ xảo đặc biệt (CGI)",
    "mean": "Các hình ảnh ảo được tạo ra bằng máy tính trong làm phim.",
    "en_ex": "The special effects in the movie were mind-blowing.",
    "vi_ex": "Kỹ xảo đặc biệt trong bộ phim thật đáng ngạc nhiên."
  },
  {
    "answer": "stunt",
    "short_mean": "cảnh quay nguy hiểm / đóng thế",
    "mean": "Cảnh quay nguy hiểm đòi hỏi diễn viên đóng thế thực hiện.",
    "en_ex": "The actor performed all his own stunts without a body double.",
    "vi_ex": "Nam diễn viên đã tự mình thực hiện mọi cảnh quay nguy hiểm mà không cần đóng thế."
  },
  {
    "answer": "audience",
    "short_mean": "khán giả",
    "mean": "Tập thể những người theo dõi buổi biểu diễn hoặc bộ phim.",
    "en_ex": "The audience clapped enthusiastically at the end of the show.",
    "vi_ex": "Khán giả vỗ tay nồng nhiệt vào cuối buổi biểu diễn."
  },
  {
    "answer": "screen",
    "short_mean": "màn ảnh",
    "mean": "Màn hình lớn để chiếu hình ảnh trong rạp.",
    "en_ex": "The theater boasts a giant IMAX screen.",
    "vi_ex": "Rạp chiếu phim tự hào sở hữu một màn ảnh IMAX khổng lồ."
  },
  {
    "answer": "box office",
    "short_mean": "quầy bán vé / doanh thu bán vé",
    "mean": "Khu vực bán vé hoặc chỉ tổng doanh thu của phim.",
    "en_ex": "The movie made millions at the box office on opening weekend.",
    "vi_ex": "Bộ phim đạt doanh thu hàng triệu đô tại quầy bán vé vào tuần đầu ra mắt."
  },
  {
    "answer": "multiplex",
    "short_mean": "cụm rạp chiếu phim nhiều phòng",
    "mean": "Tòa nhà chiếu phim có nhiều phòng chiếu cùng lúc.",
    "en_ex": "The new multiplex features twelve modern cinema halls.",
    "vi_ex": "Cụm rạp mới có mười hai phòng chiếu hiện đại."
  },
  {
    "answer": "popcorn",
    "short_mean": "bỏng ngô, bắp rang bơ",
    "mean": "Món ăn ngô rang phổ biến khi xem phim.",
    "en_ex": "I bought a bucket of buttered popcorn before entering the hall.",
    "vi_ex": "Tôi đã mua một bắp rang bơ trước khi vào phòng chiếu."
  },
  {
    "answer": "curtain",
    "short_mean": "màn sân khấu",
    "mean": "Tấm vải lớn kéo mở/đóng trên sân khấu kịch.",
    "en_ex": "The curtain rose and the play began.",
    "vi_ex": "Màn sân khấu kéo lên và vở kịch bắt đầu."
  },
  {
    "answer": "stage",
    "short_mean": "sân khấu",
    "mean": "Khu vực nhô cao nơi diễn viên trình diễn.",
    "en_ex": "Actors walked onto the stage to take their positions.",
    "vi_ex": "Các diễn viên bước ra sân khấu để vào vị trí của mình."
  },
  {
    "answer": "orchestra pit",
    "short_mean": "hố nhạc công sân khấu",
    "mean": "Khu vực thấp phía trước sân khấu dành cho dàn nhạc.",
    "en_ex": "Musicians played live instruments from the orchestra pit.",
    "vi_ex": "Các nhạc công chơi nhạc cụ trực tiếp từ hố nhạc công sân khấu."
  },
  {
    "answer": "balcony",
    "short_mean": "khu ghế ngồi ban công (tầng trên nhà hát)",
    "mean": "Tầng khán đài phía trên cao trong nhà hát.",
    "en_ex": "We had a great elevated view of the stage from the balcony.",
    "vi_ex": "Chúng tôi có tầm nhìn tuyệt vời từ trên cao xuống sân khấu nhờ ngồi ở ban công."
  },
  {
    "answer": "orchestra seating/stalls",
    "short_mean": "khu ghế ngồi tầng trệt",
    "mean": "Khu vực ghế ngồi khán giả ở ngay tầng trệt của nhà hát.",
    "en_ex": "Tickets for orchestra seating are usually more expensive.",
    "vi_ex": "Vé cho khu ghế ngồi tầng trệt thường đắt hơn."
  },
  {
    "answer": "theater/theatre",
    "short_mean": "nhà hát",
    "mean": "Địa điểm trình diễn kịch nghệ hoặc biểu diễn trực tiếp.",
    "en_ex": "They went to the theater to see a ballet performance.",
    "vi_ex": "Họ đến nhà hát để xem một buổi biểu diễn múa ba-lê."
  },
  {
    "answer": "circle",
    "short_mean": "tầng khán đài vòng cung",
    "mean": "Tầng ghế ngồi uốn cong trong nhà hát.",
    "en_ex": "Our seats were located in the dress circle section.",
    "vi_ex": "Chỗ ngồi của chúng tôi nằm ở khu vực khán đài vòng cung."
  },
  {
    "answer": "opera",
    "short_mean": "nhạc kịch opera",
    "mean": "Thể loại kịch biểu diễn hoàn toàn bằng giọng hát opera.",
    "en_ex": "She enjoys listening to Italian opera.",
    "vi_ex": "Cô ấy thích nghe nhạc kịch opera tiếng Ý."
  },
  {
    "answer": "opera house",
    "short_mean": "nhà hát opera",
    "mean": "Tòa nhà nghệ thuật chuyên biểu diễn opera.",
    "en_ex": "The Sydney Opera House is an architectural icon.",
    "vi_ex": "Nhà hát Opera Sydney là một biểu tượng kiến trúc."
  },
  {
    "answer": "ballet",
    "short_mean": "múa ba-lê",
    "mean": "Nghệ thuật múa cổ điển mang tính kỹ thuật cao.",
    "en_ex": "The dancers performed the Swan Lake ballet beautifully.",
    "vi_ex": "Các vũ công đã thể hiện vở múa ba-lê Hồ Thiên Nga thật đẹp mắt."
  },
  {
    "answer": "tragedy",
    "short_mean": "vở bi kịch",
    "mean": "Tác phẩm kịch nghệ có kết thúc buồn bi thảm.",
    "en_ex": "Romeo and Juliet is Shakespeare's most famous tragedy.",
    "vi_ex": "Romeo và Juliet là vở bi kịch nổi tiếng nhất của Shakespeare."
  },
  {
    "answer": "sets",
    "short_mean": "bối cảnh sân khấu",
    "mean": "Các mô hình và khung cảnh trang trí trên sân khấu.",
    "en_ex": "The stage sets for the play were elaborately designed.",
    "vi_ex": "Bối cảnh sân khấu cho vở kịch được thiết kế công phu."
  },
  {
    "answer": "props",
    "short_mean": "đạo cụ diễn xuất",
    "mean": "Các vật dụng nhỏ do diễn viên cầm nắm trên sân khấu.",
    "en_ex": "The prop master made sure all swords and letters were ready.",
    "vi_ex": "Người quản lý đạo cụ đảm bảo tất cả kiếm và thư từ đều đã sẵn sàng."
  },
  {
    "answer": "costumes",
    "short_mean": "trang phục biểu diễn",
    "mean": "Quần áo thiết kế riêng cho diễn viên hóa trang.",
    "en_ex": "The actors wore colorful historical costumes.",
    "vi_ex": "Các diễn viên mặc trang phục lịch sử đầy màu sắc."
  },
  {
    "answer": "cast",
    "short_mean": "dàn diễn viên",
    "mean": "Tập hợp tất cả các diễn viên tham gia bộ phim/kịch.",
    "en_ex": "The movie has an impressive star-studded cast.",
    "vi_ex": "Bộ phim sở hữu dàn diễn viên toàn ngôi sao vô cùng ấn tượng."
  },
  {
    "answer": "performance",
    "short_mean": "buổi biểu diễn",
    "mean": "Sự thể hiện tài năng của diễn viên trên sân khấu.",
    "en_ex": "Her vocal performance received high praise from critics.",
    "vi_ex": "Phần biểu diễn giọng hát của cô nhận được lời khen ngợi cao từ giới phê bình."
  },
  {
    "answer": "script",
    "short_mean": "kịch bản",
    "mean": "Văn bản ghi chép lời thoại và chỉ dẫn diễn xuất.",
    "en_ex": "The actors spent weeks memorizing the script.",
    "vi_ex": "Các diễn viên đã dành nhiều tuần để học thuộc kịch bản."
  },
  {
    "answer": "program/programme",
    "short_mean": "chương trình giới thiệu",
    "mean": "Cuốn sổ nhỏ in chi tiết thông tin buổi diễn và diễn viên.",
    "en_ex": "Read the program to see the list of cast members.",
    "vi_ex": "Hãy đọc tờ chương trình để xem danh sách các thành viên trong dàn diễn viên."
  },
  {
    "answer": "applause",
    "short_mean": "tràng pháo tay",
    "mean": "Tiếng vỗ tay khen ngợi của khán giả.",
    "en_ex": "The curtain fell to loud applause from the audience.",
    "vi_ex": "Màn sân khấu hạ xuống trong tràng pháo tay giòn giã từ khán giả."
  },
  {
    "answer": "dialog/dialogue",
    "short_mean": "lời thoại",
    "mean": "Cuộc trò chuyện qua lại giữa các nhân vật.",
    "en_ex": "The script features witty and sharp dialogue.",
    "vi_ex": "Kịch bản sở hữu những lời thoại dí dỏm và sắc sảo."
  },
  {
    "answer": "encore",
    "short_mean": "màn diễn lại theo yêu cầu khán giả",
    "mean": "Phần biểu diễn thêm khi khán giả vỗ tay yêu cầu.",
    "en_ex": "The musicians came back on stage for an exciting encore.",
    "vi_ex": "Các nhạc công quay lại sân khấu cho một màn diễn lại đầy hào hứng."
  },
  {
    "answer": "standing ovation",
    "short_mean": "sự hoan nghênh đứng dậy vỗ tay",
    "mean": "Hành động cả khán phòng đứng dậy vỗ tay tán thưởng.",
    "en_ex": "The cast received a standing ovation at the end of the show.",
    "vi_ex": "Dàn diễn viên nhận được sự hoan nghênh đứng dậy vỗ tay vào cuối buổi diễn."
  },
  {
    "answer": "usher",
    "short_mean": "nhân viên hướng dẫn chỗ ngồi",
    "mean": "Người dẫn khách đến đúng số ghế trong nhà hát.",
    "en_ex": "The usher checked our tickets and showed us to our seats.",
    "vi_ex": "Nhân viên hướng dẫn đã kiểm tra vé và dẫn chúng tôi vào đúng chỗ ngồi."
  }
];
