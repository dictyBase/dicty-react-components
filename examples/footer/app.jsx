import React from 'react';
import FooterCiteSupport from '../../src/FooterCiteSupport';
import DictyFooter from '../../src/DictyFooter';
import FooterItems from '../../src/FooterItems';
import FootItem from '../../src/FootItem';

const dropdownItems = [
    {href: '#', name: 'ES2015'},
    {href: '#', name: 'Setup'},
    {href: '#', name: 'Usage'},
    {href: '#', name: 'Advanced'},
    {href: '#', name: 'Try it'},
    {href: '#', name: 'FAQ'}
];

const footer = (
    <DictyFooter>
        <FooterItems>
            <FootItem title="Home" menuItems={dropdownItems}/>
            <FootItem title="About" menuItems={dropdownItems}/>
            <FootItem title="Contact" menuItems={dropdownItems}/>
            <FootItem title="Dicty" menuItems={dropdownItems}/>
            <FootItem title="Map" menuItems={dropdownItems}/>
            <FootItem title="Usage" menuItems={dropdownItems}/>
        </FooterItems>
          <FooterCiteSupport />
    </DictyFooter>
);

React.render(footer, document.getElementById('dicty-footer'));
