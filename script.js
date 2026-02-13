const pages = [
  {
    img:"https://picsum.photos/600/400?1",
    text:"Trang 1: Cả lớp chụp hình đầu năm."
  },
  {
    img:"https://picsum.photos/600/400?2",
    text:"Trang 2: Tiết sinh hoạt cuối tuần."
  },
  {
    img:"https://picsum.photos/600/400?3",
    text:"Trang 3: Chuyến đi tham quan."
  }
];

let tranghientai = 0;

const bia = document.getElementById("bia");
const album = document.getElementById("album");
const text = document.getElementById("text");
const anh = document.getElementById("anh");

function moAlbum(){
  bia.style.display = "none";
  album.style.display = "flex";
  hientrang();
}

function hientrang(){
  text.innerText = pages[tranghientai].text;
  anh.src = pages[tranghientai].img;
}

function truoc(){
  if(tranghientai > 0){
    tranghientai--;
    hientrang();
  }
}

function sau(){
  if(tranghientai < pages.length - 1){
    tranghientai++;
    hientrang();
  }
}

  function moanh() {
    const div = document.createElement("div")
    div.id = "vungtoi"
    div.innerHTML = "<img src='"+ anh.src +"'>"
    document.body.appendChild(div)
    div.onclick = function() {document.body.removeChild(div)}
  }
