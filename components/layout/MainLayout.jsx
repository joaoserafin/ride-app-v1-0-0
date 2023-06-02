import Footer from "../template/Footer";



export default function MainLayout({ children }) {



    return (
        <div>
            <div>{children}</div>
            <Footer />
        </div>
    )
}