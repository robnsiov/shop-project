const _ = document,
header = _.querySelector('header'),
toggle = _.querySelector('.toggle'),
menu =_.querySelector('.menu'),
search = _.querySelector('.l-search'),
pU = _.querySelector('.p-u'),
times = _.querySelectorAll('.fa-times');
window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.screenY > 0)
})
toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('rotate')
    menu.classList.toggle('change')
})

function change(){
    for (let i of pU.childNodes.entries()){
        if (i[1].nodeType != 3){
            const cls = `s${i[0]}-active`
            i[1].classList.toggle(cls)
        }
    }
    pU.classList.toggle('p-u-active')
}

search.addEventListener('click', ()=>{
    change();
})

times.forEach((t)=>{
    t.addEventListener('click', ()=>{
        change();
    })
})

Array.from(header.children.item(2).children).forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        menu.classList.remove('change')
    })
})