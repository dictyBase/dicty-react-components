import React from 'react'
import { render } from 'react-dom'
import FooterCiteSupport from '../../src/FooterCiteSupport'
import Footer from '../../src/Footer'
import {FooterItem, Link} from '../../src/FooterItem'

class DictyFooter extends React.Component {
    displayName = 'dictyBase footer'
    render() {
        const cite = [
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23172289', name: 'dictyBase'},
            {href: 'http://www.ncbi.nlm.nih.gov/pubmed/23494302', name: 'Stock Center'}
        ]

        const support = [
            {href: 'http://www.nih.gov/', name: 'NIH'},
            {href: 'http://gmod.org/wiki/Main_Page', name: 'GMOD'},
            {href: 'http://geneontology.org/', name: 'Gene Ontology'}
        ]

        const dropdownItems = [
            {href: '#', name: 'ES2015'},
            {href: '#', name: 'Gallery of Pictures/Videos'},
            {href: '#', name: 'Usage'},
            {href: '#', name: 'Advanced'},
            {href: '#', name: 'Dicty Annual Conferences'},
            {href: '#', name: 'FAQ'}
        ]
        return (
            <Footer>
                <FooterItem title="Genomes" titleLink="#">
                  <ul>
                      { dropdownItems.map((item, index) => {
                          return (
                              <Link key={ index } name={ item.name } link={ item.href }/>
                          )
                      }) }
                  </ul>
                  </FooterItem>
                <FooterItem title="Tools" titleLink="#">
                  <ul>
                      { dropdownItems.map((item, index) => {
                          return (
                              <Link key={ index } name={ item.name } link={ item.href }/>
                          )
                      }) }
                  </ul>
                </FooterItem>
                <FooterItem title="Explore" titleLink="#">
                  <ul>
                      { dropdownItems.map((item, index) => {
                          return (
                              <Link key={ index } name={ item.name } link={ item.href }/>
                          )
                      }) }
                  </ul>
                </FooterItem>
                <FooterItem title="Research" titleLink="#">
                  <ul>
                      { dropdownItems.map((item, index) => {
                          return (
                              <Link key={ index } name={ item.name } link={ item.href }/>
                          )
                      }) }
                  </ul>
                </FooterItem>
                <FooterItem title="Community" titleLink="#">
                  <ul>
                      { dropdownItems.map((item, index) => {
                          return (
                              <Link key={ index } name={ item.name } link={ item.href }/>
                          )
                      }) }
                  </ul>
                </FooterItem>
                <FooterCiteSupport cite={ cite } support={ support }/>
            </Footer>
        )
    }
}
render(<DictyFooter />, document.getElementById('dicty-footer'))
