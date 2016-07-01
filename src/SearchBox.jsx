import './styles/flexboxgrid'
import './styles/bootstrap'
import 'font-awesome/css/font-awesome.css'
import React from 'react'

export default class SearchBox extends React.Component {
    displayName = 'Search box component'

    static propTypes = {
        btnStyle: React.PropTypes.string,
        btnIcon: React.PropTypes.string,
        placeHolder: React.PropTypes.string
    }
    static defaultProps = {
        btnStyle: 'btn btn-default',
        btnIcon: 'fa fa-search',
        placeHolder: 'Guided Search'
    }

    render() {
        const {btnStyle, btnIcon, placeHolder} = this.props
        return (
            <div className="row center-xs end-sm">
                <div className="col-xs-12 col-sm-8 col-md-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={ placeHolder } />
                        <span className="input-group-btn">
                            <button className={ btnStyle } type="button">
                                <span className={ btnIcon }></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
