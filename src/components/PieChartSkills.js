import React from 'react';
import { PieChart, Pie, Tooltip, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

import { css } from 'glamor';
let chartsHide = css({
	'@media(max-width: 698px)': {
		display: 'none'
	}
});

// DATA FOR GE EXPERIENCE
const dataGE01 = [
	{ name: 'Finance', value: 60, fill: 'rgba(63,107,178,1)' },
	{ name: 'Information Systems', value: 40, fill: 'rgba(0,0,0,0.2)' }
];

const dataGE02 = [
	{ subject: 'Bus. Dev', A: 120, B: 110, fullMark: 150 },
	{ subject: 'Project Management', A: 98, B: 130, fullMark: 150 },
	{ subject: 'Information Systems', A: 86, B: 130, fullMark: 150 },
	{ subject: 'English', A: 150, B: 150, fullMark: 150 },
	{ subject: 'Mobile App Dev', A: 0, B: 0, fullMark: 150 },
	{ subject: 'Web App Dev', A: 0, B: 0, fullMark: 150 }
];
const dataGE03 = [
	{ name: 'Cinema', value: 50, fill: 'rgba(63,107,178,1)' },
	{ name: 'Running', value: 50, fill: 'rgba(0,0,0,0.2)' }
];

// DATA FOR ZALORA EXPERIENCE
const dataZA01 = [{ name: 'E-Commerce', value: 50, fill: 'rgba(255,0,22,1)' }, { name: 'Technology', value: 50 }];
const dataZA02 = [
	{ subject: 'Bus. Dev.', A: 120, B: 110, fullMark: 150 },
	{ subject: 'Project Management', A: 120, B: 130, fullMark: 150 },
	{ subject: 'Information Systems', A: 120, B: 130, fullMark: 150 },
	{ subject: 'English', A: 150, B: 150, fullMark: 150 },
	{ subject: 'Mobile App Dev', A: 0, B: 0, fullMark: 150 },
	{ subject: 'Web App Dev', A: 40, B: 40, fullMark: 150 }
];
const dataZA03 = [{ name: 'Work', value: 100, fill: 'rgba(255,0,22,1)' }];

// DATA FOR REACTEUR EXPERIENCE
const dataRE01 = [
	{ name: 'React-Native', value: 50, fill: 'rgba(86,89,201,1)' },
	{ name: 'React', value: 50, fill: 'rgba(154,154,220,1)' }
];
const dataRE02 = [
	{ subject: 'Bus. Dev.', A: 40, B: 40, fullMark: 150 },
	{ subject: 'Project Management', A: 100, B: 130, fullMark: 150 },
	{ subject: 'Information Systems', A: 86, B: 130, fullMark: 150 },
	{ subject: 'English', A: 120, B: 150, fullMark: 150 },
	{ subject: 'Mobile App Dev', A: 150, B: 150, fullMark: 150 },
	{ subject: 'Web App Dev', A: 130, B: 130, fullMark: 150 }
];
const dataRE03 = [
	{ name: 'Cinema', value: 33, fill: 'rgba(86,89,201,1)' },
	{ name: 'Running', value: 33, fill: 'rgba(154,154,220,1)' },
	{ name: 'Side-Projects', value: 33, fill: 'rgba(159,159,194,1)' }
];

export default class PieChartSkills extends React.Component {
	getDataSet1(dataSet) {
		let dataSource = '';
		switch (dataSet) {
			case 'ge':
				dataSource = dataGE01;
				break;
			case 'zalora':
				dataSource = dataZA01;
				break;
			case 'reacteur':
				dataSource = dataRE01;
				break;
			default:
				dataSource = '';
		}
		return dataSource;
	}
	getDataSet2(dataSet) {
		let dataSource = '';
		switch (dataSet) {
			case 'ge':
				dataSource = dataGE02;
				break;
			case 'zalora':
				dataSource = dataZA02;
				break;
			case 'reacteur':
				dataSource = dataRE02;
				break;
			default:
				dataSource = '';
		}
		return dataSource;
	}
	getDataSet3(dataSet) {
		let dataSource = '';
		switch (dataSet) {
			case 'ge':
				dataSource = dataGE03;
				break;
			case 'zalora':
				dataSource = dataZA03;
				break;
			case 'reacteur':
				dataSource = dataRE03;
				break;
			default:
				dataSource = '';
		}
		return dataSource;
	}

	render() {
		return (
			<div style={{ textAlign: 'center', margin: '80px 0 0 20px' }} {...chartsHide}>
				<div>
					<div style={{ float: 'left', marginLeft: '10px' }}>
						<PieChart width={window.innerWidth / 3 - 60} height={250}>
							<Pie
								data={this.getDataSet1(this.props.dataSource)}
								dataKey={'value'}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="rgba(0,0,0,0.8)"
								label={(name, value) => `${name.name}: ${name.value} %`}
								animationDuration={400}
							/>
							<Tooltip />
						</PieChart>
					</div>
					<div>
						<div style={{ float: 'left', marginLeft: '10px' }}>
							<RadarChart
								cx={'50%'}
								cy={'50%'}
								outerRadius={80}
								width={window.innerWidth / 3 - 60}
								height={250}
								data={this.getDataSet2(this.props.dataSource)}
								animationDuration={300}
							>
								<Radar
									dataKey="A"
									stroke={this.props.radarStroke}
									fill={this.props.radarFill}
									fillOpacity={this.props.radarFillOpacity}
								/>
								<PolarGrid />
								<PolarAngleAxis dataKey="subject" />
								<PolarRadiusAxis />
							</RadarChart>
						</div>
					</div>
					<div style={{ float: 'left', marginLeft: '10px' }}>
						<PieChart width={window.innerWidth / 3 - 60} height={250}>
							<Pie
								data={this.getDataSet3(this.props.dataSource)}
								keyName={'v'}
								dataKey={'value'}
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="black"
								label={(name, value) => `${name.name}: ${name.value}%`}
								animationDuration={400}
							/>
							<Tooltip />
						</PieChart>
					</div>
					<div style={{ clear: 'both' }} />
				</div>
			</div>
		);
	}
}
