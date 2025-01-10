import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProuductsCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            console.log(data);
            setCategories(data);
        } catch (error) {
            console.log("Error Fetching Categories :", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (loading) {
        return (
            <>
                <li className="nav-item dropdown">
                    <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Product Categories
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <p>Loading...</p>
                    </div>
                </li>
            </>
        );
    }

    return (
        <>
            <li className="nav-item dropdown">
                <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Product Categories
                </NavLink>
                {categories.length > 0 ? (
                    <div className="dropdown-menu overflow-auto" aria-labelledby="navbarDropdown" style={{ height: "300px" }}>
                        {categories.map((category, index) => (
                            <NavLink key={index} className="dropdown-item" to={`/products?category=${category.slug}`}>
                                {category.name}
                            </NavLink>
                        ))}
                    </div>
                ) : (
                    <p>No Categories Found!</p>
                )}
            </li>
        </>
    );
}
