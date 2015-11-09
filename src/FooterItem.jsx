import './styles/flexboxgrid';
import './styles/dicty-footer';
import React from 'react';

export default class FootItem extends React.Component {
    displayName = 'Footer component for displaying sitemap'

    static propTypes = {
       title: React.PropTypes.string,
       titleLink: React.PropTypes.string,
       menuItems: React.PropTypes.array,
       headerStyle: React.PropTypes.object,
       linkStyle: React.PropTypes.object
    }

    render() {
        const {title, menuItems, headerStyle, linkStyle, titleLink} = this.props;
        return (
            <div className="col-xs-12 col-sm-2 center-xs start-sm">
                <div className="item-header">
                    <a href={titleLink} style={headerStyle}>{title}</a>
                </div>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href} style={linkStyle}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
