'use strict'

const menuBtnOpen = document.querySelector('.mobile-munu__btn--open');
const menuBtnClose = document.querySelector('.mobile-munu__btn--close');
const menuList = document.querySelector('.mobile-munu__list');
const body = document.querySelector('body');

menuBtnOpen.addEventListener('click', () => {
	menuList.classList.add('active');
	menuBtnOpen.classList.add('active');
	menuBtnClose.classList.add('active');
	body.classList.add('lock')
})
menuBtnClose.addEventListener('click', () => {
	menuList.classList.remove('active');
	menuBtnClose.classList.remove('active');
	menuBtnOpen.classList.remove('active');
	body.classList.remove('lock')
})


