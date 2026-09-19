const VOCA_WORDS = [
  {
    "answer": "title",
    "short_mean": "danh xưng (Mr/Mrs/Ms/Dr)",
    "mean": "Từ dùng xưng hô trước tên cá nhân thể hiện giới tính, tình trạng hôn nhân hoặc chức danh.",
    "en_ex": "Please select your title from the drop-down menu.",
    "vi_ex": "Vui lòng chọn danh xưng của bạn từ menu thả xuống."
  },
  {
    "answer": "first name",
    "short_mean": "tên chính",
    "mean": "Tên riêng của một cá nhân.",
    "en_ex": "My first name is John and my last name is Smith.",
    "vi_ex": "Tên chính của tôi là John và họ của tôi là Smith."
  },
  {
    "answer": "middle name",
    "short_mean": "tên lót / tên đệm",
    "mean": "Tên đứng ở giữa tên chính và họ.",
    "en_ex": "His middle name is Alexander.",
    "vi_ex": "Tên đệm của anh ấy là Alexander."
  },
  {
    "answer": "last name",
    "short_mean": "họ (họ họ hàng)",
    "mean": "Tên họ gia đình di truyền.",
    "en_ex": "Write your last name in capital letters.",
    "vi_ex": "Hãy viết họ của bạn bằng chữ in hoa."
  },
  {
    "answer": "house number",
    "short_mean": "số nhà",
    "mean": "Số thứ tự nhận diện địa chỉ nhà ở.",
    "en_ex": "What is your house number on Main Street?",
    "vi_ex": "Số nhà của bạn trên Đường Chính là bao nhiêu?"
  },
  {
    "answer": "street address",
    "short_mean": "địa chỉ đường phố",
    "mean": "Thông tin cụ thể về số nhà và tên đường nơi sinh sống.",
    "en_ex": "Please provide your full street address for shipping.",
    "vi_ex": "Vui lòng cung cấp địa chỉ đường phố đầy đủ để giao hàng."
  },
  {
    "answer": "state",
    "short_mean": "bang, tỉnh",
    "mean": "Đơn vị hành chính cấp tỉnh/bang của một quốc gia.",
    "en_ex": "California is a large state on the west coast.",
    "vi_ex": "California là một bang lớn ở bờ biển phía tây."
  },
  {
    "answer": "cell phone number/mobile number",
    "short_mean": "số điện thoại di động",
    "mean": "Dãy số dùng liên lạc qua điện thoại cá nhân.",
    "en_ex": "Can I have your mobile number to text you later?",
    "vi_ex": "Tôi có thể xin số điện thoại di động của bạn để nhắn tin sau không?"
  },
  {
    "answer": "email address",
    "short_mean": "địa chỉ email",
    "mean": "Địa chỉ thư điện tử dùng nhận gửi thư trực tuyến.",
    "en_ex": "Enter a valid email address to complete registration.",
    "vi_ex": "Nhập địa chỉ email hợp lệ để hoàn tất đăng ký."
  },
  {
    "answer": "city",
    "short_mean": "thành phố",
    "mean": "Đô thị tập trung đông dân cư.",
    "en_ex": "Hanoi is the capital city of Vietnam.",
    "vi_ex": "Hà Nội là thành phố thủ đô của Việt Nam."
  },
  {
    "answer": "zip code/postcode",
    "short_mean": "mã bưu chính / mã zip",
    "mean": "Mã số vùng địa lý phục vụ việc chuyển phát bưu chính.",
    "en_ex": "Don't forget to include the zip code on the envelope.",
    "vi_ex": "Đừng quên ghi mã bưu chính trên phong bì."
  },
  {
    "answer": "name",
    "short_mean": "tên họ đầy đủ",
    "mean": "Tên gọi đại diện cho cá nhân.",
    "en_ex": "Please print your name at the top of the form.",
    "vi_ex": "Vui lòng in rõ tên của bạn ở đầu biểu mẫu."
  },
  {
    "answer": "job title",
    "short_mean": "chức danh công việc",
    "mean": "Tên vị trí vị trí đảm nhiệm tại nơi làm việc.",
    "en_ex": "His job title is Senior Software Engineer.",
    "vi_ex": "Chức danh công việc của anh ấy là Kỹ sư phần mềm cao cấp."
  },
  {
    "answer": "company name",
    "short_mean": "tên công ty",
    "mean": "Tên thương hiệu doanh nghiệp công tác.",
    "en_ex": "Fill in your company name on the registration form.",
    "vi_ex": "Điền tên công ty của bạn vào biểu mẫu đăng ký."
  },
  {
    "answer": "website",
    "short_mean": "trang web",
    "mean": "Địa chỉ trang tin điện tử trên mạng internet.",
    "en_ex": "Visit our official website for more details.",
    "vi_ex": "Truy cập trang web chính thức của chúng tôi để biết thêm chi tiết."
  },
  {
    "answer": "business card",
    "short_mean": "danh thiếp, card visit",
    "mean": "Tấm thiếp nhỏ in thông tin liên lạc cá nhân/doanh nghiệp.",
    "en_ex": "He handed me his business card after the meeting.",
    "vi_ex": "Anh ấy đưa cho tôi tấm danh thiếp của mình sau cuộc họp."
  },
  {
    "answer": "to introduce yourself",
    "short_mean": "tự giới thiệu bản thân",
    "mean": "Giới thiệu thông tin cá nhân với người lạ.",
    "en_ex": "Stand up and introduce yourself to the class.",
    "vi_ex": "Hãy đứng dậy và tự giới thiệu bản thân với cả lớp."
  },
  {
    "answer": "to exchange business cards",
    "short_mean": "trao đổi danh thiếp",
    "mean": "Đổi danh thiếp qua lại cho đối tác.",
    "en_ex": "Professionals usually exchange business cards at networking events.",
    "vi_ex": "Các chuyên gia thường trao đổi danh thiếp tại các sự kiện kết nối."
  },
  {
    "answer": "letter",
    "short_mean": "thư tay / lá thư",
    "mean": "Văn bản viết tay gửi bưu điện.",
    "en_ex": "She wrote a heartwarming handwritten letter to her friend.",
    "vi_ex": "Cô ấy đã viết một lá thư tay ấm áp gửi cho bạn mình."
  },
  {
    "answer": "email",
    "short_mean": "thư điện tử",
    "mean": "Thư truyền qua mạng internet.",
    "en_ex": "I sent an email to request more information.",
    "vi_ex": "Tôi đã gửi một thư điện tử để yêu cầu thêm thông tin."
  },
  {
    "answer": "phone call",
    "short_mean": "cuộc gọi điện thoại",
    "mean": "Sự liên lạc trò chuyện trực tiếp qua đường dây điện thoại.",
    "en_ex": "He received an urgent phone call from his boss.",
    "vi_ex": "Anh ấy nhận được một cuộc gọi điện thoại khẩn cấp từ sếp."
  },
  {
    "answer": "voicemail",
    "short_mean": "tin nhắn thoại",
    "mean": "Lời nhắn âm thanh lưu lại khi không nhấc máy.",
    "en_ex": "Please leave a message on my voicemail.",
    "vi_ex": "Vui lòng để lại tin nhắn trên tin nhắn thoại của tôi."
  },
  {
    "answer": "text message",
    "short_mean": "tin nhắn văn bản (SMS)",
    "mean": "Tin nhắn chữ gửi qua điện thoại di động.",
    "en_ex": "Send me a text message when you arrive.",
    "vi_ex": "Gửi cho tôi một tin nhắn văn bản khi bạn đến nơi."
  },
  {
    "answer": "social networking",
    "short_mean": "mạng xã hội",
    "mean": "Các nền tảng giao lưu kết nối trực tuyến như Facebook, LinkedIn.",
    "en_ex": "Social networking helps people stay connected globally.",
    "vi_ex": "Mạng xã hội giúp mọi người giữ kết nối trên toàn cầu."
  },
  {
    "answer": "memo",
    "short_mean": "thông báo nội bộ / bản ghi nhớ",
    "mean": "Văn bản thông báo ngắn gọn dùng trong nội bộ công ty.",
    "en_ex": "The manager issued an internal memo regarding office hours.",
    "vi_ex": "Quản lý đã ban hành một thông báo nội bộ về giờ làm việc."
  },
  {
    "answer": "online chat",
    "short_mean": "trò chuyện trực tuyến / nhắn tin online",
    "mean": "Nói chuyện qua cửa sổ nhắn tin trên web hay app.",
    "en_ex": "Customer support is available via 24/7 online chat.",
    "vi_ex": "Hỗ trợ khách hàng có sẵn qua trò chuyện trực tuyến 24/7."
  },
  {
    "answer": "mail/post",
    "short_mean": "bưu phẩm, thư từ gửi qua đường bưu điện",
    "mean": "Thư từ bưu kiện được chuyển qua dịch vụ bưu chính.",
    "en_ex": "Check the mailbox to see if today's mail has arrived.",
    "vi_ex": "Kiểm tra hòm thư xem bưu phẩm hôm nay đã đến chưa."
  },
  {
    "answer": "note",
    "short_mean": "ghi chú ngắn",
    "mean": "Dòng chữ viết nhanh để ghi nhớ công việc.",
    "en_ex": "She left a sticky note on the refrigerator.",
    "vi_ex": "Cô ấy để lại một ghi chú dán trên tủ lạnh."
  },
  {
    "answer": "inbox",
    "short_mean": "hòm thư đến",
    "mean": "Nơi lưu trữ các thư điện tử nhận được.",
    "en_ex": "My email inbox is full of unread messages.",
    "vi_ex": "Hòm thư đến của tôi ngập tràn các tin nhắn chưa đọc."
  },
  {
    "answer": "outbox",
    "short_mean": "hòm thư đi",
    "mean": "Nơi lưu các thư điện tử đang chờ gửi đi.",
    "en_ex": "Check your outbox to see if the message was sent.",
    "vi_ex": "Kiểm tra hòm thư đi để xem tin nhắn đã được gửi chưa."
  },
  {
    "answer": "draft",
    "short_mean": "bản nháp",
    "mean": "Bản thảo thư chưa hoàn thiện để gửi.",
    "en_ex": "Save the email as a draft to edit later.",
    "vi_ex": "Lưu thư điện tử dưới dạng bản nháp để chỉnh sửa sau."
  },
  {
    "answer": "junk mail/spam",
    "short_mean": "thư rác, tin nhắn rác",
    "mean": "Các thư quảng cáo không mong muốn gửi hàng loạt.",
    "en_ex": "Spam filters automatically move junk mail to the trash.",
    "vi_ex": "Bộ lọc thư rác tự động chuyển thư rác vào thùng rác."
  },
  {
    "answer": "trash",
    "short_mean": "thùng rác (email/tệp)",
    "mean": "Nơi lưu giữ các thư hoặc tệp đã bị xóa.",
    "en_ex": "Empty the email trash regularly to save space.",
    "vi_ex": "Dọn dẹp thùng rác email thường xuyên để tiết kiệm dung lượng."
  },
  {
    "answer": "attachment",
    "short_mean": "tệp đính kèm",
    "mean": "Tệp tài liệu hoặc hình ảnh đính kèm theo thư.",
    "en_ex": "Please find the requested report in the email attachment.",
    "vi_ex": "Vui lòng xem báo cáo được yêu cầu trong tệp đính kèm của email."
  },
  {
    "answer": "subject",
    "short_mean": "tiêu đề thư",
    "mean": "Dòng tóm tắt nội dung chính của hòm thư.",
    "en_ex": "Write a concise subject line for your job application email.",
    "vi_ex": "Hãy viết một dòng tiêu đề ngắn gọn cho email xin việc của bạn."
  },
  {
    "answer": "contact",
    "short_mean": "thông tin liên hệ / danh bạ",
    "mean": "Dữ liệu liên lạc của một cá nhân.",
    "en_ex": "Save his phone number in your mobile contact list.",
    "vi_ex": "Lưu số điện thoại của anh ấy vào danh bạ di động của bạn."
  },
  {
    "answer": "signature",
    "short_mean": "chữ ký / chữ ký email",
    "mean": "Ký hiệu tay hoặc phần thông tin chân trang của email.",
    "en_ex": "Sign your legal signature at the bottom of the document.",
    "vi_ex": "Ký chữ ký pháp lý của bạn ở cuối tài liệu."
  },
  {
    "answer": "to print",
    "short_mean": "in ấn",
    "mean": "Xuất dữ liệu từ máy tính ra giấy qua máy in.",
    "en_ex": "Can you print five copies of the meeting agenda?",
    "vi_ex": "Bạn có thể in năm bản chương trình cuộc họp được không?"
  },
  {
    "answer": "to reply",
    "short_mean": "phản hồi, trả lời thư",
    "mean": "Gửi thư trả lời người gửi.",
    "en_ex": "I will reply to your email as soon as possible.",
    "vi_ex": "Tôi sẽ phản hồi thư của bạn sớm nhất có thể."
  },
  {
    "answer": "to reply all",
    "short_mean": "trả lời tất cả mọi người",
    "mean": "Gửi phản hồi cho người gửi và tất cả những người nhận khác.",
    "en_ex": "Be careful when clicking 'reply all' on group emails.",
    "vi_ex": "Hãy cẩn thận khi nhấp vào nút 'trả lời tất cả' trên các email nhóm."
  },
  {
    "answer": "to forward",
    "short_mean": "chuyển tiếp thư",
    "mean": "Gửi thư đã nhận cho một người khác.",
    "en_ex": "Forward the document to the accounting team.",
    "vi_ex": "Hãy chuyển tiếp tài liệu này cho đội kế toán."
  },
  {
    "answer": "to send",
    "short_mean": "gửi đi",
    "mean": "Phát đi tin nhắn hoặc thư điện tử.",
    "en_ex": "Press the button to send your message.",
    "vi_ex": "Nhấn nút để gửi tin nhắn của bạn."
  },
  {
    "answer": "to delete",
    "short_mean": "xóa bỏ",
    "mean": "Loại bỏ thư hoặc thông tin khỏi hòm thư.",
    "en_ex": "Delete all promotional spam emails.",
    "vi_ex": "Xóa tất cả các email quảng cáo rác."
  }
];
