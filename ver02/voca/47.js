const VOCA_WORDS = [
  {
    "answer": "passport",
    "short_mean": "hộ chiếu",
    "mean": "Giấy tờ tùy thân chính thức để xuất nhập cảnh giữa các quốc gia.",
    "en_ex": "Make sure your passport is valid for at least six months.",
    "vi_ex": "Hãy đảm bảo hộ chiếu của bạn còn hạn ít nhất sáu tháng."
  },
  {
    "answer": "suitcase",
    "short_mean": "vali",
    "mean": "Túi đựng hành lý có tay kéo và bánh xe.",
    "en_ex": "She packed her clothes into a large red suitcase.",
    "vi_ex": "Cô ấy xếp quần áo vào một chiếc vali lớn màu đỏ."
  },
  {
    "answer": "luggage",
    "short_mean": "hành lý",
    "mean": "Tất cả các loại túi, vali mang theo khi đi du lịch.",
    "en_ex": "Passengers can collect their luggage at baggage claim.",
    "vi_ex": "Hành khách có thể nhận hành lý của mình tại khu vực trả hành lý."
  },
  {
    "answer": "guidebook",
    "short_mean": "sách hướng dẫn du lịch",
    "mean": "Cuốn sách cung cấp thông tin về các địa điểm du lịch.",
    "en_ex": "The guidebook recommended several excellent local restaurants.",
    "vi_ex": "Sách hướng dẫn du lịch đề xuất một số nhà hàng địa phương rất tuyệt vời."
  },
  {
    "answer": "phrasebook",
    "short_mean": "sách mẫu câu giao tiếp",
    "mean": "Cuốn sách nhỏ tổng hợp các câu thoại hữu ích bằng tiếng nước ngoài.",
    "en_ex": "I used an Italian phrasebook to order food in Rome.",
    "vi_ex": "Tôi đã dùng sách mẫu câu tiếng Ý để gọi đồ ăn ở Rome."
  },
  {
    "answer": "one-way ticket",
    "short_mean": "vé một chiều",
    "mean": "Vé di chuyển chỉ áp dụng cho lượt đi.",
    "en_ex": "A one-way ticket to London costs less than a return ticket.",
    "vi_ex": "Một chiếc vé một chiều đến London có giá rẻ hơn vé khứ hồi."
  },
  {
    "answer": "round-trip/return ticket",
    "short_mean": "vé khứ hồi",
    "mean": "Vé di chuyển cho cả chiều đi và chiều về.",
    "en_ex": "I bought a round-trip ticket to New York for my summer holiday.",
    "vi_ex": "Tôi đã mua vé khứ hồi đi New York cho kỳ nghỉ hè của mình."
  },
  {
    "answer": "direct flights",
    "short_mean": "chuyến bay thẳng",
    "mean": "Chuyến bay đi thẳng tới điểm đến không cần quá cảnh.",
    "en_ex": "We prefer direct flights because they save a lot of time.",
    "vi_ex": "Chúng tôi thích các chuyến bay thẳng vì chúng tiết kiệm rất nhiều thời gian."
  },
  {
    "answer": "window seat",
    "short_mean": "chỗ ngồi cạnh cửa sổ",
    "mean": "Ghế ngồi nằm ngay sát cửa sổ trên máy bay hoặc tàu.",
    "en_ex": "He loves the window seat so he can watch the clouds.",
    "vi_ex": "Anh ấy thích chỗ ngồi cạnh cửa sổ để có thể ngắm mây."
  },
  {
    "answer": "boarding pass",
    "short_mean": "thẻ lên máy bay",
    "mean": "Thẻ cấp cho hành khách sau khi làm thủ tục để lên máy bay.",
    "en_ex": "Keep your boarding pass handy when walking through gate security.",
    "vi_ex": "Hãy cầm sẵn thẻ lên máy bay khi đi qua cửa kiểm tra an ninh."
  },
  {
    "answer": "departure gate",
    "short_mean": "cửa khởi hành",
    "mean": "Cửa nơi hành khách tập trung chuẩn bị bước lên máy bay.",
    "en_ex": "Please proceed to departure gate 12 immediately.",
    "vi_ex": "Vui lòng di chuyển đến cửa khởi hành số 12 ngay lập tức."
  },
  {
    "answer": "passport control",
    "short_mean": "kiểm tra hộ chiếu / xuất nhập cảnh",
    "mean": "Khu vực kiểm tra giấy tờ xuất nhập cảnh tại sân bay.",
    "en_ex": "There was a long line at passport control.",
    "vi_ex": "Có một hàng dài chờ đợi tại khu vực kiểm tra hộ chiếu."
  },
  {
    "answer": "walking vacation/holiday",
    "short_mean": "kỳ nghỉ đi bộ / leo núi dã ngoại",
    "mean": "Chuyến du lịch tập trung vào việc đi bộ khám phá thiên nhiên.",
    "en_ex": "They enjoyed a peaceful walking vacation in the Swiss Alps.",
    "vi_ex": "Họ đã tận hưởng một kỳ nghỉ đi bộ yên bình trên dãy Alps Thụy Sĩ."
  },
  {
    "answer": "all-inclusive",
    "short_mean": "trọn gói",
    "mean": "Gói du lịch bao gồm trọn gói tiền phòng, ăn uống và dịch vụ.",
    "en_ex": "We booked an all-inclusive resort deal in Mexico.",
    "vi_ex": "Chúng tôi đã đặt gói nghỉ dưỡng trọn gói ở Mexico."
  },
  {
    "answer": "guided tour",
    "short_mean": "chuyến tham quan có hướng dẫn viên",
    "mean": "Tour du lịch có hướng dẫn viên đi cùng giới thiệu thông tin.",
    "en_ex": "We took a guided tour of the ancient castle.",
    "vi_ex": "Chúng tôi đã tham gia một chuyến tham quan có hướng dẫn viên tại lâu đài cổ."
  },
  {
    "answer": "to go on a vacation/holiday",
    "short_mean": "đi nghỉ mát, đi du lịch",
    "mean": "Thực hiện chuyến đi chơi thư giãn nghỉ dưỡng.",
    "en_ex": "Our family goes on a vacation every July.",
    "vi_ex": "Gia đình chúng tôi đi nghỉ mát vào mỗi tháng Bảy."
  },
  {
    "answer": "to book a vacation/holiday",
    "short_mean": "đặt tour / đặt kỳ nghỉ",
    "mean": "Thực hiện đặt phòng và vé cho chuyến du lịch.",
    "en_ex": "It is cheaper to book a vacation months in advance.",
    "vi_ex": "Đặt kỳ nghỉ trước nhiều tháng sẽ rẻ hơn."
  },
  {
    "answer": "to pack your bags",
    "short_mean": "sắp xếp hành lý / thu dọn đồ đạc",
    "mean": "Cho quần áo đồ đạc vào vali chuẩn bị đi chơi.",
    "en_ex": "Start packing your bags tonight so we can leave early.",
    "vi_ex": "Bắt đầu thu dọn đồ đạc vào tối nay để chúng ta có thể đi sớm."
  },
  {
    "answer": "to board a plane",
    "short_mean": "bước lên máy bay",
    "mean": "Lên máy bay trước khi cất cánh.",
    "en_ex": "Passengers are requested to board the plane now.",
    "vi_ex": "Hành khách được yêu cầu lên máy bay ngay bây giờ."
  },
  {
    "answer": "to land at the airport",
    "short_mean": "hạ cánh xuống sân bay",
    "mean": "Máy bay tiếp đất hoàn thành chuyến bay.",
    "en_ex": "The flight landed at the airport on schedule.",
    "vi_ex": "Chuyến bay đã hạ cánh xuống sân bay đúng giờ."
  },
  {
    "answer": "to be delayed",
    "short_mean": "bị trì hoãn, bị chậm chuyến",
    "mean": "Chuyến bay/chuyến tàu bị lùi thời gian khởi hành.",
    "en_ex": "Our flight was delayed due to heavy snowfall.",
    "vi_ex": "Chuyến bay của chúng tôi bị trì hoãn do tuyết rơi dày."
  },
  {
    "answer": "to go sightseeing",
    "short_mean": "đi ngắm cảnh, tham quan",
    "mean": "Đi đến các danh lam thắng cảnh để chụp ảnh ngắm cảnh.",
    "en_ex": "We spent the entire morning going sightseeing around the city.",
    "vi_ex": "Chúng tôi đã dành cả buổi sáng đi ngắm cảnh quanh thành phố."
  },
  {
    "answer": "to go abroad",
    "short_mean": "đi nước ngoài",
    "mean": "Di chuyển đến một quốc gia khác.",
    "en_ex": "She wants to go abroad to study master's degree.",
    "vi_ex": "Cô ấy muốn đi nước ngoài để học cao học."
  },
  {
    "answer": "to go on a cruise",
    "short_mean": "đi du thuyền trên biển",
    "mean": "Thực hiện chuyến du lịch trên tàu thủy sang trọng.",
    "en_ex": "They plan to go on a cruise in the Caribbean next year.",
    "vi_ex": "Họ dự định đi du thuyền trên biển Caribbean vào năm tới."
  },
  {
    "answer": "to go on an excursion",
    "short_mean": "đi dã ngoại / đi tham quan ngắn ngày",
    "mean": "Thực hiện một chuyến đi chơi ngắn trong ngày.",
    "en_ex": "The hotel offers students a chance to go on an excursion to nearby ruins.",
    "vi_ex": "Khách sạn cung cấp cho sinh viên cơ hội đi tham quan ngắn ngày tới các tàn tích lân cận."
  },
  {
    "answer": "hotel",
    "short_mean": "khách sạn",
    "mean": "Cơ sở lưu trú có đầy đủ dịch vụ cho khách du lịch.",
    "en_ex": "We stayed at a five-star hotel near the beach.",
    "vi_ex": "Chúng tôi đã ở tại một khách sạn năm sao gần bãi biển."
  },
  {
    "answer": "apartment",
    "short_mean": "căn hộ",
    "mean": "Nơi ở khép kín gồm phòng ngủ, bếp và phòng khách.",
    "en_ex": "Renting an apartment is ideal for a long-term stay.",
    "vi_ex": "Thuê một căn hộ là lựa chọn lý tưởng cho chuyến ở lại dài ngày."
  },
  {
    "answer": "hostel",
    "short_mean": "nhà nghỉ giá rẻ, ký túc xá du lịch",
    "mean": "Nơi ở giá rẻ thường chung phòng với các du khách khác.",
    "en_ex": "Backpackers often stay in a hostel to save money.",
    "vi_ex": "Dân du lịch bụi thường ở nhà nghỉ giá rẻ để tiết kiệm tiền."
  },
  {
    "answer": "guesthouse",
    "short_mean": "nhà khách, nhà nghỉ gia đình",
    "mean": "Cơ sở lưu trú quy mô nhỏ do hộ gia đình kinh doanh.",
    "en_ex": "The guesthouse served a delicious homemade breakfast.",
    "vi_ex": "Nhà khách phục vụ bữa sáng tự làm rất ngon."
  },
  {
    "answer": "villa",
    "short_mean": "biệt thự nghỉ dưỡng",
    "mean": "Căn nhà riêng biệt sang trọng dành cho gia đình hoặc nhóm bạn.",
    "en_ex": "They rented a beachside villa for their summer vacation.",
    "vi_ex": "Họ đã thuê một biệt thự bên bãi biển cho kỳ nghỉ hè."
  },
  {
    "answer": "chalet",
    "short_mean": "nhà gỗ kiểu Thụy Sĩ",
    "mean": "Căn nhà gỗ đặc trưng ở vùng núi đồi.",
    "en_ex": "We stayed in a cozy wooden chalet during our ski trip.",
    "vi_ex": "Chúng tôi ở trong một căn nhà gỗ ấm cúng trong chuyến đi trượt tuyết."
  },
  {
    "answer": "cabin",
    "short_mean": "nhà gỗ nhỏ, buồng tàu/máy bay",
    "mean": "Căn nhà gỗ nhỏ ở vùng nông thôn hoặc phòng trên tàu.",
    "en_ex": "They spent the weekend in a rustic cabin in the woods.",
    "vi_ex": "Họ đã dành cuối tuần trong một căn nhà gỗ nhỏ mộc mạc trong rừng."
  },
  {
    "answer": "front desk/reception",
    "short_mean": "quầy lễ tân",
    "mean": "Nơi đón tiếp khách và xử lý thủ tục nhận/trả phòng.",
    "en_ex": "Leave your room key at the front desk when you leave.",
    "vi_ex": "Hãy gửi lại chìa khóa phòng tại quầy lễ tân khi bạn đi ra ngoài."
  },
  {
    "answer": "single room",
    "short_mean": "phòng đơn",
    "mean": "Phòng khách sạn dành cho một người ở.",
    "en_ex": "I booked a single room for my business trip.",
    "vi_ex": "Tôi đã đặt một phòng đơn cho chuyến công tác của mình."
  },
  {
    "answer": "double room",
    "short_mean": "phòng đôi (giường đôi)",
    "mean": "Phòng khách sạn có một giường lớn dành cho hai người.",
    "en_ex": "The couple reserved a double room with a balcony.",
    "vi_ex": "Cặp đôi đã đặt một phòng đôi có ban công."
  },
  {
    "answer": "twin beds",
    "short_mean": "hai giường đơn",
    "mean": "Phòng có hai giường đơn riêng biệt.",
    "en_ex": "We requested a room with twin beds for my friend and me.",
    "vi_ex": "Chúng tôi đã yêu cầu một phòng có hai giường đơn cho tôi và bạn tôi."
  },
  {
    "answer": "dorm",
    "short_mean": "phòng tập thể",
    "mean": "Phòng ngủ lớn có nhiều giường tầng dành cho nhiều khách.",
    "en_ex": "The hostel dorm has eight bunk beds.",
    "vi_ex": "Phòng tập thể của nhà nghỉ có tám giường tầng."
  },
  {
    "answer": "en-suite/bathroom",
    "short_mean": "phòng tắm riêng",
    "mean": "Phòng tắm nằm ngay trong phòng ngủ.",
    "en_ex": "All bedrooms in this hotel come with an en-suite bathroom.",
    "vi_ex": "Tất cả các phòng ngủ trong khách sạn này đều có phòng tắm riêng."
  },
  {
    "answer": "safe",
    "short_mean": "két an toàn",
    "mean": "Hộp kim loại khóa bảo vệ đồ có giá trị trong phòng.",
    "en_ex": "Store your passports and jewelry in the room safe.",
    "vi_ex": "Cất hộ chiếu và trang sức của bạn trong két an toàn của phòng."
  },
  {
    "answer": "room service",
    "short_mean": "dịch vụ phục vụ ăn uống tại phòng",
    "mean": "Dịch vụ giao đồ ăn nước uống tận phòng khách sạn.",
    "en_ex": "We ordered room service after arriving late at night.",
    "vi_ex": "Chúng tôi đã gọi dịch vụ phục vụ tại phòng sau khi đến muộn vào ban đêm."
  },
  {
    "answer": "laundry service",
    "short_mean": "dịch vụ giặt ủi",
    "mean": "Dịch vụ giặt sấy quần áo cho khách lưu trú.",
    "en_ex": "The hotel laundry service washed and ironed my suits.",
    "vi_ex": "Dịch vụ giặt ủi của khách sạn đã giặt và là ủi bộ vest của tôi."
  },
  {
    "answer": "room with a view",
    "short_mean": "phòng có tầm nhìn đẹp",
    "mean": "Phòng khách sạn có cửa sổ ngắm được cảnh quan xung quanh.",
    "en_ex": "We requested a room with a view of the ocean.",
    "vi_ex": "Chúng tôi yêu cầu một phòng có tầm nhìn hướng ra đại dương."
  },
  {
    "answer": "no vacancies",
    "short_mean": "hết phòng",
    "mean": "Thông báo khách sạn đã kín phòng không còn chỗ trống.",
    "en_ex": "The sign outside said 'no vacancies' so we had to look elsewhere.",
    "vi_ex": "Biển báo bên ngoài ghi 'hết phòng' nên chúng tôi phải tìm nơi khác."
  },
  {
    "answer": "vacancies",
    "short_mean": "còn phòng trống",
    "mean": "Thông báo khách sạn vẫn còn phòng cho khách thuê.",
    "en_ex": "The motel has vacancies for tonight.",
    "vi_ex": "Nhà nghỉ vẫn còn phòng trống cho đêm nay."
  },
  {
    "answer": "bed and breakfast",
    "short_mean": "mô hình lưu trú kèm bữa sáng (B&B)",
    "mean": "Cơ sở lưu trú cung cấp chỗ ngủ đêm kèm bữa ăn sáng.",
    "en_ex": "We stayed at a charming bed and breakfast in the countryside.",
    "vi_ex": "Chúng tôi đã ở tại một mô hình B&B duyên dáng ở vùng nông thôn."
  },
  {
    "answer": "to make a reservation",
    "short_mean": "đặt phòng trước",
    "mean": "Liên hệ giữ chỗ/phòng trước ngày đến.",
    "en_ex": "You should make a reservation at least two weeks in advance.",
    "vi_ex": "Bạn nên đặt phòng trước ít nhất hai tuần."
  },
  {
    "answer": "to rent a cottage",
    "short_mean": "thuê một căn nhà nhỏ",
    "mean": "Thuê nhà nhỏ ở vùng quê để nghỉ dưỡng.",
    "en_ex": "We decided to rent a cottage near the lake for the weekend.",
    "vi_ex": "Chúng tôi quyết định thuê một căn nhà nhỏ gần hồ cho cuối tuần."
  },
  {
    "answer": "to stay in a hotel",
    "short_mean": "ở trong khách sạn",
    "mean": "Lưu trú tại khách sạn trong chuyến đi.",
    "en_ex": "During our trip to Paris, we chose to stay in a hotel near the Eiffel Tower.",
    "vi_ex": "Trong chuyến đi Paris, chúng tôi chọn ở trong khách sạn gần Tháp Eiffel."
  },
  {
    "answer": "to check in",
    "short_mean": "làm thủ tục nhận phòng",
    "mean": "Đăng ký thông tin và lấy chìa khóa khi đến khách sạn.",
    "en_ex": "Guests can check in at the front desk after 2 PM.",
    "vi_ex": "Khách có thể làm thủ tục nhận phòng tại quầy lễ tân sau 2 giờ chiều."
  },
  {
    "answer": "to check out",
    "short_mean": "làm thủ tục trả phòng",
    "mean": "Trả lại chìa khóa phòng và thanh toán hóa đơn khi rời đi.",
    "en_ex": "We need to check out before 11 AM tomorrow.",
    "vi_ex": "Chúng tôi cần làm thủ tục trả phòng trước 11 giờ sáng mai."
  }
];
