import React from 'react'
import { render } from 'react-dom'
import Header from '../../src/Header'
import HeaderLogo from '../../src/HeaderLogo'
import HeaderLinks, { HeaderLink } from '../../src/HeaderLinks'
import SearchBox from '../../src/SearchBox'
import { StyleRoot } from 'radium'
import { Grid, Cell } from 'radium-grid'


class DictyHeader extends React.Component {
    displayName = 'dictyBase header'
    render() {
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
                                    <HeaderLinks>
                                        <HeaderLink
                                          to="/login"
                                          name="Login"
                                          iconClass="fa fa-sign-in"
                                        />
                                        <HeaderLink
                                          to="/about"
                                          name="About"
                                          iconClass="fa fa-info"
                                        />
                                    </HeaderLinks>
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
