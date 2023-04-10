const arrow = document.querySelector(".showCard__img");
const showContacts = document.querySelector(".showContact__text");
const showCard = document.querySelector(".showCard__text");
const card = document.querySelector(".contacts__card");

export function contactsSwitch() {
	arrow.addEventListener('click', function () {
		arrow.classList.toggle('up');
		card.classList.toggle('disable');
		showContacts.classList.toggle('active');
		showCard.classList.toggle('disable');
	})
}