const pages = [
  {
    td: "05/09/2023",
    img0: "https://picsum.photos/600/400?1",
    text: "Cả lớp chụp hình đầu năm.",
    img1: "https://picsum.photos/600/400?",
    img2: "https://picsum.photos/600/400?",
    img3: "https://picsum.photos/600/400?",
    img4: "https://picsum.photos/600/400?",
    img5: "https://picsum.photos/600/400?",
    img6: "https://picsum.photos/600/400?",
    img7: "https://picsum.photos/600/400?",
    img8: "https://picsum.photos/600/400?",
    img9: "https://picsum.photos/600/400?",
    img10: "https://picsum.photos/600/400?",
    img11: "https://picsum.photos/600/400?",
    img12: "https://picsum.photos/600/400?"
  },
  {
    td: "20/10/2023",
    img0: "https://picsum.photos/600/400?2",
    text: "Tiết sinh hoạt cuối tuần.",
    img1: "https://picsum.photos/600/400?",
    img2: "https://picsum.photos/600/400?",
    img3: "https://picsum.photos/600/400?",
    img4: "https://picsum.photos/600/400?",
    img5: "https://picsum.photos/600/400?",
    img6: "https://picsum.photos/600/400?",
    img7: "https://picsum.photos/600/400?",
  },
  {
    td: "20/11/2023",
    img0: "https://picsum.photos/600/400?3",
    text: "Chuyến đi tham quan.",
    img1: "https://picsum.photos/600/400?",
    img2: "https://picsum.photos/600/400?",
    img3: "https://picsum.photos/600/400?",
    img4: "https://picsum.photos/600/400?",
  }
];

let tranghientai = 0;

const bia = document.getElementById("bia");
const album = document.getElementById("album");
const text = document.getElementById("text");
const td = document.getElementById("td");
const anh0 = document.getElementById("anh0");
const anh1 = document.getElementById("anh1");
const anh2 = document.getElementById("anh2");
const anh3 = document.getElementById("anh3");
const anh4 = document.getElementById("anh4");
const anh5 = document.getElementById("anh5");
const anh6 = document.getElementById("anh6");
const anh7 = document.getElementById("anh7");
const anh8 = document.getElementById("anh8");
const anh9 = document.getElementById("anh9");
const anh10 = document.getElementById("anh10");
const anh11 = document.getElementById("anh11");
const anh12 = document.getElementById("anh12");

function moAlbum() {
  bia.style.display = "none";
  album.style.display = "grid";
  album.scrollIntoView({ behavior: "smooth" });
  hientrang();
}

function hientrang() {
  td.innerText = pages[tranghientai].td;
  text.innerText = pages[tranghientai].text;
  anh0.src = pages[tranghientai].img0;
  anh1.src = pages[tranghientai].img1;
  anh2.src = pages[tranghientai].img2;
  anh3.src = pages[tranghientai].img3;
  anh4.src = pages[tranghientai].img4;
  anh5.src = pages[tranghientai].img5;
  anh6.src = pages[tranghientai].img6;
  anh7.src = pages[tranghientai].img7;
  anh8.src = pages[tranghientai].img8;
  anh9.src = pages[tranghientai].img9;
  anh10.src = pages[tranghientai].img10;
  anh11.src = pages[tranghientai].img11;
  anh12.src = pages[tranghientai].img12;
}

function truoc() {
  tranghientai--;
  if (tranghientai < 0) {
    tranghientai = pages.length - 1;
  }
  hientrang();
}

function sau() {
  tranghientai++;
  if (tranghientai >= pages.length) {
    tranghientai = 0;
  }
  hientrang();
}

function moanh() {
  const div = document.createElement("div");
  div.id = "vungtoi";
  div.innerHTML = `<img src="${anh.src}">`;
  document.body.appendChild(div);

  div.onclick = function () {
    document.body.removeChild(div);
  };
}
