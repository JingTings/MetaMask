function loadCrytoLogo() {
	/* Blue Container */
	let cryto_logo_bg_outer = document.createElement('div');
	cryto_logo_bg_outer.setAttribute("class", "cryto-logo-bg-outer");
	document.getElementById('body').appendChild(cryto_logo_bg_outer); //Change body to parent element

	/* White Container */
	let cryto_logo_bg_inner = document.createElement('div');
	cryto_logo_bg_inner.setAttribute("class", "cryto-logo-bg-inner");
	document.getElementsByClassName("cryto-logo-bg-outer")[0].appendChild(cryto_logo_bg_inner);

	/* Gray Border Container - Prevent Clipping*/
	let cryto_logo_container = document.createElement('div');
	cryto_logo_container.setAttribute("class", "cryto-logo-container");
	document.getElementsByClassName("cryto-logo-bg-inner")[0].appendChild(cryto_logo_container);

	/* Logo */
	let cryto_logo = document.createElement('img');
	cryto_logo.src = './Harmony-logo-FC-mark.svg'; //Link to Image or API
	cryto_logo.setAttribute("class", "cryto-logo");
	document.getElementsByClassName("cryto-logo-container")[0].appendChild(cryto_logo);
}

loadCrytoLogo();
