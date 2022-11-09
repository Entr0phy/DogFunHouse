import Button from "./Button";
import {GiSittingDog } from "react-icons/gi";

const refresh = () =>{
    window.location.reload();
}

const Header = () =>{
    return(
        <div className="Header">
            <div className="headerText">
            <h1>Dog Fun House <GiSittingDog size={30}/></h1>
            </div>
            <Button
            refresh = {refresh}/>
        </div>
    )
}

export default Header;