import logo from "./logo.png";
function Header(props){
    return(
        <div>
            <h1>FULL STACK PRACTICAL LAB</h1>
            <h1>MINI PROJECT</h1>
            <img src={logo}/>
            <h2>SUBMITTED BY: {props.name}</h2>
            <h3>URN: 191500869</h3>
            <h2>SUBMITTED TO: {props.teacher}</h2>
            <h3>Technical Trainer</h3>

        </div>
    )
}
export default Header;
