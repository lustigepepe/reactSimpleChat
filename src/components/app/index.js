import React, { Component } from 'react';
import { connect } from 'react-redux';

import FontOptionContainer from './../fontOptionContainer';
import ChatWindow from './../chatWindow';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHideTextControl: false,
      isHideChatControl: false,
    }
  }

  handleChatControlBtn() {
    this.setState({ isHideChatControl: !this.state.isHideChatControl });
    
  }
  
  handleTextControlBtn() {
    this.setState({ isHideTextControl: !this.state.isHideTextControl });
    
  }
  render() {
    return (
      <div className={this.state.isHideChatControl ? "HideChatControl" : "ShowChatControl"}>
        <div className={this.state.isHideTextControl ? "HideTextControl" : "ShowTextControl"}>
          {
            <div className="App">
              <div className="chatLeft">
                <ChatWindow fontSize={this.props.fontSize} userName="Jon Do" />
              </div>
              <div className="chatRight">
                <ChatWindow fontSize={this.props.fontSize} userName="Kim Kun"/>
              </div>
              <FontOptionContainer />
              <section className="Wrapper">
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
    );
  }
}


function mapStateToProps(state) {
  return {
    fontSize: state.FontReducer.fontSize,
    chatUser: state.ChatReducer.chatUser,
    chatMessage: state.ChatReducer.chatMessage,
  }
}


export default connect(mapStateToProps)(App)
