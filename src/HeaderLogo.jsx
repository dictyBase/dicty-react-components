import React from 'react'

export default class HeaderLogo extends React.Component {
    displayName = 'header logo image'

    static propTypes = {
        href: React.PropTypes.string,
        path: React.PropTypes.string,
        height: React.PropTypes.string,
        width: React.PropTypes.string,
        onClick: React.PropTypes.func
    }
    static defaultProps = {
        height: '78',
        width: '220'
    }

    render() {
        const {href, path, onClick, height, width} = this.props
        return (
            <a href={ href } onClick={ onClick }>
                <img src={ path } alt="logo" height= { height } width={ width } />
            </a>
        )
    }
}
