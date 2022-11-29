import { Suspense } from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from "../assets/react.svg";
import {routes} from "./routes";
import {RouteLazyLoad} from "../interfaces";

export const AppRouters = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="Logo react" />
                        <ul>
                            {
                                routes.map(({to, name}: RouteLazyLoad) => (
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
                            routes.map(({path, Component}: RouteLazyLoad) => (
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
        </Suspense>
    );
};