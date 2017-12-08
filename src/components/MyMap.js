import React from 'react';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

let markers = [
	{
		position: {
			lat: 48.822703,
			lng: 2.34704
		}
	}
];

// Preloader
const GMap = withGoogleMap(props => (
	<GoogleMap defaultZoom={17} defaultCenter={{ lat: 48.822703, lng: 2.34704 }}>
		{markers.map((marker, index) => {
			return <Marker key={index} {...marker} />;
		})}
	</GoogleMap>
));

export default class Map extends React.Component {
	render() {
		return (
			<div
				style={{
					marginBottom: '50px',
					pointerEvents: this.props.pointer === false ? 'none' : ''
				}}
			>
				<GMap
					containerElement={
						<div
							style={{
								height: '400px',
								width: '100%',
								// border: '2px solid black',
								marginBottom: '50px'
							}}
						/>
					}
					mapElement={
						<div
							style={{
								height: '400px',
								width: '100%',
								// borderRadius: "20%",
								marginBottom: '50px'
							}}
						/>
					}
					center={markers[0]}
					markers={markers}
				/>
			</div>
		);
	}
}
