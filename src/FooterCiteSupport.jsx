import './styles/flexboxgrid'
import './styles/dicty-footer'
import React from 'react'
import Radium from 'radium'
import { FooterItem, Link } from './FooterItem'
import { Grid, Cell } from 'radium-grid'

@Radium
export default class FooterCiteSupport extends React.Component {
    displayName = 'Footer component to display sponsors and citation'

    static propTypes = {
        width: React.PropTypes.string,
        cellStyle: React.PropTypes.object,
        gridStyle: React.PropTypes.object
    }
    getStyles = () => {
        return {
            cell: {
                padding: '10px'
            }
        }
    }
    render() {
        const { width, cellStyle, cite, support } = this.props
        const defStyle = this.getStyles()
        return (
            <Cell width={ width } style={ [defStyle.cell, cellStyle && cellStyle] }>
                <Grid>
                    <FooterItem title="Please Cite" titleLink="#" width="1">
                        <Link name="contact" link="#" />
                        { cite.map((item, index) => {
                            return (
                                <Link key={ index } name={ cite.name } link={ cite.href }/>
                            )
                        }) }
                    </FooterItem>
                </Grid>
                <Grid>
                    <FooterItem title="Supported By" titleLink="#" width="1">
                        <Link name="contact" link="#" />
                        { support.map((item, index) => {
                            return (
                                <Link key={ index } name={ cite.name } link={ cite.href }/>
                            )
                        }) }
                    </FooterItem>
                </Grid>
            </Cell>
        )
    }
}
