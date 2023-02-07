const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index)=> {
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}