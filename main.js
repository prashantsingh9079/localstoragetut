const name = document.querySelector('#name');
const mail = document.querySelector('#email');

const btn = document.querySelector('.btn');
btn.addEventListener('click',onsubmit)

function onsubmit(e){
    e.preventDefault();
    // document.querySelector('.container').style.background = 'red';
    // console.log(name.value);
    // console.log(mail.value);
    // localStorage.setItem("username",name.value);
    // localStorage.setItem("mail",mail.value)
    // console.log(localStorage.getItem("username"))

    let data_obj ={name_stored:name.value, email_stored:mail.value};
    let data_obj_sy = JSON.stringify(data_obj);
    localStorage.setItem("data",data_obj_sy); 
    let vpp = JSON.parse(data_obj_sy)
    console.log(vpp)
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
