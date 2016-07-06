import './styles/flexboxgrid'
import './styles/dicty-footer'
import React from 'react'

export default class Footer extends React.Component {
    displayName = 'A top level component for footer'

    static propTypes = {
        footerStyle: React.PropTypes.object,
        containerFluid: React.PropTypes.bool
    }
    static defaultProps = {
        containerFluid: true
    }

    render() {
        const {footerStyle, containerFluid} = this.props
        return (
            <div className="footer" style={ footerStyle } >
                <div className={ containerFluid ? 'container-fluid' : 'container' } >
                    <div className="row center-xs" >
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}
