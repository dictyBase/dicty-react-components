import './styles/flexboxgrid';
import React from 'react';

export default class HeaderLinks extends React.Component {
    displayName = 'A component to display a list of links in the header'

    static propTypes = {
        links: React.PropTypes.array
    }

    render() {
        return (
            <div className="row end-md">
                <div className="col-md-12">
                    <ul>
                        {this.props.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <a href={link.href}>
                                        <span className={link.iconClass}></span>
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
