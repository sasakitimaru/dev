'use client';
import React, { useEffect, useState } from 'react'
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function isScrollToBottom() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    return scrollHeight - scrollTop === clientHeight;
}

const ScrollToTopButton = () => {
    const [scrollTopButtonVisible, setScrollTopButtonVisible] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrollTopButtonVisible(scrollTop < lastScrollTop || isScrollToBottom());
            setLastScrollTop(scrollTop);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setScrollTopButtonVisible(false);
        }, 3000);
        return () => clearTimeout(timerId);
    }, [scrollTopButtonVisible]);

    return (
        <Fab
            color="primary"
            // area-aria-label="scroll to top"
            className={`fixed bottom-10 right-10 z-30 bg-blue-500 transition-all duration-300 
        ${scrollTopButtonVisible ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <ArrowUpwardIcon />
        </Fab>
    )
}
export default ScrollToTopButton