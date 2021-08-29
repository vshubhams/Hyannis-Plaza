import Banner from "./banner/banner";
import Footer from "./footer/footer";
import Header from "./header/header";

export default function Home({ banner, children }) {
    window.scrollTo(0,0)
    return (
        <>
            <Header />
            {
             banner?<Banner/>:""
            }
             {children}
            <Footer/>
        </>
    )
}


Home.defaultProps = {
    banner:false,
}