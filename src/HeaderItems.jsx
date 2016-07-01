import React from 'react'
import Column from './layout/column'

export default class HeaderItems extends React.Component {
    displayName = 'A top level componenet to contain header items'

    render() {
        return (
            <Column
              xsSpan={ 12 }
              smSpan={ 8 }>
                { this.props.children }
            </Column>
        )
    }
}
