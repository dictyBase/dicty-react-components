import './styles/flexboxgrid';
import React from 'react';

export default class HeaderItems extends React.Component {
    displayName = 'A top level componenet to contain header items'

    render() {
        return (
            <div className="col-xs-12 col-sm-8 col-lg-7">
                {this.props.children}
            </div>
        );
    }
}
