import {FC} from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from "../assets/react.svg"
import {About, Home, Users} from "../components";

interface Props {}

export const AppRouters: FC<Props> = () => {


    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo react" />
                    <ul>
                        <li>
                            <NavLink to="/home"
                                     className={({isActive}) => isActive ? 'nav-active' : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                     className={({isActive}) => isActive ? 'nav-active' : ''}>
                                About
                            </NavLink>
                        </li><li>
                        <NavLink to="/users"
                                 className={({isActive}) => isActive ? 'nav-active' : ''}>
                            Users
                        </NavLink>
                    </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />}/>
                    <Route path="/users" element={<Users />}/>
                    <Route path="/home" element={<Home />}/>

                    <Route path="/*" element={<Navigate to="/home" replace /> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};