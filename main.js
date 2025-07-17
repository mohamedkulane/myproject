const bar=document.querySelector("#bar")
const x=document.querySelector("#x")
const menu=document.querySelector("#menu")
bar.addEventListener("click",()=>{
    menu.style.display="block"
    bar.style.display="none"
    x.style.display="block"
})
x.addEventListener("click",()=>{
    menu.style.display="none"
    bar.style.display="block"
    x.style.display="none"
})
