import "./MainLayout.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import Home from "../pages/Home/Home";


function MainLayout() {

    return (

        <>

            <Navbar />

            <main>

                <Home />

            </main>

            <Footer />

        </>

    );

}

export default MainLayout;
