const VOCA_WORDS = [
  {
    "answer": "screen",
    "short_mean": "màn hình",
    "mean": "Bề mặt hiển thị hình ảnh của máy tính hoặc điện thoại.",
    "en_ex": "The laptop screen displays vivid colors.",
    "vi_ex": "Màn hình máy tính xách tay hiển thị màu sắc sống động."
  },
  {
    "answer": "router",
    "short_mean": "bộ phát Wi-Fi / router",
    "mean": "Thiết bị định tuyến truyền phát tín hiệu mạng internet.",
    "en_ex": "Restart the router if the internet connection drops.",
    "vi_ex": "Khởi động lại bộ phát Wi-Fi nếu kết nối internet bị gián đoạn."
  },
  {
    "answer": "wire",
    "short_mean": "dây điện, dây dẫn",
    "mean": "Dây kim loại truyền tải điện hoặc dữ liệu.",
    "en_ex": "Keep the wires neatly organized behind the computer desk.",
    "vi_ex": "Giữ các dây dẫn gọn gàng phía sau bàn máy tính."
  },
  {
    "answer": "mouse",
    "short_mean": "chuột máy tính",
    "mean": "Thiết bị điều khiển con trỏ trên màn hình máy tính.",
    "en_ex": "Move the mouse to point at the icon.",
    "vi_ex": "Di chuyển chuột để chỉ vào biểu tượng."
  },
  {
    "answer": "mouse pad/mat",
    "short_mean": "tấm lót chuột",
    "mean": "Miếng đệm bề mặt giúp chuột di chuyển trơn tru.",
    "en_ex": "A smooth mouse pad improves gaming precision.",
    "vi_ex": "Một tấm lót chuột di chuyển mịn giúp tăng độ chính xác khi chơi game."
  },
  {
    "answer": "keyboard",
    "short_mean": "bàn phím",
    "mean": "Thiết bị chứa các phím bấm nhập dữ liệu vào máy tính.",
    "en_ex": "He types rapidly on his mechanical keyboard.",
    "vi_ex": "Anh ấy gõ chữ rất nhanh trên bàn phím cơ của mình."
  },
  {
    "answer": "computer desk",
    "short_mean": "bàn để máy tính",
    "mean": "Chiếc bàn thiết kế để đặt máy tính và phụ kiện.",
    "en_ex": "She set up her monitors on a spacious computer desk.",
    "vi_ex": "Cô ấy lắp đặt các màn hình của mình trên một chiếc bàn máy tính rộng rãi."
  },
  {
    "answer": "desktop computer",
    "short_mean": "máy tính để bàn",
    "mean": "Máy tính cá nhân cố định gồm thùng máy và màn hình riêng.",
    "en_ex": "Desktop computers are often more powerful than laptops.",
    "vi_ex": "Máy tính để bàn thường mạnh mẽ hơn máy tính xách tay."
  },
  {
    "answer": "camera",
    "short_mean": "máy ảnh, máy quay",
    "mean": "Thiết bị ghi lại hình ảnh hoặc video.",
    "en_ex": "He pointed the camera at the landscape to take a photo.",
    "vi_ex": "Anh ấy hướng máy ảnh về phía phong cảnh để chụp một bức ảnh."
  },
  {
    "answer": "earphones",
    "short_mean": "tai nghe nhét tai",
    "mean": "Thiết bị phát âm thanh nhỏ đeo vào tai.",
    "en_ex": "I put on my earphones to listen to music on the subway.",
    "vi_ex": "Tôi đeo tai nghe vào để nghe nhạc trên tàu điện ngầm."
  },
  {
    "answer": "tablet",
    "short_mean": "máy tính bảng",
    "mean": "Thiết bị máy tính cảm ứng nhỏ gọn không cần bàn phím rời.",
    "en_ex": "She uses her tablet to read e-books and draw digitally.",
    "vi_ex": "Cô ấy sử dụng máy tính bảng của mình để đọc sách điện tử và vẽ kỹ thuật số."
  },
  {
    "answer": "laptop",
    "short_mean": "máy tính xách tay",
    "mean": "Máy tính cá nhân nhỏ gọn có thể mang đi lại.",
    "en_ex": "He opened his laptop to work while waiting at the airport.",
    "vi_ex": "Anh ấy mở máy tính xách tay ra làm việc trong khi chờ ở sân bay."
  },
  {
    "answer": "e-reader",
    "short_mean": "máy đọc sách điện tử",
    "mean": "Thiết bị chuyên dụng sở hữu màn hình e-ink để đọc sách.",
    "en_ex": "An e-reader can store thousands of books in one small device.",
    "vi_ex": "Một máy đọc sách điện tử có thể lưu trữ hàng ngàn cuốn sách trong một thiết bị nhỏ."
  },
  {
    "answer": "power cord/lead",
    "short_mean": "dây nguồn",
    "mean": "Dây cắm nối thiết bị điện với ổ cắm điện.",
    "en_ex": "Plug the power cord into the wall outlet.",
    "vi_ex": "Cắm dây nguồn vào ổ cắm trên tường."
  },
  {
    "answer": "wi-fi",
    "short_mean": "mạng Wi-Fi",
    "mean": "Mạng kết nối internet không dây.",
    "en_ex": "The cafe provides free high-speed Wi-Fi for customers.",
    "vi_ex": "Quán cà phê cung cấp Wi-Fi tốc độ cao miễn phí cho khách hàng."
  },
  {
    "answer": "wireless",
    "short_mean": "không dây",
    "mean": "Công nghệ kết nối truyền dữ liệu không cần dây cắm.",
    "en_ex": "Wireless headphones are very popular among runners.",
    "vi_ex": "Tai nghe không dây rất phổ biến đối với những người chạy bộ."
  },
  {
    "answer": "smartwatch",
    "short_mean": "đồng hồ thông minh",
    "mean": "Đồng hồ đeo tay có kết nối điện thoại và đo sức khỏe.",
    "en_ex": "His smartwatch tracks steps, heart rate, and sleep quality.",
    "vi_ex": "Đồng hồ thông minh của anh ấy theo dõi bước chân, nhịp tim và chất lượng giấc ngủ."
  },
  {
    "answer": "memory card",
    "short_mean": "thẻ nhớ",
    "mean": "Thẻ nhỏ lưu trữ dữ liệu cho máy ảnh hoặc điện thoại.",
    "en_ex": "Insert a memory card to expand the device's storage.",
    "vi_ex": "Lắp thẻ nhớ vào để mở rộng dung lượng lưu trữ của thiết bị."
  },
  {
    "answer": "bulb",
    "short_mean": "bóng đèn",
    "mean": "Thiết bị phát ra ánh sáng khi có dòng điện.",
    "en_ex": "We replaced the broken light bulb with an energy-saving LED bulb.",
    "vi_ex": "Chúng tôi đã thay bóng đèn hỏng bằng một bóng đèn LED tiết kiệm điện."
  },
  {
    "answer": "battery",
    "short_mean": "pin",
    "mean": "Thiết bị lưu trữ điện năng cung cấp cho máy móc hoạt động.",
    "en_ex": "My phone battery is low; I need to find a charger.",
    "vi_ex": "Pin điện thoại của tôi sắp hết; tôi cần tìm một cục sạc."
  },
  {
    "answer": "USB drive",
    "short_mean": "ổ đĩa USB, thẻ nhớ USB",
    "mean": "Thiết bị lưu trữ dữ liệu di động cắm qua cổng USB.",
    "en_ex": "Save your presentation file onto a USB drive.",
    "vi_ex": "Hãy lưu tệp trình chiếu của bạn vào một ổ đĩa USB."
  },
  {
    "answer": "hard drive",
    "short_mean": "ổ cứng",
    "mean": "Thiết bị lưu trữ dữ liệu dung lượng lớn của máy tính.",
    "en_ex": "The computer's internal hard drive is almost full.",
    "vi_ex": "Ổ cứng bên trong của máy tính đã gần như đầy."
  },
  {
    "answer": "GPS/satnav",
    "short_mean": "hệ thống định vị GPS / dẫn đường vệ tinh",
    "mean": "Thiết bị định vị vị trí và dẫn đường qua vệ tinh.",
    "en_ex": "Use the car's GPS to find the route to the hotel.",
    "vi_ex": "Sử dụng định vị GPS của xe để tìm đường đến khách sạn."
  },
  {
    "answer": "keypad",
    "short_mean": "bàn phím số / bàn phím nhỏ",
    "mean": "Bảng phím nhỏ chứa các nút số để bấm.",
    "en_ex": "Enter your PIN code on the keypad to unlock the door.",
    "vi_ex": "Nhập mã PIN của bạn trên bàn phím số để mở khóa cửa."
  },
  {
    "answer": "charger",
    "short_mean": "cục sạc, bộ sạc",
    "mean": "Thiết bị nạp điện cho pin.",
    "en_ex": "Don't forget to pack your laptop charger.",
    "vi_ex": "Đừng quên đóng gói bộ sạc máy tính xách tay của bạn."
  },
  {
    "answer": "smartphone",
    "short_mean": "điện thoại thông minh",
    "mean": "Điện thoại di động tích hợp máy tính và kết nối internet.",
    "en_ex": "Smartphones allow users to check emails and watch videos anywhere.",
    "vi_ex": "Điện thoại thông minh cho phép người dùng kiểm tra email và xem video ở bất cứ đâu."
  },
  {
    "answer": "hands-free headset",
    "short_mean": "tai nghe rảnh tay",
    "mean": "Bộ tai nghe kèm micro giúp nghe gọi không cần cầm điện thoại.",
    "en_ex": "Drivers should use a hands-free headset while taking calls in the car.",
    "vi_ex": "Tài xế nên sử dụng tai nghe rảnh tay khi nghe điện thoại trên xe."
  },
  {
    "answer": "plug",
    "short_mean": "phích cắm điện",
    "mean": "Chấu cắm bằng nhựa/kim loại nối thiết bị với ổ điện.",
    "en_ex": "Insert the plug into the wall socket properly.",
    "vi_ex": "Cắm phích cắm vào ổ điện trên tường một cách chắc chắn."
  },
  {
    "answer": "flashlight/torch",
    "short_mean": "đèn pin cầm tay",
    "mean": "Đèn chạy bằng pin nhỏ gọn chiếu sáng cầm tay.",
    "en_ex": "Use a flashlight to see in the dark when the power goes out.",
    "vi_ex": "Sử dụng đèn pin để nhìn trong bóng tối khi bị mất điện."
  },
  {
    "answer": "circuit",
    "short_mean": "mạch điện",
    "mean": "Hệ thống các linh kiện dẫn dòng điện khép kín.",
    "en_ex": "The technician repaired a short circuit on the board.",
    "vi_ex": "Kỹ thuật viên đã sửa một điểm đoản mạch trên bo mạch."
  },
  {
    "answer": "remote control",
    "short_mean": "điều khiển từ xa",
    "mean": "Thiết bị phát tín hiệu điều khiển các thiết bị điện tử.",
    "en_ex": "Use the remote control to adjust the air conditioner temperature.",
    "vi_ex": "Dùng điều khiển từ xa để điều chỉnh nhiệt độ máy điều hòa."
  },
  {
    "answer": "camcorder",
    "short_mean": "máy quay phim cầm tay",
    "mean": "Thiết bị nhỏ gọn chuyên quay video và thu âm.",
    "en_ex": "They recorded the entire wedding ceremony with a camcorder.",
    "vi_ex": "Họ đã quay lại toàn bộ lễ cưới bằng máy quay phim cầm tay."
  },
  {
    "answer": "MP3 player",
    "short_mean": "máy nghe nhạc MP3",
    "mean": "Thiết bị điện tử nhỏ chuyên phát các tệp nhạc số MP3.",
    "en_ex": "He bought an MP3 player to listen to audiobooks while jogging.",
    "vi_ex": "Anh ấy đã mua một máy nghe nhạc MP3 để nghe sách nói khi chạy bộ."
  },
  {
    "answer": "webcam",
    "short_mean": "webcam máy tính",
    "mean": "Camera gắn máy tính để truyền hình ảnh trực tiếp qua mạng.",
    "en_ex": "Turn on your webcam during the online video conference.",
    "vi_ex": "Bật webcam của bạn trong buổi họp trực tuyến."
  },
  {
    "answer": "artificial intelligence",
    "short_mean": "trí tuệ nhân tạo (AI)",
    "mean": "Hệ thống máy tính mô phỏng trí thông minh của con người.",
    "en_ex": "Artificial intelligence is transforming modern technology industries.",
    "vi_ex": "Trí tuệ nhân tạo đang biến đổi các ngành công nghiệp công nghệ hiện đại."
  },
  {
    "answer": "password",
    "short_mean": "mật khẩu",
    "mean": "Chuỗi ký tự bảo mật xác thực quyền truy cập.",
    "en_ex": "Choose a strong password to protect your online account.",
    "vi_ex": "Chọn một mật khẩu mạnh để bảo vệ tài khoản trực tuyến của bạn."
  },
  {
    "answer": "speakers",
    "short_mean": "loa phát âm thanh",
    "mean": "Thiết bị khuếch đại âm thanh từ máy tính/điện thoại.",
    "en_ex": "The desktop speakers output rich stereo sound.",
    "vi_ex": "Bộ loa máy tính để bàn phát ra âm thanh vòm sống động."
  },
  {
    "answer": "voice recorder",
    "short_mean": "máy ghi âm",
    "mean": "Thiết bị chuyên dùng để thu lại giọng nói và âm thanh.",
    "en_ex": "The journalist used a voice recorder during the interview.",
    "vi_ex": "Nhà báo đã sử dụng máy ghi âm trong buổi phỏng vấn."
  },
  {
    "answer": "to turn on",
    "short_mean": "bật thiết bị",
    "mean": "Mở nguồn thiết bị điện tử.",
    "en_ex": "Press the power button to turn on the computer.",
    "vi_ex": "Nhấn nút nguồn để bật máy tính."
  },
  {
    "answer": "to turn off",
    "short_mean": "tắt thiết bị",
    "mean": "Ngắt nguồn thiết bị điện tử.",
    "en_ex": "Turn off your mobile phone during the exam.",
    "vi_ex": "Tắt điện thoại di động của bạn trong giờ thi."
  },
  {
    "answer": "to download",
    "short_mean": "tải về",
    "mean": "Tải tệp dữ liệu từ mạng về máy.",
    "en_ex": "It took a few seconds to download the PDF document.",
    "vi_ex": "Mất vài giây để tải tài liệu PDF về."
  },
  {
    "answer": "to upload",
    "short_mean": "tải lên",
    "mean": "Đăng tải tệp dữ liệu từ máy lên mạng.",
    "en_ex": "She wants to upload her photos to cloud storage.",
    "vi_ex": "Cô ấy muốn tải ảnh của mình lên lưu trữ đám mây."
  },
  {
    "answer": "to click",
    "short_mean": "nhấp chuột",
    "mean": "Bấm nút chuột để chọn đối tượng trên màn hình.",
    "en_ex": "Click on the link to open the web page.",
    "vi_ex": "Nhấp chuột vào liên kết để mở trang web."
  },
  {
    "answer": "to log in",
    "short_mean": "đăng nhập",
    "mean": "Nhập tài khoản và mật khẩu vào hệ thống.",
    "en_ex": "Enter your username and password to log in.",
    "vi_ex": "Nhập tên người dùng và mật khẩu để đăng nhập."
  },
  {
    "answer": "to log out",
    "short_mean": "đăng xuất",
    "mean": "Thoát khỏi tài khoản cá nhân trên hệ thống.",
    "en_ex": "Always remember to log out after using a public computer.",
    "vi_ex": "Luôn nhớ đăng xuất sau khi sử dụng máy tính công cộng."
  },
  {
    "answer": "to back up",
    "short_mean": "sao lưu dữ liệu",
    "mean": "Tạo bản sao dự phòng cho dữ liệu quan trọng.",
    "en_ex": "Back up your important files regularly to an external hard drive.",
    "vi_ex": "Sao lưu các tệp quan trọng của bạn thường xuyên ra ổ cứng ngoài."
  },
  {
    "answer": "to plug in",
    "short_mean": "cắm điện, cắm phích",
    "mean": "Nối phích cắm thiết bị vào nguồn điện.",
    "en_ex": "Plug in the charger to charge your phone.",
    "vi_ex": "Cắm bộ sạc vào để sạc điện thoại của bạn."
  },
  {
    "answer": "to delete",
    "short_mean": "xóa dữ liệu",
    "mean": "Loại bỏ tệp hoặc thông tin khỏi bộ nhớ.",
    "en_ex": "Be careful not to delete essential system files.",
    "vi_ex": "Hãy cẩn thận kẻo xóa các tệp hệ thống thiết yếu."
  }
];
