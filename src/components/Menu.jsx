import { Link } from 'react-router-dom';
import Close from '@mui/icons-material/Close';


const Menu = (props)=>{
   
        return (
            <div className="menu-wrapper">
                <nav className="navbar">
              <button className="close-btn" onClick={()=>props.handleMenu()}>
              <Close style={{
                            width: '28px',
                            height:'28px',
                        }} 

                        />
              </button>
                        
                        <ul className="menu">
                            <li className="menu__item"><Link to="/home" onClick={()=>props.handleMenu()}>Home</Link></li>
                            <li className="menu__item"><Link to="/" onClick={()=>props.handleMenu()}>Products</Link></li>
                            <li className="menu__item"><Link to="/contacts" onClick={()=>props.handleMenu()}>Contacts</Link></li>
                            <li className="menu__item"><Link to="/sign-in" onClick={()=>props.handleMenu()}>Sign in / Sign up</Link></li>
                        </ul>
              </nav>
            </div>
             

        );
}
export default Menu;