import { NavLink } from 'react-router-dom';
import  {useAuth} from "../hooks/useAuth"
import "../styles/header.scss";
import MobileMenu from './mobileMenu';

const active = ({isPending, isActive}) => {
    return isPending ? "" : isActive ? "active" : ""
}

export default function Header() {

  const {user} = useAuth();


  return (
    <header>
        <div className='container'>
            <NavLink className={active} to={"/"}>Logo</NavLink>
            <ul className="menu">
                <li><NavLink  className={active} to="aboutUs">About us</NavLink></li>
                <li><NavLink  className={active} to="gallery">Portfolio</NavLink></li>
                <li><NavLink  className={active} to="contact">Contact us</NavLink></li>
                {
                  user?
                    user.role === "admin" ? 
                      <li><NavLink  className={active} to="admin">Admin</NavLink></li>
                          :
                        ""
                      :
                    <NavLink to={"/auth"} className="signIn">Sign in</NavLink>
                }
            </ul>
            <MobileMenu/>
        </div>
    </header>
  );
}
