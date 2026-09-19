const VOCA_WORDS = [
  {
    "answer": "open",
    "short_mean": "mở cửa",
    "mean": "Cửa hàng đang hoạt động phục vụ khách.",
    "en_ex": "The supermarket is open from 7 AM to 10 PM daily.",
    "vi_ex": "Siêu thị mở cửa từ 7 giờ sáng đến 10 giờ tối hàng ngày."
  },
  {
    "answer": "closed",
    "short_mean": "đóng cửa",
    "mean": "Cửa hàng không hoạt động.",
    "en_ex": "The store is closed on national holidays.",
    "vi_ex": "Cửa hàng đóng cửa vào các ngày lễ quốc gia."
  },
  {
    "answer": "receipt",
    "short_mean": "hóa đơn thanh toán",
    "mean": "Tờ giấy in xác nhận số tiền đã trả và các món hàng đã mua.",
    "en_ex": "Keep your receipt in case you need to return an item.",
    "vi_ex": "Giữ hóa đơn phòng trường hợp bạn cần trả lại hàng."
  },
  {
    "answer": "online shopping",
    "short_mean": "mua sắm trực tuyến",
    "mean": "Đặt mua hàng qua các trang web hoặc ứng dụng mạng.",
    "en_ex": "Online shopping saves time and allows easy price comparisons.",
    "vi_ex": "Mua sắm trực tuyến tiết kiệm thời gian và cho phép so sánh giá dễ dàng."
  },
  {
    "answer": "special offer",
    "short_mean": "khuyến mãi đặc biệt",
    "mean": "Chương trình ưu đãi giảm giá hoặc tặng quà khi mua hàng.",
    "en_ex": "Buy one get one free is a great special offer.",
    "vi_ex": "Mua một tặng một là một chương trình khuyến mãi đặc biệt tuyệt vời."
  },
  {
    "answer": "bargain",
    "short_mean": "món hàng giá hời",
    "mean": "Hàng hóa mua được với giá rẻ hơn nhiều so với giá trị thực.",
    "en_ex": "These shoes were a real bargain at half price.",
    "vi_ex": "Đôi giày này thực sự là một món hàng giá hời khi được giảm nửa giá."
  },
  {
    "answer": "wide range",
    "short_mean": "mặt hàng đa dạng",
    "mean": "Số lượng phong phú nhiều mẫu mã và sản phẩm khác nhau.",
    "en_ex": "The store offers a wide range of organic products.",
    "vi_ex": "Cửa hàng cung cấp một danh mục mặt hàng đa dạng các sản phẩm hữu cơ."
  },
  {
    "answer": "convenient",
    "short_mean": "tiện lợi",
    "mean": "Dễ dàng, thuận tiện cho việc sử dụng hoặc mua sắm.",
    "en_ex": "Shopping at the local mini-mart is very convenient.",
    "vi_ex": "Mua sắm tại siêu thị mini địa phương rất tiện lợi."
  },
  {
    "answer": "line/queue",
    "short_mean": "hàng chờ thanh toán",
    "mean": "Dãy người xếp hàng chờ tới lượt.",
    "en_ex": "There was a long queue at the checkout counter.",
    "vi_ex": "Có một hàng dài chờ đợi tại quầy thanh toán."
  },
  {
    "answer": "customer",
    "short_mean": "khách hàng",
    "mean": "Người mua hàng hóa hoặc sử dụng dịch vụ.",
    "en_ex": "The cashier greeted each customer warmly.",
    "vi_ex": "Thu ngân chào đón từng khách hàng một cách nồng nhiệt."
  },
  {
    "answer": "exit",
    "short_mean": "lối ra",
    "mean": "Cửa hoặc lối đi dẫn ra ngoài siêu thị.",
    "en_ex": "Follow the green signs to find the emergency exit.",
    "vi_ex": "Đi theo các biển báo màu xanh để tìm lối ra khẩn cấp."
  },
  {
    "answer": "cashier",
    "short_mean": "nhân viên thu ngân",
    "mean": "Người tính tiền và thu tiền tại quầy.",
    "en_ex": "The cashier scanned the items quickly.",
    "vi_ex": "Nhân viên thu ngân đã quét mã các mặt hàng một cách nhanh chóng."
  },
  {
    "answer": "cash register/till",
    "short_mean": "máy tính tiền, quầy thu tiền",
    "mean": "Thiết bị dùng để lưu trữ tiền mặt và in hóa đơn.",
    "en_ex": "The cashier opened the till to give back change.",
    "vi_ex": "Thu ngân mở máy tính tiền để trả lại tiền thừa."
  },
  {
    "answer": "shelves",
    "short_mean": "các kệ hàng",
    "mean": "Các giá kệ trưng bày hàng hóa trên các lối đi.",
    "en_ex": "Workers were busy restocking the supermarket shelves.",
    "vi_ex": "Các công nhân đang bận rộn bổ sung hàng hóa lên các kệ hàng siêu thị."
  },
  {
    "answer": "shopping bag/carrier bag",
    "short_mean": "túi mua sắm, túi đựng đồ",
    "mean": "Túi vải/nhựa dùng xách hàng hóa về nhà.",
    "en_ex": "Bring a reusable shopping bag to protect the environment.",
    "vi_ex": "Mang theo túi mua sắm tái sử dụng để bảo vệ môi trường."
  },
  {
    "answer": "checkout",
    "short_mean": "quầy tính tiền",
    "mean": "Khu vực kiểm tra hàng và thanh toán tiền.",
    "en_ex": "Please place your items on the conveyor belt at the checkout.",
    "vi_ex": "Vui lòng đặt các mặt hàng của bạn lên băng chuyền tại quầy tính tiền."
  },
  {
    "answer": "shopping cart/trolley",
    "short_mean": "xe đẩy hàng siêu thị",
    "mean": "Xe 4 bánh có giỏ lớn dùng đẩy hàng trong siêu thị.",
    "en_ex": "Fill the shopping cart with fresh fruits and snacks.",
    "vi_ex": "Chất đầy xe đẩy hàng siêu thị bằng trái cây tươi và đồ ăn vặt."
  },
  {
    "answer": "basket",
    "short_mean": "giỏ xách mua hàng",
    "mean": "Giỏ nhỏ cầm tay cho khách mua ít đồ.",
    "en_ex": "If you only need a few items, take a basket instead of a trolley.",
    "vi_ex": "Nếu bạn chỉ cần ít món đồ, hãy lấy một chiếc giỏ xách thay vì xe đẩy."
  },
  {
    "answer": "escalator",
    "short_mean": "thang cuốn",
    "mean": "Cầu thang tự động di chuyển giữa các tầng.",
    "en_ex": "Take the escalator up to the second floor for electronics.",
    "vi_ex": "Đi thang cuốn lên tầng hai để mua đồ điện tử."
  },
  {
    "answer": "elevator/lift",
    "short_mean": "thang máy",
    "mean": "Buồng nâng di chuyển thẳng đứng giữa các tầng.",
    "en_ex": "Press the button to call the elevator.",
    "vi_ex": "Bấm nút để gọi thang máy."
  },
  {
    "answer": "guarantee",
    "short_mean": "giấy bảo hành",
    "mean": "Cam kết sửa chữa hoặc đổi mới sản phẩm nếu bị lỗi.",
    "en_ex": "This television comes with a two-year manufacturer guarantee.",
    "vi_ex": "Chiếc ti-vi này đi kèm với giấy bảo hành hai năm của nhà sản xuất."
  },
  {
    "answer": "sale",
    "short_mean": "dịp giảm giá",
    "mean": "Sự kiện bán hàng hạ giá.",
    "en_ex": "I bought these clothes during the end-of-season sale.",
    "vi_ex": "Tôi đã mua những bộ quần áo này trong đợt giảm giá cuối mùa."
  },
  {
    "answer": "price tag",
    "short_mean": "nhãn giá, mác giá",
    "mean": "Thẻ nhỏ ghi số tiền bán lẻ của sản phẩm.",
    "en_ex": "Check the price tag before taking the item to the counter.",
    "vi_ex": "Kiểm tra nhãn giá trước khi mang mặt hàng ra quầy."
  },
  {
    "answer": "first floor/ground floor",
    "short_mean": "tầng trệt / tầng một",
    "mean": "Tầng đầu tiên ngay mặt đất của tòa nhà.",
    "en_ex": "The fresh produce department is located on the ground floor.",
    "vi_ex": "Quầy nông sản tươi nằm ở tầng trệt."
  },
  {
    "answer": "basement",
    "short_mean": "tầng hầm",
    "mean": "Tầng dưới lòng đất của tòa nhà.",
    "en_ex": "The supermarket parking lot is in the basement.",
    "vi_ex": "Bãi đỗ xe của siêu thị nằm ở tầng hầm."
  },
  {
    "answer": "loyalty card",
    "short_mean": "thẻ thành viên / thẻ tích điểm",
    "mean": "Thẻ tích điểm thưởng dành cho khách hàng thân thiết.",
    "en_ex": "Scan your loyalty card to get member discounts.",
    "vi_ex": "Quét thẻ thành viên của bạn để nhận giảm giá cho hội viên."
  },
  {
    "answer": "upmarket",
    "short_mean": "hàng cao cấp, đắt tiền",
    "mean": "Sản phẩm hướng tới phân khúc khách hàng cao cấp.",
    "en_ex": "This upmarket grocery store sells imported wine and cheese.",
    "vi_ex": "Cửa hàng thực phẩm cao cấp này bán rượu vang và phô mai nhập khẩu."
  },
  {
    "answer": "second floor/first floor",
    "short_mean": "tầng 2 / tầng lầu",
    "mean": "Tầng nằm ngay trên tầng trệt.",
    "en_ex": "Clothing and shoes are sold on the second floor.",
    "vi_ex": "Quần áo và giày dép được bán ở tầng 2."
  },
  {
    "answer": "designer labels",
    "short_mean": "thương hiệu thiết kế nổi tiếng",
    "mean": "Quần áo sản phẩm gắn nhãn các nhà thiết kế tên tuổi.",
    "en_ex": "The department store features several international designer labels.",
    "vi_ex": "Trung tâm thương mại trưng bày nhiều thương hiệu thiết kế quốc tế nổi tiếng."
  },
  {
    "answer": "men's wear",
    "short_mean": "thời trang nam",
    "mean": "Khu vực bán trang phục dành cho nam giới.",
    "en_ex": "Suits and ties are located in the men's wear section.",
    "vi_ex": "Bộ vest và cà vạt nằm ở khu vực thời trang nam."
  },
  {
    "answer": "women's wear",
    "short_mean": "thời trang nữ",
    "mean": "Khu vực bán trang phục dành cho nữ giới.",
    "en_ex": "The women's wear floor has a wide selection of dresses.",
    "vi_ex": "Tầng thời trang nữ có nhiều sự lựa chọn về váy đầm."
  },
  {
    "answer": "children's department",
    "short_mean": "gian hàng trẻ em",
    "mean": "Khu vực bán quần áo đồ dùng cho em bé.",
    "en_ex": "Find baby clothes in the children's department.",
    "vi_ex": "Tìm quần áo sơ sinh ở gian hàng trẻ em."
  },
  {
    "answer": "customer service",
    "short_mean": "quầy dịch vụ khách hàng",
    "mean": "Nơi tư vấn giải đáp thắc mắc và xử lý đổi trả cho khách.",
    "en_ex": "If you lost an item, ask at the customer service desk.",
    "vi_ex": "Nếu bạn bị mất đồ, hãy hỏi tại quầy dịch vụ khách hàng."
  },
  {
    "answer": "kitchenware",
    "short_mean": "đồ dùng nhà bếp",
    "mean": "Dụng cụ nấu nướng như nồi, chảo, dao kéo.",
    "en_ex": "They bought new pots and pans in the kitchenware aisle.",
    "vi_ex": "Họ đã mua xoong chảo mới tại gian hàng đồ dùng nhà bếp."
  },
  {
    "answer": "home furnishings",
    "short_mean": "đồ trang trí nội thất gia đình",
    "mean": "Vật dụng trang trí và đồ dùng gia đình.",
    "en_ex": "Explore the home furnishings section for rugs and curtains.",
    "vi_ex": "Khám phá gian hàng nội thất gia đình để tìm thảm và rèm cửa."
  },
  {
    "answer": "changing rooms",
    "short_mean": "phòng thử đồ",
    "mean": "Khu vực kín đáo cho khách thử quần áo.",
    "en_ex": "There is a queue outside the changing rooms.",
    "vi_ex": "Có một hàng dài chờ đợi bên ngoài phòng thử đồ."
  },
  {
    "answer": "baby changing facilities",
    "short_mean": "phòng thay tã cho bé",
    "mean": "Khu vực trang bị bệ thay tã và vệ sinh cho trẻ sơ sinh.",
    "en_ex": "Parents can use the baby changing facilities on the 2nd floor.",
    "vi_ex": "Phụ huynh có thể sử dụng phòng thay tã cho bé ở tầng 2."
  },
  {
    "answer": "food court",
    "short_mean": "khu ẩm thực tập trung",
    "mean": "Khu vực tập trung nhiều quầy ăn uống chung bàn ghế.",
    "en_ex": "We grabbed lunch at the shopping mall food court.",
    "vi_ex": "Chúng tôi đã ăn trưa tại khu ẩm thực của trung tâm thương mại."
  },
  {
    "answer": "lingerie",
    "short_mean": "đồ lót nữ",
    "mean": "Khu vực trang phục lót nữ.",
    "en_ex": "The store introduced a new silk lingerie collection.",
    "vi_ex": "Cửa hàng đã giới thiệu bộ sưu tập đồ lót lụa mới."
  },
  {
    "answer": "cosmetics/perfumery",
    "short_mean": "mỹ phẩm và nước hoa",
    "mean": "Gian hàng bán đồ trang điểm và các loại nước hoa.",
    "en_ex": "She tested a sample at the cosmetics counter.",
    "vi_ex": "Cô ấy đã thử một mẫu thử tại quầy mỹ phẩm."
  },
  {
    "answer": "beauty",
    "short_mean": "gian hàng làm đẹp",
    "mean": "Khu vực chăm sóc da và làm đẹp.",
    "en_ex": "Find skincare creams in the beauty section.",
    "vi_ex": "Tìm kem dưỡng da ở gian hàng làm đẹp."
  },
  {
    "answer": "electrical appliances",
    "short_mean": "thiết bị điện gia dụng",
    "mean": "Các máy móc dùng điện như tủ lạnh, máy giặt.",
    "en_ex": "The store offers discount deals on electrical appliances.",
    "vi_ex": "Cửa hàng có các chương trình giảm giá cho thiết bị điện gia dụng."
  },
  {
    "answer": "lighting",
    "short_mean": "gian hàng đèn chiếu sáng",
    "mean": "Nơi trưng bày và bán các loại đèn trang trí.",
    "en_ex": "We purchased a stylish desk lamp in the lighting department.",
    "vi_ex": "Chúng tôi đã mua một chiếc đèn bàn sành điệu tại gian hàng đèn chiếu sáng."
  }
];
