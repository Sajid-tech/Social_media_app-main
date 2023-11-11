import { Box } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <Box
                    display="flex"
                    flex="1"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    py="10"
                >
                    <Outlet />
                    {/* this ll returns to signup or sign in page means in authpage */}
                </Box>
            )}
        </>
    );
}

export default AuthLayout;