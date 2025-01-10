import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export function SearchProducts() {
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/products?search=${query}`);
        }
    };
    return (
        <>
            <form className="d-flex my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search for products"
                    aria-label="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="btn ms-1 btn-outline-primary my-2 my-sm-0 btn-sm"
                    type="submit"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>
        </>
    )
}