import Navbar from "./Nabar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleBlogPostLayout;