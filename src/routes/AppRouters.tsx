import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from "../assets/react.svg";
import {routes, Route as InterfaceRoute} from "./routes";

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="Logo react" />
                    <ul>
                        {
                            routes.map(({to, name}: InterfaceRoute) => (
                            <li key={to}>
                                <NavLink to={to}
                                    className={({isActive}) =>
                                        isActive ? 'nav-active' : ''}
                                >
                                    {name}
                                </NavLink>
                            </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(({path, Component}: InterfaceRoute) => (
                            <Route key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={routes[0].to} replace /> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};