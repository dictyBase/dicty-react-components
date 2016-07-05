import React from 'react'
import Radium from 'radium'
import Row from './layout/row'
import Column from './layout/column'
import './styles/bootstrap'
import 'font-awesome/css/font-awesome.css'

@Radium
export default class SearchBox extends React.Component {
    displayName = 'Search box component'

    static propTypes = {
        btnIcon: React.PropTypes.string,
        placeHolder: React.PropTypes.string,
        style: React.PropTypes.object,
        onClick: React.PropTypes.func
    }
    static defaultProps = {
        btnIcon: 'fa fa-search',
        placeHolder: 'Guided Search'
    }
    getStyles = () => {
        return {
            inputGroup: {
                position: 'relative',
                display: 'table',
                borderCollapse: 'separate',
                boxSizing: 'borderBox'
            },
            formControl: {
                position: 'relative',
                zIndex: '2',
                float: 'left',
                width: '100%',
                marginBottom: '0px',
                display: 'table-cell',
                height: '34px',
                padding: '6px 12px',
                fontSize: '14px',
                lineHeight: '1.42857143',
                color: '#555555',
                backgroundColor: '#ffffff',
                backgroundImage: 'none',
                border: '1px solid #cccccc',
                boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
                transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
                borderBottomRightRadius: '0px',
                borderTopRightRadius: '0px',
                borderBottomLeftRadius: '4px',
                borderTopLeftRadius: '4px'
            },
            inputGroupBtn: {
                width: '1%',
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
                display: 'table-cell',
                position: 'relative',
                fontSize: '0px',
                boxSizing: 'border-box'
            },
            button: {
                display: 'inline-block',
                marginBottom: '0px',
                fontWeight: 'normal',
                textAlign: 'center',
                verticalAlign: 'middle',
                touchAction: 'manipulation',
                cursor: 'pointer',
                backgroundImage: 'none',
                borderWidth: '1px',
                borderStyle: 'solid',
                whiteSpace: 'nowrap',
                padding: '6px 12px',
                fontSize: '14px',
                lineHeight: '1.42857143',
                userSelect: 'none',
                zIndex: '2',
                marginLeft: '-1px',
                borderBottomLeftRadius: '0px',
                borderTopLeftRadius: '0px',
                borderBottomRightRadius: '4px',
                borderTopRightRadius: '4px',
                position: 'relative',
                color: '#333333',
                backgroundColor: '#ffffff',
                borderColor: '#cccccc',

                ':hover': {
                    color: '#333333',
                    backgroundColor: '#e6e6e6',
                    borderColor: '#adadad',
                    textDecoration: 'none'
                }
            }
        }
    }
    render() {
        const {btnIcon, placeHolder, onClick, style} = this.props
        const defStyle = this.getStyles()
        return (
            <Row>
                <Column
                  xsSpan={ 12 }
                  smOffset={ 4 }
                  smSpan={ 8 }
                  mdOffset={ 5 }
                  mdSpan={ 7 }>
                    <div style={ defStyle.inputGroup }>
                        <input type="text"
                          style={ defStyle.formControl }
                          placeholder={ placeHolder }/>
                        <span style={ defStyle.inputGroupBtn }>
                            <button type="button"
                              onClick={ onClick }
                              style={ [defStyle.button, style && style] }>
                                <span className={ btnIcon }></span>
                            </button>
                        </span>
                    </div>
                </Column>
            </Row>
        )
    }
}
