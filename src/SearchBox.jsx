import './styles/flexboxgrid';
import React from 'react';

export default class SearchBox extends React.Component {
    displayName = 'Search box component'

    render() {
        return (
            <div className="row end-md">
                <div className="col-md-12">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Guided Search" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
