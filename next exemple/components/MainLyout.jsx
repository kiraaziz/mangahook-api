"use client"
import NextProvider from "@/components/providers/NextProvider"
import Category from "@/components/MangaList/Category"
import NavbarComponent from "@/components/Navbar"

const MainLayout = ({ children }) => {


    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="m-0 p-0 h-[100svh] w-screen overflow-x-hidden">
                <NextProvider>
                    <div className="w-full h-full bg-base-100">
                        <NavbarComponent>
                            <Category />
                        </NavbarComponent>
                        {children}
                    </div>
                </NextProvider>
            </body>
        </html>
    )
}

export default MainLayout