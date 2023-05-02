const name = document.querySelector('#name');
const mail = document.querySelector('#email');

const btn = document.querySelector('.btn');
btn.addEventListener('click',onsubmit)

function onsubmit(e){
    e.preventDefault();
    // document.querySelector('.container').style.background = 'red';
    // console.log(name.value);
    // console.log(mail.value);
    localStorage.setItem("username",name.value);
    localStorage.setItem("mail",mail.value)
    console.log(localStorage.getItem("username"))
}


// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('.container').style.background = 'red';
// });

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault();
//     document.querySelector('.container').style.background = 'red';
// });

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('.container').style.background = '#ccc';
// });
