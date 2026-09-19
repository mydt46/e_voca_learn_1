const VOCA_WORDS = [
  {
    "answer": "red",
    "short_mean": "màu đỏ",
    "mean": "Màu sắc rực rỡ giống như màu của máu hay quả cà chua.",
    "en_ex": "She wore a beautiful red dress to the party.",
    "vi_ex": "Cô ấy mặc một chiếc váy màu đỏ xinh đẹp đến buổi tiệc."
  },
  {
    "answer": "yellow",
    "short_mean": "màu vàng",
    "mean": "Màu sắc tươi sáng của ánh nắng mặt trời hay quả chanh chín.",
    "en_ex": "Sunflowers have bright yellow petals.",
    "vi_ex": "Hoa hướng dương có những cánh hoa màu vàng rực rỡ."
  },
  {
    "answer": "green",
    "short_mean": "màu xanh lá cây",
    "mean": "Màu sắc tự nhiên của lá cây và cỏ tươi.",
    "en_ex": "The park is filled with green trees and grass.",
    "vi_ex": "Công viên ngập tràn cây cối và cỏ xanh lá cây."
  },
  {
    "answer": "dark green",
    "short_mean": "màu xanh lá đậm",
    "mean": "Sắc độ xanh lá cây tối màu.",
    "en_ex": "Pine trees have dark green needles.",
    "vi_ex": "Cây thông có những chiếc lá kim màu xanh lá đậm."
  },
  {
    "answer": "pale green",
    "short_mean": "màu xanh lá nhạt",
    "mean": "Sắc độ xanh lá cây nhạt tươi trẻ.",
    "en_ex": "The walls were painted a soothing pale green color.",
    "vi_ex": "Những bức tường được sơn màu xanh lá nhạt dịu mát."
  },
  {
    "answer": "blue",
    "short_mean": "màu xanh dương",
    "mean": "Màu sắc của bầu trời quang mây và đại dương.",
    "en_ex": "The clear blue sky was beautiful.",
    "vi_ex": "Bầu trời màu xanh dương trong lành thật đẹp."
  },
  {
    "answer": "purple",
    "short_mean": "màu tím",
    "mean": "Màu sắc pha trộn giữa màu đỏ và màu xanh dương.",
    "en_ex": "Grapes can be green or purple.",
    "vi_ex": "Nho có thể có màu xanh hoặc màu tím."
  },
  {
    "answer": "pink",
    "short_mean": "màu hồng",
    "mean": "Màu sắc tươi tắn nhẹ nhàng pha giữa đỏ và trắng.",
    "en_ex": "Cherry blossoms are famous for their soft pink color.",
    "vi_ex": "Hoa đào nổi tiếng với màu hồng nhẹ nhàng."
  },
  {
    "answer": "white",
    "short_mean": "màu trắng",
    "mean": "Màu sắc sáng nhất, giống như màu của tuyết hay sữa tươi.",
    "en_ex": "The bride wore a stunning white gown.",
    "vi_ex": "Cô dâu mặc một chiếc váy cưới màu trắng lộng lẫy."
  },
  {
    "answer": "gray/grey",
    "short_mean": "màu xám",
    "mean": "Màu trung tính kết hợp giữa màu đen và màu trắng.",
    "en_ex": "The sky turned gray before the storm.",
    "vi_ex": "Bầu trời chuyển sang màu xám trước cơn bão."
  },
  {
    "answer": "black",
    "short_mean": "màu đen",
    "mean": "Màu tối nhất, hoàn toàn không có ánh sáng chiếu vào.",
    "en_ex": "He prefers wearing black leather shoes.",
    "vi_ex": "Anh ấy thích đi giày da màu đen hơn."
  },
  {
    "answer": "brown",
    "short_mean": "màu nâu",
    "mean": "Màu sắc đặc trưng của gỗ khô hoặc đất bùn.",
    "en_ex": "The dog has shiny brown fur.",
    "vi_ex": "Con chó có bộ lông màu nâu bóng mượt."
  },
  {
    "answer": "orange",
    "short_mean": "màu cam",
    "mean": "Màu sắc rực rỡ hòa trộn giữa đỏ và vàng.",
    "en_ex": "Pumpkins are bright orange in autumn.",
    "vi_ex": "Bí ngô có màu cam rực rỡ vào mùa thu."
  },
  {
    "answer": "cream",
    "short_mean": "màu kem",
    "mean": "Màu trắng ngả hơi vàng dịu nhẹ như kem sữa.",
    "en_ex": "The living room sofa is cream-colored.",
    "vi_ex": "Chiếc ghế sofa phòng khách có màu kem."
  },
  {
    "answer": "navy blue",
    "short_mean": "màu xanh lam đậm / xanh hải quân",
    "mean": "Màu xanh dương rất đậm.",
    "en_ex": "Navy blue suits are ideal for business attire.",
    "vi_ex": "Những bộ vest màu xanh lam đậm rất lý tưởng cho trang phục công sở."
  },
  {
    "answer": "plastic",
    "short_mean": "chất liệu nhựa / nilon",
    "mean": "Vật liệu tổng hợp dẻo nhẹ phổ biến.",
    "en_ex": "Reduce the use of single-use plastic bottles.",
    "vi_ex": "Hãy giảm sử dụng các chai nhựa dùng một lần."
  },
  {
    "answer": "wood",
    "short_mean": "chất liệu gỗ",
    "mean": "Vật liệu tự nhiên lấy từ thân cây.",
    "en_ex": "This table is made of solid oak wood.",
    "vi_ex": "Chiếc bàn này được làm từ gỗ sồi tự nhiên."
  },
  {
    "answer": "paper",
    "short_mean": "chất liệu giấy",
    "mean": "Vật liệu mỏng ép từ bột gỗ dùng để viết vẽ.",
    "en_ex": "Print the document on recycled paper.",
    "vi_ex": "In tài liệu trên giấy tái chế."
  },
  {
    "answer": "wool",
    "short_mean": "chất liệu len",
    "mean": "Sợi lông động vật (cừu) dùng may áo ấm.",
    "en_ex": "This warm sweater is made of pure sheep wool.",
    "vi_ex": "Chiếc áo len ấm áp này được làm từ len cừu nguyên chất."
  },
  {
    "answer": "leather",
    "short_mean": "chất liệu da",
    "mean": "Vật liệu da động vật đã qua xử lý làm ví, áo, giày.",
    "en_ex": "He bought a durable genuine leather jacket.",
    "vi_ex": "Anh ấy đã mua một chiếc áo khoác da thật bền bỉ."
  },
  {
    "answer": "metal",
    "short_mean": "chất liệu kim loại",
    "mean": "Vật liệu cứng dẻo có tính dẫn điện như sắt, thép.",
    "en_ex": "The bridge structure is constructed from heavy metal.",
    "vi_ex": "Kế cấu cây cầu được xây dựng từ kim loại nặng."
  },
  {
    "answer": "glass",
    "short_mean": "chất liệu thủy tinh / kính",
    "mean": "Vật liệu trong suốt cứng và dễ vỡ.",
    "en_ex": "Handle the glass vase with extreme care.",
    "vi_ex": "Hãy cầm bình hoa thủy tinh hết sức cẩn thận."
  },
  {
    "answer": "fabric",
    "short_mean": "chất liệu vải",
    "mean": "Tấm vật liệu được dệt từ sợi tổng hợp hoặc tự nhiên.",
    "en_ex": "Curtains are made of soft cotton fabric.",
    "vi_ex": "Rèm cửa được làm bằng chất liệu vải bông mềm mại."
  },
  {
    "answer": "denim",
    "short_mean": "vải bò, vải jeans",
    "mean": "Loại vải cotton dệt chéo chắc chắn làm quần jeans.",
    "en_ex": "Denim jackets have been stylish for decades.",
    "vi_ex": "Áo khoác vải bò đã hợp thời trang trong nhiều thập kỷ."
  },
  {
    "answer": "silk",
    "short_mean": "chất liệu lụa",
    "mean": "Sợi tự nhiên mịn màng và óng ánh lấy từ kén tằm.",
    "en_ex": "Silk scarves feel smooth against the skin.",
    "vi_ex": "Khăn quàng lụa mang lại cảm giác mịn màng trên da."
  },
  {
    "answer": "big",
    "short_mean": "to, lớn",
    "mean": "Có kích thước hoặc quy mô lớn.",
    "en_ex": "They live in a big house with a swimming pool.",
    "vi_ex": "Họ sống trong một ngôi nhà lớn có hồ bơi."
  },
  {
    "answer": "small/little",
    "short_mean": "nhỏ, bé",
    "mean": "Có kích thước không lớn.",
    "en_ex": "A small bird built a nest in the tree.",
    "vi_ex": "Một con chim nhỏ đã làm tổ trên cây."
  },
  {
    "answer": "wide",
    "short_mean": "rộng, có bề ngang lớn",
    "mean": "Khoảng cách giữa hai bên lớn.",
    "en_ex": "The wide river separates the two towns.",
    "vi_ex": "Dòng sông rộng lớn phân chia hai thị trấn."
  },
  {
    "answer": "narrow",
    "short_mean": "hẹp, nhỏ bề ngang",
    "mean": "Khoảng cách giữa hai bên rất ngắn.",
    "en_ex": "Cars struggled to drive down the narrow alley.",
    "vi_ex": "Ô tô vật lộn để đi qua con hẻm hẹp."
  },
  {
    "answer": "deep",
    "short_mean": "sâu",
    "mean": "Có chiều sâu lớn từ mặt nước hay bề mặt xuống đáy.",
    "en_ex": "Scuba divers explored the deep ocean trench.",
    "vi_ex": "Những thợ lặn đã khám phá rãnh đại dương sâu."
  },
  {
    "answer": "high",
    "short_mean": "cao",
    "mean": "Khoảng cách lớn từ mặt đất vươn lên.",
    "en_ex": "Mount Everest has a high altitude.",
    "vi_ex": "Đỉnh Everest có độ cao lớn."
  },
  {
    "answer": "low",
    "short_mean": "thấp",
    "mean": "Khoảng cách nhỏ so với mặt đất hay mức chuẩn.",
    "en_ex": "Walk carefully under the low ceiling.",
    "vi_ex": "Đi lại cẩn thận bên dưới trần nhà thấp."
  },
  {
    "answer": "heavy",
    "short_mean": "nặng",
    "mean": "Có trọng lượng lớn khó nâng vác.",
    "en_ex": "This suitcase is too heavy for one person to carry.",
    "vi_ex": "Chiếc vali này quá nặng đối với một người xách."
  },
  {
    "answer": "light",
    "short_mean": "nhẹ",
    "mean": "Có trọng lượng nhỏ dễ di chuyển.",
    "en_ex": "Feathers are extremely light in weight.",
    "vi_ex": "Lông vũ có trọng lượng cực kỳ nhẹ."
  },
  {
    "answer": "shallow",
    "short_mean": "nông, không sâu",
    "mean": "Khoảng cách ngắn từ bề mặt xuống đáy.",
    "en_ex": "Children played safely in the shallow end of the pool.",
    "vi_ex": "Trẻ em chơi đùa an toàn ở chỗ nông của hồ bơi."
  },
  {
    "answer": "clean",
    "short_mean": "sạch sẽ",
    "mean": "Không bị bẩn hay dính bụi.",
    "en_ex": "Keep your study desk clean and organized.",
    "vi_ex": "Giữ bàn học của bạn sạch sẽ và ngăn nắp."
  },
  {
    "answer": "dirty",
    "short_mean": "bẩn thỉu",
    "mean": "Dính đầy bùn đất hoặc bụi bẩn.",
    "en_ex": "Wash your dirty hands before eating.",
    "vi_ex": "Hãy rửa đôi tay bẩn thỉu của bạn trước khi ăn."
  },
  {
    "answer": "hot",
    "short_mean": "nóng",
    "mean": "Có nhiệt độ cao.",
    "en_ex": "Be careful; the soup is very hot.",
    "vi_ex": "Hãy cẩn thận; món súp rất nóng."
  },
  {
    "answer": "cold",
    "short_mean": "lạnh",
    "mean": "Có nhiệt độ thấp.",
    "en_ex": "Ice cream tastes best when served cold.",
    "vi_ex": "Kem có vị ngon nhất khi được phục vụ lạnh."
  },
  {
    "answer": "long",
    "short_mean": "dài",
    "mean": "Có chiều dài lớn.",
    "en_ex": "She has beautiful long hair.",
    "vi_ex": "Cô ấy có mái tóc dài tuyệt đẹp."
  },
  {
    "answer": "loud",
    "short_mean": "to (âm thanh), ồn ào",
    "mean": "Cường độ âm thanh lớn gây chú ý.",
    "en_ex": "Turn down the loud music, please.",
    "vi_ex": "Làm ơn hãy vặn nhỏ âm nhạc to ồn ào lại."
  },
  {
    "answer": "quiet",
    "short_mean": "yên tĩnh, khẽ",
    "mean": "Ít hoặc không có tiếng ồn.",
    "en_ex": "The library is a quiet place to read.",
    "vi_ex": "Thư viện là một nơi yên tĩnh để đọc sách."
  },
  {
    "answer": "thin",
    "short_mean": "mỏng, gầy",
    "mean": "Độ dày nhỏ hoặc cơ thể mảnh khảnh.",
    "en_ex": "Cut the bread into thin slices.",
    "vi_ex": "Cắt bánh mì thành những lát mỏng."
  },
  {
    "answer": "thick",
    "short_mean": "dày",
    "mean": "Độ dày lớn giữa hai bề mặt.",
    "en_ex": "Wear a thick coat in winter.",
    "vi_ex": "Hãy mặc một chiếc áo khoác dày vào mùa đông."
  },
  {
    "answer": "short",
    "short_mean": "ngắn, thấp",
    "mean": "Chiều dài nhỏ hoặc chiều cao thấp.",
    "en_ex": "He wears short pants in summer.",
    "vi_ex": "Anh ấy mặc quần ngắn vào mùa hè."
  },
  {
    "answer": "sharp",
    "short_mean": "sắc bén",
    "mean": "Lưỡi cắt dễ cắt đứt vật thể.",
    "en_ex": "This kitchen knife is very sharp.",
    "vi_ex": "Chiếc dao bếp này rất sắc bén."
  },
  {
    "answer": "tight",
    "short_mean": "chật, bó sát",
    "mean": "Ôm khít vào cơ thể gây chật chội.",
    "en_ex": "These shoes are too tight for my feet.",
    "vi_ex": "Đôi giày này quá chật so với chân tôi."
  },
  {
    "answer": "loose",
    "short_mean": "rộng thùng hình, lỏng",
    "mean": "Không bó sát, rộng rãi thoải mái.",
    "en_ex": "She prefers wearing loose shirts on hot days.",
    "vi_ex": "Cô ấy thích mặc áo sơ mi rộng vào những ngày nóng."
  },
  {
    "answer": "near",
    "short_mean": "gần",
    "mean": "Khoảng cách ngắn không xa.",
    "en_ex": "The pharmacy is near the subway station.",
    "vi_ex": "Hiệu thuốc ở gần ga tàu điện ngầm."
  },
  {
    "answer": "far",
    "short_mean": "xa",
    "mean": "Khoảng cách lớn.",
    "en_ex": "The airport is far from the city center.",
    "vi_ex": "Sân bay cách xa trung tâm thành phố."
  }
];
