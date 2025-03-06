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
        cauHoi: "Sự kiện nào là nguyên nhân chính dẫn đến việc thành lập ngày Quốc tế Phụ nữ 8/3?",
        dapAn: ["Cuộc biểu tình đòi quyền bầu cử của phụ nữ ở Anh", "Cuộc đình công của nữ công nhân ngành dệt may tại Mỹ", "Cách mạng Pháp", "Chiến tranh thế giới thứ nhất"],
        dapAnDung: "Cuộc đình công của nữ công nhân ngành dệt may tại Mỹ",
        hinhAnh: "https://scontent.fhan9-1.fna.fbcdn.net/v/t1.15752-9/481972625_1831401007693415_5284344006175331551_n.gif?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHiTNM0H2gyZ_fNABJDwLPx32AFH3zxNuLfYAUffPE24uuDcGSNWt_LoTiNbpfxM6FqoqM3NOF9e8xwl_GT47Ll&_nc_ohc=_M03pT4rtwIQ7kNvgEcjBKa&_nc_oc=AdgZdnmxeQsiBf1NJukYhZo_rIwqcVya9xVMSMrevSTgLuO-DArIswImJ1xRdZvdmUs&_nc_zt=23&_nc_ht=scontent.fhan9-1.fna&oh=03_Q7cD1wFQWVMew-kUnJpKzw2tHAXDyyYw93udMZbVUqn08CPTFQ&oe=67F11F66"
    },
    {
        cauHoi: "Ngày 8/3 được chọn làm Ngày Quốc tế Phụ nữ từ năm nào?",
        dapAn: ["1920", "1945", "1905", "1910"],
        dapAnDung: "1910",
        hinhAnh: "https://images.fineartamerica.com/images-medium-large-5/-1910s-usa-womens-the-advertising-archives.jpg"
    },
    {
        cauHoi: "Ai là người đề xuất ý tưởng về Ngày Quốc tế Phụ nữ? (gợi ý: Người Đức)",
        dapAn: ["Rosa Luxemburg", "Clara Zetkin", "Emmeline Pankhurst", "Susan B. Anthony"],
        dapAnDung: "Clara Zetkin",
        hinhAnh: "https://upload.wikimedia.org/wikipedia/commons/1/10/C_Zetkin_1.jpg"
    },
    {
        cauHoi: "Ngày 8/3 được tổ chức lần đầu tiên tại Việt Nam vào năm nào?",
        dapAn: ["1910", "1977", "1930", "2025"],
        dapAnDung: "1930",
        hinhAnh: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png"
    },
    {
        cauHoi: "Quốc gia nào sau đây coi ngày 8/3 là ngày lễ chính thức?",
        dapAn: ["Việt Nam", "Mỹ", "Nhật Bản", "Đức"],
        dapAnDung: "Việt Nam",
        hinhAnh: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40christalluster%2Fpunctuation-of-life-question-mark-a452d23d29b3&psig=AOvVaw29MjhWvNm9fsUtBwlehvm6&ust=1741355395974000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKihm7_M9YsDFQAAAAAdAAAAABAE"
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
}

// Hàm kiểm tra đáp án
function kiemTraDapAn(da) {
    const cauHoiData = cauHoi[cauHoiHienTai];
    if (da === cauHoiData.dapAnDung) {
        diem++;
        thongBaoElement.textContent = "Oách xà lách! +1 tri thức.";
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
