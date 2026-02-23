"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeIn = ({ children, className, delay = 0 }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({ children, className, delay = 0 }: RevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const Float = ({ children, className, delay = 0 }: RevealProps) => {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

