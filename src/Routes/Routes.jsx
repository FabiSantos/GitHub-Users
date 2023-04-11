import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Result from "../pages/Result/index";
import NotFound from "../pages/NotFound/index";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default PrivateRoutes;