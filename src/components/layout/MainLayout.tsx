import React from "react"
import { Header } from "../header"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default MainLayout
