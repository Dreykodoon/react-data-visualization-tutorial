import React from 'react';

import Map from './Map';
import JsonDisplay from './JsonDisplay';


class App extends React.Component {
    render() {
        return (
            <div>
                <Map />
                <JsonDisplay />
            </div>
        );
    }
}

export default App;