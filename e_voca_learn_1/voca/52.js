const VOCA_WORDS = [
  {
    "answer": "hill",
    "short_mean": "ngọn đồi",
    "mean": "Vùng đất nhô cao tự nhiên thấp hơn ngọn núi.",
    "en_ex": "We walked up the hill to get a clear view of the city.",
    "vi_ex": "Chúng tôi đã đi bộ lên ngọn đồi để ngắm toàn cảnh thành phố."
  },
  {
    "answer": "stream",
    "short_mean": "dòng suối",
    "mean": "Dòng nước chảy nhỏ tự nhiên.",
    "en_ex": "A clear stream flows through the forest.",
    "vi_ex": "Một dòng suối trong lành chảy qua khu rừng."
  },
  {
    "answer": "mountain",
    "short_mean": "ngọn núi",
    "mean": "Địa hình nhô cao rất lớn và dốc so với xung quanh.",
    "en_ex": "Mount Everest is the highest mountain in the world.",
    "vi_ex": "Đỉnh Everest là ngọn núi cao nhất thế giới."
  },
  {
    "answer": "peak",
    "short_mean": "đỉnh núi",
    "mean": "Điểm cao nhất của một ngọn núi.",
    "en_ex": "The mountain peak was covered with snow.",
    "vi_ex": "Đỉnh núi bị bao phủ bởi tuyết."
  },
  {
    "answer": "forest",
    "short_mean": "Khu rừng",
    "mean": "Vùng đất rộng lớn có cây cối mọc rậm rạp.",
    "en_ex": "Many wild animals live in this dense forest.",
    "vi_ex": "Nhiều loài động vật hoang dã sống trong khu rừng rậm rạp này."
  },
  {
    "answer": "river",
    "short_mean": "dòng sông",
    "mean": "Dòng nước chảy tự nhiên lớn đổ ra biển hoặc hồ.",
    "en_ex": "The Amazon is one of the longest rivers in the world.",
    "vi_ex": "Amazon là một trong những dòng sông dài nhất thế giới."
  },
  {
    "answer": "beach",
    "short_mean": "bãi biển",
    "mean": "Dải cát hoặc đá sỏi trải dài dọc bờ biển.",
    "en_ex": "We spent the day relaxing on the sandy beach.",
    "vi_ex": "Chúng tôi dành cả ngày thư giãn trên bãi biển đầy cát."
  },
  {
    "answer": "sea",
    "short_mean": "biển",
    "mean": "Vùng nước mặn rộng lớn bao quanh các lục địa.",
    "en_ex": "They went swimming in the warm Mediterranean Sea.",
    "vi_ex": "Họ đã đi bơi ở vùng biển Địa Trung Hải ấm áp."
  },
  {
    "answer": "ocean",
    "short_mean": "đại dương",
    "mean": "Vùng nước mặn bao la ngăn cách các châu lục.",
    "en_ex": "The Pacific Ocean is the largest ocean on Earth.",
    "vi_ex": "Thái Bình Dương là đại dương lớn nhất trên Trái Đất."
  },
  {
    "answer": "wave",
    "short_mean": "sóng biển",
    "mean": "Sự nhô lên lượn sóng trên mặt nước biển do gió.",
    "en_ex": "Surfers love riding big waves.",
    "vi_ex": "Những người lướt sóng rất thích cưỡi trên những con sóng lớn."
  },
  {
    "answer": "high tide",
    "short_mean": "thủy triều lên / nước dâng",
    "mean": "Mực nước biển dâng cao nhất trong ngày.",
    "en_ex": "At high tide, the water completely covers the rocks.",
    "vi_ex": "Khi thủy triều lên, nước bao phủ toàn bộ các mỏm đá."
  },
  {
    "answer": "low tide",
    "short_mean": "thủy triều xuống / nước rút",
    "mean": "Mực nước biển rút xuống thấp nhất trong ngày.",
    "en_ex": "At low tide, you can walk across to the small island.",
    "vi_ex": "Khi thủy triều xuống, bạn có thể đi bộ sang hòn đảo nhỏ."
  },
  {
    "answer": "pond",
    "short_mean": "ao nước",
    "mean": "Vùng nước đọng nhỏ hơn hồ.",
    "en_ex": "Ducks are swimming gracefully in the village pond.",
    "vi_ex": "Những con vịt đang bơi lội nhẹ nhàng trong ao làng."
  },
  {
    "answer": "lake",
    "short_mean": "hồ nước",
    "mean": "Vùng nước rộng lớn được bao bọc bởi đất liền.",
    "en_ex": "We rented a boat to sail across Lake Geneva.",
    "vi_ex": "Chúng tôi đã thuê một chiếc thuyền để di chuyển qua hồ Geneva."
  },
  {
    "answer": "island",
    "short_mean": "hòn đảo",
    "mean": "Vùng đất được bao bọc hoàn toàn bởi nước.",
    "en_ex": "Phu Quoc is a famous tropical island in Vietnam.",
    "vi_ex": "Phú Quốc là một hòn đảo nhiệt đới nổi tiếng ở Việt Nam."
  },
  {
    "answer": "cliff",
    "short_mean": "vách đá dốc đứng",
    "mean": "Bề mặt đá thẳng đứng thường ở sát bờ biển.",
    "en_ex": "Be careful when walking near the edge of the cliff.",
    "vi_ex": "Hãy cẩn thận khi đi bộ gần mép vách đá dốc đứng."
  },
  {
    "answer": "rocks",
    "short_mean": "đá, mỏm đá",
    "mean": "Khoáng vật rắn tự nhiên nằm trên mặt đất hoặc bờ biển.",
    "en_ex": "Waves crashed against the sharp rocks.",
    "vi_ex": "Sóng biển vỗ mạnh vào những mỏm đá sắc nhọn."
  },
  {
    "answer": "cave",
    "short_mean": "hang động",
    "mean": "Khoảng trống tự nhiên nằm trong lòng đất hoặc vách núi.",
    "en_ex": "Explorers discovered ancient wall paintings inside the cave.",
    "vi_ex": "Các nhà thám hiểm đã phát hiện những bức vẽ cổ trên tường bên trong hang động."
  },
  {
    "answer": "wood",
    "short_mean": "khu rừng nhỏ",
    "mean": "Khu vực có cây cối nhỏ hơn một rừng lớn.",
    "en_ex": "We took a peaceful walk through the local wood.",
    "vi_ex": "Chúng tôi đi dạo thanh bình qua khu rừng nhỏ địa phương."
  },
  {
    "answer": "rain forest/rainforest",
    "short_mean": "rừng mưa nhiệt đới",
    "mean": "Khu rừng rậm rạp nhiệt đới có lượng mưa hàng năm lớn.",
    "en_ex": "The Amazon rainforest produces much of the world's oxygen.",
    "vi_ex": "Rừng mưa nhiệt đới Amazon sản xuất phần lớn lượng oxy cho thế giới."
  },
  {
    "answer": "swamp",
    "short_mean": "đầm lầy",
    "mean": "Vùng đất ngập nước dầm dề có cây bụi mọc.",
    "en_ex": "Alligators live in the murky waters of the swamp.",
    "vi_ex": "Cá sấu sống trong vùng nước đục ngầu của đầm lầy."
  },
  {
    "answer": "waterfall",
    "short_mean": "thác nước",
    "mean": "Dòng nước chảy từ vách đá cao đổ xuống.",
    "en_ex": "Niagara Falls is a world-famous waterfall.",
    "vi_ex": "Thác Niagara là một thác nước nổi tiếng thế giới."
  },
  {
    "answer": "rapids",
    "short_mean": "dòng nước xiết, ghềnh nước",
    "mean": "Đoạn sông chảy rất nhanh và cuồn cuộn trên gập ghềnh đá.",
    "en_ex": "Rafting through the turbulent rapids was thrilling.",
    "vi_ex": "Chèo thuyền chèo vượt dòng nước xiết gập ghềnh vô cùng kịch tính."
  },
  {
    "answer": "countryside",
    "short_mean": "vùng nông thôn",
    "mean": "Khu vực nằm ngoài thành phố có cánh đồng và làng mạc.",
    "en_ex": "Life in the countryside is quiet and peaceful.",
    "vi_ex": "Cuộc sống ở vùng nông thôn thật yên bình và tĩnh lặng."
  },
  {
    "answer": "field",
    "short_mean": "cánh đồng",
    "mean": "Khu đất trống rộng dùng cho trồng trọt hoặc chăn thả.",
    "en_ex": "Cows were grazing in the green field.",
    "vi_ex": "Những con bò đang gặm cỏ trên cánh đồng xanh."
  },
  {
    "answer": "hill",
    "short_mean": "đồi",
    "mean": "Ngọn đồi đất nhô cao.",
    "en_ex": "They built a house on top of a hill.",
    "vi_ex": "Họ đã xây một căn nhà trên đỉnh ngọn đồi."
  },
  {
    "answer": "hedge",
    "short_mean": "hàng rào cây xanh",
    "mean": "Hàng cây bụi được cắt tỉa tạo thành hàng rào.",
    "en_ex": "The farmer trimmed the hedge around his property.",
    "vi_ex": "Người nông dân đã cắt tỉa hàng rào cây xanh quanh mảnh đất của mình."
  },
  {
    "answer": "farmland",
    "short_mean": "đất canh tác / đất nông nghiệp",
    "mean": "Vùng đất chuyên dùng để trồng trọt nông sản.",
    "en_ex": "The valley is filled with fertile farmland.",
    "vi_ex": "Thung lũng ngập tràn đất canh tác màu mỡ."
  },
  {
    "answer": "meadow",
    "short_mean": "đồng cỏ",
    "mean": "Cánh đồng cỏ tự nhiên đầy hoa dại.",
    "en_ex": "Wildflowers bloomed brightly across the meadow.",
    "vi_ex": "Hoa dại nở rộ rực rỡ khắp đồng cỏ."
  },
  {
    "answer": "grassland",
    "short_mean": "vùng đồng cỏ rộng",
    "mean": "Khu vực địa lý chủ yếu phủ bởi thảm cỏ.",
    "en_ex": "Herds of elephants roam the African grassland.",
    "vi_ex": "Các đàn voi đi lang thang trên vùng đồng cỏ châu Phi."
  },
  {
    "answer": "plain",
    "short_mean": "đồng bằng",
    "mean": "Vùng đất bằng phẳng rộng lớn ít cây cối nhô cao.",
    "en_ex": "The broad plain stretched as far as the eye could see.",
    "vi_ex": "Đồng bằng rộng lớn trải dài xa tầm mắt."
  },
  {
    "answer": "desert",
    "short_mean": "sa mạc",
    "mean": "Vùng đất khô cằn rất ít mưa và nhiều cát.",
    "en_ex": "The Sahara is the largest hot desert in the world.",
    "vi_ex": "Sahara là sa mạc nóng lớn nhất thế giới."
  },
  {
    "answer": "oasis",
    "short_mean": "ốc đảo",
    "mean": "Vùng xanh tươi có nguồn nước giữa sa mạc.",
    "en_ex": "Travelers found shade and fresh water at the desert oasis.",
    "vi_ex": "Du khách tìm thấy bóng râm và nước mát tại ốc đảo giữa sa mạc."
  },
  {
    "answer": "volcano",
    "short_mean": "núi lửa",
    "mean": "Ngọn núi có miệng phun trào dung nham và tro bụi.",
    "en_ex": "The active volcano erupted and spewed ash into the air.",
    "vi_ex": "Ngọn núi lửa đang hoạt động đã phun trào tro bụi lên không trung."
  },
  {
    "answer": "geyser",
    "short_mean": "mạch nước phun nóng",
    "mean": "Mạch nước ngầm nóng định kỳ phun trào nước và hơi.",
    "en_ex": "Old Faithful is a famous geyser in Yellowstone National Park.",
    "vi_ex": "Old Faithful là một mạch nước phun nóng nổi tiếng ở Công viên Quốc gia Yellowstone."
  },
  {
    "answer": "mountain range",
    "short_mean": "dãy núi",
    "mean": "Chuỗi các ngọn núi nối tiếp nhau.",
    "en_ex": "The Himalayas is a massive mountain range in Asia.",
    "vi_ex": "Himalaya là một dãy núi đồ sộ ở châu Á."
  },
  {
    "answer": "plateau",
    "short_mean": "cao nguyên",
    "mean": "Vùng đất rộng lớn nhô cao nhưng bề mặt bằng phẳng.",
    "en_ex": "The Tibetan Plateau is often called the Roof of the World.",
    "vi_ex": "Cao nguyên Tây Tạng thường được gọi là Mái nhà của Thế giới."
  },
  {
    "answer": "valley",
    "short_mean": "thung lũng",
    "mean": "Vùng đất thấp trũng nằm giữa hai ngọn núi hoặc đồi.",
    "en_ex": "A quiet village lies in the green valley.",
    "vi_ex": "Một ngôi làng yên bình nằm trong thung lũng xanh mát."
  },
  {
    "answer": "canyon",
    "short_mean": "hẻm núi sâu",
    "mean": "Hẻm sâu có vách đá dốc đứng tạo ra bởi dòng sông.",
    "en_ex": "The Grand Canyon was carved by the Colorado River over millions of years.",
    "vi_ex": "Hẻm núi Grand Canyon được tạo nên bởi sông Colorado qua hàng triệu năm."
  },
  {
    "answer": "sand dune",
    "short_mean": "cồn cát",
    "mean": "Đồi cát được tạo nên bởi lực thổi của gió.",
    "en_ex": "Wind shaped the sand dune into smooth ridges.",
    "vi_ex": "Gió đã tạo hình cồn cát thành những dải sống gờ mịn màng."
  },
  {
    "answer": "polar region",
    "short_mean": "vùng cực (Bắc/Nam Cực)",
    "mean": "Khu vực quanh Cực Bắc hoặc Cực Nam Trái Đất phủ băng giá.",
    "en_ex": "Polar bears live exclusively in the Arctic polar region.",
    "vi_ex": "Gấu Bắc Cực sống duy nhất tại vùng cực Bắc Cực."
  },
  {
    "answer": "glacier",
    "short_mean": "sông băng",
    "mean": "Khối băng khổng lồ di chuyển chậm trên các ngọn núi cao.",
    "en_ex": "Global warming is causing the mountain glacier to melt rapidly.",
    "vi_ex": "Sự nóng lên toàn cầu đang khiến sông băng trên núi tan chảy nhanh chóng."
  },
  {
    "answer": "iceberg",
    "short_mean": "tảng băng trôi",
    "mean": "Khối băng lớn tách ra từ sông băng trôi trên biển.",
    "en_ex": "The Titanic sank after hitting a massive iceberg.",
    "vi_ex": "Tàu Titanic bị đắm sau khi va phải một tảng băng trôi khổng lồ."
  }
];
