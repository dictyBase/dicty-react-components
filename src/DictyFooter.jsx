import React from 'react';

export default class DictyFooter extends React.Component {
    displayName = 'Footer component for dictybase'

    render() {
        return (
            <footer className="dicty-footer">
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </footer>
        );
    }
}
