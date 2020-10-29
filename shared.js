var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


console.dir(selectPlanButtons);

selectPlanButtons.forEach(element =>{

    element.addEventListener('click',(event)=>{
        /* backdrop.style.display ='block';
        modal.style.display = 'block'; */
        backdrop.classList.add('open');
        modal.classList.add('open');
    });

});


backdrop.addEventListener('click',()=>{
        /* mobileNav.style.display='none'; */
        mobileNav.classList.remove('open');
        closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener('click',closeModal);
}


function closeModal(){
    /* backdrop.style.display ='none';
    modal.style.display = 'none'; */
    backdrop.classList.remove('open');
    if(modal)
        modal.classList.remove('open');
}

toggleButton.addEventListener('click',()=>{
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
   /*  mobileNav.style.display='block';
    backdrop.style.display='block'; */
})
