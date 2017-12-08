import React from 'react';
import { css } from 'glamor';
let link = css({
	fontWeight: 900,
	color: 'black'
});
let linkHover = css({
	transition: 'all .2s ease-in-out',
	':hover': {
		color: 'navy',
		textDecoration: 'none'
	}
});
export default class Tools extends React.Component {
	render() {
		return (
			<li>
				<a href={this.props.link} target="blank" {...linkHover} {...link}>
					{this.props.name}
				</a>{' '}
				- {this.props.usage}
			</li>
		);
	}
}
