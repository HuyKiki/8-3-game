// Danh sách các thử thách hoặc lời chúc
const thuThach = [
    "Hát tặng các bạn nữ một bài hát về phụ nữ hoặc tình yêu.",
    "Kể một kỷ niệm đáng nhớ với một người phụ nữ mà bạn yêu quý.",
    "Nói 3 lời khen dành cho các bạn nữ trong lớp.",
    "Nhảy một điệu nhảy vui nhộn để làm các bạn nữ cười.",
    "Đọc một bài thơ về phụ nữ hoặc ngày 8/3.",
    "Tặng các bạn nữ một món quà nhỏ (có thể là hoa, kẹo, hoặc thiệp).",
    "Kể tên 3 người phụ nữ nổi tiếng mà bạn ngưỡng mộ và lý do.",
    "Chụp ảnh selfie cùng các bạn nữ và đăng lên story với lời chúc 8/3.",
    "Làm một động tác hài hước để các bạn nữ đoán xem bạn đang làm gì.",
    "Viết một lời chúc ý nghĩa dành cho các bạn nữ và đọc to trước lớp."
];

// Lấy các phần tử DOM
const btnChon = document.getElementById('btnChon');
const ketQua = document.getElementById('ketQua');

// Hàm chọn thử thách ngẫu nhiên
btnChon.addEventListener('click', () => {
    const ngauNhien = thuThach[Math.floor(Math.random() * thuThach.length)];
    ketQua.textContent = ngauNhien;
});