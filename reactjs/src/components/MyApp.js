import user from "../data/data";
import { AlertShow, ButtonClickCounter, Credentials, ListOfItems } from "../utils/utils";
import { useState } from "react";

export default function MyApp() {
    
    const [count, setCount] = useState(0);
    
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>About</h1>
            <img src={user.imageUrl} alt="user" className="avatar" style={{width: user.width, height: user.height}} />
            <p>Hello <b>{user.userName}</b>.<br />How do you do?</p>
            <Credentials/>
            <div>
                <h1>Welcome to my app</h1>
                <AlertShow/>
                <br/>
                <br/>
                <ButtonClickCounter count={count} onClick={handleClick}/>
                <br/>
                <br/>
                <ButtonClickCounter count={count} onClick={handleClick}/>
            </div>
            <h4>Products:</h4>
            <ListOfItems/>
        </>
    );
}
