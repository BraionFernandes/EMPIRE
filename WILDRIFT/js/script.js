const rotaAll=document.querySelector("#rotaAll");
const rotaTop=document.querySelector("#rotaTop");
const rotaJungle=document.querySelector("#rotaJungle");
const rotaMid=document.querySelector("#rotaMid");
const rotaDuo=document.querySelector("#rotaDuo");
const rotaSup=document.querySelector("#rotaSup");
const ALL=document.querySelectorAll(".conteudo-build-champ-item");
const TOP=document.querySelectorAll(".TOP");
const JUNGLE=document.querySelectorAll(".JUNGLE");
const MID=document.querySelectorAll(".MID");
const ADC=document.querySelectorAll(".ADC");
const SUP=document.querySelectorAll(".SUP");
const btnRotas=document.querySelectorAll(".conteudo-build-artigo-item");
const divChamp=document.querySelector(".conteudo-build-champ");
const btnMenu=document.querySelector(".cabecalho-menu-button");
const btnSearch=document.querySelector(".cabecalho-search-icon");

rotaAll.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaAll.classList.add("selecionado1")
    divChamp.innerHTML=""
    ALL.forEach(el=>{
        divChamp.appendChild(el)
    })
})

rotaTop.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaTop.classList.add("selecionado1")
    divChamp.innerHTML=""
    TOP.forEach(el=>{
        divChamp.appendChild(el)
    })
})

rotaJungle.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaJungle.classList.add("selecionado1")
    divChamp.innerHTML=""
    JUNGLE.forEach(el=>{
        divChamp.appendChild(el)
    })
})
rotaMid.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaMid.classList.add("selecionado1")
    divChamp.innerHTML=""
    MID.forEach(el=>{
        divChamp.appendChild(el)
    })
})
rotaDuo.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaDuo.classList.add("selecionado1")
    divChamp.innerHTML=""
    ADC.forEach(el=>{
        divChamp.appendChild(el)
    })
})
rotaSup.addEventListener("click",()=>{
    btnRotas.forEach(el=>{
        el.classList.remove("selecionado1")
    })
    rotaSup.classList.add("selecionado1")
    divChamp.innerHTML=""
    SUP.forEach(el=>{
        divChamp.appendChild(el)
    })
})
btnMenu.addEventListener("click",()=>{
    const menuDiv=document.querySelector(".mobile-menu-div");
    menuDiv.classList.toggle("ON")
})
btnSearch.addEventListener("click",()=>{
    const input=document.querySelector(".cabecalho-search");
    input.classList.toggle("ON")
})