import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

// workaround for Radium styles to work with Link component
const RadiumLink = Radium(Link)

@Radium
export default class RouterNavItem extends React.Component {
    displayName = 'Navigation bar item that navigates using react-router'

    static propTypes = {
        path: React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object,
        itemStyle: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    float: 'left'
                }
            },
            link: {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '15px',
                paddingRight: '15px',
                lineHeight: '20px',
                position: 'relative',
                display: 'block',
                boxSizing: 'border-box',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#777',

                ':hover': {
                    color: '#333',
                    backgroundColor: 'transparent'
                },

                ':focus': {
                    color: '#333',
                    backgroundColor: 'transparent'
                },

                '@media (min-width: 768px)': {
                    paddingTop: '15px',
                    paddingBottom: '15px'
                }
            }
        }
    }

    render() {
        const defStyle = this.getStyles()
        const {style, path, title, itemStyle} = this.props
        return (
          <li ref="list" style={ [defStyle.base, style && style] }>
              <RadiumLink ref="link"
                to={ path }
                style={ [defStyle.link, itemStyle && itemStyle] }>
                { title }
              </RadiumLink>
          </li>
        )
    }
}
