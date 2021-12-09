//  new RegExp('pattern', 'flag')
//  /pattern/flag

const password = '@Q&^%#@!'
const regExp = /\d/ig

//\d \w \s
//i g m

console.log(password.replace(regExp, '*'))
console.log(regExp.test(password))

//+996 xxx xx-xx-xx

const phoneInput = document.querySelector('#phoneInput'),
	phoneBtn = document.querySelector('#phoneBtn'),
	phoneResult = document.querySelector('#phoneResult')

const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneBtn.addEventListener('click', () => {
	if(phoneRegExp.test(phoneInput.value)){
		phoneResult.innerText = 'Success';
		phoneResult.style.color = 'green'
	} else {
		phoneResult.innerText = 'Failed';
		phoneResult.style.color = 'red'
	}
})
// xxxxxxxxxxxxxx 14 numbers

const innInput = document.querySelector('#phoneInput'),
	innBtn = document.querySelector('#innBtn'),
	innResult = document.querySelector('#innResult')

const innRegExp = /^(0|1|2|3)\d{13}$/

innBtn.addEventListener('click', () => {
	if(innRegExp.test(innInput.value)){
		innResult.innerText = 'Success';
		innResult.style.color = 'green'
	} else {
		innResult.innerText = 'Failed';
		innResult.style.color = 'red'
	}
})