const VOCA_WORDS = [
  {
    "answer": "north",
    "short_mean": "hướng bắc",
    "mean": "Một trong bốn hướng chính trên la bàn, ngược với hướng nam.",
    "en_ex": "The compass needle points directly to the north.",
    "vi_ex": "Kim la bàn chỉ thẳng về hướng bắc."
  },
  {
    "answer": "west",
    "short_mean": "hướng tây",
    "mean": "Hướng mặt trời lặn, vuông góc với hướng bắc.",
    "en_ex": "The sun sets in the west every evening.",
    "vi_ex": "Mặt trời lặn ở hướng tây vào mỗi buổi chiều."
  },
  {
    "answer": "east",
    "short_mean": "hướng đông",
    "mean": "Hướng mặt trời mọc, ngược với hướng tây.",
    "en_ex": "The sun rises in the east.",
    "vi_ex": "Mặt trời mọc ở hướng đông."
  },
  {
    "answer": "south",
    "short_mean": "hướng nam",
    "mean": "Một trong bốn hướng chính, ngược với hướng bắc.",
    "en_ex": "Birds fly south for the winter.",
    "vi_ex": "Chim bay về hướng nam vào mùa đông."
  },
  {
    "answer": "compass",
    "short_mean": "la bàn",
    "mean": "Dụng cụ dùng để xác định hướng đi.",
    "en_ex": "Always bring a compass when hiking in the mountains.",
    "vi_ex": "Luôn mang theo la bàn khi đi leo núi."
  },
  {
    "answer": "direction",
    "short_mean": "phương hướng, hướng đi",
    "mean": "Đường hướng mà ai đó hoặc cái gì đó đang di chuyển.",
    "en_ex": "We are traveling in the right direction.",
    "vi_ex": "Chúng ta đang di chuyển đúng hướng."
  },
  {
    "answer": "scale",
    "short_mean": "tỷ lệ bản đồ",
    "mean": "Tỷ lệ giữa khoảng cách trên bản đồ và khoảng cách thực tế.",
    "en_ex": "The scale of this map is 1:50,000.",
    "vi_ex": "Tỷ lệ của bản đồ này là 1:50.000."
  },
  {
    "answer": "key",
    "short_mean": "chú giải bản đồ",
    "mean": "Bảng giải thích các ký hiệu dùng trên bản đồ.",
    "en_ex": "Check the map key to find out what the symbols mean.",
    "vi_ex": "Xem chú giải bản đồ để biết các ký hiệu có nghĩa là gì."
  },
  {
    "answer": "roadmap/streetmap",
    "short_mean": "bản đồ đường đi, bản đồ phố",
    "mean": "Bản đồ thể hiện hệ thống đường giao thông.",
    "en_ex": "He checked the roadmap to find the best route to the beach.",
    "vi_ex": "Anh ấy xem bản đồ đường đi để tìm tuyến đường tốt nhất tới bãi biển."
  },
  {
    "answer": "distance",
    "short_mean": "khoảng cách",
    "mean": "Độ dài không gian giữa hai điểm.",
    "en_ex": "What is the distance between Hanoi and Da Nang?",
    "vi_ex": "Khoảng cách giữa Hà Nội và Đà Nẵng là bao nhiêu?"
  },
  {
    "answer": "meter/metre",
    "short_mean": "mét (m)",
    "mean": "Đơn vị đo độ dài trong hệ mét.",
    "en_ex": "The pool is fifty meters long.",
    "vi_ex": "Hồ bơi dài năm mươi mét."
  },
  {
    "answer": "kilometer/kilometre",
    "short_mean": "ki-lô-mét (km)",
    "mean": "Đơn vị đo khoảng cách bằng 1.000 mét.",
    "en_ex": "We walked three kilometers to reach the village.",
    "vi_ex": "Chúng tôi đã đi bộ ba ki-lô-mét để tới làng."
  },
  {
    "answer": "mile",
    "short_mean": "dặm (đơn vị đo độ dài)",
    "mean": "Đơn vị đo khoảng cách tương đương khoảng 1,6 km.",
    "en_ex": "The gas station is just one mile ahead.",
    "vi_ex": "Trạm xăng chỉ cách đây một dặm phía trước."
  },
  {
    "answer": "yard",
    "short_mean": "thước (yard)",
    "mean": "Đơn vị đo độ dài bằng 3 feet hay khoảng 0,914 mét.",
    "en_ex": "The football field is 100 yards long.",
    "vi_ex": "Sân bóng đá dài 100 thước."
  },
  {
    "answer": "intersection/crossroads",
    "short_mean": "ngã tư, giao lộ",
    "mean": "Nơi hai hoặc nhiều con đường cắt nhau.",
    "en_ex": "Turn left when you reach the next intersection.",
    "vi_ex": "Rẽ trái khi bạn đến ngã tư tiếp theo."
  },
  {
    "answer": "signpost",
    "short_mean": "cột biển chỉ đường",
    "mean": "Cột có gắn biển báo hướng đi và khoảng cách.",
    "en_ex": "The signpost indicates that Oxford is ten miles away.",
    "vi_ex": "Cột biển chỉ đường cho biết Oxford cách đó mười dặm."
  },
  {
    "answer": "avenue",
    "short_mean": "đại lộ",
    "mean": "Con đường rộng lớn, thường có cây xanh hai bên.",
    "en_ex": "Fifth Avenue is one of the most famous streets in New York.",
    "vi_ex": "Đại lộ Số 5 là một trong những con đường nổi tiếng nhất ở New York."
  },
  {
    "answer": "block",
    "short_mean": "khối nhà, dẫy phố",
    "mean": "Khoảng không gian giữa các con đường cắt nhau trong thành phố.",
    "en_ex": "Walk two blocks and the hotel will be on your left.",
    "vi_ex": "Đi bộ hai dãy phố và khách sạn sẽ nằm bên tay trái của bạn."
  },
  {
    "answer": "street",
    "short_mean": "đường phố",
    "mean": "Con đường trong đô thị có nhà cửa ở hai bên.",
    "en_ex": "Children are playing football on the street.",
    "vi_ex": "Trẻ em đang chơi bóng đá trên đường phố."
  },
  {
    "answer": "bend in the road",
    "short_mean": "khúc ngoặt, đoạn đường uốn cong",
    "mean": "Đoạn đường đổi hướng uốn cong.",
    "en_ex": "Drive carefully around the bend in the road.",
    "vi_ex": "Hãy lái xe cẩn thận quanh khúc ngoặt trên đường."
  },
  {
    "answer": "junction",
    "short_mean": "điểm giao nhau",
    "mean": "Nơi các tuyến đường nối kết hợp lại với nhau.",
    "en_ex": "Take the second exit at the highway junction.",
    "vi_ex": "Đi theo lối ra thứ hai tại điểm giao nhau trên đường cao tốc."
  },
  {
    "answer": "turn/turning",
    "short_mean": "lối rẽ",
    "mean": "Điểm có con đường phụ rẽ sang hướng khác.",
    "en_ex": "Take the first turning on the right.",
    "vi_ex": "Đi theo lối rẽ đầu tiên bên tay phải."
  },
  {
    "answer": "main road",
    "short_mean": "đường chính",
    "mean": "Tuyến đường lớn có nhiều lưu lượng xe cộ.",
    "en_ex": "Turn onto the main road to get to the city center.",
    "vi_ex": "Rẽ vào đường chính để đi đến trung tâm thành phố."
  },
  {
    "answer": "freeway/motorway",
    "short_mean": "đường cao tốc",
    "mean": "Đường dành riêng cho ô tô chạy tốc độ cao không có ngã tư.",
    "en_ex": "Driving on the freeway reduces travel time significantly.",
    "vi_ex": "Lái xe trên đường cao tốc giúp giảm đáng kể thời gian di chuyển."
  },
  {
    "answer": "one-way street",
    "short_mean": "đường một chiều",
    "mean": "Con đường chỉ cho phép xe chạy theo một hướng.",
    "en_ex": "Be careful not to drive down a one-way street in the wrong direction.",
    "vi_ex": "Hãy cẩn thận đừng lái xe ngược chiều vào đường một chiều."
  },
  {
    "answer": "sidewalk/pavement",
    "short_mean": "vỉa hè, lề đường",
    "mean": "Lối đi dành riêng cho người đi bộ dọc theo con đường.",
    "en_ex": "Pedestrians should always walk on the sidewalk.",
    "vi_ex": "Người đi bộ nên luôn luôn đi trên vỉa hè."
  },
  {
    "answer": "shoulder/hard shoulder",
    "short_mean": "lề đường dừng khẩn cấp",
    "mean": "Dải đất/đường cạnh cao tốc dành cho xe dừng khẩn cấp.",
    "en_ex": "If your car breaks down, pull over onto the hard shoulder.",
    "vi_ex": "Nếu xe của bạn bị hỏng, hãy tấp vào lề đường dừng khẩn cấp."
  },
  {
    "answer": "footpath",
    "short_mean": "đường đi bộ, lối đi nhỏ",
    "mean": "Con đường hẹp dành cho người đi bộ qua cánh đồng hoặc rừng.",
    "en_ex": "Follow the footpath through the woods to reach the river.",
    "vi_ex": "Đi theo con đường đi bộ qua khu rừng để đến bờ sông."
  },
  {
    "answer": "pedestrianized street",
    "short_mean": "phố đi bộ",
    "mean": "Con đường cấm các phương tiện xe cộ, dành riêng cho người đi bộ.",
    "en_ex": "The city center features a lively pedestrianized street full of cafes.",
    "vi_ex": "Trung tâm thành phố có một phố đi bộ nhộn nhịp đầy các quán cà phê."
  },
  {
    "answer": "here",
    "short_mean": "ở đây",
    "mean": "Vị trí tại nơi người nói đang đứng.",
    "en_ex": "Wait here until I come back.",
    "vi_ex": "Hãy đợi ở đây cho đến khi tôi quay lại."
  },
  {
    "answer": "there",
    "short_mean": "ở đó, đằng kia",
    "mean": "Vị trí ở khoảng cách xa người nói.",
    "en_ex": "The museum is located over there, next to the bank.",
    "vi_ex": "Bảo tàng nằm ở đằng kia, bên cạnh ngân hàng."
  },
  {
    "answer": "next to",
    "short_mean": "bên cạnh",
    "mean": "Vị trí sát liền kề bên một vật thể khác.",
    "en_ex": "The pharmacy is right next to the bakery.",
    "vi_ex": "Hiệu thuốc nằm ngay bên cạnh cửa hàng bánh mì."
  },
  {
    "answer": "across from/opposite",
    "short_mean": "đối diện",
    "mean": "Nằm ở phía bên kia con đường hoặc khoảng không gian.",
    "en_ex": "The hotel is across from the train station.",
    "vi_ex": "Khách sạn nằm đối diện ga tàu hỏa."
  },
  {
    "answer": "between",
    "short_mean": "ở giữa",
    "mean": "Vị trí ở khoảng giữa hai vật hoặc điểm.",
    "en_ex": "The cafe is situated between the library and the post office.",
    "vi_ex": "Quán cà phê nằm ở giữa thư viện và bưu điện."
  },
  {
    "answer": "on the corner",
    "short_mean": "ở góc đường",
    "mean": "Vị trí tại giao điểm của hai con đường.",
    "en_ex": "There is a convenience store on the corner of the street.",
    "vi_ex": "Có một cửa hàng tiện lợi ở góc đường."
  },
  {
    "answer": "behind",
    "short_mean": "phía sau",
    "mean": "Vị trí ở mặt sau của một đối tượng.",
    "en_ex": "The parking lot is located behind the building.",
    "vi_ex": "Bãi đỗ xe nằm ở phía sau tòa nhà."
  },
  {
    "answer": "in front of",
    "short_mean": "phía trước",
    "mean": "Vị trí ở phía trước mặt của một đối tượng.",
    "en_ex": "A bus stopped in front of the school gate.",
    "vi_ex": "Một chiếc xe buýt đã dừng ở phía trước cổng trường."
  },
  {
    "answer": "on the right",
    "short_mean": "ở bên tay phải",
    "mean": "Phía bên phải khi nhìn về hướng chỉ định.",
    "en_ex": "You will see the museum on the right.",
    "vi_ex": "Bạn sẽ thấy bảo tàng ở bên tay phải."
  },
  {
    "answer": "on the left",
    "short_mean": "ở bên tay trái",
    "mean": "Phía bên trái khi nhìn về hướng chỉ định.",
    "en_ex": "The entrance is on the left side of the main hall.",
    "vi_ex": "Lối vào nằm ở bên tay trái của đại sảnh."
  },
  {
    "answer": "to go/turn left",
    "short_mean": "rẽ trái",
    "mean": "Đổi hướng di chuyển về phía bên trái.",
    "en_ex": "Turn left at the traffic light.",
    "vi_ex": "Rẽ trái tại đèn giao thông."
  },
  {
    "answer": "to go/turn right",
    "short_mean": "rẽ phải",
    "mean": "Đổi hướng di chuyển về phía bên phải.",
    "en_ex": "Go right when you reach the end of the road.",
    "vi_ex": "Rẽ phải khi bạn đến cuối đường."
  },
  {
    "answer": "to go straight ahead/on",
    "short_mean": "đi thẳng",
    "mean": "Tiếp tục di chuyển về phía trước không rẽ.",
    "en_ex": "Go straight ahead for about two hundred meters.",
    "vi_ex": "Đi thẳng khoảng hai trăm mét."
  },
  {
    "answer": "to stop at (the hotel)",
    "short_mean": "dừng lại tại (khách sạn)",
    "mean": "Dừng hành trình tại một địa điểm.",
    "en_ex": "We will stop at the hotel to drop off our luggage.",
    "vi_ex": "Chúng tôi sẽ dừng lại tại khách sạn để cất hành lý."
  },
  {
    "answer": "to go past (the restaurant)",
    "short_mean": "đi qua/ngang qua (nhà hàng)",
    "mean": "Di chuyển vượt qua vị trí của một địa điểm.",
    "en_ex": "Go past the restaurant and turn right at the bank.",
    "vi_ex": "Đi ngang qua nhà hàng và rẽ phải ở ngân hàng."
  },
  {
    "answer": "to take the first left",
    "short_mean": "rẽ ở lối rẽ đầu tiên bên trái",
    "mean": "Đi vào con đường rẽ trái đầu tiên gặp trên đường.",
    "en_ex": "Take the first left after crossing the bridge.",
    "vi_ex": "Rẽ vào lối rẽ đầu tiên bên trái sau khi qua cầu."
  },
  {
    "answer": "to take the second right",
    "short_mean": "rẽ ở lối rẽ thứ hai bên phải",
    "mean": "Đi vào con đường rẽ phải thứ hai gặp trên đường.",
    "en_ex": "Take the second right onto Main Street.",
    "vi_ex": "Rẽ vào lối rẽ thứ hai bên phải để vào Đường Chính."
  },
  {
    "answer": "to read a map",
    "short_mean": "đọc bản đồ",
    "mean": "Xem và hiểu thông tin hướng đi trên bản đồ.",
    "en_ex": "Knowing how to read a map is an essential survival skill.",
    "vi_ex": "Biết cách đọc bản đồ là một kỹ năng sinh tồn thiết yếu."
  },
  {
    "answer": "to plan your route",
    "short_mean": "lên kế hoạch cho lộ trình",
    "mean": "Xác định các tuyến đường sẽ đi trước chuyến khởi hành.",
    "en_ex": "Use a navigation app to plan your route before driving.",
    "vi_ex": "Sử dụng ứng dụng dẫn đường để lên kế hoạch cho lộ trình trước khi lái xe."
  },
  {
    "answer": "to ask directions",
    "short_mean": "hỏi đường",
    "mean": "Hỏi người khác chỉ giúp đường đến địa điểm cần tìm.",
    "en_ex": "If you get lost, don't hesitate to ask directions from a local.",
    "vi_ex": "Nếu bạn bị lạc, đừng ngần ngại hỏi đường từ người địa phương."
  }
];
