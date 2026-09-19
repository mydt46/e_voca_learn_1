const VOCA_WORDS = [
  {
    "answer": "ear",
    "short_mean": "tai",
    "mean": "Cơ quan thính giác dùng để nghe âm thanh.",
    "en_ex": "She wore elegant pearl earrings on her ears.",
    "vi_ex": "Cô ấy đeo hoa tai ngọc trai thanh lịch trên tai."
  },
  {
    "answer": "eye",
    "short_mean": "mắt",
    "mean": "Cơ quan thị giác dùng để nhìn.",
    "en_ex": "He has bright blue eyes.",
    "vi_ex": "Anh ấy có đôi mắt màu xanh dương sáng."
  },
  {
    "answer": "eyebrow",
    "short_mean": "lông mày",
    "mean": "Hàng lông mọc phía trên hốc mắt.",
    "en_ex": "She raised her eyebrow in surprise.",
    "vi_ex": "Cô ấy nhướng lông mày lên trong sự ngạc nhiên."
  },
  {
    "answer": "eyelashes",
    "short_mean": "lông mi",
    "mean": "Các sợi lông mọc ở mép mí mắt bảo vệ mắt.",
    "en_ex": "She applied mascara to lengthen her eyelashes.",
    "vi_ex": "Cô ấy chuốt mascara để làm dài lông mi."
  },
  {
    "answer": "nose",
    "short_mean": "mũi",
    "mean": "Cơ quan khứu giác nằm ở giữa khuôn mặt.",
    "en_ex": "He wiped his nose with a tissue.",
    "vi_ex": "Anh ấy lau mũi bằng một tờ khăn giấy."
  },
  {
    "answer": "nostrils",
    "short_mean": "lỗ mũi",
    "mean": "Hai lỗ hở của mũi dẫn không khí vào phổi.",
    "en_ex": "The horse's nostrils flared after running.",
    "vi_ex": "Lỗ mũi của con ngựa phập phồng sau khi chạy."
  },
  {
    "answer": "mouth",
    "short_mean": "miệng",
    "mean": "Bộ phận dùng ăn uống và phát âm nói chuyện.",
    "en_ex": "Open your mouth wide for the dentist.",
    "vi_ex": "Hãy há rộng miệng cho nha sĩ khám."
  },
  {
    "answer": "lips",
    "short_mean": "đôi môi",
    "mean": "Hai nếp thịt mềm bao quanh miệng.",
    "en_ex": "Apply lip balm to prevent dry lips.",
    "vi_ex": "Thoa son dưỡng để tránh khô môi."
  },
  {
    "answer": "teeth",
    "short_mean": "những chiếc răng",
    "mean": "Các cấu trúc cứng trong miệng dùng nhai thức ăn.",
    "en_ex": "Brush your teeth twice a day.",
    "vi_ex": "Hãy đánh răng của bạn hai lần một ngày."
  },
  {
    "answer": "tooth",
    "short_mean": "một chiếc răng",
    "mean": "Một cái răng đơn lẻ trong vòm miệng.",
    "en_ex": "The dentist extracted a decayed tooth.",
    "vi_ex": "Nha sĩ đã nhổ một chiếc răng bị sâu."
  },
  {
    "answer": "head",
    "short_mean": "đầu",
    "mean": "Bộ phận trên cùng của cơ thể chứa bộ não.",
    "en_ex": "He nodded his head in agreement.",
    "vi_ex": "Anh ấy gật đầu đồng ý."
  },
  {
    "answer": "cheek",
    "short_mean": "gò má",
    "mean": "Phần thịt hai bên khuôn mặt dưới mắt.",
    "en_ex": "She kissed her daughter gently on the cheek.",
    "vi_ex": "Cô ấy hôn nhẹ lên má con gái mình."
  },
  {
    "answer": "neck",
    "short_mean": "cổ",
    "mean": "Bộ phận nối liền giữa đầu và thân người.",
    "en_ex": "He wore a warm scarf around his neck.",
    "vi_ex": "Anh ấy quàng một chiếc khăn ấm quanh cổ."
  },
  {
    "answer": "shoulder",
    "short_mean": "vai",
    "mean": "Bộ phận nối cánh tay với thân mình.",
    "en_ex": "He carried a heavy backpack on his shoulder.",
    "vi_ex": "Anh ấy mang một chiếc ba lô nặng trên vai."
  },
  {
    "answer": "elbow",
    "short_mean": "khuỷu tay",
    "mean": "Khớp gấp ở giữa cánh tay.",
    "en_ex": "He rested his elbows on the dining table.",
    "vi_ex": "Anh ấy tựa khuỷu tay lên bàn ăn."
  },
  {
    "answer": "arm",
    "short_mean": "cánh tay",
    "mean": "Bộ phận chi trên từ vai đến cổ tay.",
    "en_ex": "She broke her arm in a skiing accident.",
    "vi_ex": "Cô ấy bị gãy tay trong một tai nạn trượt tuyết."
  },
  {
    "answer": "hand",
    "short_mean": "bàn tay",
    "mean": "Bộ phận có các ngón dùng cầm nắm.",
    "en_ex": "Hold my hand while crossing the street.",
    "vi_ex": "Hãy nắm lấy tay tôi khi sang đường."
  },
  {
    "answer": "thigh",
    "short_mean": "đùi",
    "mean": "Phần chân từ hông đến đầu gối.",
    "en_ex": "Running exercises help strengthen your thigh muscles.",
    "vi_ex": "Các bài tập chạy bộ giúp làm khỏe cơ đùi."
  },
  {
    "answer": "leg",
    "short_mean": "cột chân, chân",
    "mean": "Bộ phận chi dưới dùng di chuyển đi đứng.",
    "en_ex": "He stretched his legs after a long flight.",
    "vi_ex": "Anh ấy duỗi chân sau một chuyến bay dài."
  },
  {
    "answer": "ankle",
    "short_mean": "mắt cá chân",
    "mean": "Khớp nối giữa cẳng chân và bàn chân.",
    "en_ex": "She twisted her ankle while playing tennis.",
    "vi_ex": "Cô ấy bị trật mắt cá chân khi chơi quần vợt."
  },
  {
    "answer": "foot",
    "short_mean": "bàn chân",
    "mean": "Bộ phận dưới cùng của chân chạm mặt đất.",
    "en_ex": "Put shoes on your feet before going outside.",
    "vi_ex": "Hãy xỏ giày vào bàn chân trước khi ra ngoài."
  },
  {
    "answer": "forehead",
    "short_mean": "trán",
    "mean": "Phần khuôn mặt từ lông mày ngược lên tóc.",
    "en_ex": "The doctor touched her forehead to check for a fever.",
    "vi_ex": "Bác sĩ chạm vào trán cô ấy để kiểm tra xem có sốt không."
  },
  {
    "answer": "face",
    "short_mean": "khuôn mặt",
    "mean": "Mặt trước của đầu gồm mắt mũi miệng.",
    "en_ex": "She washed her face with cold water.",
    "vi_ex": "Cô ấy rửa mặt bằng nước lạnh."
  },
  {
    "answer": "chin",
    "short_mean": "cằm",
    "mean": "Phần dưới cùng của khuôn mặt dưới môi dưới.",
    "en_ex": "He rested his chin in his hand while thinking.",
    "vi_ex": "Anh ấy chống cằm vào tay trong khi suy nghĩ."
  },
  {
    "answer": "chest",
    "short_mean": "lồng ngực",
    "mean": "Phần thân trước chứa tim và phổi.",
    "en_ex": "He felt a sharp pain in his chest.",
    "vi_ex": "Anh ấy cảm thấy một cơn đau nhói ở ngực."
  },
  {
    "answer": "waist",
    "short_mean": "vòng eo, thắt lưng",
    "mean": "Phần hẹp ở giữa thân người.",
    "en_ex": "Fasten the seatbelt around your waist.",
    "vi_ex": "Thắt dây an toàn quanh eo của bạn."
  },
  {
    "answer": "stomach",
    "short_mean": "bụng, dạ dày",
    "mean": "Cơ quan tiêu hóa thức ăn ở vùng bụng.",
    "en_ex": "Eating quickly can hurt your stomach.",
    "vi_ex": "Ăn quá nhanh có thể làm đau dạ dày của bạn."
  },
  {
    "answer": "hip",
    "short_mean": "hông",
    "mean": "Khớp nhô ra ở hai bên mông.",
    "en_ex": "She placed her hands on her hips.",
    "vi_ex": "Cô ấy chống hai tay lên hông."
  },
  {
    "answer": "thumb",
    "short_mean": "ngón tay cái",
    "mean": "Ngón ngắn nhất và to nhất trên bàn tay.",
    "en_ex": "He gave a thumbs-up gesture to show approval.",
    "vi_ex": "Anh ấy đưa ngón tay cái lên để thể hiện sự tán thành."
  },
  {
    "answer": "finger",
    "short_mean": "ngón tay",
    "mean": "Một trong năm ngón của bàn tay.",
    "en_ex": "She wears a gold ring on her ring finger.",
    "vi_ex": "Cô ấy đeo một chiếc nhẫn vàng trên ngón đeo nhẫn."
  },
  {
    "answer": "knee",
    "short_mean": "đầu gối",
    "mean": "Khớp gấp giữa đùi và cẳng chân.",
    "en_ex": "He bent his knees to jump higher.",
    "vi_ex": "Anh ấy khuỵu đầu gối để nhảy cao hơn."
  },
  {
    "answer": "shin",
    "short_mean": "cẳng chân (phía trước)",
    "mean": "Phần xương mặt trước cẳng chân từ gối xuống cổ chân.",
    "en_ex": "Soccer players wear shin guards for protection.",
    "vi_ex": "Các cầu thủ bóng đá đeo ốp cẳng chân để bảo vệ."
  },
  {
    "answer": "toe",
    "short_mean": "ngón chân",
    "mean": "Một trong các ngón ở bàn chân.",
    "en_ex": "He accidentally stubbed his toe against the chair leg.",
    "vi_ex": "Anh ấy vô tình vấp ngón chân vào chân ghế."
  },
  {
    "answer": "to smile",
    "short_mean": "mỉm cười",
    "mean": "Nở nụ cười tươi trên môi thể hiện sự vui vẻ.",
    "en_ex": "She smiled warmly at the visitors.",
    "vi_ex": "Cô ấy mỉm cười ấm áp với các khách tham quan."
  },
  {
    "answer": "to frown",
    "short_mean": "nhăn mặt, cau mày",
    "mean": "Cau mày thể hiện sự không hài lòng.",
    "en_ex": "He frowned when reading the bad news.",
    "vi_ex": "Anh ấy cau mày khi đọc tin tức xấu."
  },
  {
    "answer": "to grin",
    "short_mean": "cười tươi nhếch môi / cười toe tóe",
    "mean": "Nở nụ cười rộng lộ răng.",
    "en_ex": "The boy grinned with delight when he received his present.",
    "vi_ex": "Cậu bé cười toe tóe vui sướng khi nhận được món quà."
  },
  {
    "answer": "to laugh",
    "short_mean": "cười thành tiếng",
    "mean": "Phát ra tiếng cười giòn giã khi vui.",
    "en_ex": "Everyone laughed at the comedian's joke.",
    "vi_ex": "Mọi người đều cười thành tiếng trước câu đùa của diễn viên hài."
  },
  {
    "answer": "to cry",
    "short_mean": "khóc",
    "mean": "Chảy nước mắt thể hiện sự đau buồn.",
    "en_ex": "The toddler began to cry when she lost her toy.",
    "vi_ex": "Đứa trẻ bắt đầu khóc khi bị mất đồ chơi."
  },
  {
    "answer": "to yawn",
    "short_mean": "ngáp",
    "mean": "Há rộng miệng hít hơi sâu khi buồn ngủ.",
    "en_ex": "He couldn't stop yawning during the long meeting.",
    "vi_ex": "Anh ấy không thể ngừng ngáp trong cuộc họp dài."
  },
  {
    "answer": "to cough",
    "short_mean": "ho",
    "mean": "Đẩy hơi từ họng ra.",
    "en_ex": "Cover your mouth when you cough.",
    "vi_ex": "Hãy che miệng khi bạn ho."
  },
  {
    "answer": "to sigh",
    "short_mean": "thở dài",
    "mean": "Trút hơi thở dài thể hiện sự mệt mỏi.",
    "en_ex": "She sighed with relief after passing the exam.",
    "vi_ex": "Cô ấy thở dài nhẹ nhõm sau khi thi đỗ."
  },
  {
    "answer": "to lick",
    "short_mean": "liếm",
    "mean": "Dùng lưỡi lướt qua.",
    "en_ex": "The dog licked his hand affectionately.",
    "vi_ex": "Con chó liếm tay anh ấy một cách trìu mến."
  },
  {
    "answer": "to suck",
    "short_mean": "mút, hút",
    "mean": "Hút chất lỏng bằng miệng.",
    "en_ex": "Babies naturally learn to suck milk.",
    "vi_ex": "Trẻ sơ sinh theo bản năng học cách mút sữa."
  },
  {
    "answer": "to breathe",
    "short_mean": "hít thở",
    "mean": "Nạp không khí vào phổi và thở ra.",
    "en_ex": "Breathe deeply to stay calm.",
    "vi_ex": "Hãy hít thở sâu để giữ bình tĩnh."
  },
  {
    "answer": "to hold your breath",
    "short_mean": "nín thở",
    "mean": "Tạm dừng hít thở trong chốc lát.",
    "en_ex": "Hold your breath when diving underwater.",
    "vi_ex": "Hãy nín thở khi lặn xuống nước."
  },
  {
    "answer": "to wink",
    "short_mean": "nháy mắt",
    "mean": "Khép một bên mắt nhanh chóng làm hiệu.",
    "en_ex": "He winked at her playfully across the room.",
    "vi_ex": "Anh ấy nháy mắt với cô ấy đầy tinh nghịch từ phía bên kia phòng."
  },
  {
    "answer": "to blink",
    "short_mean": "chớp mắt",
    "mean": "Khép mở cả hai mắt nhanh chóng tự nhiên.",
    "en_ex": "Blink several times to clear the dust from your eyes.",
    "vi_ex": "Chớp mắt vài lần để làm sạch bụi khỏi mắt."
  },
  {
    "answer": "to blush",
    "short_mean": "red mặt, ngượng ngùng",
    "mean": "Da mặt đỏ lên vì xấu hổ.",
    "en_ex": "She blushed when receiving the unexpected compliment.",
    "vi_ex": "Cô ấy đỏ mặt ngượng ngùng khi nhận được lời khen bất ngờ."
  },
  {
    "answer": "to sweat/ to perspire",
    "short_mean": "đổ mồ hôi",
    "mean": "Tuyến mồ hôi bài tiết nước làm mát da.",
    "en_ex": "Athletes sweat heavily during intense training.",
    "vi_ex": "Các vận động viên đổ mồ hôi nhiều trong lúc tập luyện cường độ cao."
  },
  {
    "answer": "to shiver",
    "short_mean": "run rẩy vì lạnh",
    "mean": "Cơ thể run lên bần bật do thời tiết lạnh giá.",
    "en_ex": "She was shivering in the freezing wind.",
    "vi_ex": "Cô ấy đang run rẩy trong làn gió buốt giá."
  },
  {
    "answer": "to snore",
    "short_mean": "ngáy khi ngủ",
    "mean": "Phát ra tiếng khò khè khi ngủ thở.",
    "en_ex": "My roommate snores loudly every night.",
    "vi_ex": "Bạn cùng phòng của tôi ngáy rất to mỗi đêm."
  },
  {
    "answer": "to sneeze",
    "short_mean": "hắt hơi",
    "mean": "Bột phát hơi mạnh qua mũi miệng.",
    "en_ex": "Dust in the air caused him to sneeze.",
    "vi_ex": "Bụi trong không khí làm anh ấy hắt hơi."
  },
  {
    "answer": "to wave",
    "short_mean": "vẫy tay",
    "mean": "Di chuyển bàn tay chào hỏi ai đó.",
    "en_ex": "Wave goodbye to your friends as the train leaves.",
    "vi_ex": "Hãy vẫy tay chào tạm biệt bạn bè khi đoàn tàu rời đi."
  },
  {
    "answer": "to clap",
    "short_mean": "vỗ tay",
    "mean": "Đập hai bàn tay vào nhau tán thưởng.",
    "en_ex": "The audience clapped enthusiastic at the end.",
    "vi_ex": "Khán giả vỗ tay nồng nhiệt ở đoạn kết."
  },
  {
    "answer": "to shrug",
    "short_mean": "nhún vai",
    "mean": "Nâng hai vai lên thể hiện không biết/không quan tâm.",
    "en_ex": "He just shrugged his shoulders when asked the answer.",
    "vi_ex": "Anh ấy chỉ nhún vai khi được hỏi câu trả lời."
  },
  {
    "answer": "to bow",
    "short_mean": "cúi chào",
    "mean": "Cúi gập người thể hiện sự tôn trọng.",
    "en_ex": "In Japan, it is customary to bow when greeting someone.",
    "vi_ex": "Ở Nhật Bản, việc cúi chào khi chào hỏi ai đó là một phong tục."
  },
  {
    "answer": "to nod",
    "short_mean": "gật đầu",
    "mean": "Cúi đầu nhẹ xuống thể hiện sự đồng ý.",
    "en_ex": "Nod your head if you understand the instructions.",
    "vi_ex": "Hãy gật đầu nếu bạn hiểu hướng dẫn."
  },
  {
    "answer": "to shake your head",
    "short_mean": "lắc đầu",
    "mean": "Xoay đầu qua lại thể hiện sự từ chối/không đồng ý.",
    "en_ex": "She shook her head to say no.",
    "vi_ex": "Cô ấy lắc đầu để nói không."
  }
];
