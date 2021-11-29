import React, {useState} from "react";
import logo from "../../../assets/img/logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import Portal from "../../../Components/Portal/Portal";
import { usePopper } from 'react-popper';
import { style } from "@mui/system";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from "../../../Contexts/UserContext";
import {Link} from "react-router-dom";
const Navbar = () => {
    const [options, setOptions] = useState(false)
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: "bottom"});
    const { logout } = useUserContext();

    const onClickAccountHandler = () =>{
        options?setOptions(false):setOptions(true)
    }
    return (
        <div className=" bg-red-400 fixed w-screen h-16 z-30 flex flex-row justify-around  " >
            <div className="flex flex-row justify-start w-6/12 items-center ">
                <Link className="w-16" to="/user">
                    <img className="h-16"  src={logo}/>
                </Link>
                <input className="m-1 w-9/12 md:ml-20 px-4 h-3/6 md:w-3/6 " placeholder="Buscar" type="text"></input>
                
            </div>
            <div className="flex flex-row justify-between items-center">
              
                    <Link to="/user">
                        <HomeIcon className="mx-8" fontSize="large"/>
                    </Link>
                    <button onClick={onClickAccountHandler} ref={setReferenceElement}><AccountCircleIcon className="mr-8" fontSize="large"/></button>
                
            
                
            </div>
            {options && <Portal>
                <div className="bg-white rounded-lg  w-full md:w-60 z-40 flex flex-col" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    <Link to="/user/profile/publicaciones">
                    <div className="p-1.5 flex flex-row justify-start hover:bg-gray-400 rounded-t-lg ">
                        <PersonIcon className="mx-4" fontSize="large"/>
                        <button>Perfil</button>
                    </div>
                    </Link>
                    <Link to="/user/profile/favoritos">
                    <div className="p-1.5 flex flex-row justify-start hover:bg-gray-400  ">
                        <BookmarkIcon className="mx-4" fontSize="large"/>
                        <button>Favoritos</button>
                    </div>
                    </Link>
                    <Link to="/login">
                        <div className="p-1.5 flex flex-row justify-start hover:bg-gray-400 rounded-b-lg ">
                            <LogoutIcon className="mx-4" fontSize="large"/>
                            <button onClick={()=> { logout(); }}>Cerrar sesion</button>
                        </div>
                    </Link>
                    
                </div>
            </Portal>}
            
        </div>
    );
};

export default Navbar;