const screenSize = {
	// media queries in px
	smartphone: '@media only screen and (max-width: 479px)',
	smartphoneLandscape: '@media only screen and (min-width: 480px) and (max-width:767px)',
	tablet: '@media only screen and (min-width: 768px) and (max-width:991px)',
	desktop: '@media only screen and (min-width: 992px)',
	// media queries in em base 16px
	smartphoneEm: '@media only screen and (max-width: 29.9375em)',
	smartphoneLandscapeEm: '@media only screen and (min-width: 30em) and (max-width:47.9375em)',
	tabletEm: '@media only screen and (min-width: 48em) and (max-width:61.9375em)',
	desktopEm: '@media only screen and (min-width: 62em)'
};

export default {
	screenSize
};
