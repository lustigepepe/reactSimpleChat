import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Select from 'react-select';
// import _map from 'lodash/map';

import FontAction from './../../containers/actions';
import './FontOptionContainer.css'

export class FontOptionContainer extends Component {
   
    handleChangeFontSize(event) {
        this.props.changeFontSize(event.target.value)
    }
    render() {
        let fontSize = this.props.fontSize;
        return (
            <section className="FontOptionContainer">
                <section className="FontOptionContainer__Item">
                    <h4 className="FontOptionContainer__Title">Text propeties</h4>
                    <div className="FontOptionContainer__Properties">
                        <div className="OtherProperties">
                            <div className="FontSize__Option OtherProperties__Option">
                                <label>Font size</label>
                                <input type="number"
                                    name="quantity"
                                    min="9"
                                    max="26"
                                    onChange={(event)=>this.handleChangeFontSize(event)}
                                    value={fontSize}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section >
        );
    }
}
FontOptionContainer.propTypes = {
  
    fontSize: PropTypes.string
};


function mapStateToProps(state) {
    return {
      
        fontSize: state.FontReducer.fontSize,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFontSize: (fontSize) => {
            dispatch(FontAction.changeFontSize(dispatch, fontSize))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FontOptionContainer)
