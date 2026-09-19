const VOCA_WORDS = [
  {
    "answer": "cuff",
    "short_mean": "cổ tay áo",
    "mean": "Phần nẹp gấp ở đầu tay áo sơ mi hoặc áo khoác.",
    "en_ex": "Fasten the buttons on your shirt cuff.",
    "vi_ex": "Cài khuy trên cổ tay áo sơ mi của bạn."
  },
  {
    "answer": "collar",
    "short_mean": "cổ áo",
    "mean": "Vành vải bẻ ở quanh cổ áo.",
    "en_ex": "Iron the shirt collar to keep it stiff and clean.",
    "vi_ex": "Ủi cổ áo sơ mi để nó giữ dáng đứng và sạch sẽ."
  },
  {
    "answer": "sleeve",
    "short_mean": "tay áo",
    "mean": "Phần quần áo bao phủ cánh tay.",
    "en_ex": "Roll up your sleeves before starting work.",
    "vi_ex": "Xắn tay áo của bạn lên trước khi bắt đầu làm việc."
  },
  {
    "answer": "button",
    "short_mean": "cúc áo, khuy áo",
    "mean": "Viên tròn nhỏ dùng để cài khép quần áo.",
    "en_ex": "A button fell off his jacket.",
    "vi_ex": "Một chiếc cúc áo bị rơi khỏi áo khoác của anh ấy."
  },
  {
    "answer": "shirt",
    "short_mean": "áo sơ mi",
    "mean": "Áo nam/nữ có hàng cúc trước và cổ áo.",
    "en_ex": "He wears a white shirt for work every day.",
    "vi_ex": "Anh ấy mặc một chiếc áo sơ mi màu trắng đi làm mỗi ngày."
  },
  {
    "answer": "t-shirt",
    "short_mean": "áo thun, áo phông",
    "mean": "Áo thun cổ tròn ngắn tay thoải mái.",
    "en_ex": "Wear a cotton t-shirt on warm summer days.",
    "vi_ex": "Mặc một chiếc áo thun cotton vào những ngày hè ấm áp."
  },
  {
    "answer": "blouse",
    "short_mean": "áo kiểu nữ",
    "mean": "Áo nữ phong cách trang trọng hoặc nữ tính.",
    "en_ex": "She paired a silk blouse with a black skirt.",
    "vi_ex": "Cô ấy phối một chiếc áo kiểu nữ bằng lụa với một chiếc chân váy màu đen."
  },
  {
    "answer": "suit",
    "short_mean": "bộ vest, bộ com-lê",
    "mean": "Bộ trang phục gồm áo vest và quần tây đồng màu.",
    "en_ex": "He looked sharp in his dark navy suit.",
    "vi_ex": "Anh ấy trông thật lịch lãm trong bộ vest màu xanh lam đậm."
  },
  {
    "answer": "uniform",
    "short_mean": "đồng phục",
    "mean": "Trang phục quy chuẩn của học sinh hay nhân viên.",
    "en_ex": "Students wear a neat school uniform.",
    "vi_ex": "Học sinh mặc bộ đồng phục trường học gọn gàng."
  },
  {
    "answer": "dress",
    "short_mean": "váy liền thân",
    "mean": "Trang phục nữ liền thân từ thân trên xuống chân.",
    "en_ex": "She chose an elegant evening dress for the gala.",
    "vi_ex": "Cô ấy đã chọn một chiếc váy dạ hội sang trọng cho dạ tiệc."
  },
  {
    "answer": "skirt",
    "short_mean": "chân váy",
    "mean": "Trang phục nữ mặc từ eo xuống.",
    "en_ex": "A pleated skirt is back in fashion.",
    "vi_ex": "Chân váy xếp ly đã trở lại hợp thời trang."
  },
  {
    "answer": "pants/trousers",
    "short_mean": "quần dài",
    "mean": "Trang phục mặc bao phủ hai chân.",
    "en_ex": "He bought a pair of formal black pants.",
    "vi_ex": "Anh ấy đã mua một chiếc quần dài màu đen lịch sự."
  },
  {
    "answer": "jeans",
    "short_mean": "quần bò, quần jeans",
    "mean": "Quần may bằng vải denim chắc chắn.",
    "en_ex": "Blue jeans are versatile and comfortable to wear.",
    "vi_ex": "Quần jeans xanh rất đa năng và thoải mái khi mặc."
  },
  {
    "answer": "jacket",
    "short_mean": "áo khoác nhẹ, áo vest khoác ngoài",
    "mean": "Áo khoác ngắn ngang hông.",
    "en_ex": "Put on a light jacket because it's cool outside.",
    "vi_ex": "Mặc thêm một chiếc áo khoác nhẹ vì bên ngoài trời mát."
  },
  {
    "answer": "raincoat",
    "short_mean": "áo mưa",
    "mean": "Áo chống thấm nước mặc khi trời mưa.",
    "en_ex": "Don't forget your raincoat; it looks like rain.",
    "vi_ex": "Đừng quên chiếc áo mưa của bạn; trời có vẻ sắp mưa đấy."
  },
  {
    "answer": "socks",
    "short_mean": "tất, vớ",
    "mean": "Vật dụng bằng vải đeo vào chân trước khi xỏ giày.",
    "en_ex": "Wear thick woolen socks to keep your feet warm.",
    "vi_ex": "Hãy đi tất len dày để giữ ấm cho bàn chân."
  },
  {
    "answer": "shorts",
    "short_mean": "quần đùi, quần ngắn",
    "mean": "Quần ngắn tới đùi hoặc đầu gối.",
    "en_ex": "He wears denim shorts during the summer.",
    "vi_ex": "Anh ấy mặc quần đùi vải bò trong mùa hè."
  },
  {
    "answer": "tie",
    "short_mean": "cà vạt",
    "mean": "Dải vải thắt quanh cổ áo sơ mi nam.",
    "en_ex": "He tied his silk tie neatly.",
    "vi_ex": "Anh ấy thắt chiếc cà vạt lụa gọn gàng."
  },
  {
    "answer": "pajamas/pyjamas",
    "short_mean": "bộ đồ ngủ",
    "mean": "Bộ quần áo rộng rãi mặc đi ngủ.",
    "en_ex": "Children put on their pajamas before listening to bedtime stories.",
    "vi_ex": "Trẻ em mặc bộ đồ ngủ trước khi nghe truyện cổ tích."
  },
  {
    "answer": "zipper/zip",
    "short_mean": "khóa kéo",
    "mean": "Dải khóa kéo răng kim loại/nhựa khép mở quần áo.",
    "en_ex": "Zip up your jacket zipper to stay warm.",
    "vi_ex": "Kéo khóa kéo áo khoác của bạn lên để giữ ấm."
  },
  {
    "answer": "hood",
    "short_mean": "mũ trùm đầu (của áo)",
    "mean": "Phần mũ gắn liền sau lưng áo khoác.",
    "en_ex": "Pull up the hood of your hoodie when it rains.",
    "vi_ex": "Trùm chiếc mũ trùm đầu của áo nỉ lên khi trời mưa."
  },
  {
    "answer": "pocket",
    "short_mean": "túi áo / túi quần",
    "mean": "Túi nhỏ may trên quần áo dùng đựng đồ cá nhân.",
    "en_ex": "He kept his keys in his coat pocket.",
    "vi_ex": "Anh ấy cất chìa khóa trong túi áo khoác."
  },
  {
    "answer": "coat",
    "short_mean": "áo khoác ấm, áo măng tô",
    "mean": "Áo khoác dài mặc giữ ấm mùa đông.",
    "en_ex": "She wore a stylish winter coat outdoors.",
    "vi_ex": "Cô ấy mặc một chiếc áo khoác ấm mùa đông sành điệu ngoài trời."
  },
  {
    "answer": "sweater/jumper",
    "short_mean": "áo len",
    "mean": "Áo dệt len chui đầu giữ ấm.",
    "en_ex": "This knit sweater is very soft and warm.",
    "vi_ex": "Chiếc áo len dệt này rất mềm mại và ấm áp."
  },
  {
    "answer": "bra",
    "short_mean": "áo lót nữ",
    "mean": "Trang phục lót ngực dành cho nữ giới.",
    "en_ex": "Choose a comfortable sports bra for working out.",
    "vi_ex": "Hãy chọn một chiếc áo lót thể thao thoải mái để tập luyện."
  },
  {
    "answer": "panties/knickers",
    "short_mean": "quần lót nữ",
    "mean": "Trang phục lót phần dưới dành cho nữ.",
    "en_ex": "Cotton panties provide maximum comfort.",
    "vi_ex": "Quần lót nữ bằng chất liệu cotton mang lại sự thoải mái tối đa."
  },
  {
    "answer": "bathrobe/ dressing gown",
    "short_mean": "áo khoác tắm / áo mặc nhà",
    "mean": "Áo khoác rủ mềm mặc sau khi tắm hoặc ở nhà.",
    "en_ex": "He put on a plush bathrobe after stepping out of the shower.",
    "vi_ex": "Anh ấy khoác chiếc áo khoác tắm êm ái sau khi bước ra khỏi phòng tắm."
  },
  {
    "answer": "boxer shorts",
    "short_mean": "quần lót đùi nam",
    "mean": "Quần lót dạng quần đùi rộng rãi dành cho nam.",
    "en_ex": "Many men prefer wearing loose boxer shorts.",
    "vi_ex": "Nhiều nam giới thích mặc quần lót đùi rộng rãi hơn."
  },
  {
    "answer": "jockey shorts/ pants",
    "short_mean": "quần lót nam dạng tam giác (briefs)",
    "mean": "Quần lót nam ôm sát dáng tam giác.",
    "en_ex": "Cotton jockey shorts offer snug support.",
    "vi_ex": "Quần lót nam tam giác cotton mang lại sự hỗ trợ ôm sát."
  },
  {
    "answer": "pantyhose/tights",
    "short_mean": "quần tất nữ",
    "mean": "Tất mỏng bó sát dài từ hông đến bàn chân.",
    "en_ex": "She wore black tights under her short skirt.",
    "vi_ex": "Cô ấy mặc quần tất màu đen bên trong chiếc chân váy ngắn."
  },
  {
    "answer": "leggings",
    "short_mean": "quần bó ôm chân, quần legging",
    "mean": "Quần vải thun ôm sát từ eo xuống cổ chân.",
    "en_ex": "Leggings are perfect for yoga practice.",
    "vi_ex": "Quần legging rất hoàn hảo cho việc tập luyện yoga."
  },
  {
    "answer": "to wear",
    "short_mean": "mặc, mang, đeo",
    "mean": "Mang trang phục hay phụ kiện trên người.",
    "en_ex": "She loves to wear colorful dresses in spring.",
    "vi_ex": "Cô ấy thích mặc những chiếc váy nhiều màu sắc vào mùa xuân."
  },
  {
    "answer": "to suit (someone)",
    "short_mean": "hợp với ai đó (phong cách)",
    "mean": "Trang phục làm tôn lên vẻ đẹp hợp phong cách của người mặc.",
    "en_ex": "That blue color really suits you.",
    "vi_ex": "Màu xanh dương đó thực sự rất hợp với bạn."
  },
  {
    "answer": "to fit",
    "short_mean": "vừa vặn (kích cỡ)",
    "mean": "Đúng size cỡ vóc dáng.",
    "en_ex": "These jeans fit me perfectly.",
    "vi_ex": "Chiếc quần jeans này vừa vặn với tôi hoàn hảo."
  },
  {
    "answer": "to put on",
    "short_mean": "mặc vào, xỏ vào",
    "mean": "Hành động khoác mặc trang phục lên người.",
    "en_ex": "Put on your shoes before going out.",
    "vi_ex": "Hãy xỏ giày của bạn vào trước khi ra ngoài."
  },
  {
    "answer": "to take off",
    "short_mean": "cởi ra, tháo ra",
    "mean": "Hành động tháo cởi trang phục khỏi người.",
    "en_ex": "Take off your wet coat.",
    "vi_ex": "Hãy cởi chiếc áo khoác ướt của bạn ra."
  },
  {
    "answer": "to do up / fasten",
    "short_mean": "cài cúc / kéo khóa / thắt lại",
    "mean": "Khép buộc cố định quần áo.",
    "en_ex": "Fasten your seatbelt carefully.",
    "vi_ex": "Hãy thắt dây an toàn của bạn cẩn thận."
  },
  {
    "answer": "to undo / unfasten",
    "short_mean": "mở cúc / mở khóa / cởi thắt",
    "mean": "Nới mở nắp khuy khóa quần áo.",
    "en_ex": "He unfastened his tie after work.",
    "vi_ex": "Anh ấy mở cởi cà vạt sau giờ làm."
  },
  {
    "answer": "to change / to get changed",
    "short_mean": "thay quần áo",
    "mean": "Đổi sang bộ quần áo khác.",
    "en_ex": "Go upstairs and get changed for dinner.",
    "vi_ex": "Hãy lên tầng và thay quần áo cho bữa tối."
  },
  {
    "answer": "leather",
    "short_mean": "chất liệu da",
    "mean": "Vật liệu làm từ da động vật đã qua xử lý.",
    "en_ex": "This bag is made of genuine leather.",
    "vi_ex": "Chiếc túi này được làm bằng da thật."
  },
  {
    "answer": "cotton",
    "short_mean": "chất liệu bông cotton",
    "mean": "Sợi tự nhiên thoáng mát dệt trang phục.",
    "en_ex": "100% cotton shirts are breathable and comfortable.",
    "vi_ex": "Các áo sơ mi 100% cotton rất thoáng khí và thoải mái."
  },
  {
    "answer": "woolen/woollen",
    "short_mean": "chất liệu bằng len",
    "mean": "Vật liệu dệt từ sợi len cừu giữ ấm.",
    "en_ex": "She knitted a thick woolen scarf.",
    "vi_ex": "Cô ấy đã đan một chiếc khăn quàng bằng len dày."
  },
  {
    "answer": "polka dot/ spotted",
    "short_mean": "họa tiết chấm bi",
    "mean": "Họa tiết trang trí hình các chấm tròn.",
    "en_ex": "She wore a retro polka dot dress.",
    "vi_ex": "Cô ấy mặc một chiếc váy họa tiết chấm bi phong cách cổ điển."
  },
  {
    "answer": "striped",
    "short_mean": "họa tiết kẻ sọc",
    "mean": "Họa tiết có các đường kẻ ngang hoặc sọc dọc.",
    "en_ex": "He wore a blue and white striped shirt.",
    "vi_ex": "Anh ấy mặc một chiếc áo sơ mi kẻ sọc màu xanh và trắng."
  },
  {
    "answer": "checkered/checked",
    "short_mean": "họa tiết kẻ caro",
    "mean": "Họa tiết ô vuông như bàn cờ.",
    "en_ex": "A checkered flannel shirt is popular for casual style.",
    "vi_ex": "Áo sơ mi dạ kẻ caro rất phổ biến cho phong cách thường ngày."
  },
  {
    "answer": "plain",
    "short_mean": "trơn, không họa tiết",
    "mean": "Quần áo một màu trơn đơn giản.",
    "en_ex": "I prefer plain white t-shirts.",
    "vi_ex": "Tôi thích những chiếc áo thun màu trắng trơn hơn."
  },
  {
    "answer": "silk",
    "short_mean": "chất liệu lụa tơ tằm",
    "mean": "Chất liệu dệt từ tơ tằm mềm mịn và bóng.",
    "en_ex": "Silk ties add elegance to a suit.",
    "vi_ex": "Cà vạt lụa thêm phần thanh lịch cho bộ vest."
  },
  {
    "answer": "denim",
    "short_mean": "chất liệu vải bò/denim",
    "mean": "Vải dệt chắc làm quần áo jeans.",
    "en_ex": "Denim is durable and never goes out of fashion.",
    "vi_ex": "Vải bò bền bỉ và không bao giờ lỗi mốt."
  }
];
