import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from 'react-router';
import { ValueContext } from './Context';

const Navbar = () => {
    const { scrollYProgress } = useScroll();
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const location = useLocation();
    const currentPath = location.pathname;

    const { cart } = useContext(ValueContext);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Instagram", href: "https://instagram.com/viralface_1", external: true },
        { name: "Cart", href: "/cart" }
    ];

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <header className='fixed px-5 md:px-20 lg:px-50 top-5 left-0 right-0 z-40'>
                <div className='bg-white/60 backdrop-blur-md shadow border border-b-0 rounded-2xl border-[#e2e8f0] overflow-hidden'>
                    <div className='flex items-center justify-between px-6 py-4'>
                        <h1 className='text-xl font-semibold'>ThreadsHub</h1>

                        {/* Desktop nav */}
                        <nav className='space-x-8 hidden md:flex'>
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.href}
                                    className={`text-sm font-medium transition duration-200 ${currentPath === link.href ? "text-[#38bdf8]" : "hover:text-[#e2e8f0]"}`}
                                >
                                    {link.name}
                                    {link.name === "Cart" && <span className='bg-[#38bdf8] text-white rounded-full px-2 text-xs ml-1'>{cart.length}</span>}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="relative md:hidden p-2 rounded-full hover:bg-[#e2e8f0] transition duration-200"
                        >
                            {openMenu ? <X size={24} /> : <Menu size={24} />}
                            {cart.length > 0 && (
                                <span className={`${openMenu && 'rotate-180'} absolute -top-1 -right-1 bg-[#38bdf8] text-white rounded-full text-[10px] font-medium flex justify-center items-center w-4 h-4 leading-none`}>
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Scroll progress line */}
                    <motion.div
                        style={{ scaleX: scrollYProgress, originX: 0, height: 2, backgroundColor: "#38bdf8" }}
                        className='w-full'
                    />
                </div>
            </header>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {openMenu && (
                    <motion.aside
                        ref={menuRef}
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className='fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50'
                    >
                        <nav className='flex flex-col p-6'>
                            <h1 className='text-xl font-semibold'>ThreadsHub</h1>
                            {navLinks.map((link, index) => {
                                const isActive = currentPath === link.href;

                                return link.external ? (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        className={`text-sm pt-10 py-4 border-b border-[#e2e8f0] font-medium transition duration-200 hover:text-[#e2e8f0]`}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <NavLink
                                        key={index}
                                        to={link.href}
                                        onClick={() => setOpenMenu(false)}
                                        className={`text-sm pt-10 py-4 border-b border-[#e2e8f0] font-medium transition duration-200 
                                        ${isActive ? "text-[#38bdf8]" : "hover:text-[#e2e8f0]"}`}
                                    >
                                        {link.name}
                                        {link.name === "Cart" && (
                                            <span className='bg-[#38bdf8] text-white rounded-full px-2 text-xs ml-1'>{cart.length}</span>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </nav>

                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
