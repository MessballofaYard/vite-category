import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import { useContext } from "react";
{/* import { DarkModeContext } from "./context/darkmodecontext"; */}


const Sidebar = () => {
  {/* const { dispatch } = useContext(DarkModeContext); */}

  return(
    <div className="sidebar">
        <div className="top">
            <Link to="/">
                <span className="logo">Store</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <Link to="/users">
                    <li>
                        <GroupIcon className="user"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products">
                    <li>
                        <ShoppingCartIcon className="product"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <MenuBookIcon className="order"/>
                    <span>Orders</span>
                </li>
                <Link to="/categories">
                    <li>
                        <CategoryIcon className="icon"/>
                        <span>Categories</span>
                    </li>
                </Link>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className="profile"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="logout"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({ type : "LIGHT" })}></div>
            <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
        </div>
    </div>
  );
};

export default Sidebar;