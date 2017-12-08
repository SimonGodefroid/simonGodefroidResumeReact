import React, { Component } from 'react';
import { css } from 'glamor';
let paragraphs = css({
	padding: '20px',
	fontWeight: 300,
	color: 'black',
	'@media(max-width: 698px)': {
		textAlign: 'justify'
	}
});
class Bio extends Component {
	render() {
		return (
			<p {...paragraphs}>
				Après une carrière de 4 ans dans le business, deux ans en analyste financier chez General Electric
				Capital et deux années en Project Manager et Business Development Manager chez Rocket Internet, qui m
				'ont vu travailler dans 7 pays d' Asie du Sud - Est et vivre à Singapour, j 'ai décidé d' apprendre à
				coder afin de redonner un élan à ma carrière, pouvoir coder mes propres MVP et aussi pouvoir élargir mes
				horizons. J'ai donc suivi 3 mois de formation intensive au Reacteur puis ai développé mon propre MVP sur
				une application de dating/buddying en rapport au cinéma.
			</p>
		);
	}
}

export default Bio;
