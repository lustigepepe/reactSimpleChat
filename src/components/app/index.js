import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAction from './../../containers/actions';

import FontOptionContainer from './../fontOptionContainer';
import TextBoxContainer from './../textBoxContainer';
import ChatWindow from './../chatWindow';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHideTextControl: false,
      isHideChatControl: false,
    }
    // this.handleControlBtn = this.handleControlBtn.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchData();
  // }
  handleChatControlBtn() {
    this.setState({ isHideChatControl: !this.state.isHideChatControl });
    console.log(this.state.isHideChatControl);
  }
  handleTextControlBtn() {
    this.setState({ isHideTextControl: !this.state.isHideTextControl });
    console.log(this.state.isHideTextControl);

  }
  render() {
    return (
      <div>
      <div className={this.state.isHideChatControl ? "HideChatControl" : "ShowChatControl"}>
        <div className={this.state.isHideTextControl ? "HideTextControl" : "ShowTextControl"}>
          {
            <div className="App">
              <div className="chatLeft">
                <ChatWindow />
              </div>
              <div className="chatRight">
                <ChatWindow />
              </div>
              <FontOptionContainer />
              <section className="Wrapper">
                <div className="TexBoxContainerWrapper">
                  <TextBoxContainer textBoxes={this.props.textBoxOption} />
                </div>
                <button type="button"
                  onClick={() => this.handleChatControlBtn()}
                  className="ControlChatBtn">
                  {this.state.isHideChatControl ? "Show chat" : "Hide chat "}
                </button>
                <button type="button"
                  onClick={() => this.handleTextControlBtn()}
                  className="ControlTextBtn">
                  {this.state.isHideTextControl ? "Show text control" : "Hide text control"}
                </button>
              </section>
            </div>
          }
        </div>
      </div>
        
    </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    userSelectedTextBox: state.FontReducer.userSelectedTextBox,
    textBoxOption: state.FontReducer.textBoxOption,
    fonts: state.FontReducer.fonts,
    availableCategories: state.FontReducer.availableCategories,
    availableFontFamilies: state.FontReducer.availableFontFamilies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => {
      dispatch(FontAction.fetchData(dispatch))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default (App)
