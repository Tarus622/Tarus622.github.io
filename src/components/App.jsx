import { useState } from "react";
import Header from "./Header"
import Main from "./Main";

export default function App() {
    const [title, setTitle] = useState('Desenvolvendo software com qualidade e performance');

    return (
        <div className="app">
            <Header setTitle={setTitle} />
            <Main title={title} />
        </div>
    )
}