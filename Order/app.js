const image=document.querySelectorAll('.product img')
const modal=document.querySelector('.modal-c')
const imgeChange=document.querySelector('.image1')
const title = document.querySelectorAll('.product-name1')
const entire = document.querySelectorAll('.product')
const iconClose=document.querySelector('.icon-close i')

function openModal(){
    modal.classList.toggle('hide')
}
// function replaceImg(){
//     doc
// }

for(var i = 0; i< entire.length ; i++){
    entire.item(i).addEventListener("click", (e)=>{
        modal.classList.toggle('hide')
        imgeChange.src = e.path[0].src
        title[0].textContent = e.path[1].querySelector('.product-name').textContent
        document.querySelector('.abc').textContent = e.path[1].querySelector('.product-price .price-safe').textContent
    })
}
iconClose.addEventListener('click',openModal);


