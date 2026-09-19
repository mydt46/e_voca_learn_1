const VOCA_WORDS = [
  {
    "answer": "butcher",
    "short_mean": "cửa hàng thịt / thợ mổ thịt",
    "mean": "Nơi chuyên bán các loại thịt tươi sống.",
    "en_ex": "I bought fresh beef steaks from the local butcher.",
    "vi_ex": "Tôi đã mua thịt bò bít tết tươi từ cửa hàng thịt địa phương."
  },
  {
    "answer": "baker",
    "short_mean": "tiệm bánh mì / thợ làm bánh",
    "mean": "Cửa hàng sản xuất và bán các loại bánh mì, bánh ngọt.",
    "en_ex": "The baker bakes fresh baguettes early every morning.",
    "vi_ex": "Tiệm bánh nướng bánh mì baguette tươi mới vào mỗi sáng sớm."
  },
  {
    "answer": "bookstore/bookshop",
    "short_mean": "hiệu sách, cửa hàng sách",
    "mean": "Cửa hàng kinh doanh các loại sách và văn phòng phẩm.",
    "en_ex": "She browsed the bestseller section at the bookstore.",
    "vi_ex": "Cô ấy dạo xem khu vực sách bán chạy tại hiệu sách."
  },
  {
    "answer": "fish dealer/fishmonger",
    "short_mean": "cửa hàng hải sản / người bán cá",
    "mean": "Cửa hàng bán các loại cá và hải sản tươi.",
    "en_ex": "The fishmonger recommended fresh salmon for dinner.",
    "vi_ex": "Người bán cá đề xuất cá hồi tươi cho bữa tối."
  },
  {
    "answer": "greengrocer",
    "short_mean": "cửa hàng rau củ quả",
    "mean": "Tiệm bán trái cây và rau củ tươi sống.",
    "en_ex": "Buy fresh apples and spinach at the greengrocer.",
    "vi_ex": "Hãy mua táo tươi và rau chân vịt tại cửa hàng rau củ quả."
  },
  {
    "answer": "boutique",
    "short_mean": "cửa hàng thời trang cao cấp",
    "mean": "Cửa hàng nhỏ bán quần áo và phụ kiện thời trang độc đáo.",
    "en_ex": "She bought a stylish dress at a fashion boutique.",
    "vi_ex": "Cô ấy đã mua một chiếc váy sành điệu tại cửa hàng thời trang cao cấp."
  },
  {
    "answer": "shoe store/shoe shop",
    "short_mean": "cửa hàng giày dép",
    "mean": "Nơi bán các loại giày, dép, ủng.",
    "en_ex": "He tried on running shoes at the shoe store.",
    "vi_ex": "Anh ấy đã thử giày chạy bộ tại cửa hàng giày dép."
  },
  {
    "answer": "street market",
    "short_mean": "chợ trời, chợ đường phố",
    "mean": "Khu chợ họp ngoài trời ven đường bán đa dạng mặt hàng.",
    "en_ex": "We love buying handmade crafts at the weekend street market.",
    "vi_ex": "Chúng tôi thích mua đồ thủ công làm bằng tay tại chợ trời cuối tuần."
  },
  {
    "answer": "delicatessen",
    "short_mean": "cửa hàng thực phẩm chế biến sẵn (deli)",
    "mean": "Cửa hàng bán các loại thịt nguội, phô mai và món ăn nhẹ.",
    "en_ex": "I grabbed a delicious turkey sandwich at the deli.",
    "vi_ex": "Tôi lấy một chiếc bánh mì kẹp thịt gà tây thơm ngon tại cửa hàng thực phẩm."
  },
  {
    "answer": "jewelers/jewellers",
    "short_mean": "cửa hàng trang sức",
    "mean": "Nơi mua bán và sửa chữa vàng bạc, đá quý, đồng hồ.",
    "en_ex": "He picked out a diamond ring at the jewelers.",
    "vi_ex": "Anh ấy đã chọn một chiếc nhẫn kim cương tại cửa hàng trang sức."
  },
  {
    "answer": "dry cleaners",
    "short_mean": "tiệm giặt khô",
    "mean": "Cơ sở chuyên giặt hấp và là ủi trang phục cao cấp.",
    "en_ex": "Drop your wool coat off at the dry cleaners.",
    "vi_ex": "Hãy mang chiếc áo khoác dạ của bạn đến tiệm giặt khô."
  },
  {
    "answer": "florist",
    "short_mean": "cửa hàng hoa tươi",
    "mean": "Tiệm kinh doanh và thiết kế các bó hoa tươi.",
    "en_ex": "The florist arranged a stunning bouquet of red roses.",
    "vi_ex": "Cửa hàng hoa đã cắm một bó hoa hồng đỏ tuyệt đẹp."
  },
  {
    "answer": "hardware store",
    "short_mean": "cửa hàng kim khí / ngũ kim",
    "mean": "Tiệm bán đồ dụng cụ sửa chữa, ốc vít và vật liệu làm nhà.",
    "en_ex": "Buy a hammer and nails at the local hardware store.",
    "vi_ex": "Mua một chiếc búa và đinh tại cửa hàng kim khí địa phương."
  },
  {
    "answer": "bank",
    "short_mean": "ngân hàng",
    "mean": "Tổ chức tài chính thực hiện gửi tiền, rút tiền và giao dịch.",
    "en_ex": "I need to go to the bank to deposit a check.",
    "vi_ex": "Tôi cần đến ngân hàng để gửi một tờ séc."
  },
  {
    "answer": "toy store/toy shop",
    "short_mean": "cửa hàng đồ chơi",
    "mean": "Cửa hàng bán các loại đồ chơi trẻ em.",
    "en_ex": "Kids were excited when entering the big toy store.",
    "vi_ex": "Trẻ em rất hào hứng khi bước vào cửa hàng đồ chơi lớn."
  },
  {
    "answer": "to choose",
    "short_mean": "lựa chọn",
    "mean": "Chọn lấy sản phẩm ưng ý từ nhiều lựa chọn.",
    "en_ex": "Take your time to choose the shirt you like best.",
    "vi_ex": "Hãy thong thả lựa chọn chiếc áo sơ mi bạn thích nhất."
  },
  {
    "answer": "to sell",
    "short_mean": "bán hàng",
    "mean": "Trao đổi hàng hóa lấy tiền.",
    "en_ex": "The shop sells fresh organic vegetables.",
    "vi_ex": "Cửa hàng bán các loại rau hữu cơ tươi."
  },
  {
    "answer": "to want",
    "short_mean": "muốn mua/cần",
    "mean": "Có nhu cầu hoặc mong muốn sở hữu mặt hàng.",
    "en_ex": "I want to buy a new winter jacket.",
    "vi_ex": "Tôi muốn mua một chiếc áo khoác mùa đông mới."
  },
  {
    "answer": "to fit",
    "short_mean": "vừa vặn (kích cỡ)",
    "mean": "Đúng size cỡ với vóc dáng người mặc.",
    "en_ex": "These jeans fit perfectly without needing alteration.",
    "vi_ex": "Chiếc quần jean này vừa vặn hoàn hảo mà không cần sửa."
  },
  {
    "answer": "to buy",
    "short_mean": "mua hàng",
    "mean": "Trả tiền để sở hữu hàng hóa.",
    "en_ex": "She decided to buy the blue dress.",
    "vi_ex": "Cô ấy quyết định mua chiếc váy màu xanh."
  },
  {
    "answer": "to pay",
    "short_mean": "thanh toán",
    "mean": "Trả tiền bằng tiền mặt hoặc thẻ.",
    "en_ex": "Can I pay by credit card?",
    "vi_ex": "Tôi có thể thanh toán bằng thẻ tín dụng được không?"
  },
  {
    "answer": "to try on",
    "short_mean": "thử (quần áo/giày dép)",
    "mean": "Mặc thử đồ trước khi quyết định mua.",
    "en_ex": "You can try on the coat in the fitting room.",
    "vi_ex": "Bạn có thể thử chiếc áo khoác trong phòng thử đồ."
  },
  {
    "answer": "to haggle",
    "short_mean": "mặc cả, trả giá",
    "mean": "Thương lượng giá cả với người bán tại chợ.",
    "en_ex": "It's common to haggle for a lower price at traditional markets.",
    "vi_ex": "Việc mặc cả để có giá thấp hơn là điều phổ biến ở các chợ truyền thống."
  },
  {
    "answer": "to exchange",
    "short_mean": "đổi hàng",
    "mean": "Đổi sản phẩm đã mua lấy một sản phẩm khác.",
    "en_ex": "I returned to exchange the shirt for a larger size.",
    "vi_ex": "Tôi đã quay lại để đổi chiếc áo sơ mi lấy kích cỡ lớn hơn."
  },
  {
    "answer": "to refund",
    "short_mean": "hoàn tiền",
    "mean": "Trả lại tiền cho khách khi họ trả lại hàng.",
    "en_ex": "The store agreed to refund the purchase price.",
    "vi_ex": "Cửa hàng đã đồng ý hoàn lại tiền giá trị sản phẩm."
  }
];
