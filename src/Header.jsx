import React from 'react'
import Radium from 'radium'

@Radium
export default class Header extends React.Component {
    displayName = 'A top level component for header'

    static propTypes = {
        style: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                fontFamily: 'helvetica,arial,sans-serif'
            }
        }
    }

    render() {
        const { style } = this.props
        const defStyle = this.getStyles()
        return (
            <div style={ [defStyle.base, style && style] } >
                { this.props.children }
            </div>
        )
    }
}
