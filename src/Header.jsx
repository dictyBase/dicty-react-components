import React from 'react'
import Container from './layout/container'
import Row from './layout/row'

export default class Header extends React.Component {
    displayName = 'A top level component for header'

    render() {
        return (
            <Container fixed>
                <Row justify={ ['center-xs', 'start-sm'] }>
                    { this.props.children }
                </Row>
            </Container>
        )
    }
}
