const VOCA_WORDS = [
  {
    "answer": "flu",
    "short_mean": "bệnh cúm",
    "mean": "Bệnh truyền nhiễm do virus cúm gây ra với biểu hiện sốt, mệt mỏi.",
    "en_ex": "He came down with the flu and stayed in bed all day.",
    "vi_ex": "Anh ấy bị bệnh cúm và nằm trên giường cả ngày."
  },
  {
    "answer": "cold",
    "short_mean": "bệnh cảm lạnh",
    "mean": "Bệnh nhiễm trùng đường hô hấp nhẹ gây hắt hơi, ngạt mũi.",
    "en_ex": "Drink warm tea when you have a cold.",
    "vi_ex": "Hãy uống trà ấm khi bạn bị cảm lạnh."
  },
  {
    "answer": "hay fever/allergies",
    "short_mean": "bệnh dị ứng phấn hoa / dị ứng",
    "mean": "Phản ứng dị ứng của cơ thể với phấn hoa hoặc tác nhân môi trường.",
    "en_ex": "Hay fever causes her eyes to water during spring.",
    "vi_ex": "Bệnh dị ứng phấn hoa khiến mắt cô ấy bị chảy nước vào mùa xuân."
  },
  {
    "answer": "virus",
    "short_mean": "vi-rút",
    "mean": "Tác nhân gây bệnh siêu nhỏ xâm nhập vào tế bào cơ thể.",
    "en_ex": "Washing hands frequently helps stop the spread of the virus.",
    "vi_ex": "Rửa tay thường xuyên giúp ngăn chặn sự lây lan của vi-rút."
  },
  {
    "answer": "infection",
    "short_mean": "sự nhiễm trùng",
    "mean": "Tình trạng vi khuẩn hoặc vi-rút xâm nhập gây viêm nhiễm.",
    "en_ex": "The doctor prescribed antibiotics to treat the ear infection.",
    "vi_ex": "Bác sĩ đã kê đơn thuốc kháng sinh để điều trị nhiễm trùng tai."
  },
  {
    "answer": "tonsillitis",
    "short_mean": "viêm amiđan",
    "mean": "Tình trạng viêm và sưng đau hai khối amiđan ở cổ họng.",
    "en_ex": "She found it painful to swallow food due to tonsillitis.",
    "vi_ex": "Cô ấy cảm thấy đau đớn khi nuốt thức ăn do bị viêm amiđan."
  },
  {
    "answer": "appendicitis",
    "short_mean": "viêm ruột thừa",
    "mean": "Tình trạng sưng viêm cấp tính của ruột thừa đòi hỏi phẫu thuật.",
    "en_ex": "He was rushed to the hospital with severe appendicitis.",
    "vi_ex": "Anh ấy được đưa đi cấp cứu tại bệnh viện vì bị viêm ruột thừa nặng."
  },
  {
    "answer": "food poisoning",
    "short_mean": "ngộ độc thực phẩm",
    "mean": "Rối loạn tiêu hóa do ăn phải thức ăn bị ôi thiu hoặc nhiễm khuẩn.",
    "en_ex": "Several guests got food poisoning after eating raw seafood.",
    "vi_ex": "Nhiều khách bị ngộ độc thực phẩm sau khi ăn hải sản sống."
  },
  {
    "answer": "indigestion",
    "short_mean": "chứng đầy bụng, khó tiêu",
    "mean": "Cảm giác khó chịu ở dạ dày sau khi ăn quá no hoặc đồ cay mỡ.",
    "en_ex": "Eating too fast can cause uncomfortable indigestion.",
    "vi_ex": "Ăn quá nhanh có thể gây ra chứng khó tiêu khó chịu."
  },
  {
    "answer": "migraine",
    "short_mean": "bệnh đau nửa đầu",
    "mean": "Cơn đau đầu dữ dội dữ dội thường ở một bên đầu.",
    "en_ex": "Darkness and silence help soothe her severe migraine.",
    "vi_ex": "Bóng tối và sự yên tĩnh giúp làm dịu cơn đau nửa đầu dữ dội của cô ấy."
  },
  {
    "answer": "nosebleed",
    "short_mean": "chảy máu cam",
    "mean": "Hiện tượng máu chảy ra từ màng nhầy trong mũi.",
    "en_ex": "Pinch your nose gently to stop a nosebleed.",
    "vi_ex": "Bóp nhẹ mũi để cầm máu cam."
  },
  {
    "answer": "eczema",
    "short_mean": "bệnh chàm (bệnh ngoài da)",
    "mean": "Tình trạng da bị viêm, ngứa, đỏ và bong tróc.",
    "en_ex": "Apply moisturizing cream daily to relieve eczema.",
    "vi_ex": "Thoa kem dưỡng ẩm hằng ngày để làm dịu bệnh chàm."
  },
  {
    "answer": "measles",
    "short_mean": "bệnh sởi",
    "mean": "Bệnh truyền nhiễm do vi-rút gây sốt và nổi ban đỏ khắp người.",
    "en_ex": "Vaccination protects children from contracting measles.",
    "vi_ex": "Tiêm chủng giúp bảo vệ trẻ em khỏi bị mắc bệnh sởi."
  },
  {
    "answer": "mumps",
    "short_mean": "bệnh quai bị",
    "mean": "Bệnh vi-rút làm sưng đau tuyến nước bọt ở hai bên tuyến mang tai.",
    "en_ex": "Mumps causes noticeable swelling around the jaw.",
    "vi_ex": "Bệnh quai bị gây sưng rõ rệt quanh vùng quai hàm."
  },
  {
    "answer": "chickenpox",
    "short_mean": "bệnh thủy đậu",
    "mean": "Bệnh lây nhiễm gây nổi nốt mụn nước ngứa khắp cơ thể.",
    "en_ex": "Children with chickenpox should rest at home.",
    "vi_ex": "Trẻ em bị thủy đậu nên ở nhà nghỉ ngơi."
  },
  {
    "answer": "asthma",
    "short_mean": "bệnh hen suyễn",
    "mean": "Bệnh mạn tính đường hô hấp gây co thắt phế quản khó thở.",
    "en_ex": "He always carries an inhaler to manage his asthma.",
    "vi_ex": "Anh ấy luôn mang theo ống hít để kiểm soát bệnh hen suyễn."
  },
  {
    "answer": "diabetes",
    "short_mean": "bệnh tiểu đường",
    "mean": "Rối loạn chuyển hóa dẫn đến mức đường huyết cao.",
    "en_ex": "People with diabetes need to monitor their blood sugar level.",
    "vi_ex": "Người mắc bệnh tiểu đường cần theo dõi chỉ số đường huyết của mình."
  },
  {
    "answer": "high blood pressure",
    "short_mean": "cao huyết áp",
    "mean": "Áp lực máu chảy qua các động mạch duy trì ở mức quá cao.",
    "en_ex": "Reducing salt intake helps control high blood pressure.",
    "vi_ex": "Giảm lượng muối ăn giúp kiểm soát tình trạng cao huyết áp."
  },
  {
    "answer": "stress",
    "short_mean": "căng thẳng, stress",
    "mean": "Trạng thái mệt mỏi áp lực về tâm lý và thể chất.",
    "en_ex": "Regular exercise is effective for reducing stress.",
    "vi_ex": "Tập thể dục thường xuyên rất hiệu quả trong việc giảm căng thẳng."
  },
  {
    "answer": "insomnia",
    "short_mean": "bệnh mất ngủ",
    "mean": "Tình trạng khó ngủ hoặc không thể ngủ đẫy giấc.",
    "en_ex": "Chronic insomnia leaves him feeling exhausted every morning.",
    "vi_ex": "Mất ngủ mạn tính khiến anh ấy cảm thấy kiệt sức vào mỗi buổi sáng."
  },
  {
    "answer": "sick/ill",
    "short_mean": "bị ốm, bị bệnh",
    "mean": "Trạng thái thể chất không khỏe mạnh.",
    "en_ex": "She stayed home from school because she felt sick.",
    "vi_ex": "Cô ấy ở nhà không đi học vì cảm thấy bị ốm."
  },
  {
    "answer": "sore",
    "short_mean": "đau rát, sưng đau",
    "mean": "Cảm giác đau nhức rát trên bề mặt cơ thể hoặc cổ họng.",
    "en_ex": "My muscles are sore after yesterday's intense workout.",
    "vi_ex": "Cơ bắp của tôi bị đau nhức sau buổi tập luyện cường độ cao ngày hôm qua."
  },
  {
    "answer": "itchy",
    "short_mean": "ngứa ngáy",
    "mean": "Gây cảm giác khó chịu muốn gãi trên da.",
    "en_ex": "The mosquito bite became red and itchy.",
    "vi_ex": "Vết muỗi cắn trở nên đỏ và ngứa ngáy."
  },
  {
    "answer": "swollen",
    "short_mean": "bị sưng phồng",
    "mean": "Tăng kích thước to hơn bình thường do chấn thương hoặc viêm.",
    "en_ex": "His ankle was swollen after he twisted it.",
    "vi_ex": "Mắt cá chân của anh ấy bị sưng phồng sau khi bị trật khớp."
  },
  {
    "answer": "painful",
    "short_mean": "gây đau đớn",
    "mean": "Tạo cảm giác đau đớn thể xác.",
    "en_ex": "It was painful to walk with a sprained ankle.",
    "vi_ex": "Thật đau đớn khi phải đi bộ với một cổ chân bị trật khớp."
  },
  {
    "answer": "symptoms",
    "short_mean": "triệu chứng bệnh",
    "mean": "Dấu hiệu thể hiện sự xuất hiện của một căn bệnh.",
    "en_ex": "Common flu symptoms include fever and body aches.",
    "vi_ex": "Các triệu chứng cúm phổ biến bao gồm sốt và đau nhức cơ thể."
  },
  {
    "answer": "fever/temperature",
    "short_mean": "cơn sốt / thân nhiệt cao",
    "mean": "Thân nhiệt tăng cao hơn mức bình thường (trên 37,5°C).",
    "en_ex": "The child has a high fever and needs rest.",
    "vi_ex": "Đứa trẻ bị sốt cao và cần được nghỉ ngơi."
  },
  {
    "answer": "cough",
    "short_mean": "cơn ho",
    "mean": "Hành động đẩy không khí từ phổi ra kèm âm thanh.",
    "en_ex": "He developed a dry cough that lasted for weeks.",
    "vi_ex": "Anh ấy bị một cơn ho khô kéo dài nhiều tuần."
  },
  {
    "answer": "runny nose",
    "short_mean": "sổ mũi, chảy nước mũi",
    "mean": "Hiện tượng dịch nhầy chảy ra từ mũi.",
    "en_ex": "A runny nose is a classic symptom of a cold.",
    "vi_ex": "Sổ mũi là một triệu chứng điển hình của cảm lạnh."
  },
  {
    "answer": "sore throat",
    "short_mean": "đau cổ họng",
    "mean": "Cảm giác đau rát ở vùng họng khi nuốt.",
    "en_ex": "Gargling with warm salt water can soothe a sore throat.",
    "vi_ex": "Súc miệng bằng nước muối ấm có thể làm dịu đau cổ họng."
  },
  {
    "answer": "headache",
    "short_mean": "đau đầu",
    "mean": "Cảm giác đau nhức ở vùng đầu.",
    "en_ex": "Taking painkillers helped ease her headache.",
    "vi_ex": "Uống thuốc giảm đau đã giúp làm dịu cơn đau đầu của cô ấy."
  },
  {
    "answer": "backache",
    "short_mean": "đau lưng",
    "mean": "Cảm giác đau mỏi ở vùng cột sống lưng.",
    "en_ex": "Sitting in an uncomfortable chair for hours caused severe backache.",
    "vi_ex": "Ngồi trên một chiếc ghế không thoải mái suốt nhiều giờ đã gây đau lưng dữ dội."
  },
  {
    "answer": "stomachache/stomach ache",
    "short_mean": "đau bụng, đau dạ dày",
    "mean": "Cảm giác đau rát hoặc quặn thắt vùng bụng.",
    "en_ex": "Eating unwashed fruit gave him a stomachache.",
    "vi_ex": "Ăn trái cây chưa rửa đã khiến anh ấy bị đau bụng."
  },
  {
    "answer": "pain",
    "short_mean": "cơn đau",
    "mean": "Cảm giác khó chịu thể xác do chấn thương hoặc bệnh tật.",
    "en_ex": "He felt a sharp pain in his chest.",
    "vi_ex": "Anh ấy cảm thấy một cơn đau nhói ở ngực."
  },
  {
    "answer": "diarrhea/diarrhoea",
    "short_mean": "bệnh tiêu chảy",
    "mean": "Tình trạng đi tiêu phân lỏng nhiều lần trong ngày.",
    "en_ex": "Drink plenty of electrolytes to avoid dehydration during diarrhea.",
    "vi_ex": "Uống nhiều nước điện giải để tránh mất nước khi bị tiêu chảy."
  },
  {
    "answer": "to vomit",
    "short_mean": "nôn mửa, ói",
    "mean": "Tống thức ăn từ dạ dày ra qua đường miệng.",
    "en_ex": "The sick passenger started to vomit into a bag.",
    "vi_ex": "Hành khách bị ốm bắt đầu nôn mửa vào một chiếc túi."
  },
  {
    "answer": "to cough",
    "short_mean": "ho",
    "mean": "Đẩy hơi mạnh từ họng ra.",
    "en_ex": "Cover your mouth when you cough.",
    "vi_ex": "Hãy che miệng lại khi bạn ho."
  },
  {
    "answer": "to sneeze",
    "short_mean": "hắt hơi",
    "mean": "Đẩy không khí đột ngột qua mũi và miệng.",
    "en_ex": "Dust in the room caused her to sneeze continuously.",
    "vi_ex": "Bụi trong phòng làm cô ấy hắt hơi liên tục."
  },
  {
    "answer": "to hurt/to ache",
    "short_mean": "gây đau / nhức nhối",
    "mean": "Cảm thấy đau đớn ở một bộ phận trên cơ thể.",
    "en_ex": "My knees hurt whenever I walk down the stairs.",
    "vi_ex": "Đầu gối của tôi bị đau mỗi khi tôi đi xuống cầu thang."
  },
  {
    "answer": "to bleed",
    "short_mean": "chảy máu",
    "mean": "Máu thoát ra khỏi mạch máu do vết thương.",
    "en_ex": "Apply pressure to the cut if it continues to bleed.",
    "vi_ex": "Ấn chặt vào vết cắt nếu nó tiếp tục chảy máu."
  },
  {
    "answer": "accident",
    "short_mean": "tai nạn",
    "mean": "Sự cố va chạm bất ngờ gây thương tích.",
    "en_ex": "He suffered a minor injury in a traffic accident.",
    "vi_ex": "Anh ấy bị thương nhẹ trong một tai nạn giao thông."
  },
  {
    "answer": "broken bone",
    "short_mean": "rạn/gãy xương",
    "mean": "Tình trạng cấu trúc xương bị nứt hoặc gãy đôi.",
    "en_ex": "The x-ray revealed a broken bone in his arm.",
    "vi_ex": "Hình chụp X-quang tiết lộ một chiếc xương bị gãy ở cánh tay anh ấy."
  },
  {
    "answer": "sprain",
    "short_mean": "bong gân, trật khớp",
    "mean": "Chấn thương dây dãn chằng ở khớp xương.",
    "en_ex": "He suffered a severe ankle sprain during the match.",
    "vi_ex": "Anh ấy bị bong gân cổ chân nghiêm trọng trong trận đấu."
  },
  {
    "answer": "wound",
    "short_mean": "vết thương hở",
    "mean": "Tổn thương rách da thịt do tai nạn hoặc vật nhọn.",
    "en_ex": "Clean the wound thoroughly before applying a bandage.",
    "vi_ex": "Rửa sạch vết thương kỹ càng trước khi băng bó."
  },
  {
    "answer": "bruise",
    "short_mean": "vết bầm tím",
    "mean": "Vết đổi màu đen tím trên da do va đập mạnh.",
    "en_ex": "A large bruise appeared on her leg after falling off the bike.",
    "vi_ex": "Một vết bầm tím lớn xuất hiện trên chân cô ấy sau khi ngã xe đạp."
  },
  {
    "answer": "burn",
    "short_mean": "vết bỏng",
    "mean": "Tổn thương da do nhiệt độ cao, lửa hoặc hóa chất.",
    "en_ex": "Put cold water on a minor burn immediately.",
    "vi_ex": "Xả nước lạnh lên vết bỏng nhẹ ngay lập tức."
  },
  {
    "answer": "bite",
    "short_mean": "vết cắn",
    "mean": "Vết thương do răng của động vật hoặc côn trùng cắn.",
    "en_ex": "Apply soothing cream to the dog bite.",
    "vi_ex": "Thoa kem làm dịu lên vết cắn của chó."
  },
  {
    "answer": "sting",
    "short_mean": "vết đốt (ong, muỗi)",
    "mean": "Vết thương do ngòi đốt của côn trùng châm vào da.",
    "en_ex": "The bee sting caused his finger to swell up.",
    "vi_ex": "Vết ong đốt khiến ngón tay anh ấy sưng phồng lên."
  },
  {
    "answer": "splinter",
    "short_mean": "dằm gỗ/mảnh dằm cắm vào da",
    "mean": "Mảnh gỗ hoặc thủy tinh nhỏ đâm sâu dưới da.",
    "en_ex": "Use tweezers to carefully remove the wooden splinter.",
    "vi_ex": "Dùng nhíp để cẩn thận gắp mảnh dằm gỗ ra."
  },
  {
    "answer": "cut",
    "short_mean": "vết đứt tay/vết cắt",
    "mean": "Vết rách da do dao hoặc vật sắc nhọn gây ra.",
    "en_ex": "Cover the small cut with a plaster.",
    "vi_ex": "Băng vết đứt tay nhỏ lại bằng một miếng băng cá nhân."
  }
];
