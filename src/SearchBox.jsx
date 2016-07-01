import React from 'react'
import Row from './layout/row'
import Column from './layout/column'
import './styles/bootstrap'
import 'font-awesome/css/font-awesome.css'

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
            <Row>
                <Column
                  xsSpan={ 12 }
                  smOffset={ 4 }
                  smSpan={ 8 }
                  mdOffset={ 5 }
                  mdSpan={ 7 }>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder={ placeHolder } />
                        <span className="input-group-btn">
                            <button className={ btnStyle } type="button">
                                <span className={ btnIcon }></span>
                            </button>
                        </span>
                    </div>
                </Column>
            </Row>
        )
    }
}
