import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import { RoutePath } from "./routes";

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home/>}>

            </Route>
        </Routes>
    );
}

export default Router;