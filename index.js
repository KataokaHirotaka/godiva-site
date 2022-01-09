const panelImg_sp_1 = document.getElementById('panelImg_sp_1');
const panelImg_sp_2 = document.getElementById('panelImg_sp_2');
const panelImg_sp_3 = document.getElementById('panelImg_sp_3');
const panelImg_sp_4 = document.getElementById('panelImg_sp_4');

const PIC_ARRAY = [
  {
    sp_src: panelImg_sp_1,
    pc_src: ''
  },
  {
    sp_src: panelImg_sp_2,
    pc_src: ''
  },
  {
    sp_src: panelImg_sp_3,
    pc_src: ''
  },
  {
    sp_src: panelImg_sp_4,
    pc_src: ''
  }
]

let counter = 0;
const BREAK_POINT = 1024;

slideShow();

function changePicture() {
  const picArrayLnegth = PIC_ARRAY.length;
  const lastPanelIndex = picArrayLnegth - 1;
  const panelImg = document.querySelectorAll('.panel img');
  const windowWidth = window.innerWidth;
  if (counter < picArrayLnegth && windowWidth < BREAK_POINT) {
    PIC_ARRAY[counter].sp_src.style.transition = '4s';
    PIC_ARRAY[counter].sp_src.style.opacity = 0;
    if (counter == lastPanelIndex) {
      panelImg.forEach(function(elem){elem.style.opacity = 1;});
    }
    counter ++;
  } else if (counter < picArrayLnegth && windowWidth > BREAK_POINT) {
    PIC_ARRAY[counter].sp_src.setAttribute('src', PIC_ARRAY[counter].pc_src);
    counter ++;
  } else {
    counter = 0;
  }
}

function slideShow() {
  setInterval(changePicture, 8000);
}