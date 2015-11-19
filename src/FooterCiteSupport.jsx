import './styles/flexboxgrid';
import './styles/dicty-footer';
import React from 'react';
import {Link} from './FooterItem';

export default class FooterCiteSupport extends React.Component {
    displayName = 'Footer component to display sponsors and citation'

    static propTypes = {
       cite: React.PropTypes.array,
       support: React.PropTypes.array,
       headerStyle: React.PropTypes.object,
       linkStyle: React.PropTypes.object
    }

    render() {
        const {cite, support, headerStyle, linkStyle} = this.props;

        return (
            <div className="col-xs-12 col-sm-2 col-lg-1 last-xs">
                <div className="item-header" style={headerStyle}>Please cite</div>
                <ul>
                    {cite.map((site, index) => {
                        return (
                            <Link key={index} name={site.name} link={site.href} style={linkStyle} />
                        );
                    })}
                </ul>
                <div className="item-header" style={headerStyle}>Supported by</div>
                <ul>
                    {support.map((site, index) => {
                        return (
                            <Link key={index} name={site.name} link={site.href} style={linkStyle} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}
