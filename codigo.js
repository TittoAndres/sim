const BtnSi = document.querySelector('#BtnSi');

BtnSi.addEventListener('click',function () {
	alert('era obvio que ibas a decir que si, no te resistirxd. tu me gustas mucho, la verdad no se ni cuando pasó, pero fue de lo mejor que pudo haber ocurrido. puede que sea poco tiempo y eso, pero no se, yo quiero intentarlo contigo :) .')
});

const BtnNo = document.querySelector('#BtnNo');

BtnNo.addEventListener('mouseover', function () {
	const randomX = parseInt(Math.random()*100);
	const randomY = parseInt(Math.random()*100);
	BtnNo.style.setProperty('top',randomY+'%');
	BtnNo.style.setProperty('left',randomX+'%');
	BtnNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})