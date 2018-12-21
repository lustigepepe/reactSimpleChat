import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ChatWindow.css';
import FontChatAction from './../../containers/actions';
import {updateChat} from './../../containers/observable/actions';
import isEqual from 'is-equal'
import watch from 'redux-watch'

import catPic from './../../img/cat.jpg';
import dogPic from './../../img/dog.jpg';
import './ChatWindow.css';
import store from './../../redux';
import Message from './ChatMessage.js';


class ChatWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Jon Do",
                content: <p>How are you doing!</p>,
                img: dogPic,
            }, {
                username: "Kim Kun",
                content: <p>yes and you</p>,
                img: catPic
            },  {
                username: "Jon Do",
                content: <p>Me too</p>,
                img: dogPic,
                id: 0,
            }],
        };
    }


    componentDidMount() {
        this.scrollToDown();
        let w = watch(store.getState, 'ChatReducer', isEqual)
        store.subscribe(w((newVal, oldVal, objectPath) => {
          this.setState({
              chats: this.state.chats.concat([{
                  username: newVal.chatUser,
                  content: <p>{newVal.chatMessage}</p>,
                  img: newVal.chatUser === "Kim Kun" ? catPic : dogPic,
              }])
          }, () => {
              ReactDOM.findDOMNode(this.refs.msg).value = "";
          });
        }))
    }
    componentDidUpdate() {
        this.scrollToDown();
    }

    scrollToDown() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }
        
    submitMessage(event) {
        var inputText = ReactDOM.findDOMNode(this.refs.msg).value;
        event.preventDefault();
        if(!inputText)
        return;
        this.props.addedChatMessage(this.props.userName, inputText);
    }
    
    render() {
        const username = this.props.userName;
        const { chats } = this.state;
        const chatClass = {
            fontSize: `${this.props.fontSize}px`,
        }
        return (
            <div className="chatwidget">
                <div className="chatroom">
                    <h3>Chattime</h3>
                    <ul className="chats" ref="chats">
                        {
                            chats.map((chat, i) => 
                                <Message chatClass={chatClass} chat={chat} user={username} key={i} />
                            )
                        }
                    </ul>
                    <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                        <input type="text" className="inputField" style={chatClass} ref="msg" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    chatUser: PropTypes.string,
    chatMessage: PropTypes.string,
};

function mapStateToProps(state) {
    return {
      chatUser: state.ChatReducer.chatUser,
      chatMessage: state.ChatReducer.chatMessage,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
    addedChatMessage: (chatUser, chatMessage) => {
        dispatch(FontChatAction.addedChatMessage(dispatch, chatUser, chatMessage))
      },
      updateChat,
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
  