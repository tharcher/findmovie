import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { BookDetails } from "../pages/MovieDetails";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<BookDetails/>} />
            </Routes>
        </BrowserRouter>
    );
};