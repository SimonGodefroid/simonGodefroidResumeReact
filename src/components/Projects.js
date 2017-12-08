import React from 'react';
import { css } from 'glamor';
import ResponsiveCarousel from './ResponsiveCarousel';

let projectTitle = css({
	margin: '20px 10px 10px 10px',
	fontWeight: 700
});

let paragraphs = css({
	padding: '20px',
	fontWeight: 300,
	color: 'black',
	'@media(max-width: 698px)': {
		textAlign: 'justify'
	}
});

let bold = css({
	fontWeight: 700
});

export default class Projects extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h3 {...projectTitle}>Moveet Web App 09/2017 - WIP</h3>
					<p {...paragraphs}>
						J'ai commencé la Web App pour Moveet qui est en work-in-progress pour l'instant. Riche de mon
						expérience de 4 mois chez Squirrel j'ai pu ré-écrire le code de l'API afin de le rendre plus
						robuste le code source est{' '}
						<a href="https://github.com/SimonGodefroid/moveet-api" target="blank">
							{' '}
							là
						</a>{' '}
						et commencer à intégrer les fonctionnalités afin de pouvoir offrir une version web à ce projet.
						Une version est disponible{' '}
						<a href="https://moveet.herokuapp.com/movies" target="blank">
							ici
						</a>{' '}
						(elle est hostée sur Heroku alors soyez patients vous venez sûrement de troubler le repos d'une
						instance en sommeil...). Si c'est le code source qui vous intéresse... c'est par
						<a href="https://github.com/SimonGodefroid/moveetReact" target="blank">
							ici
						</a>.
					</p>
					<h3 {...projectTitle}>Moveet 04/2017 - 05/2017</h3>
					<p {...paragraphs}>
						Moveet est une application sur laquelle j'ai travaillé seul et qui m'a pris 2 mois à développer.
						Il s'agit d'un MVP d'une application que j'ai toujours voulu avoir et qui n'existe pas sous
						cette forme. Moveet permet de se constituer un pipeline de films et de trouver des buddies pour
						aller voir des films et chatter avec eux. Moveet a pour vocation de permettre à tous de vivre
						pleinement leur cinéphilie plutôt que d'aller voir des films qu'ils n'ont pas envie de voir...
						pour suivre leurs potes. Pour le code c'est{' '}
						<a href="https://github.com/SimonGodefroid/moveetBack" target="blank">
							{' '}
							ici
						</a>{' '}
						pour le front et{' '}
						<a href="https://github.com/SimonGodefroid/moveetBack" target="blank">
							là
						</a>{' '}
						pour le back.
					</p>
					<div {...paragraphs}>
						<span {...bold}>FEATURES:</span>
						<ul>
							<li> # Films à l'affiche</li>
							<li> # Chat</li>
							<li> # Buddy Finder</li>
							<li> # Géolocalisation</li>
							<li> # Movies Swiper</li>
							<li> # Movies Matching</li>
						</ul>
					</div>
					<p {...paragraphs}>
						<span>NB:</span> les gifs sont sur le repo du front.
						<br />
						<span>NB2:</span> je lance l'application en BETA, contactez-moi si vous êtes intéressé !<br />
						<span>NB3:</span> j'ai fait une petite présentation Spectacle,
						<a href="http://fortunate-wish.surge.sh/" target="blank">
							ici
						</a>{' '}
						pour présenter l'application.
					</p>
					<div
						style={{
							margin: '0 30px'
						}}
					>
						<ResponsiveCarousel />
					</div>
				</div>
				<div>
					<div style={{ marginTop: '100px' }}>
						<h3 {...projectTitle}>Albert 03/2017</h3>
						<p {...paragraphs}>
							Albert est une application que nous avons créée à 4 lors de la formation du Reacteur. Albert
							est une application lifestyle qui permet aux utilisateurs de trouver des événements et des
							lieux en fonction de ses envies et autour de 8 univers. Ma part de réalisation dans ce
							projet a été 60% sur le back-end avec mongoDB, Express et 40% sur le front-end en React
							Native. Pour voir le code source c'est{' '}
							<a href="https://github.com/SimonGodefroid/albertFrontend" target="blank">
								ici
							</a>{' '}
							pour le front et{' '}
							<a href="https://github.com/SimonGodefroid/albertBackend" target="blank">
								ici
							</a>{' '}
							pour le back.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
