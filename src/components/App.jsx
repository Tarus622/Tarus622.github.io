import { useState } from "react";
import Header from "./Header"
import Main from "./Main";

const messages = ['Software development with quality and performance', 'Who am I?', 'Knowledges'];

export default function App() {
    const [contentNumber, setContentNumber] = useState(0);
    const [message, setMessage] = useState('Software development with quality and performance');
    const [className, setClassName] = useState('box-social-media');

    return (
        <div className="app">
            <Header setContentNumber={setContentNumber} messages={messages} setMessage={setMessage} setClassName={setClassName} />
            <Main contentNumber={contentNumber} message={message} className={className} />
        </div>
    )
}