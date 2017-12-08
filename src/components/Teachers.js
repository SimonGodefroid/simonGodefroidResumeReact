import React from 'react';
import Image from './Image';
import { css } from 'glamor';

let imageHover = css({
	margin: '20px 20px ',
	transition: 'all .2s ease-in-out',
	':hover': {
		opacity: '0.6'
	}
});

let imageContainer = css({
	textAlign: 'center',
	margin: '40px 0 0 0',
	'@media(max-width: 698px)': {
		margin: '20px 0 0 0'
	}
});

export default class Teachers extends React.Component {
	render() {
		return (
			<div {...imageContainer}>
				<p style={{ margin: '20px 0', fontWeight: 700 }}>OFFICIAL SKILLS PROVIDERS</p>
				<a href="http://www.lereacteur.io/" target="blank" {...imageHover}>
					<Image
						source={'./assets/img/lereacteur_logo.png'}
						height={100}
						maxHeight={70}
						padding={'10px 20px'}
						verticalAlign="middle"
						alt={'Logo Le Reacteur'}
					/>
				</a>
				<a href="http://www.google.fr/" target="blank" {...imageHover}>
					<Image
						source={'./assets/img/google_logo.png'}
						height={100}
						maxHeight={60}
						padding={'10px 20px'}
						verticalAlign="middle"
						alt={'Logo Google'}
					/>
				</a>
				<a href="http://wwww.udemy.com/" target="blank" {...imageHover}>
					<Image
						source={'./assets/img/udemy_logo.png'}
						height={100}
						maxHeight={70}
						padding={'10px 20px'}
						verticalAlign="middle"
						alt={'Logo Udemy'}
					/>
				</a>
				<a href="http://wwww.stackoverflow.com/" target="blank" {...imageHover}>
					<Image
						source={'./assets/img/stackoverflow_logo.png'}
						height={100}
						maxHeight={70}
						padding={'10px 20px'}
						verticalAlign="middle"
						alt={'Logo Stack Overflow'}
					/>
				</a>
			</div>
		);
	}
}
