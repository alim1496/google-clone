import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search-icon.png";

const Home = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const submitSearch = () => {
        if(query === "") return;
        navigate(`/search?q=${query}`, { state: { q: query }});
    };

    const pressSubmit = (e) => {
        if(e.key === "Enter") {
            submitSearch();
        }
    };

    return (
        <div className="container h-screen flex justify-center items-center">
            <div className="w-1/3 text-center">
                <img src={logo} alt="logo" className="w-36 mx-auto" />
                <div className="relative">
                    <img src={search} alt="search" className="absolute top-7 left-3 w-5" />
                    <input onKeyDown={pressSubmit} onChange={(e)=>setQuery(e.target.value)} value={query} type="text" className="my-4 border border-black rounded-3xl w-full py-2 pl-10 pr-4" />
                </div>
                <button type="button" onClick={submitSearch} className="rounded py-1 px-4 bg-slate-100 text-md font-normal hover:opacity-75">Search</button>
            </div>
        </div>
    );
}

export default Home;
