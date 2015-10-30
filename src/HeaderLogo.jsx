import './styles/flexboxgrid';
import React from 'react';

export default class HeaderLogo extends React.Component {
    displayName = 'A componenet to display the company logo on header'

    static propTypes = {
        href: React.PropTypes.string,
        path: React.PropTypes.string
    }

    render() {
        const {href, path} = this.props;
        return (
            <div className="col-md-4">
                <a href={href}>
                    <img src={path} alt="logo" width="220" />
                </a>
            </div>
        );
    }
}
