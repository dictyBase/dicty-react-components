import './styles/flexboxgrid';
import React from 'react';

export default class Header extends React.Component {
    displayName = 'A top level component for header'

    render() {
        return (
            <div className="container-fluid">
                <div className="row start-md" >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
