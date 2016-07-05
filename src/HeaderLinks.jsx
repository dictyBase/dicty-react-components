import React from 'react'
import Radium from 'radium'
import Row from './layout/row'
import Column from './layout/column'
import 'font-awesome/css/font-awesome.css'

@Radium
export default class HeaderLinks extends React.Component {
    displayName = 'A component to display a list of links in the header'

    static propTypes = {
        links: React.PropTypes.array,
        style: React.PropTypes.object
    }
    getStyles = () => {
        return {
            base: {
                listStyle: 'none',
                font: '12px helvetica,arial,sans-serif',
                '@media (max-width : 767px)': {
                    marginTop: '25px',
                    marginBottom: '20px'
                }
            },
            list: {
                display: 'inline'
            },
            link: {
                textDecoration: 'none',
                color: '#1F4484',
                padding: '8px',
                ':active': {
                    color: '#1F4484'
                },
                ':hover': {
                    color: '#3498db'
                }
            },
            row: {
                textAlign: 'center',
                '@media (min-width: 768px)': {
                    textAlign: 'end'
                }
            }
        }
    }
    render() {
        const {links, style} = this.props
        const defStyle = this.getStyles()
        return (
            <Row style={ defStyle.row }>
                <Column
                  xsSpan={ 12 }>
                    <ul style={ defStyle.base }>
                        { links.map((link, index) => {
                            return (
                                <li key={ index } style={ defStyle.list }>
                                    <a key={ index }
                                      href={ link.href }
                                      style={ [defStyle.link, style && style] }>
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
