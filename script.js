const buttonCart$=document.getElementById('buttoncart')
const contanimate$= document.getElementById('contanimate')
const cartHeaderCont$=document.getElementById('cartHeaderCont')
const allLinks$ =document.querySelectorAll('.link-page1')
const firstSection$=document.getElementById('first-section')
const secondSection$=document.getElementById('second-section')
const buttonBackSecondPage$=document.getElementById('buttonback-page2')





/** funciones para llamar al carrito desde diferentes botones */
buttonCart$.addEventListener('click',()=>{
    contanimate$.classList.toggle('show')
})
contanimate$.addEventListener('click',(e)=>{
    e.stopPropagation();
    contanimate$.classList.toggle('show')
})
cartHeaderCont$.addEventListener('click',(e)=>{
    contanimate$.classList.toggle('show')
})

//esta función establece la animación que  simula una SPA 
//opculta una sección y muestra otra sin cambiar de página 
function setAnimate(){
    firstSection$.classList.toggle('animate')
    secondSection$.classList.toggle('animate')
}


//como es un array de nodos entonces para que cadea uno escuche el evento click tenemos que recorrerlos y poner el evento por cada uno
//esta sección hace referencia a la page 1 los cards de comidas 

allLinks$.forEach(element=>{
    element.addEventListener('click',(e)=>{
        setAnimate()
    })
})

buttonBackSecondPage$.addEventListener('click',(e)=>{
    setAnimate()
})
