"use client";

import { useState} from "react";
import Styles from "./links.module.css"
import NavLink from "./navLink/navLink"

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links =() => {
    const [open, setOpen] = useState(false);
    

    //TEMP
    const session = true;
    const isAdmin = true;

    return (
        <div className = {Styles.container}>
            <div className = {Styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title}/> 
                )))}
                {session ? (
                    <>
                        {isAdmin && (<NavLink item ={{title: "Admin",path: "/admin"}}/>)}
                        <button className = {Styles.logout}>Logout</button>
                    </>
                    ) : (
                    <NavLink item={{title: "Login", path: "/login"}}/>
                )}
            </div>
            <button className = {Styles.menuButton} onClick={()=> setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className = {Styles.mobileLinks}>
                    {links.map((link => (
                        <NavLink item={link} key={link.title}/>
                    )))}
                </div>
            }
        </div>
    );
};

export default Links;