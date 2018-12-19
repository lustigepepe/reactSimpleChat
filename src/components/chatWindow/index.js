import React from 'react';
import ReactDOM from 'react-dom';
import './ChatWindow.css';
import cat from './../../img/cat.jpg';
import dog from './../../img/dog.jpg';
import './ChatWindow.css';

import Message from './Message.js';

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Jon Do",
                content: <p>Hello World!</p>,
                img: dog,
            }, {
                username: "Kim Kun",
                content: <p>Love it! :heart:</p>,
                img: cat
            },  {
                username: "Jon Do",
                content: <p>Definitely! Sounds great!</p>,
                img: dog,
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

        return (
            <div className="chatwidget">
                <div className="chatroom">
                    <h3>Chattime</h3>
                    <ul className="chats" ref="chats">
                        {
                            chats.map((chat) => 
                                <Message chat={chat} user={username} />
                            )
                        }
                    </ul>
                    <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                        <input type="text" ref="msg" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default ChatWindow;