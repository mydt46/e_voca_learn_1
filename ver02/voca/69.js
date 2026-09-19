const VOCA_WORDS = [
  {
    "answer": "doctor",
    "short_mean": "bác sĩ",
    "mean": "Người có chuyên môn y khoa khám và chữa bệnh cho bệnh nhân.",
    "en_ex": "The doctor examined the patient and prescribed medication.",
    "vi_ex": "Bác sĩ đã khám cho bệnh nhân và kê đơn thuốc."
  },
  {
    "answer": "nurse",
    "short_mean": "y tá, điều dưỡng",
    "mean": "Người chăm sóc y tế cho bệnh nhân dưới sự chỉ đạo của bác sĩ.",
    "en_ex": "The nurse took my temperature and blood pressure.",
    "vi_ex": "Y tá đã đo nhiệt độ và huyết áp cho tôi."
  },
  {
    "answer": "patient",
    "short_mean": "bệnh nhân",
    "mean": "Người đang tiếp nhận sự chăm sóc hoặc điều trị y tế.",
    "en_ex": "The patient is recovering well after the surgery.",
    "vi_ex": "Bệnh nhân đang phục hồi tốt sau ca phẫu thuật."
  },
  {
    "answer": "clinic/doctor's surgery",
    "short_mean": "phòng khám bệnh",
    "mean": "Cơ sở y tế nhỏ để bệnh nhân đến khám ngoại trú.",
    "en_ex": "I have an appointment at the local health clinic today.",
    "vi_ex": "Hôm nay tôi có một cuộc hẹn tại phòng khám y tế địa phương."
  },
  {
    "answer": "hospital",
    "short_mean": "bệnh viện",
    "mean": "Cơ sở y tế quy mô lớn điều trị chuyên sâu và nội trú.",
    "en_ex": "She was admitted to the hospital for further observation.",
    "vi_ex": "Cô ấy đã được nhập viện để tiếp tục theo dõi."
  },
  {
    "answer": "waiting room",
    "short_mean": "phòng chờ khám",
    "mean": "Khu vực ngồi chờ cho bệnh nhân trước khi vào khám.",
    "en_ex": "Please take a seat in the waiting room until your name is called.",
    "vi_ex": "Vui lòng ngồi ở phòng chờ cho đến khi tên của bạn được gọi."
  },
  {
    "answer": "appointment",
    "short_mean": "cuộc hẹn khám bệnh",
    "mean": "Thời gian đã đặt trước để gặp bác sĩ.",
    "en_ex": "I made an appointment with my dentist for next Tuesday.",
    "vi_ex": "Tôi đã đặt lịch hẹn với nha sĩ vào thứ Ba tuần tới."
  },
  {
    "answer": "prescription",
    "short_mean": "đơn thuốc",
    "mean": "Tờ giấy chỉ định thuốc uống của bác sĩ dành cho bệnh nhân.",
    "en_ex": "Take this prescription to the pharmacy to get your medicine.",
    "vi_ex": "Mang đơn thuốc này đến nhà thuốc để lấy thuốc của bạn."
  },
  {
    "answer": "ambulance",
    "short_mean": "xe cứu thương",
    "mean": "Xe cấp cứu chuyên dụng vận chuyển bệnh nhân khẩn cấp.",
    "en_ex": "The ambulance arrived within five minutes of the emergency call.",
    "vi_ex": "Xe cứu thương đã đến trong vòng năm phút kể từ cuộc gọi khẩn cấp."
  },
  {
    "answer": "paramedic",
    "short_mean": "nhân viên cấp cứu ngoại viện",
    "mean": "Người được đào tạo sơ cấp cứu y tế trên xe cứu thương.",
    "en_ex": "Paramedics performed CPR on the victim at the scene.",
    "vi_ex": "Các nhân viên cấp cứu đã thực hiện hô hấp nhân tạo cho nạn nhân tại hiện trường."
  },
  {
    "answer": "medicine/medication",
    "short_mean": "thuốc chữa bệnh",
    "mean": "Dược phẩm dùng để điều trị hoặc phòng ngừa bệnh tật.",
    "en_ex": "Take your medicine twice a day after meals.",
    "vi_ex": "Uống thuốc của bạn hai lần một ngày sau bữa ăn."
  },
  {
    "answer": "pills/tablets",
    "short_mean": "viên thuốc",
    "mean": "Thuốc được nén thành dạng viên nén hoặc viên nang.",
    "en_ex": "Swallow the pills with a glass of water.",
    "vi_ex": "Nuốt các viên thuốc với một cốc nước."
  },
  {
    "answer": "injection",
    "short_mean": "mũi tiêm thuốc",
    "mean": "Đưa thuốc vào cơ thể bằng kim tiêm.",
    "en_ex": "The nurse gave me a flu injection in the upper arm.",
    "vi_ex": "Y tá đã tiêm cho tôi một mũi tiêm phòng cúm ở bắp tay."
  },
  {
    "answer": "blood test",
    "short_mean": "xét nghiệm máu",
    "mean": "Lấy mẫu máu để phân tích chỉ số sức khỏe.",
    "en_ex": "The doctor ordered a blood test to check for infection.",
    "vi_ex": "Bác sĩ chỉ định xét nghiệm máu để kiểm tra sự nhiễm trùng."
  },
  {
    "answer": "test results",
    "short_mean": "kết quả xét nghiệm",
    "mean": "Báo cáo phân tích dữ liệu y tế từ các xét nghiệm.",
    "en_ex": "Your test results will be ready by tomorrow afternoon.",
    "vi_ex": "Kết quả xét nghiệm của bạn sẽ có vào chiều mai."
  },
  {
    "answer": "treatment",
    "short_mean": "phương pháp điều trị",
    "mean": "Các biện pháp y tế nhằm chữa lành bệnh cho bệnh nhân.",
    "en_ex": "Early treatment increases the chances of full recovery.",
    "vi_ex": "Điều trị sớm sẽ tăng cơ hội phục hồi hoàn toàn."
  },
  {
    "answer": "operation",
    "short_mean": "ca phẫu thuật",
    "mean": "Quá trình mổ xẻ y khoa do phẫu thuật viên thực hiện.",
    "en_ex": "The surgeon performed a successful heart operation.",
    "vi_ex": "Bác sĩ phẫu thuật đã thực hiện thành công một ca mổ tim."
  },
  {
    "answer": "physical therapy/physiotherapy",
    "short_mean": "vật lý trị liệu",
    "mean": "Phương pháp tập luyện phục hồi chức năng vận động cơ thể.",
    "en_ex": "He attends physical therapy twice a week to heal his knee.",
    "vi_ex": "Anh ấy đi tập vật lý trị liệu hai lần một tuần để chữa lành đầu gối."
  },
  {
    "answer": "stitches",
    "short_mean": "mũi khâu vết thương",
    "mean": "Sợi chỉ khâu khép kín vết thương rách sâu.",
    "en_ex": "The doctor put five stitches in his arm to close the cut.",
    "vi_ex": "Bác sĩ đã khâu năm mũi trên cánh tay anh ấy để khép vết cắt."
  },
  {
    "answer": "x-ray",
    "short_mean": "chụp X-quang",
    "mean": "Hình ảnh chiếu xạ xuyên thấu để xem cấu trúc xương bên trong.",
    "en_ex": "An x-ray showed that his leg was not broken.",
    "vi_ex": "Hình chụp X-quang cho thấy chân anh ấy không bị gãy."
  },
  {
    "answer": "stethoscope",
    "short_mean": "ống nghe bác sĩ",
    "mean": "Dụng cụ bác sĩ đeo để nghe tiếng tim phổi bệnh nhân.",
    "en_ex": "The doctor used a stethoscope to listen to my heart beat.",
    "vi_ex": "Bác sĩ đã dùng ống nghe để nghe nhịp tim của tôi."
  },
  {
    "answer": "inhaler",
    "short_mean": "bình/ống hít trị hen suyễn",
    "mean": "Dụng cụ xịt khí định liều giúp mở rộng phế quản.",
    "en_ex": "She used her inhaler to ease her sudden shortness of breath.",
    "vi_ex": "Cô ấy đã dùng bình hít để làm dịu cơn khó thở đột ngột."
  },
  {
    "answer": "syringe",
    "short_mean": "xi-lanh, ống tiêm",
    "mean": "Ống tiêm chứa dung dịch thuốc dùng kèm kim tiêm.",
    "en_ex": "The nurse filled the syringe with the vaccine.",
    "vi_ex": "Y tá nạp vắc-xin vào ống tiêm."
  },
  {
    "answer": "scales",
    "short_mean": "cân sức khỏe",
    "mean": "Dụng cụ đo trọng lượng cơ thể.",
    "en_ex": "Step onto the scales so I can record your weight.",
    "vi_ex": "Hãy bước lên cân để tôi có thể ghi lại cân nặng của bạn."
  },
  {
    "answer": "thermometer",
    "short_mean": "nhiệt kế",
    "mean": "Dụng cụ đo thân nhiệt cơ thể.",
    "en_ex": "The thermometer registered a body temperature of 38.5°C.",
    "vi_ex": "Nhiệt kế ghi nhận thân nhiệt là 38,5°C."
  },
  {
    "answer": "antiseptic",
    "short_mean": "chất sát trùng",
    "mean": "Dung dịch tiêu diệt vi khuẩn trên bề mặt vết thương.",
    "en_ex": "Apply antiseptic solution to prevent infection.",
    "vi_ex": "Thoa dung dịch sát trùng để ngăn ngừa nhiễm trùng."
  },
  {
    "answer": "tweezers",
    "short_mean": "nhíp y tế",
    "mean": "Dụng cụ gắp nhỏ để gắp dằm hoặc đồ vật mịn.",
    "en_ex": "She used tweezers to extract the thorn from her finger.",
    "vi_ex": "Cô ấy dùng nhíp để gắp chiếc gai ra khỏi ngón tay."
  },
  {
    "answer": "painkillers",
    "short_mean": "thuốc giảm đau",
    "mean": "Dược phẩm làm giảm bớt cảm giác đau đớn.",
    "en_ex": "Take two painkillers if your headache persists.",
    "vi_ex": "Uống hai viên thuốc giảm đau nếu cơn đau đầu vẫn kéo dài."
  },
  {
    "answer": "antiseptic wipes",
    "short_mean": "khăn giấy sát trùng",
    "mean": "Khăn lau thấm dung dịch diệt khuẩn dùng vệ sinh da.",
    "en_ex": "Clean the skin around the cut with antiseptic wipes.",
    "vi_ex": "Lau sạch vùng da xung quanh vết cắt bằng khăn giấy sát trùng."
  },
  {
    "answer": "scissors",
    "short_mean": "kéo y tế",
    "mean": "Dụng cụ cắt gạc, băng quấn hoặc chỉ khâu.",
    "en_ex": "The nurse used sterile scissors to cut the bandage.",
    "vi_ex": "Y tá dùng kéo vô trùng để cắt cuộn băng."
  },
  {
    "answer": "adhesive bandage/plaster",
    "short_mean": "băng cá nhân",
    "mean": "Miếng dán nhỏ bảo vệ vết thương nhẹ trầy xước.",
    "en_ex": "Put an adhesive bandage over the small scratch.",
    "vi_ex": "Dán một miếng băng cá nhân lên vết trầy xước nhỏ."
  },
  {
    "answer": "ointment",
    "short_mean": "thuốc mỡ thoa ngoài da",
    "mean": "Dạng kem đặc chứa thuốc thoa trị tổn thương da.",
    "en_ex": "Apply a thin layer of soothing ointment to the burn.",
    "vi_ex": "Thoa một lớp thuốc mỡ mỏng làm dịu lên vết bỏng."
  },
  {
    "answer": "bandage",
    "short_mean": "băng quấn y tế",
    "mean": "Dải vải cuộn dùng để băng bó bảo vệ vết thương.",
    "en_ex": "The paramedic wrapped a clean bandage around his sprained wrist.",
    "vi_ex": "Nhân viên cấp cứu đã quấn một dải băng sạch quanh cổ tay bị trật khớp của anh ấy."
  },
  {
    "answer": "safety pin",
    "short_mean": "kim ghim an toàn",
    "mean": "Kim ghim có đầu bọc dùng cố định băng gạc.",
    "en_ex": "Use a safety pin to secure the end of the bandage.",
    "vi_ex": "Dùng một chiếc kim ghim an toàn để ghim cố định đầu dải băng."
  },
  {
    "answer": "cotton pads/cotton wool",
    "short_mean": "bông y tế",
    "mean": "Miếng bông mềm dùng thấm thuốc sát trùng hoặc lau rửa vết thương.",
    "en_ex": "Dab the wound gently with sterile cotton pads.",
    "vi_ex": "Thấm nhẹ vết thương bằng những miếng bông y tế vô trùng."
  },
  {
    "answer": "first aid kit",
    "short_mean": "hộp sơ cứu y tế",
    "mean": "Hộp chứa trang thiết bị dụng cụ y tế sơ cứu ban đầu.",
    "en_ex": "Every vehicle should carry a basic first aid kit.",
    "vi_ex": "Mỗi phương tiện nên trang bị một hộp sơ cứu y tế cơ bản."
  },
  {
    "answer": "adhesive tape",
    "short_mean": "băng keo y tế",
    "mean": "Cuộn băng dính dùng cố định gạc y tế trên da.",
    "en_ex": "Secure the gauze in place using medical adhesive tape.",
    "vi_ex": "Cố định miếng gạc tại chỗ bằng băng keo y tế."
  },
  {
    "answer": "to lie down",
    "short_mean": "nằm xuống nghỉ ngơi",
    "mean": "Đặt cơ thể nằm ngang trên giường hoặc sofa.",
    "en_ex": "You look pale; go lie down on the sofa for a while.",
    "vi_ex": "Trông bạn tái nhợt; hãy đi nằm xuống sofa một lúc đi."
  },
  {
    "answer": "to rest",
    "short_mean": "nghỉ ngơi",
    "mean": "Tạm dừng mọi hoạt động để cơ thể phục hồi năng lượng.",
    "en_ex": "The doctor advised him to rest for three days.",
    "vi_ex": "Bác sĩ khuyên anh ấy nên nghỉ ngơi trong ba ngày."
  },
  {
    "answer": "to heal",
    "short_mean": "chữa lành, phục hồi",
    "mean": "Tự lành lặn của vết thương hoặc lành bệnh.",
    "en_ex": "Minor cuts usually heal within a few days.",
    "vi_ex": "Các vết cắt nhỏ thường tự lành trong vài ngày."
  },
  {
    "answer": "to drink water",
    "short_mean": "uống nước",
    "mean": "Bổ sung nước vào cơ thể.",
    "en_ex": "Remember to drink water to stay hydrated during fever.",
    "vi_ex": "Hãy nhớ uống nước để giữ cơ thể đủ nước khi bị sốt."
  },
  {
    "answer": "to feel better",
    "short_mean": "cảm thấy khỏe hơn",
    "mean": "Hồi phục sức khỏe, bớt mệt mỏi bệnh tật.",
    "en_ex": "I hope you feel better after taking the medicine.",
    "vi_ex": "Tôi hy vọng bạn cảm thấy khỏe hơn sau khi uống thuốc."
  },
  {
    "answer": "to lose weight",
    "short_mean": "giảm cân",
    "mean": "Giảm trọng lượng cơ thể.",
    "en_ex": "A healthy diet helps you lose weight naturally.",
    "vi_ex": "Một chế độ ăn uống lành mạnh giúp bạn giảm cân tự nhiên."
  },
  {
    "answer": "to gain weight",
    "short_mean": "tăng cân",
    "mean": "Tăng trọng lượng cơ thể.",
    "en_ex": "He ate nutritious meals to gain weight after illness.",
    "vi_ex": "Anh ấy đã ăn các bữa ăn bổ dưỡng để tăng cân sau khi ốm."
  },
  {
    "answer": "to recover",
    "short_mean": "hồi phục sức khỏe",
    "mean": "Trở lại trạng thái bình thường sau khi bị bệnh.",
    "en_ex": "It took her two weeks to recover completely from the surgery.",
    "vi_ex": "Cô ấy mất hai tuần để hồi phục hoàn toàn sau ca phẫu thuật."
  },
  {
    "answer": "to exercise",
    "short_mean": "tập luyện thể dục",
    "mean": "Vận động cơ thể rèn luyện sức khỏe.",
    "en_ex": "Exercising daily builds a strong immune system.",
    "vi_ex": "Tập luyện thể dục hằng ngày giúp xây dựng hệ miễn dịch khỏe mạnh."
  },
  {
    "answer": "to resuscitate",
    "short_mean": "hồi sức cấp cứu / làm tỉnh lại",
    "mean": "Thực hiện biện pháp khôi phục hô hấp và nhịp tim cho người bất tỉnh.",
    "en_ex": "The medical team managed to resuscitate the drowning victim.",
    "vi_ex": "Đội ngũ y tế đã hồi sức cấp cứu thành công cho nạn nhân đuối nước."
  }
];
