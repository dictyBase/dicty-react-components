import React from 'react'
import Row from './layout/row'
import Column from './layout/column'
import './styles/dicty-header'
import 'font-awesome/css/font-awesome.css'

export default class HeaderLinks extends React.Component {
    displayName = 'A component to display a list of links in the header'

    static propTypes = {
        links: React.PropTypes.array,
        style: React.PropTypes.object
    }

    render() {
        const {links, style} = this.props
        const rowStyle = {
            textAlign: 'center',
            '@media (min-width: 768px)': {
                textAlign: 'end'
            }
        }
        return (
            <Row style={ rowStyle }>
                <Column
                  xsSpan={ 12 }>
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
                </Column>
            </Row>
        )
    }
}
