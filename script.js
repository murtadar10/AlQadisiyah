// 1. بيانات اللاعبين (تأكد من مطابقة أسماء الصور والفيديوهات لما هو موجود في مجلدك)
const fighters = [
  {
    id: 1,
    name: "عايد الشمري",
    rank: "حزام أسود (دان 2)",
    weight: "65 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/sensei.jpg",
    video: "images/sinsei.MOV",
  },
  {
    id: 2,
    name: "اللاعب معتز",
    rank: "حزام ازرق",
    weight: "65 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/azoz.jpg",
    video: "images/sisei.MOV",
  },
  {
    id: 3,
    name: "عبد الله راتب",
    rank: "حزام اصفر",
    weight: "65 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/abodrat.jpg",
    video: "images/abodrat.mp4",
  },
  {
    id: 4,
    name: "حسام",
    rank: "حزام اخضر",
    weight: "65 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/husam.jpg",
    video: "images/husam.mp4",
  },
  {
    id: 5,
    name: "عبد القادر",
    rank: "حزام بني",
    weight: "95 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "95%",
    speed: "75%",
    image: "images/abdulqader.jpg", // تأكد من اسم الصورة
    video: "images/abdulqader.mp4", // تأكد من اسم الفيديو
  },
  {
    id: 6,
    name: "عمرو",
    rank: "حزام برتقالي",
    weight: "65 كغ",
    achievements: "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "85%",
    speed: "85%",
    image: "images/photo_2026-03-02_01-32-24.jpg",
    video: "images/s.MOV",
  }
];

// 2. دالة لضخ بطاقات اللاعبين في صفحة HTML
function renderFighters() {
    const container = document.getElementById("fighters-container");
    container.innerHTML = fighters.map(f => `
        <div class="fighter-card" onclick="openFighterModal(${f.id})">
            <img src="${f.image}" class="card-img" alt="${f.name}" loading="lazy">
            <div class="card-info">
                <h3>${f.name}</h3>
                <span>${f.rank}</span>
            </div>
        </div>
    `).join("");
}

// 3. دالة لفتح النافذة المنبثقة (Modal) وعرض التفاصيل والفيديو
function openFighterModal(id) {
    const fighter = fighters.find(f => f.id === id);
    if (!fighter) return;

    const modal = document.getElementById("fighter-modal");
    const modalDetails = document.getElementById("modal-details");

    // تصميم محتوى النافذة المنبثقة
    modalDetails.innerHTML = `
        <h2 style="color: #e63946; margin-bottom: 10px;">${fighter.name}</h2>
        <p style="margin-bottom: 5px;"><strong>الرتبة:</strong> ${fighter.rank}</p>
        <p style="margin-bottom: 5px;"><strong>الوزن:</strong> ${fighter.weight}</p>
        <div style="display: flex; justify-content: center; gap: 15px; margin: 10px 0;">
            <span style="background: #333; padding: 5px 10px; border-radius: 5px;">القوة: ${fighter.power}</span>
            <span style="background: #333; padding: 5px 10px; border-radius: 5px;">السرعة: ${fighter.speed}</span>
        </div>
        <p style="font-size: 0.9rem; color: #ccc; margin-bottom: 15px;"><strong>الإنجازات:</strong> ${fighter.achievements}</p>
        
        <video controls class="modal-video" autoplay>
            <source src="${fighter.video}" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو.
        </video>
    `;

    modal.style.display = "block";
}

// 4. دالة لإغلاق النافذة المنبثقة
function closeModal() {
    const modal = document.getElementById("fighter-modal");
    const modalDetails = document.getElementById("modal-details");
    
    modal.style.display = "none";
    // مسح المحتوى لإيقاف تشغيل الفيديو عند إغلاق النافذة
    modalDetails.innerHTML = ""; 
}

// 5. إغلاق النافذة عند الضغط في أي مكان خارجها
window.onclick = function(event) {
    const modal = document.getElementById("fighter-modal");
    if (event.target === modal) {
        closeModal();
    }
}

// 6. تشغيل دالة العرض بمجرد تحميل الصفحة
window.onload = renderFighters;