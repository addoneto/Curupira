window.onload = (event) => {
    if(!document.querySelector('#tc')) return;
    document.querySelector('#tc').classList.add('tshow');
};

let currentTranslate = 0, maxTranslate = 25;
const handimg = document.querySelector('.b-image figure');
if(handimg){
    window.addEventListener("scroll", (event) => {
        currentTranslate =  window.scrollY / document.body.clientHeight * maxTranslate;
        document.querySelector('.b-image figure').style.transform = `translate(-${currentTranslate}%, 2%)`;
    });
}

let observedImages = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

observedImages.forEach((el) => observer.observe(el));