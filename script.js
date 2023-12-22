const containerBox = document.querySelector('#box_pops')
const boxImg = document.querySelector('#presentBox img');
const btnsPop = document.querySelectorAll('#btn-pop');
const popUps = document.querySelectorAll('#popUP');
const firstWrapperScrollbar = document.querySelector('#wrapper__scrollbar');
const firstSliderBtns = firstWrapperScrollbar.querySelectorAll('svg');
const firstScrollbar = document.querySelector('#first__scrollbar');
let lenghtScrolltrack = firstScrollbar.scrollWidth - firstScrollbar.clientWidth

function handleScrollBtns() {
	firstSliderBtns[0].style.display = firstScrollbar.scrollLeft <= 0 ? 'none' : 'block';
	firstSliderBtns[1].style.display = firstScrollbar.scrollLeft >= lenghtScrolltrack ? 'none' : 'block';
}
firstScrollbar.addEventListener('scroll', () => handleScrollBtns())

function rotateSlider(btn) {
	const direction = btn.id === 'right' ? 1 : -1;
	let scrollAmount = firstScrollbar.clientWidth * direction;
	firstScrollbar.scrollBy({left: scrollAmount, behavior: 'smooth'})
}
firstSliderBtns.forEach(btn => btn.addEventListener('click', () => rotateSlider(btn)));

function showPopUp(btn) {
	
	popUps.forEach((pop) => pop.style.display = 'none');
	popUps.forEach((pop) => {if (pop.dataset.id == btn.dataset.id) {pop.style.display = 'flex'}})
}

boxImg.addEventListener('mouseover', () => btnsPop.forEach((btn) => {btn.style.display = 'flex';}))
containerBox.addEventListener('mouseleave', () => btnsPop.forEach((btn) => {popUps.forEach((pop) => pop.style.display = 'none'); btn.style.display = 'none';}))

