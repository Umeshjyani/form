const loginform=document.getElementById('loginforme');
const signupform=document.getElementById('signupforme');
loginform.style.display='none';
const loginbtn=documen.getElementById('loginbtn');
const signupbtn=documen.getElementById('signupbtn');
loginbtn.addEventListener('click',function(){
    signupform.style.display='none';
    loginform.style.display='block';
});
loginbtn.addEventListener('click',function(){
    signupform.style.display='none';
    loginform.style.display='block';
});