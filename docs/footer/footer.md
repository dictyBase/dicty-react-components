# `Footer` Component

*The parent component for dicty-react-footer*

`Footer` receives two props
```js
    static propTypes = {
        footerStyle: React.PropTypes.object,
        containerFluid: React.PropTypes.bool
    }
```
You can pass in a style object to override css for `className="footer"`

```js
<Footer footerStyle={{backgroundColor: 'red', fontFamily: 'Times New Roman'}}>
```

On default, footer is set to `container-fluid`. However, if you would like to switch to `container` you can set `containerFluid` props to false.

```js
<Footer containerFluid={false}>
```
