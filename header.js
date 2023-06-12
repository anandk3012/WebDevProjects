const handleSearch = () => {
    console.log('Searching..')
};
const Header = () => {
    return (

        <div className="header-div">
            <header className="header-main">
                {/* header heading */}
                <div className="header-heading">
                    <a classname="milanlogo" target="_blank" href="App.js"><img src="https://res.cloudinary.com/dwsverefw/image/upload/v1671733197/media%20council/milan_logo_og_rxtdnj.png" alt="MILAN" /></a>

                </div>
                {/* Header nav bar */}
                <div className="header-navbar">
                    <nav>
                        <ul>
                            <div><a target="_blank" href="src\components\About.jsx" >ABOUT</a></div>
                            <div><a target="_blank" href="./events.js">EVENTS</a></div>
                            <div><a target="_blank" href="./competitions.js" >COMPETITIONS</a></div>
                            <div><a target="_blank" href="./pronites.js" >PRONITES</a></div>
                            <div><a target="_blank" href="./archive.js">ARCHIVE</a></div>
                            <div><a target="_blank" href="./register.js">REGISTER</a></div>

                        </ul>
                    </nav>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                {/* <div className="searchbar">
                    <form className="searchbar" action="App.js">
                        <input type="text" name="search" id="search"></input>
                        <button onClick={handleSearch} type="submit" >
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        </button>
                    </form>
                </div> */}

                <div className="dropdown">
                    <div className="dropbown-btn">
                        <span style={{ color: "white" }} class="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                    <div className="dropdown-content">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <a href="./App.js">HOME</a>
                        <a href="./App.js">EVENTS</a>
                        <a href="./App.js">COMPETITIONS</a>
                        <a href="./App.js">PRONITES</a>
                        <a href="./App.js">CONTACT</a>
                        <a href="./App.js">REGISTER</a>
                    </div>
                </div>

            </header>
        </div>

    );
}

export default Header;