import React from 'react'
import Radium from 'radium'

@Radium
export default class Header extends React.Component {
    displayName = 'A top level component for header'

    static propTypes = {
        style: React.PropTypes.object,
        container: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                fontFamily: 'helvetica,arial,sans-serif'
            },
            container: {
                paddingRight: '15px',
                paddingLeft: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    width: '750px'
                },
                '@media (min-width: 992px)': {
                    width: '970px'
                },
                '@media (min-width: 1200px)': {
                    width: '1170px'
                }
            }
        }
    }

    render() {
        const { style, container } = this.props
        const defStyle = this.getStyles()
        return (
            <div style={ [defStyle.base, style && style] } >
                <div style={ [defStyle.container, container && container] } >
                    { this.props.children }
                </div>
            </div>
        )
    }
}
