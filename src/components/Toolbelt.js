import React from 'react';

import Image from '../components/Image.js';

export default class ToolBelt extends React.Component {
	render() {
		return (
			<div
				style={{
					textAlign: 'center'
				}}
			>
				<Image
					source={'./assets/img/slack_logo.png'}
					height={100}
					maxHeight={70}
					padding={'10px 20px'}
					verticalAlign="middle"
				/>
				<Image source={'./assets/img/trello_logo.png'} height={100} maxHeight={70} padding={'10px 20px'} />
				<Image
					source={'./assets/img/git_logo.png'}
					height={100}
					maxHeight={70}
					padding={'10px 20px'}
					verticalAlign="middle"
				/>
				<Image
					source={'./assets/img/heroku_logo.png'}
					height={150}
					maxHeight={70}
					padding={'10px 20px'}
					verticalAlign="middle"
				/>

				<Image source={'./assets/img/studio3t_logo.png'} height={100} maxHeight={70} padding={'10px 20px'} />
				<Image source={'./assets/img/postman_logo.png'} height={100} maxHeight={70} padding={'10px 20px'} />
				<Image source={'./assets/img/vscode_logo.png'} height={100} maxHeight={70} padding={'10px 20px'} />
			</div>
		);
	}
}
