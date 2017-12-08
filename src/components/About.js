import React from 'react';
import { css } from 'glamor';
import Tools from './Tools';
let paragraphs = css({
	padding: '20px',
	fontWeight: 300,
	color: 'black',
	'@media(max-width: 698px)': {
		textAlign: 'justify'
	}
});

const tools = [
	{
		link: 'https://github.com/threepointone/glamor',
		name: 'Glamor',
		usage: 'pour écrire du styling en js à la CSS'
	},
	{
		link: 'https://github.com/tomchentw/react-google-maps',
		name: 'React Google Maps',
		usage: 'pour me situer sur une carte'
	},
	{
		link: 'https://github.com/captivationsoftware/react-sticky',
		name: 'React Sticky',
		usage: 'pour le Sticky Header'
	},
	{
		link: 'https://github.com/leandrowd/react-responsive-carousel',
		name: 'React Responsive Carousel',
		usage: 'pour les screens de Moveet'
	},
	{
		link: 'https://github.com/reactjs/react-tabs',
		name: 'React Tabs',
		usage: 'pour les rubiques de mon CV'
	},
	{
		link: 'https://github.com/recharts/recharts',
		name: 'React Recharts',
		usage: 'pour les graphiques de skills dans le CV'
	}
];

export default class About extends React.Component {
	renderTools() {
		const allTools = tools.map((tool, index) => {
			return <Tools key={index} link={tool.link} name={tool.name} usage={tool.usage} />;
		});
		return allTools;
	}

	render() {
		return (
			<div>
				<p {...paragraphs}>
					J'ai construit ce site en React, il y a quelques mois déjà afin de m'exercer à utiliser de nouveaux
					composants et packages. Le code n'est pas représentatif de mon niveau de compétences actuel mais il
					témoigne de ma volonté d'apprendre les Best Practices. Parmi les composants utilisés pour ce site on
					trouve:
				</p>
				<ul>{this.renderTools()}</ul>
				<div style={{ textAlign: 'center' }}>
					<p {...paragraphs}>
						J'ai essayé d'utiliser Bootstrap le moins possible donc vous ferez sûrement cette tête là:
					</p>

					<img
						src={`./assets/img/trump_giphy.gif`}
						alt={`orangoutang`}
						style={{ borderRadius: '20px', maxWidth: '80%' }}
					/>
					<p {...paragraphs}>
						Mais si je n'avais plus rien à apprendre, ça ne vaudrait pas le coup de m'avoir dans votre
						équipe. Pour les autres projets avec d'autres librairies (e.g. Redux, ReduxForm, GraphQL,
						Aphrodite...) promenez-vous sur mon <a href={`https://github.com/SimonGodefroid`}>GitHub</a>
					</p>
				</div>
			</div>
		);
	}
}
