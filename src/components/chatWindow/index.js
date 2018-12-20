import React from 'react';
import ReactDOM from 'react-dom';
import './ChatWindow.css';
import catPic from './../../img/cat.jpg';
import docPic from './../../img/dog.jpg';
import './ChatWindow.css';

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import enhanceWithClickOutside from 'react-click-outside';
// import GFontsAction from './../../containers/actions';
// import { getFontWeightAndSyle } from './../../helper';



import Message from './Message.js';

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Jon Do",
                content: <p>How are you doing!</p>,
                img: docPic,
            }, {
                username: "Kim Kun",
                content: <p>yes and you</p>,
                img: catPic
            },  {
                username: "Jon Do",
                content: <p>Me too</p>,
                img: docPic,
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToDown();
    }

    componentDidUpdate() {
        this.scrollToDown();
    }

    scrollToDown() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        const chatClass = {
            fontSize: `${this.props.chatWindowFondSize}px`,
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



export default ChatWindow;