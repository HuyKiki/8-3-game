// Danh sách câu hỏi và đáp án
const cauHoi = [
    {
        cauHoi: "Ngày Quốc tế Phụ nữ 8/3 bắt nguồn từ quốc gia nào?",
        dapAn: ["Mỹ", "Nga", "Pháp", "Đức"],
        dapAnDung: "Mỹ"
    },
    {
        cauHoi: "Ai là người phụ nữ đầu tiên bay vào vũ trụ?",
        dapAn: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Kalpana Chawla"],
        dapAnDung: "Valentina Tereshkova"
    },
    {
        cauHoi: "Hoa nào thường được tặng trong ngày 8/3?",
        dapAn: ["Hoa hồng", "Hoa tulip", "Hoa ly", "Hoa cúc"],
        dapAnDung: "Hoa hồng"
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
    diem = 0;
    cauHoiHienTai = 0;
    diemSoElement.textContent = "Điểm: 0";
    hienThiCauHoi();
    btnBatDau.style.display = 'none';
});

// Hàm hiển thị câu hỏi
function hienThiCauHoi() {
    const cauHoiData = cauHoi[cauHoiHienTai];
    cauHoiElement.textContent = cauHoiData.cauHoi;
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
    Swal.fire({
        title: 'Chúc mừng!',
        text: `Bạn đã hoàn thành trò chơi với ${diem} điểm. Chúc bạn một ngày 8/3 thật ý nghĩa!`,
        icon: 'success',
        confirmButtonText: 'Chơi lại'
    }).then(() => {
        btnBatDau.style.display = 'block';
        thongBaoElement.textContent = '';
    });
}
