import React from 'react';
import { render } from 'react-dom';
import Header from '../../src/Header';
import HeaderLogo from '../../src/HeaderLogo';
import HeaderItems from '../../src/HeaderItems';
import HeaderLinks from '../../src/HeaderLinks';
import SearchBox from '../../src/SearchBox';


class DictyHeader extends React.Component {
    displayName = 'dictyBase header'
    render() {
        const headerLinks = [
            {href: '#', name: 'Cite Us', iconClass: 'fa fa-book'},
            {href: '#', name: 'Downloads', iconClass: 'fa fa-download'},
            {href: '#', name: 'About Us', iconClass: 'fa fa-info-circle'}
        ];
        return (
            <Header>
                <HeaderLogo path= "../src/img/dicty-logo.png" href= "http://dictybase.org/"/>
                <HeaderItems>
                    <HeaderLinks links= {headerLinks} />
                    <SearchBox />
                </HeaderItems>
            </Header>
        );
    }
}

render(<DictyHeader/>, document.getElementById('dicty-header'));
