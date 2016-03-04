import React from 'react';
import { render } from 'react-dom';
import InterProDomain from '../../src/InterProDomain';
import { data as protein } from '../../src/data/interpro';
class App extends React.Component {
    render() {
        return (
            <InterProDomain data={protein}/>
        )
    }
}
render(<App />, document.body);
