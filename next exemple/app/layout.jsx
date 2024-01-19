import MainLayout from "@/components/MainLyout"
import "@/styles/globals.css"

const Layout = ({ children }) => {

    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}

export default Layout