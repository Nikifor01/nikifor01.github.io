// Change photo

const changeImg = document.querySelector('.change-img');
const imgArr = ['assets/img/photography.png', 'assets/img/photography-2.png', 'assets/img/photography-3.png'];
const boxes = document.querySelectorAll('.boxw-content'); 

let curentIndex = 0;

function chengeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function slide(index) {
    changeImg.src = imgArr[index];

    for (let box of boxes) {
        box.classList.remove('active');
    }
    boxes[index].classList.add('active');
}

// Hover FB, Photographer

const mathew = document.querySelector('.mathew-pic');
const chris = document.querySelector('.chris-pic');
const mich = document.querySelector('.mich-pic');
const mathew_h = 'assets/img/mathew-h.png';
const chris_h = 'assets/img/chris-h.png';
const mich_h = 'assets/img/mich-h.png';
const fb = document.querySelectorAll('.fb');
const shareFeild = document.querySelector('.sharing');
const shareFeild_1 = document.querySelector('.sharing-1');
const shareFeild_2 = document.querySelector('.sharing-2');
const fbh = 'assets/img/fb-h.png';
const descript = document.querySelector('.descript');
const descript_1 = document.querySelector('.descript-1');
const descript_2 = document.querySelector('.descript-2');

let curInd = 0;

function facebookChange(ind) {
    curInd = ind;
    fb[ind].src = fbh;
}

function shareVisible() {
    mathew.src = mathew_h;
    mathew.style.boxShadow = '8px 8px 0px 0px rgba(149, 225, 211, 1)';
    shareFeild.style.display = "block";
    descript.style.margin = '-20px';
}

function shareVisible1() {
    chris.src = chris_h;
    chris.style.boxShadow = '8px 8px 0px 0px rgba(149, 225, 211, 1)';
    shareFeild_1.style.display = "block";
    descript_1.style.margin = '-20px';
}

function shareVisible2() {
    mich.src = mich_h;
    mich.style.boxShadow = '8px 8px 0px 0px rgba(149, 225, 211, 1)';
    shareFeild_2.style.display = "block";
    descript_2.style.margin = '-20px';
}

function baseConditionShare(ind) {
    fb[ind].src = 'assets/img/fb.png';
}

function baseConditionH() {
    mathew.src = 'assets/img/mathew.png';
    shareFeild.style.display = "none";
    descript.style.margin = '35px';
    mathew.style.boxShadow = 'none';
}

function baseConditionH1() {
    chris.src = 'assets/img/chris.png';
    shareFeild_1.style.display = "none";
    descript_1.style.margin = '35px';
    chris.style.boxShadow = 'none';
}

function baseConditionH2() {
    mich.src = 'assets/img/mich.png';
    shareFeild_2.style.display = "none";
    descript_2.style.margin = '35px';
    mich.style.boxShadow = 'none';
}


// Map modal

const mapBtn = document.getElementById('buttin');
const modal = document.querySelector('#modal1');
const closeBtn = document.querySelector('.modaly-close');

mapBtn.onclick = () => {
    modal.style.display = "block";

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', hideModal);

    function closeModal() {
        modal.style.display = "none";
        closeBtn.removeEventListener('click', closeModal);
        modal.removeEventListener('click', hideModal);
    }

    function hideModal() {
        if (event.target === modal) {
            closeModal();
        }
    }
}
