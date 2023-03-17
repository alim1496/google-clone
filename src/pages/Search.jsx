import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search-icon.png";

const Search = () => {
    const [query, setQuery] = useState("");
    const location = useLocation();

    useEffect(() => {
        setQuery(location.state.q);
    }, []);

    return (
        <div className="container">
            <div className="fixed top-0 left-0 right-0 p-4 flex">
                <img src={logo} alt="logo" className="w-36" />
                <div className="relative mx-4 w-1/3">
                    <input type="text" className="border border-black rounded-3xl w-full py-2 pl-4 pr-10" value={query} onChange={(e)=>setQuery(e.target.value)} />
                    <img src={search} alt="search" className="absolute right-4 top-3 w-5 cursor-pointer hover:opacity-75" />
                </div>
                
            </div>
        </div>
    );
}

export default Search;
