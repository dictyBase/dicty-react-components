import React from 'react'
import Container from './layout/container'
// import Row from './layout/row'
import Radium from 'radium'
import { Grid } from 'radium-grid'

@Radium
export default class Footer extends React.Component {
    displayName = 'A top level component for footer'

    static propTypes = {
        style: React.PropTypes.object
    }

    getStyles = () => {
        return {
            base: {
                backgroundColor: '#1F4484',
                fontFamily: 'helvetica,arial,sans-serif'
            }
        }
    }

    render() {
        const { style } = this.props
        const defStyle = this.getStyles()
        return (
            <div style={ [defStyle.base, style && style] } >
                <Container fixed>
                <Grid>
                    { this.props.children }
                </Grid>
                </Container>
            </div>
        )
    }
}
