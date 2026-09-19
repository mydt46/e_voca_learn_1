const VOCA_WORDS = [
  {
    "answer": "apartments/flats",
    "short_mean": "căn hộ chung cư",
    "mean": "Các căn hộ khép kín nằm trong một tòa nhà chung cư.",
    "en_ex": "They decided to rent one of the modern apartments downtown.",
    "vi_ex": "Họ quyết định thuê một trong những căn hộ hiện đại ở trung tâm thành phố."
  },
  {
    "answer": "duplex/semi-detached",
    "short_mean": "nhà đôi / nhà chung tường một bên",
    "mean": "Ngôi nhà chung tường ranh giới với một căn nhà bên cạnh.",
    "en_ex": "A semi-detached house has a shared wall with its neighbor.",
    "vi_ex": "Một ngôi nhà chung tường một bên có bức tường chung với nhà láng giềng."
  },
  {
    "answer": "detached houses",
    "short_mean": "nhà biệt lập, nhà độc lập",
    "mean": "Ngôi nhà đứng riêng biệt có sân vườn không chung tường.",
    "en_ex": "Detached houses offer more privacy than apartments.",
    "vi_ex": "Các ngôi nhà biệt lập mang lại sự riêng tư nhiều hơn so với chung cư."
  },
  {
    "answer": "row/ terraced houses",
    "short_mean": "nhà liền kề",
    "mean": "Dãy nhà xây san sát liền kề chung tường với hai nhà hai bên.",
    "en_ex": "Terraced houses are very common in British towns.",
    "vi_ex": "Nhà liền kề rất phổ biến ở các thị trấn nước Anh."
  },
  {
    "answer": "ranch house/ bungalow",
    "short_mean": "nhà một tầng / nhà kiểu nông trại",
    "mean": "Ngôi nhà thiết kế chỉ có một tầng trệt.",
    "en_ex": "Living in a bungalow is easy for elderly people as there are no stairs.",
    "vi_ex": "Sống trong một ngôi nhà một tầng rất dễ dàng cho người già vì không có cầu thang."
  },
  {
    "answer": "cottage",
    "short_mean": "nhà nhỏ vùng quê",
    "mean": "Ngôi nhà nhỏ duyên dáng ở vùng nông thôn.",
    "en_ex": "We rented a cozy cottage in the countryside for the summer.",
    "vi_ex": "Chúng tôi đã thuê một căn nhà nhỏ ấm cúng ở vùng quê cho mùa hè."
  },
  {
    "answer": "furnished",
    "short_mean": "đầy đủ nội thất",
    "mean": "Căn nhà cho thuê đã trang bị sẵn bàn ghế tủ giường.",
    "en_ex": "The apartment comes fully furnished with modern appliances.",
    "vi_ex": "Căn hộ được trang bị đầy đủ nội thất với các thiết bị hiện đại."
  },
  {
    "answer": "unfurnished",
    "short_mean": "không có nội thất",
    "mean": "Căn nhà trống người thuê phải tự sắm đồ đạc.",
    "en_ex": "Renting an unfurnished house is usually cheaper.",
    "vi_ex": "Thuê một ngôi nhà không có nội thất thường rẻ hơn."
  },
  {
    "answer": "open-plan",
    "short_mean": "thiết kế không gian mở",
    "mean": "Thiết kế không có tường ngăn giữa bếp và phòng khách.",
    "en_ex": "An open-plan kitchen and living room creates a spacious feel.",
    "vi_ex": "Phòng bếp và phòng khách thiết kế không gian mở tạo cảm giác rộng rãi."
  },
  {
    "answer": "parking space",
    "short_mean": "chỗ đỗ xe",
    "mean": "Vị trí quy định dành cho ô tô đỗ.",
    "en_ex": "The apartment includes one dedicated underground parking space.",
    "vi_ex": "Căn hộ bao gồm một chỗ đỗ xe dưới tầng hầm riêng biệt."
  },
  {
    "answer": "storage",
    "short_mean": "kho chứa đồ",
    "mean": "Khu vực hoặc phòng dành chứa đồ đạc cá nhân.",
    "en_ex": "There is extra storage space in the basement.",
    "vi_ex": "Có thêm không gian kho chứa đồ ở dưới tầng hầm."
  },
  {
    "answer": "realtor/ estate agent",
    "short_mean": "môi giới bất động sản",
    "mean": "Người hoặc công ty tư vấn mua bán cho thuê nhà đất.",
    "en_ex": "The estate agent arranged several house viewings for us.",
    "vi_ex": "Người môi giới bất động sản đã sắp xếp nhiều buổi xem nhà cho chúng tôi."
  },
  {
    "answer": "moving truck/ removal van",
    "short_mean": "xe tải chuyển nhà",
    "mean": "Xe tải chuyên chở đồ đạc khi dọn sang nhà mới.",
    "en_ex": "We hired a moving truck to transport our furniture.",
    "vi_ex": "Chúng tôi đã thuê một chiếc xe tải chuyển nhà để vận chuyển đồ đạc."
  },
  {
    "answer": "boxes",
    "short_mean": "thùng carton đựng đồ",
    "mean": "Các thùng giấy dùng đóng gói đồ đạc khi di chuyển.",
    "en_ex": "Pack fragile items carefully into cardboard boxes.",
    "vi_ex": "Hãy đóng gói các đồ dễ vỡ cẩn thận vào những chiếc thùng carton."
  },
  {
    "answer": "keys",
    "short_mean": "chìa khóa nhà",
    "mean": "Bộ chìa dùng mở khóa cổng và cửa nhà.",
    "en_ex": "The landlord handed over the keys upon signing the contract.",
    "vi_ex": "Chủ nhà đã bàn giao chìa khóa ngay sau khi ký hợp đồng."
  },
  {
    "answer": "rent",
    "short_mean": "tiền thuê nhà",
    "mean": "Số tiền trả định kỳ hàng tháng cho chủ nhà.",
    "en_ex": "Monthly rent is due on the first day of every month.",
    "vi_ex": "Tiền thuê nhà hằng tháng phải thanh toán vào ngày đầu tiên của mỗi tháng."
  },
  {
    "answer": "bills",
    "short_mean": "hóa đơn tiện ích (điện, nước, internet)",
    "mean": "Các chi phí sinh hoạt hằng tháng phát sinh.",
    "en_ex": "Rent includes water and internet bills.",
    "vi_ex": "Tiền thuê nhà đã bao gồm các hóa đơn tiền nước và internet."
  },
  {
    "answer": "lease/ tenancy agreement",
    "short_mean": "hợp đồng thuê nhà",
    "mean": "Văn bản pháp lý ký kết giữa chủ nhà và người thuê.",
    "en_ex": "Read the tenancy agreement carefully before signing.",
    "vi_ex": "Đọc kỹ hợp đồng thuê nhà trước khi ký kết."
  },
  {
    "answer": "landlord",
    "short_mean": "chủ nhà (cho thuê)",
    "mean": "Người sở hữu bất động sản cho người khác thuê.",
    "en_ex": "The landlord agreed to fix the leaking roof promptly.",
    "vi_ex": "Chủ nhà đã đồng ý sửa mái nhà bị rò rỉ một cách nhanh chóng."
  },
  {
    "answer": "tenant",
    "short_mean": "người thuê nhà",
    "mean": "Người trả tiền thuê để sinh sống trong căn nhà.",
    "en_ex": "The tenant must maintain the cleanliness of the property.",
    "vi_ex": "Người thuê nhà phải duy trì sự sạch sẽ của ngôi nhà."
  },
  {
    "answer": "to view a house",
    "short_mean": "đi xem nhà",
    "mean": "Đến khảo sát thực tế căn nhà trước khi quyết định thuê/mua.",
    "en_ex": "We booked an appointment to view a house tomorrow.",
    "vi_ex": "Chúng tôi đã đặt một cuộc hẹn đi xem nhà vào ngày mai."
  },
  {
    "answer": "to pack",
    "short_mean": "đóng gói đồ đạc",
    "mean": "Cho đồ vào thùng vali để chuẩn bị dọn nhà.",
    "en_ex": "It took three days to pack all our possessions.",
    "vi_ex": "Mất ba ngày để đóng gói toàn bộ đồ đạc của chúng tôi."
  },
  {
    "answer": "to unpack",
    "short_mean": "mở/dỡ đồ đạc ra",
    "mean": "Lấy đồ từ thùng carton ra sắp xếp ở nhà mới.",
    "en_ex": "Unpack the kitchen boxes first so we can cook.",
    "vi_ex": "Hãy mở đồ đạc các thùng nhà bếp trước để chúng ta có thể nấu ăn."
  },
  {
    "answer": "to move in",
    "short_mean": "dọn vào ở (nhà mới)",
    "mean": "Bắt đầu chuyển đồ đạc sinh sống tại nơi ở mới.",
    "en_ex": "They are excited to move in next Saturday.",
    "vi_ex": "Họ rất hào hứng dọn vào ở vào thứ Bảy tuần tới."
  },
  {
    "answer": "to move out",
    "short_mean": "dọn đi khỏi (nhà cũ)",
    "mean": "Chuyển hết đồ đạc trả lại nhà cho chủ.",
    "en_ex": "Tenants must give a one-month notice before moving out.",
    "vi_ex": "Người thuê nhà phải thông báo trước một tháng trước khi dọn đi."
  }
];
