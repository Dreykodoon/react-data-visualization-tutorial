import React from 'react';

import data from '../resources/data.json';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{data.name}</h1>
                <p>He is at least {data.age} years old.</p>
            </div>
        );
    }
}

export default App;