import '../../src/styles/flexboxgrid';
import React from 'react';


class HeaderLayout extends React.Component {
    displayName = 'Layout for dicty-header'
    render() {
        // border to display the layout of columns and rows
        const style = {
          border: '1px solid'
        };

        return (
            <div className="container-fluid" style={style}>
                <div className="row center-xs start-sm" >
                    <div className="col-xs-12 col-sm-4 col-lg-3 col-lg-offset-1" style={style}>
                      dictyBase Logo
                    </div>
                    <div className="col-xs-12 col-sm-8 col-lg-7" style={style}>
                        <div className="row center-xs end-sm" style={style}>
                            <a href="#">Cite Us</a>
                            <a href="#">Downloads</a>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Login</a>
                        </div>
                        <div className="row center-xs end-sm" style={style}>
                            <div className="col-xs-12">Search Bar</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

React.render(<HeaderLayout/>, document.getElementById('dicty-header'));
