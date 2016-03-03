# Dictybase React Footer
## Design/Layout

##### Small, Medium and Large screen sizes (above 768px)
![footer-desktop-layout](https://cloud.githubusercontent.com/assets/12897928/11285354/b04c73e0-8ed4-11e5-95c7-b5a80de18e22.jpg)

##### Mobile devices (below 768px)
<img src="https://cloud.githubusercontent.com/assets/12897928/11285410/fb9aa4b6-8ed4-11e5-90c1-8c5597aee28f.jpg" width="400">

## Flexbox grid
[Flexbox Grid](http://flexboxgrid.com/) (a grid system based on flex display property) is being used for the layout of the footer.

*col-xs-12* --> One column per row for extra small screen sizes and up (just like bootstrap grid system)

*col-sm* -->  ` flex-grow: 1;` So in this instance, `FooterItem` and `FooterCiteSupport` have the same flex properties (flex-grow: 1), and therefore they have the same width (small screen sizes and up).

*row center-xs* --> Align elements(inside the row) to the center for all screen sizes.

## React components
The footer consists of the following components.
```js
  <Footer>
    <FooterItem title="Genomes" titleLink="/genomes" menuItems={dropdownItems1}/>
    <FooterItem title="Tools" titleLink="/tools" menuItems={dropdownItems2}/>
    <FooterItem title="Explore" titleLink="/explore" menuItems={dropdownItems3}/>
    <FooterItem title="Research" titleLink="/research" menuItems={dropdownItems4}/>
    <FooterItem title="Community" titleLink="community" menuItems={dropdownItems5}/>
    <FooterItem title="About" titleLink="/about" menuItems={dropdownItems6}/>
    <FooterCiteSupport cite={cite} support={support}/>
  </Footer>
  ```
### Learn more about each component
* [Footer](./footer.md)
* [FooterItem](./footerItem.md)
* [FooterCiteSupport](./footerCiteSupport.md)
