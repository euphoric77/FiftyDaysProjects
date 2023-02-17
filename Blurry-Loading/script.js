const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let percent = 0;

let int = setInterval(blurring, 30);

function blurring(){
    percent++;

    if(percent>99){
        clearInterval(int);
    }

    loadText.innerText =`${percent}%`;
    loadText.style.opacity = scale(percent, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(percent, 0, 100, 7, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}