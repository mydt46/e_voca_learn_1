const VOCA_WORDS = [
  {
    "answer": "scarf",
    "short_mean": "khăn quàng cổ",
    "mean": "Tấm vải dệt quàng quanh cổ giữ ấm hoặc làm đẹp.",
    "en_ex": "She wrapped a silk scarf around her neck.",
    "vi_ex": "Cô ấy quàng một chiếc khăn lụa quanh cổ."
  },
  {
    "answer": "hat",
    "short_mean": "mũ, nón",
    "mean": "Vật dụng đội lên đầu che nắng hoặc giữ ấm.",
    "en_ex": "He wore a wide-brimmed hat at the beach.",
    "vi_ex": "Anh ấy đội một chiếc mũ rộng vành ở bãi biển."
  },
  {
    "answer": "cap",
    "short_mean": "mũ lưỡi trai",
    "mean": "Mũ vải ôm đầu có vành lưỡi che nắng phía trước.",
    "en_ex": "He put on his baseball cap before going out.",
    "vi_ex": "Anh ấy đội chiếc mũ lưỡi trai bóng chày trước khi ra ngoài."
  },
  {
    "answer": "gloves",
    "short_mean": "đôi găng tay",
    "mean": "Đồ vải/da bảo vệ bàn tay khỏi lạnh hoặc chấn thương.",
    "en_ex": "Wear leather gloves to protect your hands in winter.",
    "vi_ex": "Hãy đeo găng tay da để bảo vệ đôi tay vào mùa đông."
  },
  {
    "answer": "belt",
    "short_mean": "thắt lưng, dây nịt",
    "mean": "Dải da/vải thắt quanh eo giữ quần chặt.",
    "en_ex": "He tightened his leather belt.",
    "vi_ex": "Anh ấy thắt chặt chiếc thắt lưng da của mình."
  },
  {
    "answer": "purse/handbag",
    "short_mean": "túi xách tay nữ",
    "mean": "Túi xách nhỏ nữ mang theo đựng ví và đồ cá nhân.",
    "en_ex": "She kept her lipstick in her handbag.",
    "vi_ex": "Cô ấy cất thỏi son của mình trong túi xách."
  },
  {
    "answer": "briefcase",
    "short_mean": "cặp công tác, cặp tài liệu",
    "mean": "Cặp da cứng hình chữ nhật dành cho doanh nhân.",
    "en_ex": "The lawyer carried a heavy leather briefcase.",
    "vi_ex": "Luật sư mang theo một chiếc cặp tài liệu bằng da nặng."
  },
  {
    "answer": "backpack",
    "short_mean": "ba lô",
    "mean": "Túi đựng đồ đeo hai quai trên lưng.",
    "en_ex": "Students carry heavy textbooks in their backpacks.",
    "vi_ex": "Học sinh mang những cuốn sách giáo khoa nặng trong ba lô của mình."
  },
  {
    "answer": "rucksack",
    "short_mean": "ba lô dã ngoại / ba lô du lịch",
    "mean": "Túi ba lô cỡ lớn dùng khi đi leo núi dã ngoại.",
    "en_ex": "He packed his camping gear into a large rucksack.",
    "vi_ex": "Anh ấy đóng gói dụng cụ cắm trại vào một chiếc ba lô dã ngoại lớn."
  },
  {
    "answer": "jewelry/jewellery",
    "short_mean": "trang sức, nữ trang",
    "mean": "Các vật phẩm bằng vàng bạc đá quý đeo trang trí.",
    "en_ex": "She loves wearing fine gold jewelry.",
    "vi_ex": "Cô ấy thích đeo trang sức bằng vàng tinh xảo."
  },
  {
    "answer": "necklace",
    "short_mean": "vòng cổ, dây chuyền",
    "mean": "Chuỗi hạt hoặc dây kim loại đeo quanh cổ.",
    "en_ex": "He gave her a beautiful silver necklace.",
    "vi_ex": "Anh ấy đã tặng cô ấy một chiếc dây chuyền bạc đẹp đẽ."
  },
  {
    "answer": "bracelet",
    "short_mean": "vòng tay, lắc tay",
    "mean": "Vòng kim loại hay hạt đeo ở cổ tay.",
    "en_ex": "She wore a charming charm bracelet.",
    "vi_ex": "Cô ấy đeo một chiếc lắc tay đính hạt dễ thương."
  },
  {
    "answer": "earrings",
    "short_mean": "bông tai, hoa tai",
    "mean": "Trang sức đeo vào thùy tai.",
    "en_ex": "Diamond earrings sparkling under the lights.",
    "vi_ex": "Bông tai kim cương lấp lánh dưới ánh đèn."
  },
  {
    "answer": "ring",
    "short_mean": "nhẫn",
    "mean": "Vòng kim loại nhỏ đeo vào ngón tay.",
    "en_ex": "He bought an engagement ring for his fiancee.",
    "vi_ex": "Anh ấy đã mua một chiếc nhẫn cầu hôn cho vị hôn thê của mình."
  },
  {
    "answer": "brooch",
    "short_mean": "trâm cài áo",
    "mean": "Huy hiệu trang sức đính ghim trên ngực áo.",
    "en_ex": "She pinned an antique silver brooch to her coat.",
    "vi_ex": "Cô ấy cài một chiếc trâm bằng bạc cổ lên áo khoác."
  },
  {
    "answer": "pin/badge",
    "short_mean": "huy hiệu, huy chương cài áo",
    "mean": "Vật trang trí nhỏ gắn ghim lên áo.",
    "en_ex": "He wore a school badge on his blazer.",
    "vi_ex": "Anh ấy đeo một chiếc huy hiệu trường học trên áo khoác blazer."
  },
  {
    "answer": "cufflinks",
    "short_mean": "khuy cài cổ tay áo sơ mi",
    "mean": "Cặp khuy trang sức kim loại cài nẹp tay áo sơ mi nam.",
    "en_ex": "He wore silver cufflinks with his formal suit.",
    "vi_ex": "Anh ấy đeo cặp khuy cài bằng bạc cùng bộ vest lịch sự."
  },
  {
    "answer": "watch",
    "short_mean": "đồng hồ đeo tay",
    "mean": "Thiết bị xem thời gian đeo ở cổ tay.",
    "en_ex": "He checked his watch to see the time.",
    "vi_ex": "Anh ấy xem đồng hồ đeo tay để biết giờ."
  },
  {
    "answer": "handkerchief",
    "short_mean": "khăn tay vải",
    "mean": "Miếng vải nhỏ xếp túi dùng lau tay mặt.",
    "en_ex": "He offered her a clean linen handkerchief.",
    "vi_ex": "Anh ấy đưa cho cô ấy một chiếc khăn tay bằng vải linen sạch."
  },
  {
    "answer": "bow tie",
    "short_mean": "nơ thắt cổ áo",
    "mean": "Nơ vải thắt hình cánh bướm ở cổ áo tuxedo.",
    "en_ex": "He wore a black bow tie to the formal dinner.",
    "vi_ex": "Anh ấy thắt chiếc nơ cổ màu đen đến tiệc tối trang trọng."
  },
  {
    "answer": "umbrella",
    "short_mean": "cây ô, chiếc dù",
    "mean": "Vật dụng mở ra che mưa che nắng.",
    "en_ex": "Take an umbrella because it's going to rain.",
    "vi_ex": "Hãy mang theo ô vì trời sắp mưa đấy."
  },
  {
    "answer": "hair band",
    "short_mean": "băng đô / dây buộc tóc",
    "mean": "Dải thun hoặc đai giữ tóc gọn gàng.",
    "en_ex": "She wore a floral hair band to keep her hair out of her face.",
    "vi_ex": "Cô ấy đeo một chiếc băng đô họa tiết hoa để giữ tóc không rũ xuống mặt."
  },
  {
    "answer": "glasses",
    "short_mean": "kính cận / kính mắt",
    "mean": "Cặp tròng kính trợ lực mắt nhìn rõ.",
    "en_ex": "He wears reading glasses when checking documents.",
    "vi_ex": "Anh ấy đeo kính đọc sách khi kiểm tra tài liệu."
  },
  {
    "answer": "sunglasses",
    "short_mean": "kính râm, kính mát",
    "mean": "Kính tối màu bảo vệ mắt khỏi ánh nắng.",
    "en_ex": "Wear sunglasses to protect your eyes from UV rays.",
    "vi_ex": "Hãy đeo kính râm để bảo vệ mắt khỏi tia UV."
  },
  {
    "answer": "wallet",
    "short_mean": "ví nam, bóp tiền",
    "mean": "Ví gập nhỏ dùng để tiền và thẻ cá nhân.",
    "en_ex": "He kept his credit cards inside his leather wallet.",
    "vi_ex": "Anh ấy cất các thẻ tín dụng bên trong chiếc ví da của mình."
  },
  {
    "answer": "wallet/purse",
    "short_mean": "ví đựng tiền",
    "mean": "Túi ví nhỏ đựng tiền và giấy tờ.",
    "en_ex": "She reached into her bag for her purse.",
    "vi_ex": "Cô ấy với tay vào túi xách để lấy chiếc ví."
  },
  {
    "answer": "high heels",
    "short_mean": "giày cao gót",
    "mean": "Giày nữ có gót cao tạo vóc dáng thanh thoát.",
    "en_ex": "She walked confidently in her red high heels.",
    "vi_ex": "Cô ấy tự tin bước đi trên đôi giày cao gót màu đỏ."
  },
  {
    "answer": "sandals",
    "short_mean": "dép quai hậu, xăng-đan",
    "mean": "Giày có quai thoáng mát cho mùa hè.",
    "en_ex": "Leather sandals are great for summer walking.",
    "vi_ex": "Xăng-đan da rất tuyệt vời cho việc đi bộ mùa hè."
  },
  {
    "answer": "laces",
    "short_mean": "dây buộc giày",
    "mean": "Sợi dây dùng xỏ luồn thắt chặt giày.",
    "en_ex": "Tie your shoelaces tightly before running.",
    "vi_ex": "Hãy buộc dây giày của bạn thật chặt trước khi chạy."
  },
  {
    "answer": "sneakers/trainers",
    "short_mean": "giày thể thao",
    "mean": "Giày đế mềm êm ái thích hợp vận động.",
    "en_ex": "He bought a pair of comfortable white sneakers.",
    "vi_ex": "Anh ấy đã mua một đôi giày thể thao màu trắng thoải mái."
  },
  {
    "answer": "zipper/zip",
    "short_mean": "khóa kéo",
    "mean": "Dải khóa cài kéo mở túi hoặc giày.",
    "en_ex": "The zipper on her bag broke.",
    "vi_ex": "Khóa kéo trên túi xách của cô ấy bị hỏng."
  },
  {
    "answer": "buckle",
    "short_mean": "mặt khóa thắt lưng/giày",
    "mean": "Khóa kim loại gài cố định dây nịt hay quai giày.",
    "en_ex": "Fasten the shiny silver buckle on your belt.",
    "vi_ex": "Cài mặt khóa bạc sáng bóng trên thắt lưng của bạn."
  },
  {
    "answer": "shoes",
    "short_mean": "đôi giày",
    "mean": "Trang phục đeo bảo vệ chân khi đi lại.",
    "en_ex": "Polish your black shoes for the interview.",
    "vi_ex": "Đánh bóng đôi giày màu đen của bạn cho buổi phỏng vấn."
  },
  {
    "answer": "boots",
    "short_mean": "đôi ủng, giày bốt",
    "mean": "Giày cổ cao qua cổ chân hoặc đầu gối.",
    "en_ex": "She wore waterproof hiking boots in the mud.",
    "vi_ex": "Cô ấy đi đôi giày bốt dã ngoại chống nước trong bùn."
  },
  {
    "answer": "slippers",
    "short_mean": "dép đi trong nhà",
    "mean": "Dép mềm êm ái dùng đi lại nội bộ trong nhà.",
    "en_ex": "Put on your warm slippers when you are indoors.",
    "vi_ex": "Hãy đi đôi dép đi trong nhà ấm áp của bạn khi ở trong nhà."
  },
  {
    "answer": "flip-flops",
    "short_mean": "dép xỏ ngón, dép tông",
    "mean": "Dép cao su có quai kẹp xỏ ngón đi biển.",
    "en_ex": "We wore rubber flip-flops on the beach sand.",
    "vi_ex": "Chúng tôi đeo dép xỏ ngón cao su trên cát bãi biển."
  },
  {
    "answer": "lipstick",
    "short_mean": "thỏi son môi",
    "mean": "Mỹ phẩm thoa lên môi tạo màu tô điểm.",
    "en_ex": "She applied red lipstick before leaving.",
    "vi_ex": "Cô ấy thoa son môi màu đỏ trước khi ra ngoài."
  },
  {
    "answer": "foundation",
    "short_mean": "kem nền trang điểm",
    "mean": "Mỹ phẩm tạo lớp kem mịn làm đều màu da mặt.",
    "en_ex": "Apply liquid foundation smoothly on your face.",
    "vi_ex": "Thoa kem nền dạng lỏng đều lên khuôn mặt."
  },
  {
    "answer": "mascara",
    "short_mean": "chuốt mi, mascara",
    "mean": "Mỹ phẩm chải mi làm dày và dài mi mắt.",
    "en_ex": "Mascara highlights and defines your eyelashes.",
    "vi_ex": "Mascara làm nổi bật và làm rõ nét hàng mi của bạn."
  },
  {
    "answer": "blush/blusher",
    "short_mean": "phấn hồng thoa má",
    "mean": "Phấn hồng trang điểm làm tươi tắn gò má.",
    "en_ex": "Sweep a little blush across your cheeks for a healthy look.",
    "vi_ex": "Quẹt nhẹ một chút phấn hồng lên gò má cho vẻ ngoài rạng rỡ."
  },
  {
    "answer": "eyeliner",
    "short_mean": "bút kẻ mắt",
    "mean": "Bút chì/nước kẻ đường viền làm rõ mi mắt.",
    "en_ex": "Draw a thin line of black eyeliner along the upper lid.",
    "vi_ex": "Vẽ một đường bút kẻ mắt màu đen mỏng dọc theo mí mắt trên."
  },
  {
    "answer": "eyeshadow",
    "short_mean": "phấn mắt",
    "mean": "Phấn màu thoa lên bầu mắt tạo điểm nhấn.",
    "en_ex": "She picked neutral eyeshadow tones for daily makeup.",
    "vi_ex": "Cô ấy chọn các tông phấn mắt trung tính cho việc trang điểm hằng ngày."
  },
  {
    "answer": "hair dye",
    "short_mean": "thuốc nhuộm tóc",
    "mean": "Hóa chất đổi màu tóc theo sở thích.",
    "en_ex": "She used brown hair dye to cover gray hair.",
    "vi_ex": "Cô ấy dùng thuốc nhuộm tóc màu nâu để che đi tóc bạc."
  },
  {
    "answer": "hair gel",
    "short_mean": "gel vuốt tóc",
    "mean": "Gel tạo kiểu và giữ nếp tóc cố định.",
    "en_ex": "He used hair gel to style his hair slickly.",
    "vi_ex": "Anh ấy dùng gel vuốt tóc để tạo kiểu tóc láng bóng."
  },
  {
    "answer": "hair spray",
    "short_mean": "bình xịt giữ nếp tóc",
    "mean": "Dung dịch xịt phun sương cố định kiểu tóc.",
    "en_ex": "Spray hair spray to keep the hairstyle intact all day.",
    "vi_ex": "Xịt bình xịt giữ nếp tóc để giữ kiểu tóc nguyên vẹn suốt cả ngày."
  },
  {
    "answer": "nail polish",
    "short_mean": "sơn móng tay",
    "mean": "Nước sơn màu phủ lên móng tay móng chân.",
    "en_ex": "She applied shiny pink nail polish.",
    "vi_ex": "Cô ấy sơn loại sơn móng tay màu hồng bóng."
  },
  {
    "answer": "perfume",
    "short_mean": "nước hoa nữ",
    "mean": "Dung dịch tinh dầu thơm thoa/xịt tạo hương dễ chịu.",
    "en_ex": "She sprayed a floral perfume on her wrists.",
    "vi_ex": "Cô ấy xịt nước hoa hương hoa cỏ lên cổ tay."
  },
  {
    "answer": "aftershave",
    "short_mean": "nước hoa làm dịu da sau cạo râu",
    "mean": "Dung dịch thoa mặt nam sau khi cạo râu.",
    "en_ex": "He applied refreshing aftershave after shaving.",
    "vi_ex": "Anh ấy thoa nước làm dịu da sảng khoái sau khi cạo râu."
  },
  {
    "answer": "moisturizer",
    "short_mean": "kem dưỡng ẩm",
    "mean": "Kem duy trì độ ẩm mịn cho da mặt và cơ thể.",
    "en_ex": "Moisturizer keeps your skin soft and hydrated.",
    "vi_ex": "Kem dưỡng ẩm giúp da bạn mềm mại và đủ nước."
  },
  {
    "answer": "hairbrush",
    "short_mean": "bàn chải tóc, lược chải tóc tròn",
    "mean": "Lược bản to dùng chải gỡ rối tóc.",
    "en_ex": "Use a clean hairbrush to smooth your hair.",
    "vi_ex": "Dùng một chiếc bàn chải tóc sạch để làm mượt tóc của bạn."
  },
  {
    "answer": "comb",
    "short_mean": "chiếc lược",
    "mean": "Dụng cụ răng cưa mỏng dùng chải tóc rẽ ngôi.",
    "en_ex": "He ran a comb through his wet hair.",
    "vi_ex": "Anh ấy chải chiếc lược qua mái tóc ướt của mình."
  }
];
