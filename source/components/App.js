import React from 'react';

import Map from './Map';
import JsonDisplay from './JsonDisplay';
import CustomChart from './CustomChart';


const csvData = {
    type: 'bar',
    data: {
        labels: ['Ben', 'James', 'Marry', 'Sam', 'Gloria'],
        datasets: [
            {
                label: 'Fun',
                data: [80, 40, 21, 44, 94],
                backgroundColor: 'rgba(255,0,0,.2)',
                borderWidth: 1
            },
            {
                label: 'Smart',
                data: [90, 30, 90, 90, 100],
                backgroundColor: 'rgba(0,0,255,.2)',
                borderColor: 'rgba(0,0,255,.4)',
                borderWidth: 2
            }
        ]
    },
    options: {}
};

class App extends React.Component {
    render() {
        return (
            <div>
                <CustomChart data={csvData}/>
                <Map />
                <JsonDisplay />
            </div>
        );
    }
}

export default App;