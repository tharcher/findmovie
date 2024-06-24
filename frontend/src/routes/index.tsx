import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { useEffect } from "react";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<MovieDetails/>} />
            </Routes>
        </BrowserRouter>
    );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};