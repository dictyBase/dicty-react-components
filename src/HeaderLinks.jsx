import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'
import 'font-awesome/css/font-awesome.css'

// workaround to apply styles to Link components
const RadiumLink = Radium(Link)

@Radium
export default class HeaderLinks extends React.Component {
    displayName = 'header links unordered list'

    static propTypes = {
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
            }
        }
    }
    render() {
        const { style } = this.props
        const defStyle = this.getStyles()
        return (
            <ul style={ [defStyle.base, style && style] }>
                { this.props.children }
            </ul>
        )
    }
}

@Radium
export class HeaderLink extends React.Component {
    displayName = 'header link'

    static propTypes = {
        style: React.PropTypes.object,
        to: React.PropTypes.string,
        name: React.PropTypes.string,
        onClick: React.PropTypes.func,
        iconClass: React.PropTypes.string,
        router: React.PropTypes.bool,
        listStyle: React.PropTypes.object
    }
    getStyles = () => {
        return {
            base: {
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
            list: {
                display: 'inline'
            }
        }
    }
    render() {
        const {to, name, onClick, style, iconClass, router, listStyle} = this.props
        const defStyle = this.getStyles()
        if (router) {
            return (
                <li style={ [defStyle.list, listStyle && listStyle] } >
                    <RadiumLink to={ to }
                      style={ [defStyle.base, style && style] }
                      onClick={ onClick }>
                        <span className={ iconClass }></span>
                        &nbsp;{ name }
                    </RadiumLink>
                </li>
            )
        }
        return (
            <li style={ [defStyle.list, listStyle && listStyle] }>
                <a href={ to }
                  style={ [defStyle.base, style && style] }
                  onClick={ onClick }>
                    <span className={ iconClass }></span>
                    &nbsp;{ name }
                </a>
            </li>
        )
    }
}
