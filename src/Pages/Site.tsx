import "./Site.css"
//import {useNavigate} from "react-router-dom";
import {useState} from "react";
export function SitePage(){


    //const navigate = useNavigate();

    //change this top bool to false to display you have job idiot :)
    let available: boolean = true;
    let contactAvailable: string;
    let isGreen: boolean;
    if(available){
        contactAvailable = "Available for contact";
        isGreen = true;
    }else{
        contactAvailable = "Not available for contact";
        isGreen = false;
    }

    const [showContactPopup, setShowContactPopup] = useState(false);

    const handleContact = () => {
        setShowContactPopup(true);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("rjrouillon@yahoo.com");
        } catch (error) {
            console.error("Could not copy email:", error);
        }
    };
    
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
                        <button className="btn btn-contact" 
                                onClick={handleContact}
                        >
                            CONTACT
                            <span className="arrow">›</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* =========================================
            CONTACT POPUP
            ========================================= */}

            {showContactPopup && (
                <div
                    className="contact-overlay"
                    onClick={() => setShowContactPopup(false)}
                >
                    <div
                        className="contact-popup"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="popup-close"
                            onClick={() => setShowContactPopup(false)}
                            aria-label="Close contact popup"
                        >
                            ×
                        </button>

                        <div className="popup-symbol">
                            <div className="popup-symbol-inner">
                                <span />
                            </div>
                        </div>

                        <p className="popup-eyebrow">
                            &lt;Loading_Email /&gt;
                        </p>

                        <h2>
                            LET'S CONNECT
                        </h2>

                        <p className="popup-description">
                            Need to write me an Email?
                        </p>

                        <div className="email-copy">
              <span>
                rjrouillon@yahoo.com
              </span>

                            <button
                                type="button"
                                onClick={copyEmail}
                            >
                                COPY
                            </button>
                        </div>

                        <a
                            className="popup-email-button"
                            href="mailto:rjrouillon@yahoo.com"
                        >
                            OPEN EMAIL
                            <span>›</span>
                        </a>

                    </div>
                </div>
            )}
        </main>
    )
}