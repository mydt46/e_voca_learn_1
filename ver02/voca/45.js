const VOCA_WORDS = [
  {
    "answer": "driver's license/licence",
    "short_mean": "bằng lái xe",
    "mean": "Giấy phép chính thức cho phép điều khiển xe cơ giới.",
    "en_ex": "You must show your driver's license when requested by the police.",
    "vi_ex": "Bạn phải xuất trình bằng lái xe khi cảnh sát yêu cầu."
  },
  {
    "answer": "insurance",
    "short_mean": "bảo hiểm xe",
    "mean": "Hợp đồng bồi thường thiệt hại khi xảy ra rủi ro hoặc tai nạn.",
    "en_ex": "It is illegal to drive a vehicle without valid insurance.",
    "vi_ex": "Lái xe mà không có bảo hiểm hợp lệ là vi phạm pháp luật."
  },
  {
    "answer": "seatbelt",
    "short_mean": "dây an toàn",
    "mean": "Dây đeo giữ chặt hành khách để bảo vệ khi xe va chạm.",
    "en_ex": "Always fasten your seatbelt before starting the engine.",
    "vi_ex": "Luôn thắt dây an toàn trước khi khởi động động cơ."
  },
  {
    "answer": "gas station/petrol station",
    "short_mean": "trạm xăng",
    "mean": "Cửa hàng cung cấp nhiên liệu cho xe cộ.",
    "en_ex": "We stopped at a gas station to fill up the tank.",
    "vi_ex": "Chúng tôi đã dừng lại ở một trạm xăng để đổ đầy bình."
  },
  {
    "answer": "engine",
    "short_mean": "động cơ xe",
    "mean": "Bộ phận chuyển hóa nhiên liệu thành động lực di chuyển xe.",
    "en_ex": "The engine made a strange noise when I turned the key.",
    "vi_ex": "Động cơ phát ra tiếng động lạ khi tôi vặn chìa khóa."
  },
  {
    "answer": "turn signal/indicator",
    "short_mean": "đèn xi-nhan",
    "mean": "Đèn báo hiệu hướng rẽ của xe.",
    "en_ex": "Use your turn signal before changing lanes on the highway.",
    "vi_ex": "Hãy bật đèn xi-nhan trước khi chuyển làn trên đường cao tốc."
  },
  {
    "answer": "steering wheel",
    "short_mean": "vô-lăng, tay lái",
    "mean": "Bánh lái dùng để điều khiển hướng di chuyển của xe.",
    "en_ex": "Keep both hands on the steering wheel while driving.",
    "vi_ex": "Hãy giữ cả hai tay trên vô-lăng trong khi lái xe."
  },
  {
    "answer": "fuel",
    "short_mean": "nhiên liệu",
    "mean": "Chất đốt cung cấp năng lượng cho động cơ hoạt động.",
    "en_ex": "The car is running low on fuel.",
    "vi_ex": "Chiếc xe đang sắp hết nhiên liệu."
  },
  {
    "answer": "gasoline/petrol",
    "short_mean": "xăng",
    "mean": "Nhiên liệu lỏng tinh chế từ dầu mỏ dùng cho xe hơi.",
    "en_ex": "The price of gasoline has increased significantly this week.",
    "vi_ex": "Giá xăng đã tăng đáng kể trong tuần này."
  },
  {
    "answer": "diesel",
    "short_mean": "dầu diesel",
    "mean": "Loại nhiên liệu dùng cho động cơ diesel.",
    "en_ex": "Many heavy trucks run on diesel fuel.",
    "vi_ex": "Nhiều xe tải hạng nặng chạy bằng nhiên liệu dầu diesel."
  },
  {
    "answer": "oil",
    "short_mean": "dầu nhớt động cơ",
    "mean": "Chất bôi trơn giúp động cơ vận hành trơn tru.",
    "en_ex": "You should change the engine oil every 5,000 miles.",
    "vi_ex": "Bạn nên thay dầu nhớt động cơ sau mỗi 5.000 dặm."
  },
  {
    "answer": "auto repair shop/garage",
    "short_mean": "xưởng sửa chữa ô tô",
    "mean": "Nơi bảo dưỡng và sửa chữa các hư hỏng của ô tô.",
    "en_ex": "I took my car to the auto repair shop to fix the brakes.",
    "vi_ex": "Tôi đã mang xe đến xưởng sửa chữa ô tô để sửa phanh."
  },
  {
    "answer": "mechanic",
    "short_mean": "thợ sửa xe, thợ máy",
    "mean": "Người chuyên sửa chữa và bảo dưỡng máy móc, động cơ.",
    "en_ex": "The mechanic inspected the engine and replaced the spark plugs.",
    "vi_ex": "Thợ máy đã kiểm tra động cơ và thay bu-gi."
  },
  {
    "answer": "flat tire/flat tyre",
    "short_mean": "lốp xe bị xẹp/thủng",
    "mean": "Tình trạng lốp xe bị mất hết không khí bên trong.",
    "en_ex": "We got a flat tire on our way to the beach.",
    "vi_ex": "Chúng tôi bị xẹp lốp xe trên đường đến bãi biển."
  },
  {
    "answer": "wipers",
    "short_mean": "cần gạt nước",
    "mean": "Thiết bị gạt nước mưa trên kính chắn gió của xe.",
    "en_ex": "Turn on the wipers when it starts raining heavily.",
    "vi_ex": "Bật cần gạt nước khi trời bắt đầu mưa to."
  },
  {
    "answer": "pedestrian crossing",
    "short_mean": "vạch kẻ đường cho người đi bộ",
    "mean": "Lối dành riêng cho người đi bộ sang đường an toàn.",
    "en_ex": "Always slow down when approaching a pedestrian crossing.",
    "vi_ex": "Luôn giảm tốc độ khi tiến gần đến vạch sang đường cho người đi bộ."
  },
  {
    "answer": "traffic lights",
    "short_mean": "đèn giao thông",
    "mean": "Đèn tín hiệu điều phối luồng xe tại các ngã tư.",
    "en_ex": "Stop the car when the traffic lights turn red.",
    "vi_ex": "Dừng xe lại khi đèn giao thông chuyển sang màu đỏ."
  },
  {
    "answer": "trunk/boot",
    "short_mean": "cốp xe ô tô",
    "mean": "Khoang chứa đồ phía sau xe ô tô.",
    "en_ex": "Put your luggage in the trunk of the car.",
    "vi_ex": "Hãy đặt hành lý của bạn vào cốp xe ô tô."
  },
  {
    "answer": "hood/bonnet",
    "short_mean": "nắp capo xe",
    "mean": "Nắp đậy khoang động cơ phía trước xe ô tô.",
    "en_ex": "The mechanic opened the hood to check the battery.",
    "vi_ex": "Thợ máy mở nắp capo để kiểm tra ắc quy."
  },
  {
    "answer": "tire/tyre",
    "short_mean": "lốp xe",
    "mean": "Vòng cao su bao quanh bánh xe ô tô.",
    "en_ex": "Check the tire pressure before a long trip.",
    "vi_ex": "Kiểm tra áp suất lốp xe trước một chuyến đi xa."
  },
  {
    "answer": "car",
    "short_mean": "xe ô tô",
    "mean": "Phương tiện di chuyển cá nhân hoặc gia đình 4 bánh.",
    "en_ex": "He bought a brand new electric car last month.",
    "vi_ex": "Anh ấy đã mua một chiếc xe ô tô điện mới tinh tháng trước."
  },
  {
    "answer": "headlight",
    "short_mean": "đèn pha trước",
    "mean": "Đèn chiếu sáng phía trước xe giúp lái xe ban đêm.",
    "en_ex": "Turn on your headlights when driving in the dark.",
    "vi_ex": "Bật đèn pha của bạn khi lái xe trong đêm tối."
  },
  {
    "answer": "wheel",
    "short_mean": "bánh xe",
    "mean": "Bộ phận hình tròn lăn trên mặt đường.",
    "en_ex": "One of the wheels was misaligned after hitting a pothole.",
    "vi_ex": "Một trong các bánh xe bị lệch sau khi sập hố ga."
  },
  {
    "answer": "parking attendant",
    "short_mean": "nhân viên trông/giữ xe",
    "mean": "Người quản lý và thu phí tại bãi đỗ xe.",
    "en_ex": "The parking attendant handed me a ticket as I entered.",
    "vi_ex": "Nhân viên trông xe đưa cho tôi một chiếc vé khi tôi đi vào."
  },
  {
    "answer": "speed camera",
    "short_mean": "camera ghi hình tốc độ",
    "mean": "Thiết bị giám sát và phát hiện xe chạy quá tốc độ cho phép.",
    "en_ex": "A speed camera captured him driving 80 mph in a 50 mph zone.",
    "vi_ex": "Camera tốc độ đã ghi hình anh ấy chạy 80 dặm/giờ trong khu vực giới hạn 50 dặm/giờ."
  },
  {
    "answer": "parking meter",
    "short_mean": "máy thu phí đỗ xe tự động",
    "mean": "Cột tính tiền đỗ xe tự động bên đường.",
    "en_ex": "Insert coins into the parking meter to pay for your stay.",
    "vi_ex": "Cho tiền xu vào máy thu phí đỗ xe để trả tiền đỗ xe."
  },
  {
    "answer": "wheel clamp",
    "short_mean": "khóa bánh xe (phạt đỗ sai)",
    "mean": "Thiết bị khóa cố định bánh xe bị vi phạm quy định đỗ.",
    "en_ex": "His car had a wheel clamp because he parked illegally.",
    "vi_ex": "Xe của anh ấy bị khóa bánh vì anh ấy đỗ xe trái phép."
  },
  {
    "answer": "parking ticket",
    "short_mean": "vé/phiếu phạt đỗ xe trái phép",
    "mean": "Thông báo phạt tiền do đỗ xe sai quy định.",
    "en_ex": "I came back to my car and found a parking ticket on the windshield.",
    "vi_ex": "Tôi quay lại xe và thấy một phiếu phạt đỗ xe trên kính chắn gió."
  },
  {
    "answer": "car wash",
    "short_mean": "tiệm/nơi rửa xe",
    "mean": "Cơ sở chuyên làm sạch bề mặt và nội thất xe ô tô.",
    "en_ex": "I take my car to the automatic car wash every weekend.",
    "vi_ex": "Tôi mang xe đến tiệm rửa xe tự động vào mỗi cuối tuần."
  },
  {
    "answer": "speed limit",
    "short_mean": "tốc độ tối đa cho phép",
    "mean": "Mức tốc độ nhanh nhất được phép lái xe trên đoạn đường.",
    "en_ex": "The speed limit on this highway is 60 miles per hour.",
    "vi_ex": "Tốc độ tối đa cho phép trên đường cao tốc này là 60 dặm một giờ."
  },
  {
    "answer": "road sign",
    "short_mean": "biển báo giao thông",
    "mean": "Bảng chỉ dẫn hoặc cảnh báo đặt bên đường.",
    "en_ex": "Pay attention to the road sign indicating a sharp turn ahead.",
    "vi_ex": "Hãy chú ý đến biển báo giao thông chỉ dẫn khúc ngoặt gấp phía trước."
  },
  {
    "answer": "traffic jam",
    "short_mean": "ùn tắc giao thông, kẹt xe",
    "mean": "Tình trạng xe cộ đông đúc di chuyển rất chậm hoặc đứng yên.",
    "en_ex": "We were stuck in a traffic jam for over an hour.",
    "vi_ex": "Chúng tôi đã bị kẹt trong một trận tắc đường hơn một tiếng đồng hồ."
  },
  {
    "answer": "parking lot/car park",
    "short_mean": "bãi đỗ xe",
    "mean": "Khu vực trống được quy hoạch dành cho xe ô tô đỗ.",
    "en_ex": "The shopping mall has a spacious underground parking lot.",
    "vi_ex": "Trung tâm thương mại có một bãi đỗ xe ngầm rất rộng rãi."
  },
  {
    "answer": "to park",
    "short_mean": "đỗ xe",
    "mean": "Dừng và để xe lại ở một nơi cố định.",
    "en_ex": "It was difficult to find a space to park near the station.",
    "vi_ex": "Thật khó để tìm được một chỗ đỗ xe gần ga."
  },
  {
    "answer": "to set off",
    "short_mean": "khởi hành, lên đường",
    "mean": "Bắt đầu chuyến hành trình.",
    "en_ex": "We plan to set off early tomorrow morning to avoid traffic.",
    "vi_ex": "Chúng tôi dự định khởi hành sớm vào sáng mai để tránh kẹt xe."
  },
  {
    "answer": "to check the oil",
    "short_mean": "kiểm tra dầu nhớt",
    "mean": "Kiểm tra mức và chất lượng dầu nhớt động cơ.",
    "en_ex": "Don't forget to check the oil before taking a long road trip.",
    "vi_ex": "Đừng quên kiểm tra dầu nhớt trước khi thực hiện chuyến đi xa bằng ô tô."
  },
  {
    "answer": "to fill up",
    "short_mean": "đổ đầy bình nhiên liệu",
    "mean": "Bơm xăng/dầu cho đến khi đầy bình.",
    "en_ex": "Let's stop at the next gas station to fill up.",
    "vi_ex": "Hãy dừng lại ở trạm xăng tiếp theo để đổ đầy bình."
  },
  {
    "answer": "to check the tires/tyres",
    "short_mean": "kiểm tra lốp xe",
    "mean": "Kiểm tra độ mòn và áp suất hơi của lốp xe.",
    "en_ex": "You should check the tires regularly for proper inflation.",
    "vi_ex": "Bạn nên kiểm tra lốp xe thường xuyên để đảm bảo đủ áp suất hơi."
  },
  {
    "answer": "to service the car",
    "short_mean": "bảo dưỡng xe ô tô",
    "mean": "Mang xe đi kiểm tra và thay thế phụ tùng định kỳ.",
    "en_ex": "I take my car to the dealer every year to service the car.",
    "vi_ex": "Tôi đưa xe đến đại lý hàng năm để bảo dưỡng xe."
  },
  {
    "answer": "to signal/to indicate",
    "short_mean": "bật đèn xi-nhan, phát tín hiệu",
    "mean": "Bật đèn báo hiệu trước khi rẽ hoặc chuyển làn.",
    "en_ex": "Always signal before turning left or right.",
    "vi_ex": "Luôn xi-nhan trước khi rẽ trái hoặc rẽ phải."
  },
  {
    "answer": "to brake",
    "short_mean": "đạp phanh, thắng xe",
    "mean": "Sử dụng phanh để giảm tốc độ hoặc dừng xe.",
    "en_ex": "The driver had to brake suddenly to avoid hitting the dog.",
    "vi_ex": "Tài xế đã phải đạp phanh gấp để tránh đâm vào con chó."
  },
  {
    "answer": "to slow down",
    "short_mean": "giảm tốc độ",
    "mean": "Lái xe chậm lại.",
    "en_ex": "Slow down when you drive through school zones.",
    "vi_ex": "Hãy giảm tốc độ khi bạn lái xe qua khu vực trường học."
  },
  {
    "answer": "to speed up",
    "short_mean": "tăng tốc độ",
    "mean": "Lái xe nhanh hơn.",
    "en_ex": "You can speed up once you get onto the main highway.",
    "vi_ex": "Bạn có thể tăng tốc một khi đã lên đến đường cao tốc chính."
  },
  {
    "answer": "to pick someone up",
    "short_mean": "đón ai đó",
    "mean": "Đến nơi đón ai đó bằng xe.",
    "en_ex": "I will pick you up at the airport at 5 PM.",
    "vi_ex": "Tôi sẽ đón bạn tại sân bay vào lúc 5 giờ chiều."
  },
  {
    "answer": "to drop someone off",
    "short_mean": "thả/thả trả ai đó xuống xe",
    "mean": "Chở ai đó đến điểm đến và để họ xuống xe.",
    "en_ex": "Can you drop me off at the corner of the street?",
    "vi_ex": "Bạn có thể thả tôi xuống ở góc đường được không?"
  },
  {
    "answer": "to have a car accident",
    "short_mean": "bị tai nạn xe ô tô",
    "mean": "Gặp sự cố va chạm giao thông khi lái xe.",
    "en_ex": "Fortunately, no one was injured when they had a car accident.",
    "vi_ex": "May mắn thay, không ai bị thương khi họ bị tai nạn xe ô tô."
  },
  {
    "answer": "to break down",
    "short_mean": "bị hỏng xe giữa đường",
    "mean": "Xe gặp sự cố động cơ và ngừng hoạt động.",
    "en_ex": "Our car broke down in the middle of the highway.",
    "vi_ex": "Xe của chúng tôi bị hỏng giữa đường cao tốc."
  },
  {
    "answer": "to pass/to overtake",
    "short_mean": "vượt xe khác",
    "mean": "Tăng tốc chạy vượt qua xe phía trước.",
    "en_ex": "It is dangerous to pass another vehicle on a narrow curve.",
    "vi_ex": "Thật nguy hiểm khi vượt xe khác trên một khúc cua hẹp."
  }
];
