
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navBar">            
            <button className='homeButton'><Link to="/">AppName</Link></button>      
        <div className="navBar-content">
            <ul>
                    <div className='navBar-links'>
                    <li><Link to="/browse">Browse open auctions</Link></li>
                    <li><Link to="/postItem">Post new auction</Link></li>
                    </div>
            </ul>            
        </div>
        </nav>        
    );
}

export default Navbar;