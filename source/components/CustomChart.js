import React from 'react';
import ChartJS from 'chart.js';


const style = {
    width: 800,
    height: 400
};

class CustomChart extends React.Component {
    componentDidMount() {
        const ctx = this.refs['chart'].getContext('2d');

        this.chart = new ChartJS(ctx, this.props.data);
    }

    render() {
        return (
            <div style={style}>
                <canvas ref="chart"></canvas>
            </div>
            
        );
    }
}

export default CustomChart;