import React, { Component } from 'react';
import { css } from 'glamor';

let date = css({
	fontWeight: 700,
	padding: '10px 0'
});

let roleTitle = css({
	fontStyle: 'italic'
});

let mission = css({
	padding: '10px'
});

class ExpItem extends Component {
	renderMissions(missions) {
		let missionsBuild = missions.map((mission, index) => {
			console.log('missions', missions[index]);
			return <li key={index}>{missions[index]}</li>;
		});
		return missionsBuild;
	}

	render() {
		return (
			<div>
				<li {...date}>{this.props.date}</li>
				<li {...roleTitle}>{this.props.title}</li>
				<div {...mission}>{this.renderMissions(this.props.missions)}</div>
			</div>
		);
	}
}

export default ExpItem;
