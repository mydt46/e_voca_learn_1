const VOCA_WORDS = [
  {
    "answer": "grater",
    "short_mean": "dụng cụ bào/nạo thực phẩm",
    "mean": "Dụng cụ nhà bếp có nhiều lỗ sắc dùng để bào nhỏ phô mai, củ quả.",
    "en_ex": "Use a cheese grater to shred cheddar over the pasta.",
    "vi_ex": "Dùng dụng cụ bào phô mai để nạo sợi phô mai cheddar lên mì Ý."
  },
  {
    "answer": "peeler",
    "short_mean": "dao nạo vỏ",
    "mean": "Dụng cụ làm bếp chuyên dùng để gọt vỏ củ quả.",
    "en_ex": "She peeled the potatoes quickly using a vegetable peeler.",
    "vi_ex": "Cô ấy nạo vỏ khoai tây nhanh chóng bằng dao nạo củ quả."
  },
  {
    "answer": "whisk",
    "short_mean": "phới đánh trứng",
    "mean": "Dụng cụ làm bằng dây kim loại dùng để đánh trứng hoặc bột.",
    "en_ex": "Use a whisk to beat the egg whites until fluffy.",
    "vi_ex": "Dùng phới đánh trứng để đánh lòng trắng trứng cho đến khi bông xốp."
  },
  {
    "answer": "cutting board/chopping board",
    "short_mean": "thớt thái đồ ăn",
    "mean": "Tấm gỗ hoặc nhựa làm nền khi dùng dao thái thực phẩm.",
    "en_ex": "Always clean the chopping board after cutting raw meat.",
    "vi_ex": "Luôn vệ sinh thớt thái đồ ăn sau khi cắt thịt sống."
  },
  {
    "answer": "kitchen knife",
    "short_mean": "dao bếp",
    "mean": "Con dao làm bếp sắc bén dùng cắt gọt thức ăn.",
    "en_ex": "The chef sharpened his kitchen knife before preparing dinner.",
    "vi_ex": "Đầu bếp mài con dao bếp của mình trước khi chuẩn bị bữa tối."
  },
  {
    "answer": "scissors",
    "short_mean": "kéo làm bếp",
    "mean": "Dụng cụ hai lưỡi dùng cắt thực phẩm hoặc bao bì.",
    "en_ex": "Use kitchen scissors to snip fresh herbs into the soup.",
    "vi_ex": "Dùng kéo làm bếp để cắt rau thơm tươi vào súp."
  },
  {
    "answer": "can opener/tin opener",
    "short_mean": "dụng cụ mở đồ hộp",
    "mean": "Dụng cụ dùng để cắt mở nắp các hộp kim loại.",
    "en_ex": "He needed a tin opener to open the canned tomatoes.",
    "vi_ex": "Anh ấy cần một dụng cụ mở đồ hộp để mở hộp cà chua đóng lon."
  },
  {
    "answer": "bottle opener",
    "short_mean": "dụng cụ mở nắp chai",
    "mean": "Dụng cụ dùng bẩy mở nắp chai bia hoặc nước ngọt.",
    "en_ex": "Pass me the bottle opener so I can open this soda.",
    "vi_ex": "Đưa cho tôi dụng cụ mở nắp chai để tôi mở chai nước ngọt này."
  },
  {
    "answer": "corkscrew",
    "short_mean": "dụng cụ mở nút chai rượu (nút bần)",
    "mean": "Thiết bị có đầu xoắn ốc dùng rút nút bần chai rượu vang.",
    "en_ex": "Use a corkscrew to pull the cork out of the wine bottle.",
    "vi_ex": "Dùng dụng cụ mở nút bần để rút nút chai rượu vang ra."
  },
  {
    "answer": "wooden spoon",
    "short_mean": "thìa gỗ, muỗng gỗ",
    "mean": "Muỗng làm bằng gỗ dùng đảo thức ăn khi nấu.",
    "en_ex": "Stir the simmering sauce with a wooden spoon.",
    "vi_ex": "Đảo sốt đang sôi lăn tăn bằng một chiếc thìa gỗ."
  },
  {
    "answer": "spatula",
    "short_mean": "dụng cụ lật/xẻng múc đồ ăn",
    "mean": "Dụng cụ dẹt dùng để lật bánh hoặc xào đồ ăn.",
    "en_ex": "Flip the pancakes using a silicone spatula.",
    "vi_ex": "Lật bánh rán bằng một chiếc xẻng múc bằng silicone."
  },
  {
    "answer": "ladle",
    "short_mean": "vá/môi múc canh",
    "mean": "Thìa lớn lòng sâu dùng múc canh hoặc súp.",
    "en_ex": "The chef used a ladle to serve hot soup into bowls.",
    "vi_ex": "Đầu bếp dùng vá múc canh nóng vào các bát."
  },
  {
    "answer": "toaster",
    "short_mean": "máy nướng bánh mì gối",
    "mean": "Thiết bị điện nướng giòn các lát bánh mì.",
    "en_ex": "Put two slices of bread into the toaster.",
    "vi_ex": "Cho hai lát bánh mì vào máy nướng bánh mì."
  },
  {
    "answer": "microwave",
    "short_mean": "lò vi sóng",
    "mean": "Thiết bị điện hâm nóng đồ ăn bằng sóng vi ba.",
    "en_ex": "Heat up the leftover pizza in the microwave.",
    "vi_ex": "Hâm nóng bánh pizza còn thừa trong lò vi sóng."
  },
  {
    "answer": "kettle",
    "short_mean": "ấm đun nước",
    "mean": "Ấm dùng đun sôi nước uống.",
    "en_ex": "Boil water in the electric kettle to make tea.",
    "vi_ex": "Đun sôi nước trong ấm đun nước điện để pha trà."
  },
  {
    "answer": "dinnerware/crockery",
    "short_mean": "bộ đồ ăn (đĩa, bát sứ)",
    "mean": "Tập hợp các loại bát đĩa gốm sứ dùng trên bàn ăn.",
    "en_ex": "Set the table with fine porcelain dinnerware.",
    "vi_ex": "Bày bàn ăn bằng bộ đồ ăn sứ tinh xảo."
  },
  {
    "answer": "plate",
    "short_mean": "đĩa ăn",
    "mean": "Vật dụng phẳng nông dùng đựng thức ăn.",
    "en_ex": "Place a piece of cake on each plate.",
    "vi_ex": "Đặt một miếng bánh lên mỗi chiếc đĩa."
  },
  {
    "answer": "bowl",
    "short_mean": "bát, tô",
    "mean": "Vật dụng lòng sâu dùng đựng cơm, súp.",
    "en_ex": "He ate a large bowl of hot noodle soup.",
    "vi_ex": "Anh ấy đã ăn một tô súp mì nóng lớn."
  },
  {
    "answer": "cup",
    "short_mean": "tách, tách trà",
    "mean": "Cốc nhỏ có quai dùng uống trà hoặc cà phê.",
    "en_ex": "Would you like a cup of tea?",
    "vi_ex": "Bạn có muốn dùng một tách trà không?"
  },
  {
    "answer": "mug",
    "short_mean": "cốc vại, ca lớn",
    "mean": "Cốc sứ lớn có tay cầm dùng uống nước hoặc cà phê.",
    "en_ex": "She drank hot chocolate from a giant ceramic mug.",
    "vi_ex": "Cô ấy uống sô-cô-la nóng từ một chiếc ca sứ khổng lồ."
  },
  {
    "answer": "silverware/cutlery",
    "short_mean": "bộ dao muỗng nĩa",
    "mean": "Bộ dụng cụ dùng ăn uống gồm dao, muỗng, nĩa.",
    "en_ex": "Polishing the silver cutlery before the party is essential.",
    "vi_ex": "Việc đánh bóng bộ dao muỗng nĩa bằng bạc trước buổi tiệc là rất cần thiết."
  },
  {
    "answer": "knife",
    "short_mean": "dao ăn",
    "mean": "Dụng cụ dẹt sắc dùng để cắt thức ăn trên đĩa.",
    "en_ex": "Use a steak knife to cut the meat easily.",
    "vi_ex": "Dùng dao bít tết để cắt thịt dễ dàng."
  },
  {
    "answer": "fork",
    "short_mean": "nĩa, dĩa",
    "mean": "Dụng cụ có răng găm dùng xiên đồ ăn.",
    "en_ex": "Pick up the pasta using a fork.",
    "vi_ex": "Gắp mì Ý bằng nĩa."
  },
  {
    "answer": "spoon",
    "short_mean": "thìa, muỗng",
    "mean": "Dụng cụ lòng lõm dùng múc thức ăn lỏng.",
    "en_ex": "Eat your soup with a soup spoon.",
    "vi_ex": "Hãy ăn súp của bạn bằng một chiếc thìa súp."
  },
  {
    "answer": "chopsticks",
    "short_mean": "đôi đũa",
    "mean": "Cặp thanh nhỏ dùng gắp đồ ăn theo phong cách châu Á.",
    "en_ex": "Asian cuisine is traditionally eaten with chopsticks.",
    "vi_ex": "Ẩm thực châu Á theo truyền thống được ăn bằng đũa."
  },
  {
    "answer": "saucepan",
    "short_mean": "nồi nhỏ có tay cầm",
    "mean": "Nồi sâu lòng có cán cầm dùng nấu sốt hoặc đun nước.",
    "en_ex": "Heat the milk in a small saucepan.",
    "vi_ex": "Hâm nóng sữa trong một chiếc nồi nhỏ có tay cầm."
  },
  {
    "answer": "frying pan",
    "short_mean": "chảo rán",
    "mean": "Chảo nông lòng dẹt dùng để rán chiên đồ ăn.",
    "en_ex": "Fry eggs in a non-stick frying pan.",
    "vi_ex": "Chiên trứng trong một chiếc chảo rán chống dính."
  },
  {
    "answer": "wok",
    "short_mean": "chảo lòng sâu (chảo chảo xào)",
    "mean": "Chảo đáy hình bán cầu dùng xào món ăn lửa lớn.",
    "en_ex": "Stir-fry vegetables in a hot wok.",
    "vi_ex": "Xào rau củ trong một chiếc chảo lòng sâu nóng."
  },
  {
    "answer": "colander",
    "short_mean": "rổ ráo nước (kim loại/nhựa có lỗ)",
    "mean": "Dụng cụ có nhiều lỗ thoát nước dùng rửa rau hay ráo mì.",
    "en_ex": "Drain the boiled pasta in a colander.",
    "vi_ex": "Đổ mì Ý đã luộc ra rổ ráo nước."
  },
  {
    "answer": "blender",
    "short_mean": "máy xay sinh tố",
    "mean": "Thiết bị điện có lưỡi quay xoay nhuyễn thực phẩm.",
    "en_ex": "Blend fruit and yogurt in a blender to make a smoothie.",
    "vi_ex": "Xay trái cây và sữa chua trong máy xay sinh tố để làm sinh tố."
  },
  {
    "answer": "rolling pin",
    "short_mean": "cây cán bột",
    "mean": "Thanh gỗ hình trụ dùng để cán phẳng bột làm bánh.",
    "en_ex": "Roll out the pie dough with a wooden rolling pin.",
    "vi_ex": "Cán phẳng bột làm bánh bằng cây cán bột bằng gỗ."
  },
  {
    "answer": "mortar",
    "short_mean": "cối giã",
    "mean": "Bát bằng đá/gỗ dùng làm chứa khi giã gia vị.",
    "en_ex": "Crush garlic inside a stone mortar.",
    "vi_ex": "Giã tỏi bên trong một chiếc cối giã bằng đá."
  },
  {
    "answer": "pestle",
    "short_mean": "chày giã",
    "mean": "Thanh đá/gỗ dùng đập giã gia vị trong cối.",
    "en_ex": "Grind spices using a heavy pestle.",
    "vi_ex": "Nghiền gia vị bằng một chiếc chày giã nặng."
  },
  {
    "answer": "pestle and mortar",
    "short_mean": "bộ chày cối",
    "mean": "Bộ dụng cụ chày và cối dùng giã tiêu gia vị.",
    "en_ex": "Herbs were crushed using a traditional pestle and mortar.",
    "vi_ex": "Các loại thảo mộc được giã bằng một bộ chày cối truyền thống."
  },
  {
    "answer": "sieve",
    "short_mean": "rây lọc bột",
    "mean": "Dụng cụ có lưới mịn dùng lọc chất lỏng hoặc rây bột mịn.",
    "en_ex": "Sift the flour through a fine sieve before baking.",
    "vi_ex": "Rây bột qua một chiếc rây lọc mịn trước khi nướng bánh."
  },
  {
    "answer": "spatula/fish slice",
    "short_mean": "xẻng lật cá/thực phẩm",
    "mean": "Dụng cụ lật cá hoặc thực phẩm khi chiên.",
    "en_ex": "Use a fish slice to turn the delicate fillet over.",
    "vi_ex": "Dùng xẻng lật cá để lật miếng cá phi-lê mỏng nhẹ."
  },
  {
    "answer": "shampoo",
    "short_mean": "dầu gội đầu",
    "mean": "Dung dịch vệ sinh làm sạch tóc.",
    "en_ex": "Apply shampoo to wet hair and massage gently.",
    "vi_ex": "Thoa dầu gội đầu lên tóc ướt và massage nhẹ nhàng."
  },
  {
    "answer": "conditioner",
    "short_mean": "dầu xả tóc",
    "mean": "Dung dịch làm mềm mượt và bảo vệ tóc sau khi gội.",
    "en_ex": "Use hair conditioner after rinsing out the shampoo.",
    "vi_ex": "Dùng dầu xả tóc sau khi xả sạch dầu gội."
  },
  {
    "answer": "moisturizer",
    "short_mean": "kem dưỡng ẩm",
    "mean": "Kem giúp duy trì độ ẩm mịn màng cho da.",
    "en_ex": "Apply facial moisturizer every morning.",
    "vi_ex": "Thoa kem dưỡng ẩm da mặt vào mỗi buổi sáng."
  },
  {
    "answer": "razor",
    "short_mean": "dao cạo râu/lông",
    "mean": "Dụng cụ cạo lông râu cá nhân.",
    "en_ex": "Replace the disposable razor blade when it becomes dull.",
    "vi_ex": "Thay lưỡi dao cạo dùng một lần khi nó bị cùn."
  },
  {
    "answer": "shaving foam",
    "short_mean": "bọt cạo râu",
    "mean": "Lớp bọt xịt mềm giúp việc cạo râu trơn mượt không rát.",
    "en_ex": "Apply shaving foam onto your cheeks before shaving.",
    "vi_ex": "Thoa bọt cạo râu lên má trước khi cạo."
  },
  {
    "answer": "shower gel",
    "short_mean": "sữa tắm",
    "mean": "Dung dịch xà phòng lỏng dùng tắm sạch cơ thể.",
    "en_ex": "Squeeze some shower gel onto a wet sponge.",
    "vi_ex": "Bóp một ít sữa tắm lên miếng bông tắm ướt."
  },
  {
    "answer": "deodorant",
    "short_mean": "lăn/xịt khử mùi cơ thể",
    "mean": "Sản phẩm ngăn mùi mồ hôi cơ thể.",
    "en_ex": "Apply deodorant after taking a shower.",
    "vi_ex": "Dùng lăn khử mùi sau khi tắm."
  },
  {
    "answer": "soap",
    "short_mean": "bánh xà phòng",
    "mean": "Cục xà phòng cứng làm sạch da.",
    "en_ex": "Wash your hands thoroughly with soap and water.",
    "vi_ex": "Rửa tay thật sạch bằng bánh xà phòng và nước."
  },
  {
    "answer": "toothbrush",
    "short_mean": "bàn chải đánh răng",
    "mean": "Dụng cụ chải sạch răng miệng.",
    "en_ex": "You should replace your toothbrush every three months.",
    "vi_ex": "Bạn nên thay bàn chải đánh răng ba tháng một lần."
  },
  {
    "answer": "toothpaste",
    "short_mean": "kem đánh răng",
    "mean": "Chất kem làm sạch và bảo vệ răng.",
    "en_ex": "Squeeze a pea-sized amount of toothpaste onto the brush.",
    "vi_ex": "Bóp một lượng kem đánh răng bằng hạt đậu lên bàn chải."
  },
  {
    "answer": "mouthwash",
    "short_mean": "nước súc miệng",
    "mean": "Dung dịch diệt khuẩn khoang miệng và mang lại hơi thở thơm mát.",
    "en_ex": "Rinse your mouth with antiseptic mouthwash.",
    "vi_ex": "Súc miệng bằng nước súc miệng diệt khuẩn."
  },
  {
    "answer": "dental floss",
    "short_mean": "chỉ nha khoa",
    "mean": "Sợi chỉ mỏng dùng làm sạch kẽ răng.",
    "en_ex": "Use dental floss daily to remove food particles between teeth.",
    "vi_ex": "Dùng chỉ nha khoa hằng ngày để loại bỏ mảng bám thức ăn giữa các kẽ răng."
  },
  {
    "answer": "sponge",
    "short_mean": "miếng bông tắm / miếng bọt biển",
    "mean": "Tấm xốp bọt biển tạo bọt khi tắm rửa.",
    "en_ex": "Use a soft sponge to wash your face gently.",
    "vi_ex": "Dùng một miếng bọt biển mềm để rửa mặt nhẹ nhàng."
  },
  {
    "answer": "face wash",
    "short_mean": "sữa rửa mặt",
    "mean": "Dung dịch làm sạch bụi bẩn trên da mặt.",
    "en_ex": "Clean your skin with gentle face wash every night.",
    "vi_ex": "Rửa sạch da bằng sữa rửa mặt dịu nhẹ mỗi tối."
  },
  {
    "answer": "toilet paper",
    "short_mean": "giấy vệ sinh",
    "mean": "Cuộn giấy mềm dùng vệ sinh cá nhân.",
    "en_ex": "Restock the bathroom with new rolls of toilet paper.",
    "vi_ex": "Bổ sung thêm các cuộn giấy vệ sinh mới vào nhà tắm."
  }
];
