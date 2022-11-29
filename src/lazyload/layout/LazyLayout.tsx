import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {LaziPage1, LaziPage2, LaziPage3} from "../pages";

const LazyLayout = () => {
    return (
        <div>
            <h1>Lazylayout Page</h1>

            <ul>
                <li>
                    <NavLink to="lazy1" >Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2" >Lazy 2</NavLink>
                </li><li>
                    <NavLink to="lazy3" >Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={<LaziPage1 />}/>
                <Route path="lazy2" element={<LaziPage2 />}/>
                <Route path="lazy3" element={<LaziPage3 />}/>

                {/*<Route path="*" element={<div>Not Found</div>}/>*/}
                <Route path="*" element={<Navigate to="lazy1" replace />}/>
            </Routes>
        </div>
    );
};

export default LazyLayout;