export function iconsactive() {
	const iconmenu = document.querySelector('.burger');
	if (iconmenu) {
		const menubody = document.querySelector('.menu');
		const headerContainer = document.querySelector('.header__container');
		// const linedecor = document.querySelector('.line-decore');
		iconmenu.addEventListener('click', function (e) {
			iconmenu.classList.toggle('burger_active');
			menubody.classList.toggle('menu_active');
			headerContainer.classList.toggle('header__container_active');
			// linedecor.classList.toggle('line-decore_active');
		});
	}
} 