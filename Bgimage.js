// import {
//     BrowserRouter as Router, Switch,
//     Route, Redirect,
// } from "react-router-dom";

// import Login from './components/Login';
// function Reroute (){
//     return (<>
//         <Router>
//             <Switch>
//                 <Route exact path="/" component={Login} />
//                 </Switch>
//         </Router> </>);
// }

const Image = () => {
    return (
        <div className="bodymain">
            <div className="body">

                <div className="milanimage">
                    <img src="https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png" alt="milan" />
                </div>
                <div className="title">
                    <div><h1>M I L A N</h1></div>
                    <div><h2>2 0 2 3</h2></div>
                    <div><h3>The General Championship of <br></br>IIT Hyderabad</h3></div>
                </div>
            </div>
            <div className="register">
                <div><a href="./loginpage.js"><h1>REGISTER NOW</h1></a></div>
            </div>
        </div>
    );
}

export default Image;