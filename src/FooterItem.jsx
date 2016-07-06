import React from 'react'
import Radium from 'radium'
import { Cell } from 'radium-grid'

@Radium
export class FooterItem extends React.Component {
    displayName = 'Footer component for displaying sitemap'

    static propTypes = {
        title: React.PropTypes.string,
        titleLink: React.PropTypes.string,
        headerStyle: React.PropTypes.object,
        titleStyle: React.PropTypes.object,
        listStyle: React.PropTypes.object
    }

    getStyles = () => {
        return {
            title: {
                color: '#ecf0f1',
                fontSize: '16px',
                textDecoration: 'none',

                ':hover': {
                    textDecoration: 'underline'
                }
            },
            header: {
                margin: '10px 0px'
            },
            list: {
                listStyle: 'none',
                marginTop: '0px',
                marginLeft: '0px',
                paddingLeft: '0px'
            },
            cell: {
                padding: '10px',
                background: '#ff4136'
            }
        }
    }

    render() {
        const {
            title, titleLink, headerStyle,
            titleStyle, listStyle, children,
            onClick, cellStyle
        } = this.props
        const defStyle = this.getStyles()
        return (
            <Cell style={ [defStyle.cell, cellStyle && cellStyle] }>
                <div style={ [defStyle.header, headerStyle && headerStyle] }>
                    <a href={ titleLink }
                      onClick={ onClick }
                      style={ [defStyle.title, titleStyle && titleStyle] }>
                        { title }
                    </a>
                </div>
                <ul style={ [defStyle.list, listStyle && listStyle] }>
                    { children }
                </ul>
            </Cell>
        )
    }
}

@Radium
export class Link extends React.Component {
    displayName = 'footer list item with a link'

    static propTypes = {
        name: React.PropTypes.string,
        link: React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                color: '#ecf0f1',
                fontSize: '12px',
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
                paddingBottom: '3px',
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
