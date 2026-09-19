const VOCA_WORDS = [
  {
    "answer": "tail",
    "short_mean": "đuôi (máy bay, tàu)",
    "mean": "Phần đuôi phía sau của phương tiện như máy bay hoặc tàu.",
    "en_ex": "The tail of the airplane has the airline's logo.",
    "vi_ex": "Đuôi máy bay có in biểu trưng của hãng hàng không."
  },
  {
    "answer": "cockpit",
    "short_mean": "buồng lái máy bay",
    "mean": "Khoang dành cho phi công điều khiển máy bay.",
    "en_ex": "The pilot entered the cockpit before takeoff.",
    "vi_ex": "Phi công bước vào buồng lái trước khi cất cánh."
  },
  {
    "answer": "wing",
    "short_mean": "cánh máy bay",
    "mean": "Bộ phận hai bên giúp máy bay tạo lực nâng khi bay.",
    "en_ex": "The plane's wing vibrated slightly during turbulence.",
    "vi_ex": "Cánh máy bay rung nhẹ khi đi qua vùng nhiễu động."
  },
  {
    "answer": "airplane/aeroplane",
    "short_mean": "máy bay",
    "mean": "Phương tiện hàng không chở hành khách hoặc hàng hóa.",
    "en_ex": "We boarded the airplane for our flight to Tokyo.",
    "vi_ex": "Chúng tôi đã lên máy bay cho chuyến bay đến Tokyo."
  },
  {
    "answer": "engine",
    "short_mean": "động cơ",
    "mean": "Bộ phận tạo ra lực kéo hoặc đẩy cho phương tiện.",
    "en_ex": "The mechanic checked the plane's engine before departure.",
    "vi_ex": "Thợ máy đã kiểm tra động cơ máy bay trước khi khởi hành."
  },
  {
    "answer": "car",
    "short_mean": "xe ô tô",
    "mean": "Phương tiện di chuyển đường bộ 4 bánh.",
    "en_ex": "She drives a small car to work every day.",
    "vi_ex": "Cô ấy lái một chiếc ô tô nhỏ đi làm mỗi ngày."
  },
  {
    "answer": "taxi",
    "short_mean": "xe taxi",
    "mean": "Xe ô tô chở khách có tính cước theo quãng đường.",
    "en_ex": "We took a taxi from the airport to our hotel.",
    "vi_ex": "Chúng tôi đã đi taxi từ sân bay về khách sạn."
  },
  {
    "answer": "bus",
    "short_mean": "xe buýt",
    "mean": "Phương tiện giao thông công cộng chở nhiều hành khách.",
    "en_ex": "The bus arrives at the stop every fifteen minutes.",
    "vi_ex": "Xe buýt đến trạm mỗi mười lăm phút."
  },
  {
    "answer": "coach",
    "short_mean": "xe khách đường dài",
    "mean": "Xe buýt cỡ lớn chuyên chở khách giữa các thành phố.",
    "en_ex": "They traveled by coach across Europe.",
    "vi_ex": "Họ đã đi du lịch bằng xe khách đường dài khắp châu Âu."
  },
  {
    "answer": "train",
    "short_mean": "tàu hỏa",
    "mean": "Phương tiện di chuyển trên đường ray.",
    "en_ex": "The train to London departs at nine in the morning.",
    "vi_ex": "Tàu hỏa đi London khởi hành lúc 9 giờ sáng."
  },
  {
    "answer": "tram",
    "short_mean": "xe điện đường phố",
    "mean": "Phương tiện chạy bằng điện trên đường ray phố.",
    "en_ex": "Trams are a convenient way to travel around the city center.",
    "vi_ex": "Xe điện đường phố là cách thuận tiện để di chuyển quanh trung tâm thành phố."
  },
  {
    "answer": "motorcycle/motorbike",
    "short_mean": "xe máy, xe mô tô",
    "mean": "Phương tiện hai bánh có động cơ.",
    "en_ex": "He wears a helmet whenever he rides his motorcycle.",
    "vi_ex": "Anh ấy luôn đội mũ bảo hiểm mỗi khi lái xe máy."
  },
  {
    "answer": "bicycle/bike",
    "short_mean": "xe đạp",
    "mean": "Phương tiện hai bánh di chuyển bằng sức đạp.",
    "en_ex": "Riding a bicycle is a great way to stay healthy.",
    "vi_ex": "Đi xe đạp là một cách tuyệt vời để giữ gìn sức khỏe."
  },
  {
    "answer": "boat",
    "short_mean": "thuyền",
    "mean": "Phương tiện di chuyển nhỏ trên mặt nước.",
    "en_ex": "They rented a small boat to row on the lake.",
    "vi_ex": "Họ đã thuê một chiếc thuyền nhỏ để chèo trên hồ."
  },
  {
    "answer": "ferry",
    "short_mean": "phà",
    "mean": "Tàu lớn chở người và phương tiện qua sông hoặc biển ngắn.",
    "en_ex": "We took the ferry across the river to get to the island.",
    "vi_ex": "Chúng tôi đã đi phà sang sông để đến hòn đảo."
  },
  {
    "answer": "yacht",
    "short_mean": "du thuyền",
    "mean": "Tàu hạng sang dùng cho giải trí hoặc du lịch.",
    "en_ex": "The millionaire owns a luxurious yacht anchored in the harbor.",
    "vi_ex": "Vị triệu phú sở hữu một chiếc du thuyền sang trọng neo đậu tại cảng."
  },
  {
    "answer": "ship",
    "short_mean": "tàu thủy lớn",
    "mean": "Tàu cỡ lớn di chuyển trên biển.",
    "en_ex": "A cargo ship loaded with containers arrived at the port.",
    "vi_ex": "Một chiếc tàu thủy chở đầy container đã cập cảng."
  },
  {
    "answer": "helicopter",
    "short_mean": "máy bay trực thăng",
    "mean": "Máy bay có cánh quạt trên đỉnh giúp cất cánh thẳng đứng.",
    "en_ex": "The rescue team used a helicopter to reach the trapped hikers.",
    "vi_ex": "Đội cứu hộ đã dùng máy bay trực thăng để tiếp cận những người đi bộ bị kẹt."
  },
  {
    "answer": "moped",
    "short_mean": "xe máy dung tích nhỏ",
    "mean": "Xe máy nhỏ có vận tốc thấp, dễ điều khiển.",
    "en_ex": "She rode a moped through the narrow streets of Rome.",
    "vi_ex": "Cô ấy lái chiếc xe máy nhỏ qua những con phố hẹp ở Rome."
  },
  {
    "answer": "hot air balloon",
    "short_mean": "khinh khí cầu",
    "mean": "Phương tiện bay bằng khí nóng trong túi vải lớn.",
    "en_ex": "Floating in a hot air balloon offers breathtaking views of the valley.",
    "vi_ex": "Bay trên khinh khí cầu mang lại tầm nhìn tuyệt đẹp xuống thung lũng."
  },
  {
    "answer": "truck/lorry",
    "short_mean": "xe tải",
    "mean": "Xe ô tô lớn dùng để vận chuyển hàng hóa nặng.",
    "en_ex": "The truck delivered fresh produce to the market.",
    "vi_ex": "Xe tải đã chở nông sản tươi đến chợ."
  },
  {
    "answer": "van",
    "short_mean": "xe tải nhỏ, xe bán tải",
    "mean": "Xe ô tô chở hàng hoặc chở nhóm người nhỏ.",
    "en_ex": "The delivery company uses a white van to send packages.",
    "vi_ex": "Công ty giao hàng sử dụng một chiếc xe bán tải màu trắng để gửi bưu kiện."
  },
  {
    "answer": "camel",
    "short_mean": "lạc đà",
    "mean": "Động vật đường dài chịu hạn tốt ở sa mạc.",
    "en_ex": "Tourists rode camels across the desert dunes.",
    "vi_ex": "Khách du lịch cưỡi lạc đà băng qua những cồn cát sa mạc."
  },
  {
    "answer": "horse",
    "short_mean": "con ngựa",
    "mean": "Động vật dùng để cưỡi hoặc kéo xe.",
    "en_ex": "He learned how to ride a horse when he was young.",
    "vi_ex": "Anh ấy đã học cách cưỡi ngựa từ khi còn nhỏ."
  },
  {
    "answer": "passengers",
    "short_mean": "hành khách",
    "mean": "Những người đi trên phương tiện giao thông.",
    "en_ex": "All passengers are requested to fasten their seatbelts.",
    "vi_ex": "Tất cả hành khách được yêu cầu thắt dây an toàn."
  },
  {
    "answer": "pedestrian",
    "short_mean": "người đi bộ",
    "mean": "Người di chuyển bằng chân trên đường phố.",
    "en_ex": "Drivers must yield to pedestrians at the zebra crossing.",
    "vi_ex": "Tài xế phải nhường đường cho người đi bộ tại vạch sang đường."
  },
  {
    "answer": "commuters",
    "short_mean": "người đi làm hằng ngày",
    "mean": "Những người di chuyển định kỳ giữa nhà và nơi làm việc.",
    "en_ex": "Thousands of commuters travel by subway every morning.",
    "vi_ex": "Hàng ngàn người đi làm di chuyển bằng tàu điện ngầm mỗi sáng."
  },
  {
    "answer": "train station",
    "short_mean": "ga tàu hỏa",
    "mean": "Nơi tàu hỏa dừng để đón và trả khách.",
    "en_ex": "Meet me outside the main entrance of the train station.",
    "vi_ex": "Gặp tôi bên ngoài cổng chính của ga tàu hỏa nhé."
  },
  {
    "answer": "platform",
    "short_mean": "sân ga, thềm ga",
    "mean": "Khu vực chờ bước lên tàu hỏa tại ga.",
    "en_ex": "The train to Paris will depart from platform number 4.",
    "vi_ex": "Tàu đi Paris sẽ khởi hành từ sân ga số 4."
  },
  {
    "answer": "ticket",
    "short_mean": "vé (xe/tàu/máy bay)",
    "mean": "Giấy hoặc mã xác nhận quyền đi phương tiện.",
    "en_ex": "Make sure to keep your ticket safe until the end of the trip.",
    "vi_ex": "Hãy nhớ giữ vé cẩn thận cho đến cuối chuyến đi."
  },
  {
    "answer": "bus stop",
    "short_mean": "trạm xe buýt",
    "mean": "Điểm dừng cố định cho xe buýt đón trả khách.",
    "en_ex": "There is a bus stop right in front of the school.",
    "vi_ex": "Có một trạm xe buýt ngay trước cửa trường học."
  },
  {
    "answer": "airport",
    "short_mean": "sân bay",
    "mean": "Khu vực cho máy bay cất hạ cánh và hành khách làm thủ tục.",
    "en_ex": "We arrived at the airport two hours before our international flight.",
    "vi_ex": "Chúng tôi đã đến sân bay hai tiếng trước chuyến bay quốc tế."
  },
  {
    "answer": "taxi stand/taxi rank",
    "short_mean": "bãi đón taxi",
    "mean": "Nơi taxi xếp hàng chờ đón khách.",
    "en_ex": "We waited at the taxi stand for twenty minutes.",
    "vi_ex": "Chúng tôi đã chờ ở bãi đón taxi suốt hai mươi phút."
  },
  {
    "answer": "port",
    "short_mean": "cảng biển",
    "mean": "Nơi tàu thuyền neo đậu và xếp dỡ hàng hóa.",
    "en_ex": "The cruise ship docked safely at the international port.",
    "vi_ex": "Tàu du lịch đã cập cảng quốc tế an toàn."
  },
  {
    "answer": "to ride a bike",
    "short_mean": "đi xe đạp",
    "mean": "Đi lại bằng cách đạp xe.",
    "en_ex": "She likes to ride a bike around the lake every Sunday morning.",
    "vi_ex": "Cô ấy thích đi xe đạp quanh hồ vào mỗi sáng Chủ nhật."
  },
  {
    "answer": "to ride a horse",
    "short_mean": "cưỡi ngựa",
    "mean": "Điều khiển và di chuyển trên lưng ngựa.",
    "en_ex": "Learning to ride a horse requires balance and patience.",
    "vi_ex": "Học cưỡi ngựa đòi hỏi sự thăng bằng và kiên nhẫn."
  },
  {
    "answer": "to take a flight",
    "short_mean": "đi chuyến bay",
    "mean": "Di chuyển bằng máy bay.",
    "en_ex": "We decided to take a flight to cut down on travel time.",
    "vi_ex": "Chúng tôi quyết định đi chuyến bay để rút ngắn thời gian di chuyển."
  },
  {
    "answer": "to drive a car",
    "short_mean": "lái xe ô tô",
    "mean": "Điều khiển xe ô tô.",
    "en_ex": "He passed his test and is now allowed to drive a car.",
    "vi_ex": "Anh ấy đã thi đỗ và giờ được phép lái xe ô tô."
  },
  {
    "answer": "to take the bus",
    "short_mean": "đi xe buýt",
    "mean": "Di chuyển bằng xe buýt.",
    "en_ex": "Taking the bus is much cheaper than taking a taxi.",
    "vi_ex": "Đi xe buýt rẻ hơn nhiều so với đi taxi."
  },
  {
    "answer": "to take the train",
    "short_mean": "đi tàu hỏa",
    "mean": "Di chuyển bằng tàu hỏa.",
    "en_ex": "They prefer to take the train because it offers great countryside views.",
    "vi_ex": "Họ thích đi tàu hỏa vì có thể ngắm cảnh thiên nhiên tuyệt đẹp."
  },
  {
    "answer": "to walk",
    "short_mean": "đi bộ",
    "mean": "Di chuyển bằng chân.",
    "en_ex": "Instead of taking the car, we chose to walk to the restaurant.",
    "vi_ex": "Thay vì đi ô tô, chúng tôi chọn đi bộ đến nhà hàng."
  },
  {
    "answer": "to hitchhike",
    "short_mean": "đi nhờ xe",
    "mean": "Xin đi nhờ xe của người lạ trên đường.",
    "en_ex": "The backpacker managed to hitchhike across the island.",
    "vi_ex": "Người du lịch ba lô đã xin đi nhờ xe thành công khắp hòn đảo."
  },
  {
    "answer": "to get on a bus",
    "short_mean": "lên xe buýt",
    "mean": "Bước lên xe buýt.",
    "en_ex": "Please show your ticket when you get on a bus.",
    "vi_ex": "Vui lòng xuất trình vé khi bạn lên xe buýt."
  },
  {
    "answer": "to get off a bus",
    "short_mean": "xuống xe buýt",
    "mean": "Bước xuống khỏi xe buýt.",
    "en_ex": "Ring the bell when you want to get off a bus at the next stop.",
    "vi_ex": "Bấm chuông khi bạn muốn xuống xe buýt ở trạm tiếp theo."
  },
  {
    "answer": "to get in a taxi",
    "short_mean": "lên xe taxi",
    "mean": "Bước vào trong xe taxi.",
    "en_ex": "He helped her get in a taxi with her heavy suitcases.",
    "vi_ex": "Anh ấy giúp cô ấy lên xe taxi cùng với những chiếc vali nặng."
  },
  {
    "answer": "to get out of a taxi",
    "short_mean": "xuống xe taxi",
    "mean": "Bước ra khỏi xe taxi.",
    "en_ex": "Don't forget your personal belongings when you get out of a taxi.",
    "vi_ex": "Đừng quên đồ dùng cá nhân khi bạn bước xuống xe taxi."
  },
  {
    "answer": "to catch a train",
    "short_mean": "đón/kịp tàu hỏa",
    "mean": "Đến kịp lúc để lên tàu hỏa.",
    "en_ex": "Hurry up or we won't be able to catch a train back home.",
    "vi_ex": "Nhanh lên nếu không chúng ta sẽ không kịp bắt chuyến tàu về nhà."
  },
  {
    "answer": "to miss a train",
    "short_mean": "lỡ/trễ chuyến tàu",
    "mean": "Đến muộn và không lên được tàu.",
    "en_ex": "Because of traffic, we missed our train to Chicago.",
    "vi_ex": "Vì tắc đường, chúng tôi đã trễ chuyến tàu đi Chicago."
  },
  {
    "answer": "to give someone a ride/lift",
    "short_mean": "cho ai đi nhờ xe",
    "mean": "Chở ai đó đi cùng trên phương tiện của mình.",
    "en_ex": "Can you give me a ride to the station this evening?",
    "vi_ex": "Tối nay bạn có thể cho tôi đi nhờ xe đến ga được không?"
  }
];
