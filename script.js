window.addEventListener("DOMContentLoaded", ()=>{
 const $section = document.querySelectorAll("section")
 
 const observesection = new IntersectionObserver((section)=>{
   section.forEach((itenshow)=>{
    if(itenshow.isIntersecting){
        itenshow.target.classList.add("show")

    }else{
        itenshow.target.classList.remove("show")
    }  
   })
 })

 $section.forEach((itens)=>{
   observesection.observe(itens)
 })

 const efectdelay = document.querySelectorAll(".efectdelay")
 
 const efectdelayobserve = new IntersectionObserver((itensshow)=>{
    itensshow.forEach((iten)=>{
        console.log(iten)
     if(iten.isIntersecting){
        iten.target.classList.add("efectdelayshow")
     }else{
        iten.target.classList.remove("efectdelayshow")
     }
    })
 })

 efectdelay.forEach((itens)=>{
    efectdelayobserve.observe(itens)
 })



})
