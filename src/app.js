import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, useParams, useLocation, useHistory } from 'react-router-dom'

const NavMenu = () => {
    return <>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Homee} />
                <Route path="/about/:fname/:lname" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/search" component={Search} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </>
}

const Header = () => {
    return <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/search">Search</Link></li>
        </ul>
    </>
}

const Homee = () => {
    return <>
        <h1>This is Home Page</h1>
    </>
}

const About = () => {
    let { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history)
    return <>
        <h1>This is {fname} {lname} Page</h1>
        <p>My current location is {location.pathname}</p>23
        {location.pathname === `/about/Dhruvit/Vachhani` ? <button onClick={() => {
            history.goBack();
        }}>Go Back</button> : null}
    </>
}

const Services = () => {
    return <>
        <h1>This is services Page</h1>
        <ol>
            <li>web design and development</li>
            <li>Mobile App</li>
            <li>SEO</li>
            <li>Graphics Design</li>
        </ol>
    </>
}

const Search = () => {
    const [Image, setImage] = useState();
    const inputEvent = (e) => {
        setImage(e.target.value);
    }
    const img =`https://source.unsplash.com/user/erondu/600x400/?${Image}`
    return <>
        <div className="searchbar">
            <input
                type="text"
                placeholder="Serach Anything"
                value={Image}
                onChange={inputEvent}
            />
            <img src={img} alt="dhruvit" />
        </div>
    </>
}

const Contact = () => {
    return <>
        <h1>This is contact Page</h1>
    </>
}

const PageNotFound = () => {
    return <>
        <h1>404 Error</h1>
    </>
}

export default NavMenu;