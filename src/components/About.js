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
					J'ai construit ce site en React afin de m'exercer à utiliser de nouveaux composants et packages.
					Parmi ceux-ci:
				</p>
				<ul>{this.renderTools()}</ul>
			</div>
		);
	}
}
