const VOCA_WORDS = [
  {
    "answer": "town square",
    "short_mean": "quảng trường thị trấn",
    "mean": "Khu vực trống ở trung tâm thị trấn nơi người dân tụ họp.",
    "en_ex": "The weekly market is held in the main town square.",
    "vi_ex": "Chợ hàng tuần được tổ chức tại quảng trường chính của thị trấn."
  },
  {
    "answer": "fountain",
    "short_mean": "đài phun nước",
    "mean": "Công trình kiến trúc phun dòng nước lên cao trí trí.",
    "en_ex": "Children played near the water fountain in the park.",
    "vi_ex": "Trẻ em chơi đùa gần đài phun nước trong công viên."
  },
  {
    "answer": "castle",
    "short_mean": "lâu đài",
    "mean": "Tòa thành kiên cố xây dựng thời xưa cho hoàng gia hoặc tướng lĩnh.",
    "en_ex": "The ancient castle stands high on the cliff overlooking the sea.",
    "vi_ex": "Tòa lâu đài cổ kính sừng sững trên vách đá nhìn ra biển."
  },
  {
    "answer": "store/shop",
    "short_mean": "cửa hàng, tiệm",
    "mean": "Nơi bán buôn các loại hàng hóa tiêu dùng.",
    "en_ex": "She opened a small grocery store in her neighborhood.",
    "vi_ex": "Cô ấy mở một cửa hàng tạp hóa nhỏ trong khu phố của mình."
  },
  {
    "answer": "town hall",
    "short_mean": "tòa nhà thị chính",
    "mean": "Trụ sở làm việc của chính quyền địa phương.",
    "en_ex": "The mayor delivered a speech outside the town hall.",
    "vi_ex": "Thị trưởng đã phát biểu bên ngoài tòa nhà thị chính."
  },
  {
    "answer": "restaurant",
    "short_mean": "nhà hàng",
    "mean": "Cơ sở kinh doanh phục vụ đồ ăn thức uống tại bàn.",
    "en_ex": "We booked a table at an Italian restaurant for dinner.",
    "vi_ex": "Chúng tôi đã đặt một bàn tại nhà hàng Ý cho bữa tối."
  },
  {
    "answer": "library",
    "short_mean": "thư viện",
    "mean": "Nơi lưu trữ sách báo cho độc giả đến đọc và mượn.",
    "en_ex": "Students spend hours studying in the public library.",
    "vi_ex": "Học sinh dành nhiều giờ học tập trong thư viện công cộng."
  },
  {
    "answer": "museum",
    "short_mean": "bảo tàng",
    "mean": "Nơi trưng bày các hiện vật lịch sử, văn hóa hoặc khoa học.",
    "en_ex": "The history museum exhibits artifacts from ancient Egypt.",
    "vi_ex": "Bảo tàng lịch sử trưng bày các hiện vật từ Ai Cập cổ đại."
  },
  {
    "answer": "village",
    "short_mean": "ngôi làng",
    "mean": "Cộng đồng dân cư nhỏ ở vùng nông thôn.",
    "en_ex": "They live in a quiet fishing village near the coast.",
    "vi_ex": "Họ sống trong một ngôi làng chài yên bình gần bờ biển."
  },
  {
    "answer": "town",
    "short_mean": "thị trấn",
    "mean": "Vùng đô thị nhỏ hơn thành phố nhưng lớn hơn làng.",
    "en_ex": "The town center has many lovely shops and cafes.",
    "vi_ex": "Trung tâm thị trấn có nhiều cửa hàng và quán cà phê xinh xắn."
  },
  {
    "answer": "city",
    "short_mean": "thành phố",
    "mean": "Đô thị lớn có dân cư đông đúc và cơ sở hạ tầng phát triển.",
    "en_ex": "Tokyo is a bustling city with modern skyscrapers.",
    "vi_ex": "Tokyo là một thành phố sầm uất với những tòa nhà cao tầng hiện đại."
  },
  {
    "answer": "downtown/city centre",
    "short_mean": "trung tâm thành phố",
    "mean": "Khu vực sầm uất nhất về thương mại và dịch vụ của thành phố.",
    "en_ex": "We took a bus to go downtown for shopping.",
    "vi_ex": "Chúng tôi đi xe buýt vào trung tâm thành phố để mua sắm."
  },
  {
    "answer": "commercial district",
    "short_mean": "khu thương mại",
    "mean": "Khu vực tập trung nhiều văn phòng, trung tâm thương mại và ngân hàng.",
    "en_ex": "High-rise office towers dominate the commercial district.",
    "vi_ex": "Những tòa tháp văn phòng cao tầng chiếm ưu thế trong khu thương mại."
  },
  {
    "answer": "historic quarter",
    "short_mean": "khu phố cổ",
    "mean": "Khu vực lâu đời bảo tồn các công trình kiến trúc cổ xưa.",
    "en_ex": "Tourists love walking through the cobblestone streets of the historic quarter.",
    "vi_ex": "Du khách thích đi dạo qua những con đường lát đá của khu phố cổ."
  },
  {
    "answer": "police station",
    "short_mean": "đồn cảnh sát",
    "mean": "Trụ sở làm việc của lực lượng cảnh sát địa phương.",
    "en_ex": "He went to the police station to report his lost wallet.",
    "vi_ex": "Anh ấy đã đến đồn cảnh sát để trình báo việc mất chiếc ví."
  },
  {
    "answer": "bus station",
    "short_mean": "bến xe buýt",
    "mean": "Điểm tập kết đón và trả khách của các tuyến xe buýt.",
    "en_ex": "The intercity coach left the bus station on time.",
    "vi_ex": "Xe khách liên tỉnh rời bến xe buýt đúng giờ."
  },
  {
    "answer": "train station",
    "short_mean": "ga tàu hỏa",
    "mean": "Nơi tập kết khởi hành và dừng đón trả khách của tàu hỏa.",
    "en_ex": "We met outside the train station ticket office.",
    "vi_ex": "Chúng tôi gặp nhau bên ngoài quầy bán vé ga tàu hỏa."
  },
  {
    "answer": "fire station",
    "short_mean": "trạm chữa cháy",
    "mean": "Cơ sở túc trực của lực lượng và xe cứu hỏa.",
    "en_ex": "Firefighters rushed out of the fire station upon hearing the alarm.",
    "vi_ex": "Các lính chữa cháy lao ra khỏi trạm khi nghe thấy tiếng chuông báo động."
  },
  {
    "answer": "airport",
    "short_mean": "sân bay",
    "mean": "Trạm hàng không phục vụ cất hạ cánh của máy bay.",
    "en_ex": "They checked in their luggage at the international airport.",
    "vi_ex": "Họ đã gửi hành lý tại sân bay quốc tế."
  },
  {
    "answer": "factory",
    "short_mean": "nhà máy, xưởng sản xuất",
    "mean": "Cơ sở công nghiệp lắp ráp và chế tạo hàng hóa.",
    "en_ex": "The factory manufactures electronic components.",
    "vi_ex": "Nhà máy sản xuất các linh kiện điện tử."
  },
  {
    "answer": "post office",
    "short_mean": "bưu điện",
    "mean": "Cơ sở cung cấp dịch vụ thư từ và chuyển phát bưu kiện.",
    "en_ex": "I went to the post office to mail a parcel overseas.",
    "vi_ex": "Tôi đến bưu điện để gửi một bưu kiện ra nước ngoài."
  },
  {
    "answer": "office building",
    "short_mean": "tòa nhà văn phòng",
    "mean": "Tòa nhà lớn chia thành nhiều phòng làm việc cho doanh nghiệp.",
    "en_ex": "Her company rents two floors in a modern office building.",
    "vi_ex": "Công ty của cô ấy thuê hai tầng trong một tòa nhà văn phòng hiện đại."
  },
  {
    "answer": "park",
    "short_mean": "công viên",
    "mean": "Khu vực cây xanh công cộng để thư giãn và tập thể thao.",
    "en_ex": "Families gather at the park for weekend picnics.",
    "vi_ex": "Các gia đình tụ họp tại công viên để dã ngoại cuối tuần."
  },
  {
    "answer": "bridge",
    "short_mean": "cây cầu",
    "mean": "Công trình bắc qua sông, hồ hoặc thung lũng để di chuyển qua.",
    "en_ex": "The Golden Gate Bridge is a famous landmark in San Francisco.",
    "vi_ex": "Cầu Cổng Vàng là một danh thắng nổi tiếng ở San Francisco."
  },
  {
    "answer": "swimming pool",
    "short_mean": "hồ bơi, bể bơi",
    "mean": "Bể chứa nước được xây dựng để bơi lội.",
    "en_ex": "The hotel features an indoor heated swimming pool.",
    "vi_ex": "Khách sạn có một hồ bơi nước nóng trong nhà."
  },
  {
    "answer": "cafe",
    "short_mean": "quán cà phê",
    "mean": "Cửa hàng phục vụ cà phê, đồ uống và đồ ăn nhẹ.",
    "en_ex": "We stopped at a sidewalk cafe to drink cappuccino.",
    "vi_ex": "Chúng tôi đã dừng lại ở một quán cà phê vỉa hè để uống cappuccino."
  },
  {
    "answer": "bar",
    "short_mean": "quán bar",
    "mean": "Nơi phục vụ đồ uống có cồn và âm nhạc giải trí.",
    "en_ex": "They met up at a rooftop bar after work.",
    "vi_ex": "Họ gặp nhau tại một quán bar trên tầng thượng sau giờ làm."
  },
  {
    "answer": "theater/theatre",
    "short_mean": "nhà hát kịch",
    "mean": "Nơi biểu diễn các tác phẩm sân khấu kịch nghệ.",
    "en_ex": "The actors were rehearsing inside the local theater.",
    "vi_ex": "Các diễn viên đang tổng duyệt bên trong nhà hát địa phương."
  },
  {
    "answer": "movie theater/cinema",
    "short_mean": "rạp chiếu phim",
    "mean": "Nơi chiếu phim trên màn hình lớn.",
    "en_ex": "We bought popcorn at the movie theater counter.",
    "vi_ex": "Chúng tôi đã mua bắp rang bơ tại quầy rạp chiếu phim."
  },
  {
    "answer": "hotel",
    "short_mean": "khách sạn",
    "mean": "Cơ sở cung cấp dịch vụ lưu trú ngắn hạn.",
    "en_ex": "They stayed at a luxury hotel downtown.",
    "vi_ex": "Họ đã ở tại một khách sạn sang trọng ở trung tâm thành phố."
  },
  {
    "answer": "church",
    "short_mean": "nhà thờ Công giáo / Kitô giáo",
    "mean": "Công trình tôn giáo dành cho tín đồ đi lễ.",
    "en_ex": "The sound of church bells echoed across the town.",
    "vi_ex": "Tiếng chuông nhà thờ vang vọng khắp thị trấn."
  },
  {
    "answer": "mosque",
    "short_mean": "nhà thờ Hồi giáo",
    "mean": "Nơi cầu nguyện của các tín đồ Hồi giáo.",
    "en_ex": "The Grand Mosque features beautiful minarets.",
    "vi_ex": "Nhà thờ Hồi giáo lớn sở hữu những ngọn tháp tuyệt đẹp."
  },
  {
    "answer": "synagogue",
    "short_mean": "nhà thờ Do Thái giáo",
    "mean": "Nơi hội họp và thờ phụng của người Do Thái.",
    "en_ex": "Worshippers gathered at the synagogue for prayer.",
    "vi_ex": "Các tín đồ tập trung tại nhà thờ Do Thái giáo để cầu nguyện."
  },
  {
    "answer": "temple",
    "short_mean": "ngôi đền, ngôi chùa",
    "mean": "Công trình tôn giáo dành cho việc thờ cúng thần linh hoặc Phật.",
    "en_ex": "The ancient Buddhist temple attracts many pilgrims.",
    "vi_ex": "Ngôi chùa Phật giáo cổ kính thu hút nhiều hành hương."
  },
  {
    "answer": "hospital",
    "short_mean": "bệnh viện",
    "mean": "Nơi điều trị y tế chăm sóc sức khỏe.",
    "en_ex": "The injured man was taken to the nearest hospital.",
    "vi_ex": "Người đàn ông bị thương đã được đưa đến bệnh viện gần nhất."
  },
  {
    "answer": "nightclub",
    "short_mean": "hộp đêm, câu lạc bộ đêm",
    "mean": "Địa điểm giải trí ban đêm có nhạc sôi động và khiêu vũ.",
    "en_ex": "Young people danced until dawn at the nightclub.",
    "vi_ex": "Giới trẻ đã nhảy múa cho đến bình minh tại hộp đêm."
  },
  {
    "answer": "gas station/petrol station",
    "short_mean": "trạm xăng",
    "mean": "Nơi nạp nhiên liệu cho xe ô tô xe máy.",
    "en_ex": "He pulled into a gas station to refuel his car.",
    "vi_ex": "Anh ấy tấp vào trạm xăng để nạp nhiên liệu cho xe."
  },
  {
    "answer": "government building",
    "short_mean": "tòa nhà cơ quan nhà nước",
    "mean": "Trụ sở điều hành của các cơ quan quản lý nhà nước.",
    "en_ex": "Security is tight around the central government building.",
    "vi_ex": "An ninh được thắt chặt quanh tòa nhà cơ quan nhà nước trung ương."
  },
  {
    "answer": "law court",
    "short_mean": "tòa án",
    "mean": "Cơ sở xét xử các vụ án pháp luật.",
    "en_ex": "The trial was held in the district law court.",
    "vi_ex": "Phiên tòa được xét xử tại tòa án quận."
  },
  {
    "answer": "skyscraper",
    "short_mean": "tòa nhà chọc trời",
    "mean": "Tòa nhà cực cao nhiều tầng vươn lên không trung.",
    "en_ex": "The skyscraper offers a panoramic view from its observation deck.",
    "vi_ex": "Tòa nhà chọc trời mang lại tầm nhìn toàn cảnh từ đài quan sát."
  },
  {
    "answer": "shopping mall",
    "short_mean": "trung tâm thương mại",
    "mean": "Khu phức hợp mua sắm, ăn uống và giải trí tập trung.",
    "en_ex": "We spent Sunday afternoon browsing at the shopping mall.",
    "vi_ex": "Chúng tôi dành chiều Chủ nhật dạo chơi tại trung tâm thương mại."
  },
  {
    "answer": "tourist office/information",
    "short_mean": "trung tâm thông tin du lịch",
    "mean": "Nơi cung cấp bản đồ và hỗ trợ thông tin cho du khách.",
    "en_ex": "Pick up a city map at the tourist information center.",
    "vi_ex": "Lấy một bản đồ thành phố tại trung tâm thông tin du lịch."
  },
  {
    "answer": "pharmacy",
    "short_mean": "hiệu thuốc, nhà thuốc",
    "mean": "Nơi bán thuốc và dụng cụ chăm sóc sức khỏe.",
    "en_ex": "I bought cough syrup at the neighborhood pharmacy.",
    "vi_ex": "Tôi đã mua si-rô ho tại hiệu thuốc trong xóm."
  },
  {
    "answer": "cemetery",
    "short_mean": "nghĩa trang",
    "mean": "Nơi chôn cất người đã khuất.",
    "en_ex": "They laid flowers on the grave at the cemetery.",
    "vi_ex": "Họ đã đặt hoa lên ngôi mộ tại nghĩa trang."
  },
  {
    "answer": "sports/leisure center",
    "short_mean": "trung tâm thể thao và giải trí",
    "mean": "Phức hợp sân bãi phòng tập phục vụ thể thao.",
    "en_ex": "The leisure center has a gym, pool, and badminton courts.",
    "vi_ex": "Trung tâm giải trí có phòng tập gym, hồ bơi và các sân cầu lông."
  },
  {
    "answer": "concert hall",
    "short_mean": "phòng hòa nhạc",
    "mean": "Khán phòng thiết kế riêng cho âm thanh hòa nhạc sống động.",
    "en_ex": "The symphony orchestra performed in a world-class concert hall.",
    "vi_ex": "Dàn nhạc giao hưởng đã biểu diễn tại một phòng hòa nhạc tầm cỡ thế giới."
  }
];
