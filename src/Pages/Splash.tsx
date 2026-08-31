import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";


export function SplashPage() {
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
    const navigate = useNavigate();




    return (
        <main className="Rory's Portfolio Web">

            {/* Ambient background glows */}
            <div className="glow glow-purple" />
            <div className="glow glow-cyan" />

            {/* Technical background grid */}
            <div className="grid" />

            {/* Top status bar */}
            <header className="top-bar">
                <div className="system-status">
                    <span className="status-square" />
                    SYS.ACTIVE
                </div>

                <div className="build-info">
                    LATEST: 14MS // BUILD: V4.9.22
                </div>

                <div className="preview-info">
                    PREVIEW [1440×1024]
                    <br />
                    RENDERER: VULKAN CORE
                </div>
            </header>

            {/* Left technical rail */}
            <aside className="side-rail left-rail">
                <div className="vertical-text">
                    <span>01 // ENGINE.CORE</span>
                    <span>SHADER | TOOLS | COMPILING</span>
                </div>
            </aside>

            {/* Right technical rail */}
            <aside className="side-rail right-rail">
                <div className="vertical-text">
                    <span>02 // CREATIVE.NODES</span>
                    <span>60 FPS_TARGET_LOCK</span>
                </div>
            </aside>

            {/* Main hero */}
            <section className="hero">
                <div className="hero-symbol">
                    <div className="symbol-outer">
                        <div className="symbol-inner">
                            <span />
                        </div>
                    </div>
                </div>

                <p className="eyebrow">
                    GAME PROGRAMMER &amp; CREATIVE DESIGNER
                </p>

                <h1>RORY ROUILLON</h1>

                <p className="skills">
                    C# <span>•</span> JAVASCRIPT <span>•</span> UNITY 6{" "}
                    <span>•</span> GAMEPLAY FEATURES &amp; DESIGN
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary" onClick={() => navigate("/Site")}>
                        ENTER SITE
                        <span className="arrow">›</span>
                    </button>

                    <button className="btn btn-secondary">
                        <span className="gallery-icon">▧</span>
                        VIEW GALLERY
                    </button>
                </div>
            </section>

            {/* Bottom navigation */}
            <footer className="bottom-section">
                <nav className="social-nav">

                    <a
                        href="https://github.com/SirSmoothie"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="social-icon github">●</span>
                        GITHUB
                    </a>

                    <a
                        href="https://www.linkedin.com/in/rory-rouillon-b06a98386/"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="social-icon linkedin">in</span>
                        LINKEDIN
                    </a>

                    <a
                        href="https://x.com/RouillonRory"
                        className="social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="social-icon twitter">♥</span>
                        TWITTER
                    </a>

                    <button
                        type="button"
                        className="social-link contact-button"
                        onClick={handleContact}
                    >
                        <span className="social-icon contact">✉</span>
                        CONTACT
                    </button>

                </nav>

                <div className="footer-meta">
          <span>
            © 2025 RORY ROUILLON. &nbsp; ALL RIGHTS RESERVED.
          </span>

                    <span className="server-status">
            <i />
            ONLINE PORTFOLIO SERVER
          </span>
                </div>
            </footer>

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
    );
}