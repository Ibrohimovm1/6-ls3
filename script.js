const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')


setInterval(() =>{
    const Fulldate = new Date()

    
    hour.innerHTML = Fulldate.getHours()
    minute.innerHTML = Fulldate.getMinutes()
    second.innerHTML = Fulldate.getSeconds()
console.log(second);
},1000) 