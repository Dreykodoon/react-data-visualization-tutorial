import React from 'react';
import axios from 'axios';
import Griddle from 'griddle-react';


class Map extends React.Component {
    state = {
        cities: []
    };

    clickHandler = (event) => {
        const img = event.target;

        const latSize = img.height / 180;
        const lonSize = img.width / 360;
        const point = {
            x: event.pageX - img.offsetLeft,
            y: event.pageY - img.offsetTop
        };

        const lat = (point.y - (img.height / 2)) / -latSize;
        const lon = (point.x - (img.width / 2)) / lonSize;

        const url = `http://api.geonames.org/citiesJSON?formatted=true
            &north=${lat + 1}&south=${lat - 1}&east=${lon + 1}&west=${lon - 1}
            &lang=en&username=dreykodoon&style=full`;

        axios.get(url).then((response) => {
            console.log(response.data.geonames);
            this.setState({cities: response.data.geonames});
        });
    };

    render() {
        return (
            <div>
                <img 
                    onClick={this.clickHandler}
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Earthmap1000x500compac.jpg" 
                />
                <Griddle data={this.state.cities} />
            </div>
            
        );
    }
}

export default Map;