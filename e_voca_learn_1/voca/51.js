const VOCA_WORDS = [
  {
    "answer": "humidity",
    "short_mean": "độ ẩm không khí",
    "mean": "Lượng hơi nước có trong không khí.",
    "en_ex": "High humidity makes the hot weather feel even more uncomfortable.",
    "vi_ex": "Độ ẩm cao làm cho thời tiết nóng cảm thấy khó chịu hơn nữa."
  },
  {
    "answer": "heatwave",
    "short_mean": "đợt nắng nóng kéo dài",
    "mean": "Giai đoạn thời tiết nóng gay gắt kéo dài nhiều ngày.",
    "en_ex": "The heatwave caused power outages across the city.",
    "vi_ex": "Đợt nắng nóng kéo dài đã gây ra tình trạng mất điện trên toàn thành phố."
  },
  {
    "answer": "tornado",
    "short_mean": "trận lốc xoáy, vòi xoáy",
    "mean": "Cột không khí xoáy mạnh nối từ mây bão xuống mặt đất.",
    "en_ex": "The tornado destroyed several houses in the village.",
    "vi_ex": "Trận lốc xoáy đã phá hủy nhiều ngôi nhà trong làng."
  },
  {
    "answer": "downpour",
    "short_mean": "trận mưa rào xối xả",
    "mean": "Trận mưa rất to và nặng hạt trút xuống bất ngờ.",
    "en_ex": "We got completely soaked in the sudden downpour.",
    "vi_ex": "Chúng tôi bị ướt sũng trong trận mưa rào xối xả bất ngờ."
  },
  {
    "answer": "light shower",
    "short_mean": "mưa rào nhẹ",
    "mean": "Trận mưa nhỏ kéo dài trong thời gian ngắn.",
    "en_ex": "There will be a light shower in the afternoon.",
    "vi_ex": "Sẽ có một trận mưa rào nhẹ vào buổi chiều."
  },
  {
    "answer": "overcast",
    "short_mean": "u ám, mây giăng kín",
    "mean": "Bầu trời bị mây mù che phủ hoàn toàn không có nắng.",
    "en_ex": "The sky was overcast, hinting that rain was coming.",
    "vi_ex": "Bầu trời u ám, báo hiệu trời sắp mưa."
  },
  {
    "answer": "smog",
    "short_mean": "khói bụi ô nhiễm / sương khói",
    "mean": "Hỗn hợp sương mù và khói ô nhiễm không khí.",
    "en_ex": "Heavy smog covered the city center during rush hour.",
    "vi_ex": "Khói bụi ô nhiễm dày đặc bao phủ trung tâm thành phố trong giờ cao điểm."
  },
  {
    "answer": "snowdrift",
    "short_mean": "đống tuyết vun cao",
    "mean": "Khối tuyết bị gió thổi chất thành đống cao.",
    "en_ex": "The car was stuck in a deep snowdrift.",
    "vi_ex": "Chiếc xe bị kẹt trong một đống tuyết vun cao."
  },
  {
    "answer": "snowstorm",
    "short_mean": "bão tuyết",
    "mean": "Thời tiết bão kèm theo tuyết rơi dày và gió mạnh.",
    "en_ex": "Schools were closed due to the severe snowstorm.",
    "vi_ex": "Các trường học đã phải đóng cửa do bão tuyết dữ dội."
  },
  {
    "answer": "sandstorm",
    "short_mean": "bão cát",
    "mean": "Trận gió mạnh cuốn theo lượng cát lớn ở sa mạc.",
    "en_ex": "Travelers caught in a sandstorm must seek immediate shelter.",
    "vi_ex": "Du khách gặp bão cát phải tìm nơi trú ẩn ngay lập tức."
  },
  {
    "answer": "gale",
    "short_mean": "cơn gió mạnh / gió giật",
    "mean": "Cơn gió rất mạnh có khả năng làm gãy cành cây.",
    "en_ex": "The gale blew down several trees along the road.",
    "vi_ex": "Cơn gió mạnh đã làm đổ nhiều cây dọc đường."
  },
  {
    "answer": "storm",
    "short_mean": "cơn bão",
    "mean": "Thời tiết xấu có gió mạnh, mưa to hoặc sấm sét.",
    "en_ex": "A violent storm hit the coastal area last night.",
    "vi_ex": "Một cơn bão dữ dội đã đổ bộ vào khu vực ven biển đêm qua."
  },
  {
    "answer": "thunder",
    "short_mean": "tiếng sấm",
    "mean": "Âm thanh vang rền do sét gây ra trong không khí.",
    "en_ex": "The loud thunder frightened the children.",
    "vi_ex": "Tiếng sấm lớn làm các em nhỏ hoảng sợ."
  },
  {
    "answer": "lightning",
    "short_mean": "tia sét, tia chớp",
    "mean": "Tia điện sáng lóe xuất hiện trên bầu trời trong bão.",
    "en_ex": "Lightning struck an old oak tree in the park.",
    "vi_ex": "Tia sét đã đánh trúng một cây sồi già trong công viên."
  },
  {
    "answer": "wet",
    "short_mean": "ẩm ướt",
    "mean": "Bị dính nước hoặc thời tiết nhiều mưa ẩm.",
    "en_ex": "Put on your raincoat; it is very wet outside.",
    "vi_ex": "Hãy mặc áo mưa vào; bên ngoài rất ẩm ướt."
  },
  {
    "answer": "dry",
    "short_mean": "khô ráo",
    "mean": "Khó hoặc không có mưa, thiếu độ ẩm.",
    "en_ex": "The forecast says the weather will stay dry all week.",
    "vi_ex": "Dự báo thời tiết nói rằng thời tiết sẽ khô ráo cả tuần."
  },
  {
    "answer": "rainbow",
    "short_mean": "cầu vồng",
    "mean": "Vòng cung nhiều màu sắc xuất hiện sau cơn mưa.",
    "en_ex": "Look! There is a beautiful rainbow in the sky.",
    "vi_ex": "Nhìn kìa! Có một chiếc cầu vồng tuyệt đẹp trên bầu trời."
  },
  {
    "answer": "raindrop",
    "short_mean": "hạt mưa",
    "mean": "Giọt nước mưa rơi từ trên mây xuống.",
    "en_ex": "I felt a raindrop hit my cheek.",
    "vi_ex": "Tôi cảm nhận được một hạt mưa rơi vào má mình."
  },
  {
    "answer": "puddle",
    "short_mean": "vũng nước mưa",
    "mean": "Nước đọng lại trên mặt đất sau cơn mưa.",
    "en_ex": "Kids love jumping into water puddles after rain.",
    "vi_ex": "Trẻ em thích nhảy vào các vũng nước mưa sau khi mưa tạnh."
  },
  {
    "answer": "snowflake",
    "short_mean": "bông tuyết",
    "mean": "Thần tinh thể tuyết nhỏ nhắn rơi từ trên trời xuống.",
    "en_ex": "Every snowflake has a unique geometric pattern.",
    "vi_ex": "Mỗi bông tuyết đều có một hoa văn hình học độc nhất."
  },
  {
    "answer": "hailstone",
    "short_mean": "hạt mưa đá",
    "mean": "Viên băng đông lạnh rơi xuống trong mưa đá.",
    "en_ex": "Hailstones as big as golf balls damaged parked cars.",
    "vi_ex": "Những hạt mưa đá to bằng quả bóng golf đã làm hư hại các ô tô đang đỗ."
  },
  {
    "answer": "blizzard",
    "short_mean": "trận bão tuyết dữ dội",
    "mean": "Cơn bão tuyết cực mạnh kèm gió buốt và tầm nhìn bằng không.",
    "en_ex": "The blizzard forced all flights to be canceled.",
    "vi_ex": "Trận bão tuyết dữ dội đã buộc tất cả các chuyến bay phải hủy bỏ."
  },
  {
    "answer": "hurricane",
    "short_mean": "bão nhiệt đới, cuồng phong",
    "mean": "Trận bão biển cực mạnh với gió xoáy xoay quanh tâm bão.",
    "en_ex": "The coastal town was evacuated before the hurricane landed.",
    "vi_ex": "Thị trấn ven biển đã được sơ tán trước khi cơn cuồng phong đổ bộ."
  },
  {
    "answer": "flood",
    "short_mean": "trận lũ lụt",
    "mean": "Lượng nước dâng cao tràn ngập các vùng đất khô ráo.",
    "en_ex": "Heavy rain caused severe floods in low-lying regions.",
    "vi_ex": "Mưa lớn đã gây ra những trận lũ lụt nghiêm trọng ở các vùng thấp."
  },
  {
    "answer": "drought",
    "short_mean": "nạn hạn hán",
    "mean": "Thời kỳ thiếu mưa kéo dài gây khô cạn nguồn nước.",
    "en_ex": "The prolonged drought ruined the farmers' crops.",
    "vi_ex": "Nạn hạn hán kéo dài đã làm hư hỏng hoa màu của nông dân."
  },
  {
    "answer": "freezing",
    "short_mean": "rét đóng băng, rất lạnh",
    "mean": "Thời tiết lạnh dưới 0 độ C gây đóng băng.",
    "en_ex": "It is freezing outside, so put on your heavy coat.",
    "vi_ex": "Bên ngoài trời rét đóng băng, hãy mặc áo khoác dày vào."
  },
  {
    "answer": "cold",
    "short_mean": "lạnh",
    "mean": "Nhiệt độ thấp gây cảm giác lạnh giá.",
    "en_ex": "Drink a cup of hot tea to warm up on this cold day.",
    "vi_ex": "Hãy uống một tách trà nóng để làm ấm người trong ngày lạnh giá này."
  },
  {
    "answer": "chilly",
    "short_mean": "se lạnh, hơi lạnh",
    "mean": "Nhiệt độ hơi thấp gây cảm giác lạnh nhẹ.",
    "en_ex": "It gets chilly in the evening, so bring a jacket.",
    "vi_ex": "Trời chuyển se lạnh vào buổi tối, vì vậy hãy mang theo áo khoác."
  },
  {
    "answer": "warm",
    "short_mean": "ấm áp",
    "mean": "Nhiệt độ vừa phải, dễ chịu không quá nóng.",
    "en_ex": "The spring weather is pleasant and warm.",
    "vi_ex": "Thời tiết mùa xuân thật dễ chịu và ấm áp."
  },
  {
    "answer": "hot",
    "short_mean": "nóng",
    "mean": "Nhiệt độ cao.",
    "en_ex": "It is too hot to play football in the afternoon sun.",
    "vi_ex": "Trời quá nóng để chơi bóng đá dưới cái nắng buổi chiều."
  },
  {
    "answer": "stifling",
    "short_mean": "oi bức, ngột ngạt",
    "mean": "Nóng bức khó thở do thiếu không khí thoáng mát.",
    "en_ex": "The room was stifling without air conditioning.",
    "vi_ex": "Căn phòng oi bức ngột ngạt khi không có điều hòa."
  },
  {
    "answer": "freezing point",
    "short_mean": "điểm đóng băng (0°C)",
    "mean": "Nhiệt độ mà nước chuyển thành băng (0°C / 32°F).",
    "en_ex": "Water turns into ice at its freezing point.",
    "vi_ex": "Nước chuyển thành băng tại điểm đóng băng của nó."
  },
  {
    "answer": "boiling point",
    "short_mean": "điểm sôi (100°C)",
    "mean": "Nhiệt độ mà chất lỏng sôi và bốc hơi.",
    "en_ex": "The boiling point of water is 100 degrees Celsius.",
    "vi_ex": "Điểm sôi của nước là 100 độ C."
  },
  {
    "answer": "minus 10",
    "short_mean": "âm 10 độ",
    "mean": "Mức nhiệt độ dưới 0 độ C là 10 độ.",
    "en_ex": "The temperature dropped to minus 10 last night.",
    "vi_ex": "Nhiệt độ đã giảm xuống âm 10 độ đêm qua."
  },
  {
    "answer": "cool",
    "short_mean": "mát mẻ",
    "mean": "Nhiệt độ hơi thấp một cách dễ chịu.",
    "en_ex": "A cool breeze swept through the valley.",
    "vi_ex": "Một làn gió mát mẻ thổi qua thung lũng."
  },
  {
    "answer": "mild",
    "short_mean": "ôn hòa, ấm áp dễ chịu",
    "mean": "Thời tiết không quá lạnh cũng không quá nóng.",
    "en_ex": "We enjoyed a mild winter this year.",
    "vi_ex": "Chúng tôi đã tận hưởng một mùa đông ôn hòa năm nay."
  },
  {
    "answer": "boiling",
    "short_mean": "nóng như đổ lửa",
    "mean": "Thời tiết vô cùng nóng bức.",
    "en_ex": "It's boiling in this room; can we open a window?",
    "vi_ex": "Trời nóng như đổ lửa trong phòng này; chúng ta mở cửa sổ được không?"
  },
  {
    "answer": "25 degrees",
    "short_mean": "25 độ",
    "mean": "Chỉ số nhiệt độ ở mức 25 độ.",
    "en_ex": "Today's average temperature is around 25 degrees.",
    "vi_ex": "Nhiệt độ trung bình hôm nay vào khoảng 25 độ."
  },
  {
    "answer": "Celsius",
    "short_mean": "độ C (bảng đo nhiệt độ)",
    "mean": "Đơn vị đo nhiệt độ tiêu chuẩn quốc tế.",
    "en_ex": "Water freezes at zero degrees Celsius.",
    "vi_ex": "Nước đóng băng ở không độ C."
  },
  {
    "answer": "Fahrenheit",
    "short_mean": "độ F (bảng đo nhiệt độ)",
    "mean": "Đơn vị đo nhiệt độ dùng phổ biến ở Mỹ.",
    "en_ex": "80 degrees Fahrenheit is about 27 degrees Celsius.",
    "vi_ex": "80 độ F tương đương khoảng 27 độ C."
  },
  {
    "answer": "sun",
    "short_mean": "mặt trời",
    "mean": "Ngôi sao trung tâm cung cấp ánh sáng và hơi ấm cho Trái Đất.",
    "en_ex": "The sun is shining brightly today.",
    "vi_ex": "Mặt trời hôm nay đang tỏa sáng rực rỡ."
  },
  {
    "answer": "sunny",
    "short_mean": "có nắng",
    "mean": "Trời ngập tràn ánh nắng mặt trời.",
    "en_ex": "It is a beautiful sunny morning.",
    "vi_ex": "Đó là một buổi sáng có nắng đẹp trời."
  },
  {
    "answer": "cloud",
    "short_mean": "đám mây",
    "mean": "Khối hơi nước ngưng tụ trên bầu trời.",
    "en_ex": "Dark clouds gathered in the sky before the storm.",
    "vi_ex": "Những đám mây đen tích tụ trên bầu trời trước cơn bão."
  },
  {
    "answer": "cloudy",
    "short_mean": "nhiều mây",
    "mean": "Thời tiết có nhiều mây che phủ bầu trời.",
    "en_ex": "It will be cloudy with a chance of rain later.",
    "vi_ex": "Trời sẽ nhiều mây và có khả năng mưa sau đó."
  },
  {
    "answer": "fog",
    "short_mean": "sương mù dày",
    "mean": "Lớp hơi nước dày đặc làm giảm tầm nhìn.",
    "en_ex": "Thick fog caused flights to be delayed.",
    "vi_ex": "Sương mù dày đặc khiến các chuyến bay bị hoãn."
  },
  {
    "answer": "foggy",
    "short_mean": "có sương mù",
    "mean": "Bầu trời bị sương mù che phủ.",
    "en_ex": "Drive carefully on this foggy morning.",
    "vi_ex": "Lái xe cẩn thận vào buổi sáng có sương mù này."
  },
  {
    "answer": "rain",
    "short_mean": "cơn mưa",
    "mean": "Nước từ trên mây rơi xuống dưới dạng giọt.",
    "en_ex": "We had a lot of rain last week.",
    "vi_ex": "Chúng tôi đã có rất nhiều mưa vào tuần trước."
  },
  {
    "answer": "rainy",
    "short_mean": "có mưa",
    "mean": "Thời tiết có nhiều trận mưa.",
    "en_ex": "Take an umbrella on rainy days.",
    "vi_ex": "Hãy mang theo ô vào những ngày có mưa."
  },
  {
    "answer": "snow",
    "short_mean": "tuyết",
    "mean": "Hạt băng kết tinh màu trắng rơi từ mây khi lạnh.",
    "en_ex": "Children love playing in the fresh snow.",
    "vi_ex": "Trẻ em thích chơi đùa trong lớp tuyết mới rơi."
  },
  {
    "answer": "snowy",
    "short_mean": "có tuyết rơi",
    "mean": "Thời tiết có tuyết bao phủ.",
    "en_ex": "It was a snowy day in December.",
    "vi_ex": "Đó là một ngày có tuyết rơi vào tháng Mười hai."
  },
  {
    "answer": "ice",
    "short_mean": "băng",
    "mean": "Nước đông cứng ở nhiệt độ lạnh.",
    "en_ex": "Be careful not to slip on the ice.",
    "vi_ex": "Hãy cẩn thận kẻo trượt chân trên băng."
  },
  {
    "answer": "icy",
    "short_mean": "trơn trượt vì băng",
    "mean": "Bề mặt bị phủ lớp băng trơn.",
    "en_ex": "The roads are very icy this morning.",
    "vi_ex": "Đường xá rất trơn trượt vì băng vào sáng nay."
  },
  {
    "answer": "frost",
    "short_mean": "lớp sương giá",
    "mean": "Lớp băng tinh thể nhỏ hình thành trên bề mặt khi lạnh.",
    "en_ex": "There was a thin layer of frost on the car window.",
    "vi_ex": "Có một lớp sương giá mỏng trên cửa kính xe ô tô."
  },
  {
    "answer": "frosty",
    "short_mean": "Giá lạnh, có sương giá",
    "mean": "Thời tiết lạnh đến mức hình thành sương giá.",
    "en_ex": "It was a frosty morning with clear blue skies.",
    "vi_ex": "Đó là một buổi sáng giá lạnh với bầu trời xanh trong."
  },
  {
    "answer": "wind",
    "short_mean": "cơn gió",
    "mean": "Luồng không khí di chuyển tự nhiên.",
    "en_ex": "The strong wind blew away my hat.",
    "vi_ex": "Cơn gió mạnh đã thổi bay chiếc mũ của tôi."
  },
  {
    "answer": "windy",
    "short_mean": "nhiều gió",
    "mean": "Thời tiết có nhiều làn gió mạnh thổi.",
    "en_ex": "It's too windy to go sailing today.",
    "vi_ex": "Hôm nay trời quá nhiều gió để đi chèo thuyền."
  },
  {
    "answer": "storm",
    "short_mean": "cơn bão",
    "mean": "Hiện tượng thời tiết có gió lớn kèm mưa/sấm.",
    "en_ex": "Stay indoors during the severe storm.",
    "vi_ex": "Hãy ở trong nhà trong suốt cơn bão dữ dội."
  },
  {
    "answer": "stormy",
    "short_mean": "có bão",
    "mean": "Thời tiết bùng nổ mưa to gió lớn.",
    "en_ex": "The ship struggled in the stormy sea.",
    "vi_ex": "Con tàu vật lộn trên vùng biển có bão."
  },
  {
    "answer": "thunder",
    "short_mean": "sấm",
    "mean": "Âm thanh dội vang khi có sét.",
    "en_ex": "The thunder rumbled in the distance.",
    "vi_ex": "Tiếng sấm rền vang từ đằng xa."
  },
  {
    "answer": "thundery",
    "short_mean": "dễ có sấm giông",
    "mean": "Thời tiết mang nguy cơ bùng phát sấm sét.",
    "en_ex": "The weather forecast predicts a thundery afternoon.",
    "vi_ex": "Dự báo thời tiết dự đoán một buổi chiều dễ có sấm giông."
  }
];
