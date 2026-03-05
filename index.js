// --- البيانات والمنطق البرمجي ---

// بيانات اللاعبين (تمت إضافة حقل "الإنجازات" لزيادة الاحترافية)
const fighters = [
  {
    id: 1,
    name: "سنسي عايد ",
    rank: "(مدرب)",
    weight: "65 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/sensei.jpg",
    video: "images/sinsei.MOV",
  },

  {
    id: 2,
    name: "عبد القادر ",
    rank: "حزام بني",
    weight: "85 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/abdulqader.jpg",
    video: "videos/IMG_9713.MOV",
  },

  
  {
    id: 3,
    name: "عبد الله راتب",
    rank: "حزام اصفر",
    weight: "65 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/abodrat.jpg",
    video: "images/abodrat.mp4",
  },
  {
    id: 4,
    name: "حسام ",
    rank: "حزام اخضر",
    weight: "65 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/husam.jpg",
    video: "images/husam.mp4",
  },
  {
    id: 5,
    name: "اللاعب معتز ",
    rank: "حزام ازرق",
    weight: "65 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/azoz.jpg",
    video: "images/sisei.MOV",
  },
  {
    id: 6,
    name: "عمرو",
    rank: "حزام برتقالي",
    weight: "65 كغ",
    achievements:
      "بطل المنطقة 2023 , بطل العراق 2016, بطل آسيا 2021, بطل العراق 2019",
    power: "90%",
    speed: "80%",
    image: "images/photo_2026-03-02_01-32-24.jpg",
    video: "images/s.MOV",
  },
];
// 1. توليد بطاقات اللاعبين
function renderFighters() {
  const container = document.getElementById("fighters-container");
  container.innerHTML = fighters
    .map(
      (f) => `
                <div class="fighter-card" onclick="openFighterModal(${f.id})">
                    <img src="${f.image}" class="card-img" loading="lazy">
                    <div class="card-info">
                        <h3>${f.name}</h3>
                        <span>${f.rank}</span>
                    </div>
                </div>
            `,
    )
    .join("");
}

// 2. منطق نافذة اللاعب
function openFighterModal(id) {
  const f = fighters.find((i) => i.id === id);
  if (!f) return;
  document.getElementById("m-name").innerText = f.name;
  document.getElementById("m-rank").innerText = f.rank;
  document.getElementById("m-weight").innerText = f.weight;
  document.getElementById("m-achieve").innerText = f.achievements;

  const vid = document.getElementById("modal-video");
  vid.src = f.video;

  document.getElementById("fighter-modal").classList.add("active");
  vid.play();
  setTimeout(() => {
    document.getElementById("bar-power").style.width = f.power;
    document.getElementById("bar-speed").style.width = f.speed;
  }, 300);
}

function closeFighterModal() {
  document.getElementById("fighter-modal").classList.remove("active");
  document.getElementById("modal-video").pause();
  document.getElementById("bar-power").style.width = "0%";
  document.getElementById("bar-speed").style.width = "0%";
}

// 3. منطق نافذة واتساب
function openJoinModal() {
  document.getElementById("join-modal").classList.add("active");
}
function closeJoinModal() {
  document.getElementById("join-modal").classList.remove("active");
}

function sendToWhatsapp() {
  const myPhone = "9647711424156"; // ا
  const name = document.getElementById("wa-name").value;
  const age = document.getElementById("wa-age").value;
  const phone = document.getElementById("wa-phone").value;
  const belt = document.getElementById("wa-belt").value;
  if (name === "" || phone === "") {
    alert("يرجى كتابة الاسم ورقم الهاتف");
    return;
  }

  // تجهيز الرسالة
  const message = `مرحباً كابتن عايد، أرغب بالانضمام لأكاديمية القادسية .%0a%0aالاسم: ${name}%0aالعمر: ${age}%0aرقم الهاتف: ${phone}%0aالحزام: ${belt}`;

  // فتح الرابط
  const url = `https://wa.me/${myPhone}?text=${message}`;
  window.open(url, "_blank");
}

// إغلاق النوافذ عند النقر بالخارج
window.onclick = function (e) {
  if (e.target.classList.contains("modal")) {
    closeFighterModal();
    closeJoinModal();
  }
};

renderFighters();
