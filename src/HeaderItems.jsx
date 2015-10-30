import './styles/flexboxgrid';
import React from 'react';

export default class HeaderItems extends React.Component {
    displayName = 'A top level componenet to contain header items'

    render() {
        return (
            <div className="col-md-8">
                {this.props.children}
            </div>
        );
    }
}
