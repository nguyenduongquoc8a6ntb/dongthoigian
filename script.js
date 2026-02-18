const pages = [
  {
    td: "05/09/2023",
    text: "Cả lớp chụp hình đầu năm.",
    images: [
      "https://picsum.photos/600/400?1",
      "https://picsum.photos/600/400?2",
      "https://picsum.photos/600/400?3",
      "https://picsum.photos/600/400?4",
      "https://picsum.photos/600/400?5",
      "https://picsum.photos/600/400?6",
      "https://picsum.photos/600/400?7",
      "https://picsum.photos/600/400?8",
      "https://picsum.photos/600/400?9",
    ]
  },
  {
    td: "20/10/2023",
    text: "Tiết sinh hoạt cuối tuần.",
    images: [
      "https://picsum.photos/600/400?10",
      "https://picsum.photos/600/400?11",
      "https://picsum.photos/600/400?12",
      "https://picsum.photos/600/400?13",
      "https://picsum.photos/600/400?14",
      "https://picsum.photos/600/400?15",
      "https://picsum.photos/600/400?16",
      "https://picsum.photos/600/400?17",
      "https://picsum.photos/600/400?18",
      "https://picsum.photos/600/400?19",
      "https://picsum.photos/600/400?20",
    ]
  },
  {
    td: "20/11/2023",
    text: "Chuyến đi tham quan.",
    images: [
      "https://picsum.photos/600/400?21",
      "https://picsum.photos/600/400?22",
      "https://picsum.photos/600/400?23",
      "https://picsum.photos/600/400?24",
      "https://picsum.photos/600/400?25",
      "https://picsum.photos/600/400?26",
      "https://picsum.photos/600/400?27",
      "https://picsum.photos/600/400?28",
      "https://picsum.photos/600/400?29",
      "https://picsum.photos/600/400?30",
      "https://picsum.photos/600/400?31",
      "https://picsum.photos/600/400?32",
      "https://picsum.photos/600/400?33",
    ]
  }
];

let tranghientai = 0;

const bia = document.getElementById("bia");
const album = document.getElementById("album");
const text = document.getElementById("text");
const td = document.getElementById("td");
const khungAnh = document.getElementById("khungAnh");

function moAlbum() {
  bia.style.display = "none";
  album.style.display = "block";
  album.scrollIntoView({ behavior: "smooth" });
  hientrang();
}

function hientrang() {
  const page = pages[tranghientai];

  td.innerText = page.td;
  text.innerText = page.text;

  khungAnh.innerHTML = "";

  page.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.onclick = () => moanh(src);
    khungAnh.appendChild(img);
  });
}

function truoc() {
  tranghientai--;
  if (tranghientai < 0) tranghientai = pages.length - 1;
  hientrang();
}

function sau() {
  tranghientai++;
  if (tranghientai >= pages.length) tranghientai = 0;
  hientrang();
}

function moanh(src) {
  const div = document.createElement("div");
  div.id = "vungtoi";
  div.innerHTML = `<img src="${src}">`;
  document.body.appendChild(div);

  div.onclick = () => document.body.removeChild(div);
      }
    
