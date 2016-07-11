import React from 'react'
import { render } from 'react-dom'
import Header from '../../src/Header'
import HeaderLogo from '../../src/HeaderLogo'
import HeaderLinks from '../../src/HeaderLinks'
import SearchBox from '../../src/SearchBox'
import { StyleRoot } from 'radium'
import { Grid, Cell } from 'radium-grid'


class DictyHeader extends React.Component {
    displayName = 'dictyBase header'
    render() {
        const headerLinks = [
            {href: '#', name: 'Cite Us', iconClass: 'fa fa-book'},
            {href: '#', name: 'Downloads', iconClass: 'fa fa-download'},
            {href: '#', name: 'About Us', iconClass: 'fa fa-info-circle'}
        ]
        return (
            <StyleRoot>
                <Header>
                    <Grid smallCellWidth="1" mediumCellWidth="1">
                        <Cell smallAlign="center" mediumAlign="center">
                            <HeaderLogo
                              path= "../src/img/dicty-logo.png"
                              href= "http://dictybase.org/"
                            />
                        </Cell>
                        <Cell>
                            <Grid cellWidth="1">
                                <Cell align="right" smallAlign="center" mediumAlign="center">
                                    <HeaderLinks links= { headerLinks } />
                                </Cell>
                                <Cell>
                                    <SearchBox />
                                </Cell>
                            </Grid>
                        </Cell>
                    </Grid>
                </Header>
            </StyleRoot>
        )
    }
}

render(<DictyHeader/>, document.getElementById('dicty-header'))
