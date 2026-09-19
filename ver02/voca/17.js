const VOCA_WORDS = [
  {
    "answer": "long hair",
    "short_mean": "mái tóc dài",
    "mean": "Mái tóc phát triển dài quá vai.",
    "en_ex": "She loves wearing her long hair in braids.",
    "vi_ex": "Cô ấy thích tết mái tóc dài của mình thành bím."
  },
  {
    "answer": "short hair",
    "short_mean": "mái tóc ngắn",
    "mean": "Tóc được cắt ngắn gọn gàng.",
    "en_ex": "He prefers short hair because it is easy to maintain.",
    "vi_ex": "Anh ấy thích tóc ngắn hơn vì nó dễ chăm sóc."
  },
  {
    "answer": "shoulder-length hair",
    "short_mean": "tóc ngang vai",
    "mean": "Mái tóc có độ dài vừa chạm đến bờ vai.",
    "en_ex": "She has shoulder-length hair styled in a bob.",
    "vi_ex": "Cô ấy có mái tóc ngang vai tạo kiểu ngắn bob."
  },
  {
    "answer": "bald",
    "short_mean": "trọc đầu, hói đầu",
    "mean": "Không có tóc trên da đầu.",
    "en_ex": "He went completely bald in his fifties.",
    "vi_ex": "Anh ấy bị hói đầu hoàn toàn ở tuổi 50."
  },
  {
    "answer": "straight hair",
    "short_mean": "tóc thẳng",
    "mean": "Mái tóc suôn thẳng không uốn xoăn.",
    "en_ex": "Her natural straight hair falls smoothly.",
    "vi_ex": "Mái tóc thẳng tự nhiên của cô ấy rũ xuống mượt mà."
  },
  {
    "answer": "wavy hair",
    "short_mean": "tóc bồng bềnh gợn sóng",
    "mean": "Mái tóc có những nếp sóng nhẹ tự nhiên.",
    "en_ex": "She styled her wavy hair with hair mousse.",
    "vi_ex": "Cô ấy tạo kiểu cho mái tóc bồng bềnh gợn sóng của mình bằng keo xịt."
  },
  {
    "answer": "curly hair",
    "short_mean": "tóc xoăn tít",
    "mean": "Mái tóc uốn thành các lọn xoăn tròn.",
    "en_ex": "He has natural tight curly hair.",
    "vi_ex": "Anh ấy có mái tóc xoăn tít tự nhiên."
  },
  {
    "answer": "frizzy hair",
    "short_mean": "tóc xù rơm, rễ tre",
    "mean": "Mái tóc khô xơ và bị xù bông lên.",
    "en_ex": "Humidity makes her hair frizzy in summer.",
    "vi_ex": "Độ ẩm làm cho tóc cô ấy bị xù rơm vào mùa hè."
  },
  {
    "answer": "ponytail",
    "short_mean": "tóc buộc đuôi ngựa",
    "mean": "Mái tóc gom cột cao phía sau.",
    "en_ex": "She tied her hair back into a high ponytail.",
    "vi_ex": "Cô ấy buộc tóc lại thành hình đuôi ngựa cao."
  },
  {
    "answer": "black hair",
    "short_mean": "tóc màu đen",
    "mean": "Mái tóc có màu đen tự nhiên.",
    "en_ex": "Most East Asians have natural black hair.",
    "vi_ex": "Hầu hết người Đông Á có mái tóc màu đen tự nhiên."
  },
  {
    "answer": "brown hair",
    "short_mean": "tóc màu nâu",
    "mean": "Mái tóc có màu sắc nâu trầm.",
    "en_ex": "She dyed her hair chocolate brown.",
    "vi_ex": "Cô ấy đã nhuộm tóc sang màu nâu sô-cô-la."
  },
  {
    "answer": "blond hair",
    "short_mean": "tóc màu vàng kim",
    "mean": "Mái tóc có màu sáng bạch kim/vàng.",
    "en_ex": "Her natural blond hair shined brightly.",
    "vi_ex": "Mái tóc màu vàng kim tự nhiên của cô ấy tỏa sáng rực rỡ."
  },
  {
    "answer": "red hair",
    "short_mean": "tóc màu hung đỏ",
    "mean": "Mái tóc có màu hung đỏ tự nhiên.",
    "en_ex": "Red hair is very unique and striking.",
    "vi_ex": "Mái tóc hung đỏ rất độc đáo và nổi bật."
  },
  {
    "answer": "gray hair/grey hair",
    "short_mean": "tóc bạc, tóc màu xám",
    "mean": "Mái tóc chuyển màu xám trắng do tuổi tác.",
    "en_ex": "My grandfather embraced his gray hair proud.",
    "vi_ex": "Ông nội tôi tự hào đón nhận mái tóc bạc của mình."
  },
  {
    "answer": "facial hair",
    "short_mean": "râu trên mặt",
    "mean": "Tên gọi chung cho râu quai nón, ria mọc trên mặt nam giới.",
    "en_ex": "He trimmed his facial hair neatly.",
    "vi_ex": "Anh ấy cắt tỉa bộ râu trên mặt mình một cách gọn gàng."
  },
  {
    "answer": "beard",
    "short_mean": "bộ râu quai nón / râu cằm",
    "mean": "Râu mọc bao phủ quanh cằm và má.",
    "en_ex": "He decided to grow a full beard.",
    "vi_ex": "Anh ấy quyết định nuôi một bộ râu quai nón đầy đặn."
  },
  {
    "answer": "goatee",
    "short_mean": "râu dê (râu mọc ở cằm)",
    "mean": "Bộ râu nhỏ chỉ nuôi tập trung ở quanh cằm.",
    "en_ex": "He sports a stylish well-kept goatee.",
    "vi_ex": "Anh ấy sở hữu một chòm râu dê sành điệu được chăm sóc kỹ."
  },
  {
    "answer": "mustache",
    "short_mean": "ria mép",
    "mean": "Râu mọc trên môi trên.",
    "en_ex": "He shaved off his mustache yesterday.",
    "vi_ex": "Anh ấy đã cạo sạch bộ ria mép của mình ngày hôm qua."
  },
  {
    "answer": "moustache",
    "short_mean": "ria mép (cách viết Anh-Anh)",
    "mean": "Hàng râu mọc trên nẹp môi trên.",
    "en_ex": "A neatly trimmed moustache suits his face.",
    "vi_ex": "Bộ ria mép cắt tỉa gọn gàng rất hợp với khuôn mặt anh ấy."
  },
  {
    "answer": "stubble",
    "short_mean": "râu lởm chởm vừa mọc",
    "mean": "Những sợi râu ngắn vừa mới nhú vài ngày sau khi cạo.",
    "en_ex": "He has a rough stubble on his jawline.",
    "vi_ex": "Anh ấy có hàng râu lởm chởm trên đường quai hàm."
  },
  {
    "answer": "sideburns",
    "short_mean": "tóc mai (hai bên má)",
    "mean": "Dải tóc/râu mọc hai bên má trước tai.",
    "en_ex": "He grew long sideburns inspired by retro style.",
    "vi_ex": "Anh ấy nuôi dải tóc mai dài lấy cảm hứng từ phong cách cổ điển."
  },
  {
    "answer": "to style your hair",
    "short_mean": "tạo kiểu tóc",
    "mean": "Chăm chút sấy tạo phong cách cho mái tóc.",
    "en_ex": "She uses hair gel to style her hair.",
    "vi_ex": "Cô ấy dùng gel vuốt tóc để tạo kiểu tóc cho mình."
  },
  {
    "answer": "to have your hair cut",
    "short_mean": "đi cắt tóc (ở tiệm)",
    "mean": "Thuê thợ cắt bớt tóc cho mình.",
    "en_ex": "I need to have my hair cut this weekend.",
    "vi_ex": "Tôi cần đi cắt tóc vào cuối tuần này."
  },
  {
    "answer": "to get your hair cut",
    "short_mean": "cắt tóc",
    "mean": "Đến tiệm cắt tỉa tóc.",
    "en_ex": "He went to the barber to get his hair cut.",
    "vi_ex": "Anh ấy đến thợ cắt tóc để cắt tóc."
  },
  {
    "answer": "to tie your hair back",
    "short_mean": "buộc gọn tóc ra sau",
    "mean": "Dùng dây thun cột gọn tóc ra sau.",
    "en_ex": "Tie your hair back before cooking.",
    "vi_ex": "Hãy buộc gọn tóc ra sau trước khi nấu ăn."
  },
  {
    "answer": "to shave",
    "short_mean": "cạo râu",
    "mean": "Dùng dao cạo làm sạch râu trên mặt.",
    "en_ex": "He shaves his face every morning.",
    "vi_ex": "Anh ấy cạo râu trên mặt mỗi sáng."
  },
  {
    "answer": "to grow your hair",
    "short_mean": "nuôi tóc dài",
    "mean": "Để tóc tự nhiên phát triển dài ra không cắt.",
    "en_ex": "She plans to grow her hair out for her wedding.",
    "vi_ex": "Cô ấy dự định nuôi tóc dài ra cho lễ cưới của mình."
  },
  {
    "answer": "hazel",
    "short_mean": "màu mắt nâu hạt dẻ",
    "mean": "Màu mắt nâu pha chút sắc xanh lá cây óng ánh.",
    "en_ex": "She has beautiful hazel eyes that change color in light.",
    "vi_ex": "Cô ấy có đôi mắt màu nâu hạt dẻ tuyệt đẹp đổi màu theo ánh sáng."
  },
  {
    "answer": "short",
    "short_mean": "thấp, lùn (chiều cao)",
    "mean": "Có chiều cao khiêm tốn.",
    "en_ex": "He is short compared to his basketball teammates.",
    "vi_ex": "Anh ấy thấp so với các đồng đội bóng rổ của mình."
  },
  {
    "answer": "medium height",
    "short_mean": "chiều cao trung bình",
    "mean": "Chiều cao mức vừa phải không cao không thấp.",
    "en_ex": "She is of medium height with a slim build.",
    "vi_ex": "Cô ấy có chiều cao trung bình với vóc dáng mảnh khảnh."
  },
  {
    "answer": "tall",
    "short_mean": "cao ráo",
    "mean": "Có chiều cao vượt trội.",
    "en_ex": "The basketball player is extremely tall.",
    "vi_ex": "Vận động viên bóng rổ cực kỳ cao ráo."
  },
  {
    "answer": "beautiful",
    "short_mean": "xinh đẹp, lộng lẫy",
    "mean": "Có vẻ ngoại hình lôi cuốn xinh đẹp.",
    "en_ex": "She looked beautiful in her wedding dress.",
    "vi_ex": "Cô ấy trông xinh đẹp trong chiếc váy cưới của mình."
  },
  {
    "answer": "handsome",
    "short_mean": "điển trai, phong độ",
    "mean": "Ngoại hình thu hút dành cho nam giới.",
    "en_ex": "He is a handsome actor with a charming smile.",
    "vi_ex": "Anh ấy là một nam diễn viên điển trai với nụ cười duyên dáng."
  },
  {
    "answer": "young",
    "short_mean": "trẻ trung",
    "mean": "Đang ở độ tuổi thanh xuân.",
    "en_ex": "Young people are enthusiastic about new technologies.",
    "vi_ex": "Giới trẻ rất hào hứng với các công nghệ mới."
  },
  {
    "answer": "middle-aged",
    "short_mean": "trung niên",
    "mean": "Độ tuổi tầm từ 40 đến 60 tuổi.",
    "en_ex": "The course targets middle-aged professionals.",
    "vi_ex": "Khóa học hướng tới các chuyên gia tuổi trung niên."
  },
  {
    "answer": "old",
    "short_mean": "già, lớn tuổi",
    "mean": "Đã sống nhiều năm, có nhiều tuổi.",
    "en_ex": "The old man walked slowly with a cane.",
    "vi_ex": "Cụ già đi bộ chậm rãi với một cây gậy."
  },
  {
    "answer": "formal/smart",
    "short_mean": "trang trọng, lịch sự",
    "mean": "Trang phục lịch thiệp chuẩn mực.",
    "en_ex": "Wear formal clothes to the job interview.",
    "vi_ex": "Hãy mặc trang phục lịch sự đến buổi phỏng vấn xin việc."
  },
  {
    "answer": "casual",
    "short_mean": "thường ngày, thoải mái",
    "mean": "Trang phục mặc tự do không quá gò bó.",
    "en_ex": "Friday is a casual dress day at our office.",
    "vi_ex": "Thứ Sáu là ngày mặc trang phục thoải mái tại văn phòng chúng tôi."
  },
  {
    "answer": "elegant",
    "short_mean": "thanh lịch, quý phái",
    "mean": "Có phong thái tao nhã quý phái.",
    "en_ex": "She wore an elegant black evening gown.",
    "vi_ex": "Cô ấy mặc một chiếc váy dạ hội màu đen thanh lịch."
  },
  {
    "answer": "glamorous",
    "short_mean": "quyến rũ, kiêu sa",
    "mean": "Nổi bật quyến rũ cuốn hút ánh nhìn.",
    "en_ex": "Hollywood stars looked glamorous on the red carpet.",
    "vi_ex": "Các ngôi sao Hollywood trông thật quyến rũ trên thảm đỏ."
  },
  {
    "answer": "dark skin",
    "short_mean": "làn da ngăm / da tối màu",
    "mean": "Làn da có sắc tố sẫm màu tự nhiên.",
    "en_ex": "She has beautiful radiant dark skin.",
    "vi_ex": "Cô ấy có làn da ngăm rạng rỡ tuyệt đẹp."
  },
  {
    "answer": "tan skin/tanned skin",
    "short_mean": "làn da ráy nắng / da bánh mật",
    "mean": "Làn da nâu khỏe khoắn do tiếp xúc ánh nắng.",
    "en_ex": "He got a rich tanned skin after spending a week at the beach.",
    "vi_ex": "Anh ấy có một làn da bánh mật khỏe khoắn sau một tuần ở bãi biển."
  },
  {
    "answer": "olive skin",
    "short_mean": "làn da màu ô-liu (da ngăm Địa Trung Hải)",
    "mean": "Làn da có tông màu sẫm nhẹ ấm áp.",
    "en_ex": "People in Southern Europe often have smooth olive skin.",
    "vi_ex": "Người dân ở Nam Âu thường có làn da màu ô-liu mịn màng."
  },
  {
    "answer": "fair skin",
    "short_mean": "làn da trắng trẻo",
    "mean": "Làn da sáng màu tự nhiên.",
    "en_ex": "She has fair skin that burns easily in strong sunlight.",
    "vi_ex": "Cô ấy có làn da trắng trẻo dễ bị bắt nắng dưới ánh mặt trời gay gắt."
  },
  {
    "answer": "pale skin",
    "short_mean": "làn da xanh xao, tái nhợt",
    "mean": "Làn da thiêu sức sống nhợt nhạt.",
    "en_ex": "His pale skin indicated he hadn't slept well.",
    "vi_ex": "Làn da xanh xao cho thấy anh ấy đã không ngủ tốt."
  },
  {
    "answer": "freckles",
    "short_mean": "tàn nhang",
    "mean": "Các đốm màu nâu nhỏ nổi trên da mặt do nắng.",
    "en_ex": "Cute freckles appeared across her nose in summer.",
    "vi_ex": "Những đốm tàn nhang dễ thương xuất hiện khắp mũi cô ấy vào mùa hè."
  },
  {
    "answer": "wrinkles",
    "short_mean": "nếp nhăn",
    "mean": "Các đường nhăn xuất hiện trên da do tuổi tác.",
    "en_ex": "Smile wrinkles showed around her eyes.",
    "vi_ex": "Những nếp nhăn nụ cười xuất hiện quanh mắt cô ấy."
  },
  {
    "answer": "mole",
    "short_mean": "nốt ruồi",
    "mean": "Đốm nhỏ màu sẫm đen/nâu trên da.",
    "en_ex": "She has a tiny beauty mole on her left cheek.",
    "vi_ex": "Cô ấy có một nốt ruồi duyên nhỏ trên má trái."
  }
];
