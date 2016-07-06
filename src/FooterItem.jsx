import './styles/flexboxgrid'
import './styles/dicty-footer'
import React from 'react'

export class FooterItem extends React.Component {
    displayName = 'Footer component for displaying sitemap'

    static propTypes = {
        title: React.PropTypes.string,
        titleLink: React.PropTypes.string,
        headerStyle: React.PropTypes.object
    }

    render() {
        const {title, headerStyle, titleLink, children} = this.props
        return (
            <div className="col-xs-12 col-sm">
                <div className="item-header">
                    <a href={ titleLink } style={ headerStyle }>{ title }</a>
                </div>
                { children }
            </div>
        )
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
        const {name, link, style} = this.props
        return (
            <li>
                <a href={ link } style={ style }>{ name }</a>
            </li>
        )
    }
}
