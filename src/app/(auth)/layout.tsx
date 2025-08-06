import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <nav className="w-full bg-red-500">AuthLayout</nav>
            {children}
        </div>
    );
};

export default AuthLayout;
