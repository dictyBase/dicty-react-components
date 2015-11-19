import './styles/flexboxgrid';
import './styles/dicty-footer';
import React from 'react';

export class FooterItem extends React.Component {
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
            <div className="col-xs-12 col-sm-1">
                <div className="item-header">
                    <a href={titleLink} style={headerStyle}>{title}</a>
                </div>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <Link key={index} name={item.name} link={item.href} style={linkStyle} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export class Link extends React.Component {
    displayName = 'footer list item with a link'

    static propTypes = {
       name: React.PropTypes.string,
       link: React.PropTypes.string,
       style: React.PropTypes.object
    }

    render() {
        const {name, link, style} = this.props;
        return (
            <li>
                <a href={link} style={style}>{name}</a>
            </li>
        );
    }
}
