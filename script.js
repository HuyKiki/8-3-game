// Danh sách câu hỏi và đáp án
const cauHoi = [
    {
        cauHoi: "Ngày Quốc tế Phụ nữ 8/3 bắt nguồn từ quốc gia nào?",
        dapAn: ["Mỹ", "Nga", "Pháp", "Đức"],
        dapAnDung: "Mỹ"
    },
    {
        cauHoi: "Ai là người phụ nữ đầu tiên bay vào vũ trụ?",
        dapAn: ["Mae Jemison", "Sally Ride", "Valentina Tereshkova", "Kalpana Chawla"],
        dapAnDung: "Valentina Tereshkova"
    },
    {
        cauHoi: "Hoa nào thường được tặng trong ngày 8/3?",
        dapAn: ["Hoa lan", "Hoa hồng", "Hoa ly", "Tất cả đều sai"],
        dapAnDung: "Hoa hồng"
    },
    {
        cauHoi: "Ai là đứa con gái cao nhất 10A",
        dapAn: ["Ngô Phương Linh", "Phạm Vũ Anh Thư", "Đỗ Vũ Quỳnh Chi", "Tất cả đều đúng"],
        dapAnDung: "Ngô Phương Linh"
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
        thongBaoElement.textContent = "Quá chuẩn! +1 tri thức.";
    } else {
        thongBaoElement.textContent = "-1 tri thức! phải là: " + cauHoiData.dapAnDung "chứ";
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
    const tyLeDung = (diem / tongSoCauHoi) * 100; // Tính tỷ lệ đúng (%)

    if (tyLeDung >= 50) {
        // Nếu tỷ lệ đúng >= 50%, hiển thị thông báo chiến thắng
        Swal.fire({
            title: 'Oách xà lách vô cùng!',
            text: `Bạn đã hoàn thành minigame với ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Chúc bạn một ngày 8/3 thật ý nghĩa!`,
            icon: 'success',
            confirmButtonText: 'Cay không, chơi lại đê :))'
        }).then(() => {
            resetTroChoi(); // Reset trò chơi để chơi lại
        });
    } else {
        // Nếu tỷ lệ đúng < 50%, hiển thị thông báo thất bại
        Swal.fire({
            title: 'Quá thất bại!',
            text: `Bạn chỉ đạt được ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Không giòn rồi!`,
            icon: 'error',
            confirmButtonText: 'Chơi lại thôi :(('
        }).then(() => {
            resetTroChoi(); // Reset trò chơi để chơi lại
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
