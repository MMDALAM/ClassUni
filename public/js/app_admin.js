'use strict';



//varibles
const btnRegister = document.getElementById('btn_register');
const btnLesson = document.getElementById('btn_lesson');
const btnTime = document.getElementById('btn_time');
const btnField = document.getElementById('btn_field');
const btnTerm = document.getElementById('btn_term');



Event();










function Event() {
btnRegister.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('.main_form_register').style.display = 'block';
    document.querySelector('.main_form_lesson').style.display = 'none';
    document.querySelector('.main_form_time').style.display = 'none';
    document.querySelector('.main_form_field').style.display = 'none';
    document.querySelector('.main_form_term').style.display = 'none';
})
btnLesson.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('.main_form_register').style.display = 'none';
    document.querySelector('.main_form_lesson').style.display = 'block';
    document.querySelector('.main_form_time').style.display = 'none';
    document.querySelector('.main_form_field').style.display = 'none';
    document.querySelector('.main_form_term').style.display = 'none';
})
btnTime.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('.main_form_register').style.display = 'none';
    document.querySelector('.main_form_lesson').style.display = 'none';
    document.querySelector('.main_form_time').style.display = 'block';
    document.querySelector('.main_form_field').style.display = 'none';
    document.querySelector('.main_form_term').style.display = 'none';
})
btnField.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('.main_form_register').style.display = 'none';
    document.querySelector('.main_form_lesson').style.display = 'none';
    document.querySelector('.main_form_time').style.display = 'none';
    document.querySelector('.main_form_field').style.display = 'block';
    document.querySelector('.main_form_term').style.display = 'none';
})
btnTerm.addEventListener('click' , (e) =>{
    e.preventDefault();
    document.querySelector('.main_form_register').style.display = 'none';
    document.querySelector('.main_form_lesson').style.display = 'none';
    document.querySelector('.main_form_time').style.display = 'none';
    document.querySelector('.main_form_field').style.display = 'none';
    document.querySelector('.main_form_term').style.display = 'block';
})
}





