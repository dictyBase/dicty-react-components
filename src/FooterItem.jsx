import React from 'react'
import Radium from 'radium'

@Radium
export class FooterItem extends React.Component {
    displayName = 'Footer component for displaying sitemap'

    static propTypes = {
        title: React.PropTypes.string,
        link: React.PropTypes.string,
        onClick: React.PropTypes.func,
        headerStyle: React.PropTypes.object,
        titleStyle: React.PropTypes.object,
        listStyle: React.PropTypes.object,
        style: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                padding: '10px'
            },
            title: {
                color: '#ccffcc',
                fontSize: '14px',
                textDecoration: 'none',
                paddingTop: '10px',
                paddingBottom: '6px',

                ':hover': {
                    textDecoration: 'underline'
                }
            },
            header: {
                '@media (max-width: 767px)': {
                    textAlign: 'center'
                }
            },
            list: {
                listStyle: 'none',
                marginTop: '0px',
                marginLeft: '0px',
                paddingLeft: '0px',
                '@media (max-width: 767px)': {
                    textAlign: 'center'
                }
            }
        }
    }

    render() {
        const { title, link, onClick, headerStyle,
            titleStyle, listStyle, style, children
        } = this.props
        const defStyle = this.getStyles()
        return (
            <div style={ [defStyle.base, style && style] }>
                <div style={ [defStyle.header, headerStyle && headerStyle] }>
                    <a href={ link }
                      onClick={ onClick }
                      style={ [defStyle.title, titleStyle && titleStyle] }>
                        { title }
                    </a>
                </div>
                <ul style={ [defStyle.list, listStyle && listStyle] }>
                    { children }
                </ul>
            </div>
        )
    }
}

@Radium
export class ListItem extends React.Component {
    displayName = 'footer list item'

    static propTypes = {
        name: React.PropTypes.string,
        link: React.PropTypes.string,
        style: React.PropTypes.object,
        listStyle: React.PropTypes.object,
        onClick: React.PropTypes.func
    }

    getStyles = () => {
        return {
            base: {
                color: '#d8d8d8',
                fontSize: '11px',
                textDecoration: 'none',

                ':hover': {
                    textDecoration: 'underline'
                }
            },
            list: {
                listStyle: 'none',
                marginTop: '0px',
                marginLeft: '0px',
                paddingLeft: '0px',
                paddingTop: '3px'
            }
        }
    }

    render() {
        const {name, link, style, listStyle, onClick} = this.props
        const defStyle = this.getStyles()
        return (
            <li style={ [defStyle.list, listStyle && listStyle] }>
                <a href={ link }
                  onClick={ onClick }
                  style={ [defStyle.base, style && style] }>
                    { name }
                </a>
            </li>
        )
    }
}
