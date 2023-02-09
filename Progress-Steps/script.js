const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive =1;

next.addEventListener('click', ()=>{
    circles.length > currentActive ? currentActive++ : '';
    update();

});

prev.addEventListener('click', () => {
    currentActive > 1 ? currentActive-- : '';
    update();
})

const update = () => {
    circles.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active');
    /*
        console.log(actives.length - 1, circles.length -1)
        console.log(((actives.length - 1)/(circles.length -1)) * 100);
    */
    progress.style.width = `${((actives.length - 1)/(circles.length -1)) * 100}%`

    if(currentActive === 1){
        prev.disabled = true;
        prev.style.cursor = 'not-allowed'
    } else if(currentActive === circles.length){
        next.disabled = true;
        next.style.cursor = 'not-allowed';
    } else{
        prev.disabled = false;
        next.disabled = false;
        prev.style.cursor = 'pointer';
        next.style.cursor = 'pointer';
    }
}