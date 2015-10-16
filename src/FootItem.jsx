import React from 'react';

export default class FootItem extends React.Component {
    displayName = 'Footer component for easy navigation between pages'

    static propTypes = {
       title: React.PropTypes.string,
       menuItems: React.PropTypes.array
    }

    render() {
        const {title, menuItems} = this.props;
        return (
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                <h4 className="item-header"> <a href="#">{title}</a></h4>
                <ul className="item-links">
                    {menuItems.map(item => {
                        return (
                            <li key={menuItems.indexOf(item)}>
                                <a href={item.href}>{item.name}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
