import './styles/flexboxgrid';
import './styles/dicty-footer';
import React from 'react';

export default class DictyFooter extends React.Component {
    displayName = 'A top level component for footer'

    static propTypes = {
        footerStyle: React.PropTypes.object
    }

    render() {
        return (
            <div className="footer" style={this.props.footerStyle}>
                <div className="container-fluid" >
                    <div className="row center-xs" >
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
