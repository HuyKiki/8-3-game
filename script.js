// Danh sách câu hỏi và đáp án
const cauHoi = [
    {
        cauHoi: "Ngày Quốc tế Phụ nữ 8/3 bắt nguồn từ quốc gia nào?",
        dapAn: ["Mỹ", "Nga", "Pháp", "Đức"],
        dapAnDung: "Mỹ",
        hinhAnh: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9"
    },
    {
        cauHoi: "Ai là người phụ nữ đầu tiên bay vào vũ trụ?",
        dapAn: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Kalpana Chawla"],
        dapAnDung: "Valentina Tereshkova",
        hinhAnh: "https://images.unsplash.com/photo-1587502536575-6dfba0a6e017"
    },
    {
        cauHoi: "Hoa nào thường được tặng trong ngày 8/3?",
        dapAn: ["Hoa hồng", "Hoa tulip", "Hoa ly", "Hoa cúc"],
        dapAnDung: "Hoa hồng",
        hinhAnh: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
    }
];

// Biến toàn cục
let diem = 0;
let cauHoiHienTai = 0;

// Lấy các phần tử DOM
const cauHoiElement = document.getElementById('cauHoi');
const dapAnElement = document.getElementById('dapAn');
const btnBatDau = document.getElementById('btnBatDau');
const thongBaoElement = document.getElementById('thongBao');
const diemSoElement = document.getElementById('diemSo');

// Hàm bắt đầu trò chơi
btnBatDau.addEventListener('click', () => {
    resetTroChoi();
    hienThiCauHoi();
    btnBatDau.style.display = 'none';
});

// Hàm hiển thị câu hỏi
function hienThiCauHoi() {
    const cauHoiData = cauHoi[cauHoiHienTai];
    cauHoiElement.textContent = cauHoiData.cauHoi;

    // Hiển thị hình ảnh
    const hinhAnhElement = document.createElement('img');
    hinhAnhElement.src = cauHoiData.hinhAnh;
    hinhAnhElement.alt = "Hình ảnh minh họa";
    hinhAnhElement.classList.add('hinh-anh');

    // Xóa hình ảnh cũ (nếu có)
    const hinhAnhCu = document.querySelector('.hinh-anh');
    if (hinhAnhCu) {
        hinhAnhCu.remove();
    }

    // Chèn hình ảnh vào trước câu hỏi
    cauHoiElement.parentNode.insertBefore(hinhAnhElement, cauHoiElement);

    // Hiển thị đáp án
    dapAnElement.innerHTML = cauHoiData.dapAn.map(da => `
        <button onclick="kiemTraDapAn('${da}')">${da}</button>
    `).join('');
}

// Hàm kiểm tra đáp án
function kiemTraDapAn(da) {
    const cauHoiData = cauHoi[cauHoiHienTai];
    if (da === cauHoiData.dapAnDung) {
        diem++;
        thongBaoElement.textContent = "Chính xác! Bạn được 1 điểm.";
    } else {
        thongBaoElement.textContent = "Sai rồi! Đáp án đúng là: " + cauHoiData.dapAnDung;
    }
    diemSoElement.textContent = "Điểm: " + diem;
    cauHoiHienTai++;
    if (cauHoiHienTai < cauHoi.length) {
        hienThiCauHoi();
    } else {
        ketThucTroChoi();
    }
}

// Hàm kết thúc trò chơi
function ketThucTroChoi() {
    const tongSoCauHoi = cauHoi.length;
    const tyLeDung = (diem / tongSoCauHoi) * 100;

    if (tyLeDung >= 50) {
        Swal.fire({
            title: 'Chúc mừng!',
            text: `Bạn đã hoàn thành trò chơi với ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Chúc bạn một ngày 8/3 thật ý nghĩa!`,
            icon: 'success',
            confirmButtonText: 'Chơi lại'
        }).then(() => {
            resetTroChoi();
        });
    } else {
        Swal.fire({
            title: 'Thất bại!',
            text: `Bạn chỉ đạt được ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Hãy thử lại nhé!`,
            icon: 'error',
            confirmButtonText: 'Chơi lại'
        }).then(() => {
            resetTroChoi();
        });
    }
}

// Hàm reset trò chơi
function resetTroChoi() {
    diem = 0;
    cauHoiHienTai = 0;
    diemSoElement.textContent = "Điểm: 0";
    thongBaoElement.textContent = '';
    btnBatDau.style.display = 'block';
}
