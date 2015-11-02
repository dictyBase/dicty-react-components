import './styles/flexboxgrid';
import React from 'react';

export default class HeaderLogo extends React.Component {
    displayName = 'A componenet to display the company logo on header'

    static propTypes = {
        href: React.PropTypes.string,
        path: React.PropTypes.string,
        height: React.PropTypes.string,
        width: React.PropTypes.string
    }
    static defaultProps = {
        height: '78',
        width: '220'
    }

    render() {
        const {href, path, height, width} = this.props;
        return (
            <div className="col-md-4">
                <a href={href}>
                    <img src={path} alt="logo" height= {height} width={width} />
                </a>
            </div>
        );
    }
}
