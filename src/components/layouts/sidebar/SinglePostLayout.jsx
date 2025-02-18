import Navbar from "../../modules/navbar/Navbar";
import Footer from "../../modules/footer/Footer";
import { Outlet } from "react-router-dom";
import SidebarSinglePost from "../sidebar/SidebarSinglePost";

const SingleBlogPostLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-md-4"> 
                    <SidebarSinglePost />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleBlogPostLayout;