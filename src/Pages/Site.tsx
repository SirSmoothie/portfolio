import "./Site.css"
import {useNavigate} from "react-router-dom";
export function SitePage(){


    const navigate = useNavigate();

    //change this top bool to false to display you have job idiot :)
    let available: boolean = false;
    let contactAvailable: string;
    let isGreen: boolean;
    if(available){
        contactAvailable = "Available for contact";
        isGreen = true;
    }else{
        contactAvailable = "Not available for contact";
        isGreen = false;
    }
    return (
        <main className="site-page">
            <header className="navbar">
            <div className="navbar-title">
                <div className="navbar-icon">

                </div>
                <div className="navbar-text">
                    _RorRou.Dev
                </div>


            </div>
                <div className="navbar-tabs">
                    <div className="navbar-tabs-home">
                        Home
                    </div>

                    <div className="navbar-tabs-gallery">
                        Gallery
                    </div>

                    <div className="navbar-tabs-about">
                        About
                    </div>

                    <div className="navbar-tabs-socials">
                        Socials
                    </div>
                </div>
                <div className="navbar-contact">
                    <div className="navbar-contact-available">

                        <div className="navbar-contact-available-icon">

                        </div>
                        <div className="navbar-contact-available-text">
                            <p style={{ color: isGreen ? 'green' : 'red'}}>
                                <h1>{contactAvailable}</h1>
                                </p>
                        </div>
                    </div>
                    <div className="navbar-contact">
                        <button className="btn btn-contact" onClick={() => navigate("/Contact")}>
                            CONTACT
                            <span className="arrow">›</span>
                        </button>
                    </div>
                </div>
            </header>
        </main>
    )
}