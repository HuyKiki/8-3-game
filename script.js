// Danh sách câu hỏi và đáp án
const cauHoi = [
    {
        cauHoi: "Ngày Quốc tế Phụ nữ 8/3 bắt nguồn từ quốc gia nào?",
        dapAn: ["Việt Nam", "Mỹ", "Pháp", "Đức"],
        dapAnDung: "Mỹ",
        hinhAnh: "https://vnn-imgs-f.vgcloud.vn/2018/03/07/11/hanh-trinh-hinh-thanh-ngay-quoc-te-phu-nu-8-3-3.jpg"
    },
    {
        cauHoi: "Ai là người phụ nữ đầu tiên bay vào vũ trụ?",
        dapAn: ["Sally Ride", "Mae Jemison", "Kalpana Chawla", "Valentina Tereshkova"],
        dapAnDung: "Valentina Tereshkova",
        hinhAnh: "https://nghiencuuquocte.org/wp-content/uploads/2022/06/16.jpg"
    },
    {
        cauHoi: "Hoa nào thường được tặng trong ngày 8/3?",
        dapAn: ["Hoa lan", "Hoa cúc", "Hoa hồng", "Tất cả đều đúng"],
        dapAnDung: "Hoa hồng",
        hinhAnh: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/nen-tang-hoa-gi-ngay-8-3-1.jpg"
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

    // Reset thông báo đáp án
    thongBaoElement.textContent = ''; // Xóa thông báo cũ
}

// Hàm kiểm tra đáp án
function kiemTraDapAn(da) {
    const cauHoiData = cauHoi[cauHoiHienTai];
    if (da === cauHoiData.dapAnDung) {
        diem++;
        thongBaoElement.textContent = "Oách xà lách! +1 tri thức. Đáp án đúng: " + cauHoiData.dapAnDung;
    } else {
        thongBaoElement.textContent = "-1 tri thức! Phải là: " + cauHoiData.dapAnDung;
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
            title: 'Thủng nóc xuyên trần!',
            text: `Bạn đã hoàn thành minigame với ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Hay không? hay thế còn gì :))`,
            icon: 'success',
            confirmButtonText: 'Chơi lại không?'
        }).then(() => {
            resetTroChoi();
        });
    } else {
        Swal.fire({
            title: 'Hết cứu!',
            text: `Bạn chỉ đạt được ${diem}/${tongSoCauHoi} điểm (${tyLeDung.toFixed(2)}%). Cay không, cay phết :((`,
            icon: 'error',
            confirmButtonText: 'Chơi lại cho chắc'
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
