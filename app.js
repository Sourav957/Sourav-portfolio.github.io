
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); 

function pageTransition(){
    //button clicks active class

    for(let i = 0;i < sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function (){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';

        })
    }

    // sections active
    // console.log(sectBtns);
    
    allSections.addEventListener('click',(e) => {
       const id = e.target.dataset.id;
       if(id){
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
        sections.forEach((section) => {
            section.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
       }
       
    })

    //toggle theme
    const themeBtn = document.querySelectorAll('.theme-btn');
    themeBtn[0].addEventListener('click',() => {
        console.log(themeBtn)
        const element = document.body;
        element.classList.toggle('light-mode');
    })
}


 
pageTransition();