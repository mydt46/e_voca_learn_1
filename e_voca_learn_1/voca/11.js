const VOCA_WORDS = [
  {
    "answer": "to clean the windows",
    "short_mean": "lau chùi cửa sổ",
    "mean": "Làm sạch bụi bẩn trên kính cửa sổ.",
    "en_ex": "He uses glass spray to clean the windows until they sparkle.",
    "vi_ex": "Anh ấy dùng bình xịt kính để lau chùi cửa sổ cho đến khi chúng sáng bóng."
  },
  {
    "answer": "to sweep the floor",
    "short_mean": "quét nhà",
    "mean": "Dùng chổi quét rác và bụi trên sàn nhà.",
    "en_ex": "Please sweep the floor before mopping it.",
    "vi_ex": "Vui lòng quét nhà trước khi lau sàn."
  },
  {
    "answer": "to scrub the floor",
    "short_mean": "chà/cọ rửa sàn nhà",
    "mean": "Dùng bàn chải cọ vết bẩn cứng đầu trên sàn.",
    "en_ex": "She had to scrub the floor to remove the stubborn paint stains.",
    "vi_ex": "Cô ấy đã phải cọ rửa sàn nhà để tẩy sạch vết sơn cứng đầu."
  },
  {
    "answer": "to mop the floor",
    "short_mean": "lau sàn nhà",
    "mean": "Dùng cây lau nhà ướt làm sạch mặt sàn.",
    "en_ex": "Mop the floor with scented floor cleaner.",
    "vi_ex": "Lau sàn nhà bằng nước lau sàn có hương thơm."
  },
  {
    "answer": "to vacuum the carpet",
    "short_mean": "hút bụi thảm",
    "mean": "Dùng máy hút bụi làm sạch thảm trải sàn.",
    "en_ex": "I vacuum the carpet every Saturday morning.",
    "vi_ex": "Tôi hút bụi thảm vào mỗi sáng thứ Bảy."
  },
  {
    "answer": "to dust",
    "short_mean": "phủi bụi đồ đạc",
    "mean": "Dùng chổi lông gà hoặc khăn lau bụi trên bàn ghế.",
    "en_ex": "Remember to dust the wooden bookshelves.",
    "vi_ex": "Hãy nhớ phủi bụi trên các kệ sách bằng gỗ."
  },
  {
    "answer": "to take out the trash/rubbish",
    "short_mean": "đem rác đi đổ",
    "mean": "Vứt túi rác ra thùng rác ngoài nhà.",
    "en_ex": "It is his daily chore to take out the trash.",
    "vi_ex": "Đó là công việc hằng ngày của anh ấy để đem rác đi đổ."
  },
  {
    "answer": "to clean up/ to tidy",
    "short_mean": "dọn dẹp ngăn nắp",
    "mean": "Sắp xếp lại đồ đạc cho gọn gàng sạch sẽ.",
    "en_ex": "Tidy your bedroom before guests arrive.",
    "vi_ex": "Hãy dọn dẹp phòng ngủ của bạn ngăn nắp trước khi khách đến."
  },
  {
    "answer": "to go to the store/shops",
    "short_mean": "đi chợ, đi cửa hàng mua đồ",
    "mean": "Ra cửa hàng mua nhu yếu phẩm cho gia đình.",
    "en_ex": "She goes to the store to buy milk and eggs.",
    "vi_ex": "Cô ấy đi cửa hàng để mua sữa và trứng."
  },
  {
    "answer": "to clean the bathroom",
    "short_mean": "cọ rửa nhà tắm",
    "mean": "Vệ sinh bồn cầu, bồn rửa và sàn nhà tắm.",
    "en_ex": "We clean the bathroom thoroughly once a week.",
    "vi_ex": "Chúng tôi cọ rửa nhà tắm kỹ lưỡng mỗi tuần một lần."
  },
  {
    "answer": "to set the table",
    "short_mean": "bày bàn ăn",
    "mean": "Sắp xếp bát đĩa dao nĩa sẵn sàng cho bữa ăn.",
    "en_ex": "Help your mother set the table for dinner.",
    "vi_ex": "Giúp mẹ bạn bày bàn ăn cho bữa tối."
  },
  {
    "answer": "to clear the table",
    "short_mean": "dọn dẹp bàn ăn",
    "mean": "Thu dọn chén bát bẩn sau khi ăn xong.",
    "en_ex": "Clear the table after everyone has finished eating.",
    "vi_ex": "Dọn dẹp bàn ăn sau khi mọi người đã ăn xong."
  },
  {
    "answer": "to do the dishes",
    "short_mean": "rửa bát đĩa",
    "mean": "Rửa sạch chén bát nĩa sau bữa ăn.",
    "en_ex": "He offered to do the dishes after the party.",
    "vi_ex": "Anh ấy ngỏ lời rửa bát đĩa sau buổi tiệc."
  },
  {
    "answer": "to dry the dishes",
    "short_mean": "lau khô bát đĩa",
    "mean": "Dùng khăn lau khô bát đĩa vừa rửa.",
    "en_ex": "Dry the dishes before putting them into the cupboard.",
    "vi_ex": "Lau khô bát đĩa trước khi cất chúng vào tủ."
  },
  {
    "answer": "to load the dishwasher",
    "short_mean": "xếp bát đĩa vào máy rửa bát",
    "mean": "Cho bát đĩa bẩn vào máy rửa tự động.",
    "en_ex": "Load the dishwasher and turn it on before bed.",
    "vi_ex": "Xếp bát đĩa vào máy rửa bát và bật máy trước khi đi ngủ."
  },
  {
    "answer": "to unload the dishwasher",
    "short_mean": "lấy bát đĩa sạch ra khỏi máy rửa",
    "mean": "Lấy bát đĩa đã rửa xong từ máy ra cất.",
    "en_ex": "Can you unload the dishwasher while I cook?",
    "vi_ex": "Bạn có thể lấy bát đĩa sạch ra khỏi máy rửa trong khi tôi nấu ăn được không?"
  },
  {
    "answer": "to do the laundry",
    "short_mean": "giặt quần áo",
    "mean": "Giặt sấy trang phục bẩn.",
    "en_ex": "I usually do the laundry on Sunday mornings.",
    "vi_ex": "Tôi thường giặt quần áo vào các sáng Chủ nhật."
  },
  {
    "answer": "to hang clothes",
    "short_mean": "phơi quần áo",
    "mean": "Treo quần áo ướt lên dây phơi cho khô.",
    "en_ex": "Hang clothes on the washing line to dry in the sun.",
    "vi_ex": "Phơi quần áo trên dây phơi để làm khô dưới ánh nắng."
  },
  {
    "answer": "to do the ironing",
    "short_mean": "là/ủi quần áo",
    "mean": "Dùng bàn ủi làm phẳng quần áo.",
    "en_ex": "He listens to music while doing the ironing.",
    "vi_ex": "Anh ấy nghe nhạc trong khi là ủi quần áo."
  },
  {
    "answer": "to fold clothes",
    "short_mean": "gấp quần áo",
    "mean": "Gấp gọn đồ vải khô trước khi cất tủ.",
    "en_ex": "Fold clothes neatly and put them into the drawers.",
    "vi_ex": "Gấp quần áo gọn gàng và cho chúng vào các ngăn kéo."
  },
  {
    "answer": "to make the bed",
    "short_mean": "gấp chăn gối dọn giường",
    "mean": "Xếp lại chăn gối nệm sau khi ngủ dậy.",
    "en_ex": "Making the bed instantly makes your bedroom look tidy.",
    "vi_ex": "Gấp chăn gối dọn giường ngay lập tức giúp phòng ngủ của bạn trông ngăn nắp."
  },
  {
    "answer": "to change the sheets",
    "short_mean": "thay ga trải giường",
    "mean": "Lột vỏ ga nệm bẩn thay bằng ga mới.",
    "en_ex": "Change the sheets every two weeks for good hygiene.",
    "vi_ex": "Thay ga trải giường hai tuần một lần để giữ vệ sinh tốt."
  },
  {
    "answer": "to water the plants",
    "short_mean": "tưới cây",
    "mean": "Tưới nước cấp ẩm cho cây trồng.",
    "en_ex": "Water the plants in the garden every evening.",
    "vi_ex": "Tưới cây trong vườn vào mỗi buổi chiều tối."
  },
  {
    "answer": "to wash the car",
    "short_mean": "rửa xe ô tô",
    "mean": "Vệ sinh làm sạch bề mặt xe ô tô.",
    "en_ex": "We washed the car on the driveway using a hose.",
    "vi_ex": "Chúng tôi đã rửa xe ô tô trên đường dẫn vào nhà bằng ống nước."
  },
  {
    "answer": "to feed the pets",
    "short_mean": "cho thú cưng ăn",
    "mean": "Cho chó mèo ăn bữa hằng ngày.",
    "en_ex": "Don't forget to feed the pets before you leave for work.",
    "vi_ex": "Đừng quên cho thú cưng ăn trước khi bạn đi làm."
  },
  {
    "answer": "washing machine",
    "short_mean": "máy giặt",
    "mean": "Thiết bị điện giặt quần áo tự động.",
    "en_ex": "Put dirty clothes into the washing machine.",
    "vi_ex": "Cho quần áo bẩn vào máy giặt."
  },
  {
    "answer": "tumble dryer",
    "short_mean": "máy sấy quần áo",
    "mean": "Thiết bị quay sấy khô quần áo ẩm.",
    "en_ex": "Use a tumble dryer when it rains outside.",
    "vi_ex": "Sử dụng máy sấy quần áo khi trời mưa bên ngoài."
  },
  {
    "answer": "laundry basket",
    "short_mean": "giỏ đựng quần áo bẩn",
    "mean": "Giỏ chứa đồ vải chờ giặt.",
    "en_ex": "Throw your dirty socks into the laundry basket.",
    "vi_ex": "Hãy ném chiếc tất bẩn của bạn vào giỏ đựng quần áo bẩn."
  },
  {
    "answer": "laundry detergent",
    "short_mean": "bột giặt / nước giặt",
    "mean": "Hóa chất tẩy rửa làm sạch đồ giặt.",
    "en_ex": "Add a capful of liquid laundry detergent to the wash cycle.",
    "vi_ex": "Thêm một nắp nước giặt vào chu trình giặt."
  },
  {
    "answer": "clothes line/ washing line",
    "short_mean": "dây phơi quần áo",
    "mean": "Dây cáp/dây thừng chăng ngoài trời phơi đồ.",
    "en_ex": "Hang towels on the washing line to dry outdoors.",
    "vi_ex": "Phơi khăn tắm trên dây phơi để làm khô ngoài trời."
  },
  {
    "answer": "drying clip/peg",
    "short_mean": "kẹp phơi quần áo",
    "mean": "Cái kẹp cố định quần áo trên dây phơi tránh gió thổi rơi.",
    "en_ex": "Secure the shirts with plastic drying pegs.",
    "vi_ex": "Cố định các chiếc áo sơ mi bằng những chiếc kẹp phơi đồ bằng nhựa."
  },
  {
    "answer": "iron",
    "short_mean": "bàn ủi, bàn là",
    "mean": "Thiết bị điện sinh nhiệt phẳng nếp nhăn quần áo.",
    "en_ex": "Be careful; the iron is hot.",
    "vi_ex": "Hãy cẩn thận; bàn ủi đang nóng."
  },
  {
    "answer": "ironing board",
    "short_mean": "cầu là, bàn để ủi quần áo",
    "mean": "Khung bàn có nệm dùng đặt quần áo lên để ủi.",
    "en_ex": "Unfold the ironing board to iron your trousers.",
    "vi_ex": "Mở cầu là ra để ủi chiếc quần dài của bạn."
  },
  {
    "answer": "bucket",
    "short_mean": "xô chứa nước",
    "mean": "Xô hình trụ có quai xách chứa nước lau nhà.",
    "en_ex": "Fill the bucket with warm soapy water.",
    "vi_ex": "Đổ đầy nước xà phòng ấm vào xô."
  },
  {
    "answer": "mop",
    "short_mean": "cây lau nhà",
    "mean": "Dụng cụ gồm cán dài và đầu chùi bằng sợi vải.",
    "en_ex": "Dip the mop into the bucket and squeeze out excess water.",
    "vi_ex": "Nhúng cây lau nhà vào xô và vắt bớt nước thừa."
  },
  {
    "answer": "dishwashing liquid/ washing up liquid",
    "short_mean": "nước rửa bát",
    "mean": "Dung dịch chất tẩy rửa vệ sinh bát đĩa.",
    "en_ex": "Squeeze a drop of dishwashing liquid onto the sponge.",
    "vi_ex": "Bóp một giọt nước rửa bát lên miếng bọt biển."
  },
  {
    "answer": "scouring pad",
    "short_mean": "miếng cọ rửa xoong nồi",
    "mean": "Miếng cước nhám dùng tẩy cặn bẩn trên xoong nồi.",
    "en_ex": "Scrub burnt pans with a scouring pad.",
    "vi_ex": "Cọ rửa những chiếc chảo bị cháy bằng miếng cọ rửa xoong nồi."
  },
  {
    "answer": "sponge",
    "short_mean": "miếng bọt biển rửa bát",
    "mean": "Miếng xốp mềm thấm hút nước rửa bát đĩa.",
    "en_ex": "Wipe down the kitchen counter with a damp sponge.",
    "vi_ex": "Lau sạch mặt bếp bằng một miếng bọt biển ẩm."
  },
  {
    "answer": "cloth",
    "short_mean": "khăn lau",
    "mean": "Miếng vải dùng lau chùi lau dọn.",
    "en_ex": "Use a microfiber cloth to clean glass surfaces.",
    "vi_ex": "Dùng một chiếc khăn lau bằng sợi microfiber để lau sạch các bề mặt kính."
  },
  {
    "answer": "duster",
    "short_mean": "chổi phủi bụi",
    "mean": "Chổi gắn dải lông mềm dùng phủi bụi đồ đạc.",
    "en_ex": "Feather dusters are great for cleaning fragile ornaments.",
    "vi_ex": "Chổi phủi bụi bằng lông vũ rất tuyệt vời để làm sạch các vật trang trí dễ vỡ."
  },
  {
    "answer": "polish",
    "short_mean": "chai xi/nước đánh bóng đồ gỗ/kim loại",
    "mean": "Hóa chất làm sáng bóng bề mặt đồ đạc.",
    "en_ex": "Spray furniture polish onto the dining table.",
    "vi_ex": "Xịt nước đánh bóng đồ gỗ lên bàn ăn."
  },
  {
    "answer": "cleaning fluid",
    "short_mean": "dung dịch tẩy rửa",
    "mean": "Chất lỏng hóa chất chuyên vệ sinh vết bẩn.",
    "en_ex": "Spray cleaning fluid onto the dirty countertop.",
    "vi_ex": "Xịt dung dịch tẩy rửa lên mặt bếp bị bẩn."
  },
  {
    "answer": "bleach",
    "short_mean": "nước tẩy Javel / chất tẩy trắng",
    "mean": "Hóa chất diệt khuẩn tẩy trắng vết bẩn cứng đầu.",
    "en_ex": "Dilute bleach in water to disinfect the bathroom floor.",
    "vi_ex": "Pha loãng nước tẩy trong nước để khử trùng sàn nhà tắm."
  },
  {
    "answer": "vacuum cleaner",
    "short_mean": "máy hút bụi",
    "mean": "Thiết bị điện hút rác bụi trên sàn và thảm.",
    "en_ex": "Empty the dust bag of the vacuum cleaner after use.",
    "vi_ex": "Đổ túi bụi của máy hút bụi sau khi sử dụng."
  },
  {
    "answer": "dustpan",
    "short_mean": "hót rác, ky hót rác",
    "mean": "Dụng cụ dẹt hứng bụi khi quét nhà bằng chổi.",
    "en_ex": "Sweep the dust into the dustpan.",
    "vi_ex": "Quét bụi vào ky hót rác."
  },
  {
    "answer": "brush",
    "short_mean": "bàn chải cọ rửa",
    "mean": "Dụng cụ có các sợi cước cứng dùng cọ rửa.",
    "en_ex": "Use a stiff brush to clean grout lines between tiles.",
    "vi_ex": "Sử dụng một chiếc bàn chải cọ cứng để làm sạch đường khe giữa các viên gạch."
  },
  {
    "answer": "broom",
    "short_mean": "chổi quét nhà",
    "mean": "Dụng cụ cán dài có đầu sợi quét rác trên sàn.",
    "en_ex": "He grabbed the broom and started sweeping the patio.",
    "vi_ex": "Anh ấy cầm lấy chiếc chổi và bắt đầu quét khoảng hiên nhà."
  },
  {
    "answer": "recycling bin",
    "short_mean": "thùng rác tái chế",
    "mean": "Thùng rác phân loại vỏ chai nhựa, giấy, kim loại.",
    "en_ex": "Throw clean plastic bottles into the green recycling bin.",
    "vi_ex": "Ném vỏ chai nhựa sạch vào thùng rác tái chế màu xanh."
  },
  {
    "answer": "garbage bag/ bin liner",
    "short_mean": "túi đựng rác",
    "mean": "Túi nilon lót bên trong thùng rác.",
    "en_ex": "Tie the garbage bag tightly before throwing it out.",
    "vi_ex": "Buộc chặt túi đựng rác trước khi mang vứt."
  },
  {
    "answer": "rubber gloves",
    "short_mean": "găng tay cao su",
    "mean": "Đôi găng bảo vệ tay khi cọ rửa hóa chất.",
    "en_ex": "Wear rubber gloves when working with strong cleaning chemicals.",
    "vi_ex": "Đeo găng tay cao su khi làm việc với các hóa chất tẩy rửa mạnh."
  }
];
