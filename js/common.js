window.onload = function(){

	var burgerBtn = document.querySelector('.burgerMenu'),
	navigation = document.querySelector('.topNavigation'),
	hideMenu = document.querySelector('.hideMenu');

	burgerBtn.onclick = function(){
		
		navigation.style.left = "-95px";
	}
	hideMenu.onclick = function(){
		navigation.style.left = "-345px";

	}
}	