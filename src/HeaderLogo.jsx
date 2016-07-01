import React from 'react'
import Column from './layout/column'

export default class HeaderLogo extends React.Component {
    displayName = 'A componenet to display the company logo on header'

    static propTypes = {
        href: React.PropTypes.string,
        path: React.PropTypes.string,
        height: React.PropTypes.string,
        width: React.PropTypes.string
    }
    static defaultProps = {
        height: '78',
        width: '220'
    }

    render() {
        const {href, path, height, width} = this.props
        const style = {
            textAlign: 'center',
            '@media (min-width: 768px)': {
                textAlign: 'start'
            }
        }
        return (
            <Column
              xsSpan={ 12 }
              smSpan={ 4 }
              style={ style }>
                <a href={ href }>
                    <img src={ path } alt="logo" height= { height } width={ width } />
                </a>
            </Column>
        )
    }
}
