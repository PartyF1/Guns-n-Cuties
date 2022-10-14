import Server from "./server";
import { useRef } from "react";



export default function Authorisation(props) {
    const server = new Server;
    const { setData } = props;
    const login = useRef();
    const password = useRef()
    async function sendLoginHandler() {
        setData(await server.login(login.current.value, password.current.value));
    }

    return (
        <div>
            <input ref={login}></input>
            <input ref={password}></input>
            <button onClick={sendLoginHandler}>Войти</button>
        </div>
    )
}