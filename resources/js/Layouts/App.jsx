import React from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import sidetoggle from "../../../public/assets/js/sidebar.large.script";
// useEffect(() => {
//     flash.type && toast[flash.type](flash.message)

// },[])

export default function App({ children, title }) {
    const { flash } = usePage().props;
    flash.type && toast[flash.type](flash.message);

    return (
        <div>
            <script src={sidetoggle}></script>
            <Head title={title} />
            <div className="app-admin-wrap layout-sidebar-large clearfix">
                <Header />
                <Sidebar />
                <div className="main-content-wrap sidenav-open d-flex flex-column flex-grow-1">
                    <div className="main-content">
                        <Toaster />
                        {children}
                    </div>
                    <div className="flex-grow-1" />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
