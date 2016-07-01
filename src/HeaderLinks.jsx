import './styles/flexboxgrid'
import './styles/dicty-header'
import 'font-awesome/css/font-awesome.css'
import React from 'react'

export default class HeaderLinks extends React.Component {
    displayName = 'A component to display a list of links in the header'

    static propTypes = {
        links: React.PropTypes.array,
        style: React.PropTypes.object
    }

    render() {
        const {links, style} = this.props
        return (
            <div className="row center-xs end-sm">
                <div className="col-xs-12">
                    <ul className="header-links">
                        { links.map((link, index) => {
                            return (
                                <li key={ index }>
                                    <a href={ link.href } style={ style }>
                                        <span className={ link.iconClass }></span>
                                        { ' ' }{ link.name }
                                    </a>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}
