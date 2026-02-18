const pages = [
  {
    td: "05/09/2023",
    img: "https://picsum.photos/600/400?1",
    text: "Cả lớp chụp hình đầu năm.",
    img: "https://picsum.photos/600/400?",
    img: "https://picsum.photos/600/400?",
    img: "https://picsum.photos/600/400?",
    img: "https://picsum.photos/600/400?",
    img: "https://picsum.photos/600/400?",
    img: "https://picsum.photos/600/400?"
  },
  {
    td: "20/10/2023",
    img: "https://picsum.photos/600/400?2",
    text: "Tiết sinh hoạt cuối tuần."
  },
  {
    td: "20/11/2023",
    img: "https://picsum.photos/600/400?3",
    text: "Chuyến đi tham quan."
  }
];

let tranghientai = 0;

const bia = document.getElementById("bia");
const album = document.getElementById("album");
const text = document.getElementById("text");
const anh = document.getElementById("anh");
const td = document.getElementById("td");

function moAlbum() {
  bia.style.display = "none";
  album.style.display = "grid";
  album.scrollIntoView({ behavior: "smooth" });
  hientrang();
}

function hientrang() {
  td.innerText = pages[tranghientai].td;
  text.innerText = pages[tranghientai].text;
  anh.src = pages[tranghientai].img;
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
