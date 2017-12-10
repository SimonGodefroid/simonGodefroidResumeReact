import React from 'react';
import FaDownload from 'react-icons/lib/fa/download';

import { css } from 'glamor';

let icons = css({
	padding: 10,
	display: 'inline-block',
	borderRadius: 25,
	color: 'white',
	'@media(max-width: 698px)': {
		margin: '0 5px'
	}
});

let zoom = css({
	transition: 'all .2s ease-in-out',
	':hover': { transform: 'scale(1.1) ' }
});

export default class DownloadResume extends React.Component {
	render() {
		return (
			<div {...zoom}>
				<p style={{ border: 'solid 2px white', borderRadius: 25 }}>
					<a
						href={'files/20171210-CV_Simon_GODEFROID_DEV.pdf'}
						download="20171210-CV_Simon_GODEFROID_DEV"
						style={{
							textDecoration: 'none',
							color: 'white',
							padding: '20px 20px 20px 0'
						}}
					>
						{' '}
						<FaDownload size={this.props.size} style={{ color: 'white' }} {...icons} />
						TÉLÉCHARGEZ MON CV
					</a>
				</p>
			</div>
		);
	}
}
