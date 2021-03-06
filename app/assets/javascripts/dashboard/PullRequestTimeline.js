import React from 'react';
import {Line} from 'react-chartjs';

export default class PullRequestTimeline extends React.Component{
	render() {
		var options = {
			multiTooltipTemplate: "<%= value %> <%= datasetLabel %>",
			datasetStrokeWidth : 2
		};
		var legendStyle = {
			display: 'inline-block',
			marginRight: 20
		};
		var legendContainerStyle = {
			textAlign: 'center',
			padding: 10,
			boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
			width: 940,
			backgroundColor: '#fffbe2'
		};
		var blockStyle = function(color) {
			return {
				backgroundColor: color,
				display: 'inline-block',
				width: '1em',
				height: '1em',
				marginRight: 2,
				verticalAlign: -3
			};
		};
		var legend = this.props.data.datasets.map((dataset, i) => {
			return (
				<span style={legendStyle} key={'legend-'+i}>
					<span style={blockStyle(dataset.fillColor)}></span>
					{dataset.label}
				</span>
			);
		});
		return (
			<div>
				<h2>Pull Requests vs Issues Found</h2>
				<Line ref="lineChart" data={this.props.data} options={options} width="940" height="240" />
				<div style={legendContainerStyle}>{legend}</div>
			</div>
		);
	}
}