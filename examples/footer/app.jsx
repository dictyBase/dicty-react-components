import React from 'react';
import FooterCiteSupport from '../../src/FooterCiteSupport';
import Footer from '../../src/Footer';
import FooterItem from '../../src/FooterItem';

class DictyFooter extends React.Component {
    displayName = 'dictyBase footer'
    render() {
        const cite = [
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23172289', name: 'dictyBase'},
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23494302', name: 'Stock Center'}
        ];

        const support = [
            {href: 'http://www.nih.gov/', name: 'NIH'},
            {href: 'http://gmod.org/wiki/Main_Page', name: 'GMOD'},
            {href: 'http://geneontology.org/', name: 'Gene Ontology'}
        ];

        const dropdownItems = [
            {href: '#', name: 'ES2015'},
            {href: '#', name: 'Gallery of Pictures/Videos'},
            {href: '#', name: 'Usage'},
            {href: '#', name: 'Advanced'},
            {href: '#', name: 'Dicty Annual Conferences'},
            {href: '#', name: 'FAQ'}
        ];
        return (
            <Footer>
                <FooterItem title="Genomes" titleLink="#" menuItems={dropdownItems}/>
                <FooterItem title="Tools" titleLink="#" menuItems={dropdownItems}/>
                <FooterItem title="Explore" titleLink="#" menuItems={dropdownItems}/>
                <FooterItem title="Research" titleLink="#" menuItems={dropdownItems}/>
                <FooterItem title="Community" titleLink="#" menuItems={dropdownItems}/>
                <FooterCiteSupport cite={cite} support={support}/>
            </Footer>
        );
    }
}
React.render(<DictyFooter />, document.getElementById('dicty-footer'));
