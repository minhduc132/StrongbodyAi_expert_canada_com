import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    clean?: boolean;
}

const Container = ({ children, className = "", clean = false }: ContainerProps) => {
    return (
        <div className={`max-w-[1440px] mx-auto ${!clean ? "px-4 sm:px-6 lg:px-8" : ""} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
