import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import ScrollableAnchor from 'react-scrollable-anchor';
import Header from '../components/Header.js';
import ToolBelt from '../components/Toolbelt.js';
// import BackToTop from '../components/BackToTop.js';
import { css } from 'glamor';
import MyMap from '../components/MyMap';
import Bio from '../components/Bio';
import Resume from '../components/Resume';
import Stack from '../components/Stack';
import Anchor from '../components/Anchor';
import Footer from '../components/Footer';
import Teachers from '../components/Teachers';
// import MapButton from '../components/MapButton';
import Projects from '../components/Projects';
import About from '../components/About';
import ScrollTop from '../components/ScrollTop';
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms

let containerJs = css({
	paddingTop: 60,
	color: 'black',
	'@media(max-width: 698px)': {
		paddingTop: 30
	}
});

let paragraphs = css({
	padding: '20px',
	fontWeight: 300,
	color: 'black',
	'@media(max-width: 698px)': {
		textAlign: 'justify'
	}
});

let card = css({
	padding: '20px',
	border: '0.5px black solid',
	borderRadius: '3px',
	backgroundColor: 'white',
	background: 'rgba(255,241,216,0.2)',
	marginBottom: '20px',
	'@media(max-width: 698px)': {
		textAlign: 'center',
		padding: '20px 0 0 0 ',
		marginBottom: '0px'
	}
});

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mapControlActive: true
		};

		this.toggleMap = this.toggleMap.bind(this);
	}

	toggleMap() {
		this.setState({ mapControlActive: !this.state.mapControlActive });
	}

	render() {
		return (
			<div>
				<div
					style={{
						fontFamily: 'Barlow, Circular,Sans-serif'
					}}
				>
					<ScrollableAnchor id={'whoiam'}>
						<div />
					</ScrollableAnchor>
					<div className={'row'} style={{ margin: 0 }}>
						<div className={'col-lg-12 col-md-12 col-xs-12'} {...containerJs}>
							<div>
								<StickyContainer
									style={{
										margin: '30px 0 40px 0',
										width: '100%'
									}}
								>
									<Sticky>
										{({
											isSticky,
											wasSticky,
											style,
											distanceFromTop,
											distanceFromBottom,
											calculatedHeight
										}) => {
											console.log({
												distanceFromTop
											});
											return <Header style={style} />;
										}}
									</Sticky>
									<Anchor path={'whoiam'} title={'QUI SUIS-JE?'} />
									<div {...card}>
										<Bio />
									</div>
									<Anchor path={'mystack'} title={'MON STACK'} />
									<div {...card}>
										<Stack />
									</div>
									<Anchor path={'about'} title={'À PROPOS DU SITE'} />
									<div {...card}>
										<About />
									</div>
									<Anchor path={'mytoolbelt'} title={'MA TOOLBELT'} />
									<div {...card}>
										<ToolBelt />
									</div>
									<Anchor path={'myprojects'} title={'MES PROJETS'} />
									<div {...card}>
										<Projects />
									</div>
									<Anchor path={'resume'} title={'MON CV'} />
									<div {...card}>
										<Resume />
									</div>
									<Anchor path={'map'} title={'OÙ ME TROUVER ?'} />
									<div {...card} style={{ position: 'relative' }}>
										<MyMap pointer={this.state.mapControlActive} />
										{/*<MapButton
											onClickFn={this.toggleMap}
											mapControlActive={this.state.mapControlActive}
										/>*/}
									</div>
									<Teachers {...paragraphs} />
									<ScrollTop />
								</StickyContainer>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
