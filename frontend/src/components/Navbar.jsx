import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

import './css/Navbar.css'

const navigation = [
    { name: "Dashboard", href: "/user-dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { currentUser, logout } = useAuth();

    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleLogOut = () => {
        logout();
    };

    return (
        <header className="navbar-container">
            <nav className="navbar">
                {/* Left side */}
                <div className="navbar-left">
                    {/* Hamburger Menu for mobile */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hamburger-menu">
                        <HiMiniBars3CenterLeft className="icon" />
                    </button>

                    {/* Search input */}
                    <div className="search-container">
                        <IoSearchOutline className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search here"
                            className="search-input"
                        />
                    </div>
                </div>

                {/* Right side */}
                <div className="navbar-right">
                    {/* User Avatar and Dropdown */}
                    <div>
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="avatar-btn">
                                    <img
                                        src={avatarImg}
                                        alt="User Avatar"
                                        className={`avatar ${currentUser ? "avatar-ring" : ""}`}
                                    />
                                </button>
                                {/* Dropdown menu */}
                                {isDropdownOpen && (
                                    <div ref={dropdownRef} className="dropdown-menu">
                                        <ul className="dropdown-list">
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link
                                                        to={item.href}
                                                        className="dropdown-item"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="dropdown-item logout-btn"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="/login" className="login-btn">
                                <HiOutlineUser className="icon" />
                            </Link>
                        )}
                    </div>

                    {/* Wishlist Icon */}
                    <button className="wishlist-btn">
                        <HiOutlineHeart className="icon" />
                    </button>

                    {/* Cart Icon */}
                    <Link
                        to="/cart"
                        className="cart-btn"
                    >
                        <HiOutlineShoppingCart className="icon" />
                        <span className="cart-item-count">
                            {cartItems.length > 0 ? cartItems.length : 0}
                        </span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="mobile-menu"
                >
                    <ul className="mobile-menu-list">
                        {navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsMobileMenuOpen(false)}>
                                <Link
                                    to={item.href}
                                    className="mobile-menu-item"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
