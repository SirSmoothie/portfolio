import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SplashPage } from "./Pages/Splash";
import { SitePage } from "./Pages/Site";
import { SocialsPage } from "./Pages/Socials";
import { GalleryPage } from "./Pages/Gallery";
import { useEffect, useState } from "react";

function getRandomIntInclusive(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(
        Math.random() * (maxFloored - minCeiled + 1)
    ) + minCeiled;
}

/* =====================================================
   CONSOLE INTRO
   ===================================================== */

function ConsoleIntro({ onComplete }: { onComplete: () => void }) {
    const lines = [
        "> RORY.ROUILLON // PORTFOLIO",
        "> INITIALIZING...",
        "> LOADING ASSETS.............. OK",
        "> ASSETS:PICTURES/SHAPES/CIRCLES",
        "> ASSETS:PICTURES/SHAPES/SQUARES",
        "> ASSETS:PICTURES/SHAPES/BUTTONS",
        "> ASSETS:PICTURES/SHAPES/LOGO",
        "> ASSETS:PICTURES/SHAPES/WIREMESH",
        "> ASSETS:PICTURES/SHAPES/TRIANGLES",
        "> ASSETS:PICTURES/GAMES",
        "> ASSETS:PICTURES/SOCIALS",
        "> ASSETS:PICTURES/ICONS",
        "> ALL ASSETS LOADED : NO ERRORS FOUND",
        "> SCRIPTS:APP.TSX..................................LOADED SUCCESSFULLY",
        "> TIME - 95ms",
        "> SCRIPTS:SPLASHSCREEN.TSX.........................LOADED SUCCESSFULLY",
        "> TIME - 22ms",
        "> SCRIPTS:SITE.TSX.................................LOADED SUCCESSFULLY",
        "> TIME - 73ms",
        "> SCRIPTS:GALLERY.TSX..............................LOADED SUCCESSFULLY",
        "> TIME - 108ms",
        "> SCRIPTS:SOCIALS.TSX..............................LOADED SUCCESSFULLY",
        "> TIME - 19ms",
        "> ALL SCRIPTS LOADED : NO ERRORS FOUND",
        "> ALL SYSTEMS OPERATIONAL",
        "> PORTFOLIO/START.BAT",
    ];

    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const [currentText, setCurrentText] = useState("");
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let timeout: ReturnType<typeof setTimeout>;

        const typeNextLine = () => {
            if (lineIndex >= lines.length) {
                timeout = setTimeout(() => {
                    setClosing(true);

                    /*
                     * Give the black console a tiny moment to appear,
                     * then remove it and reveal the splash underneath.
                     */
                    setTimeout(() => {
                        onComplete();
                    }, 100);
                }, 700);

                return;
            }

            const currentLine = lines[lineIndex];

            charIndex = 0;
            setCurrentText("");

            const typeCharacter = () => {
                if (charIndex < currentLine.length) {
                    setCurrentText(
                        currentLine.slice(0, charIndex + 1)
                    );

                    charIndex++;

                    const typingSpeed =
                        Math.random() * 5 + 2;

                    timeout = setTimeout(
                        typeCharacter,
                        typingSpeed
                    );
                } else {
                    setVisibleLines((previous) => [
                        ...previous,
                        currentLine,
                    ]);

                    setCurrentText("");

                    lineIndex++;

                    const pauseChance =
                        getRandomIntInclusive(1, 6);

                    if (pauseChance === 1) {
                        const pause =
                            Math.random() * 450 + 200;

                        timeout = setTimeout(
                            typeNextLine,
                            pause
                        );
                    } else {
                        timeout = setTimeout(
                            typeNextLine,
                            1
                        );
                    }
                }
            };

            typeCharacter();
        };

        timeout = setTimeout(typeNextLine, 250);

        return () => {
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <div
            className={`console-intro ${
    closing ? "console-closing" : ""
}`}
        >
            <div className="console-screen">
                <div className="console-content">
                    {visibleLines.map((line, index) => (
                        <p
                            key={index}
                            className="console-line"
                        >
                            {line}
                        </p>
                    ))}

                    {currentText && (
                        <p className="console-line console-current">
                            {currentText}
                            <span className="console-cursor">
                                _
                            </span>
                        </p>
                    )}

                    {!currentText && (
                        <span className="console-cursor">
                            _
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

/* =====================================================
   DITHER REVEAL
   ===================================================== */

function DitherReveal({
    onComplete,
}: {
    onComplete: () => void;
}) {
    /*
     * More cells = smaller pixels.
     *
     * 32 x 18 gives a nice visible pixel/dither effect
     * while still being reliable and performant.
     */
    const columns = 32;
    const rows = 18;

    const totalCells = columns * rows;

    const [removedCells, setRemovedCells] = useState<
        Set<number>
    >(new Set());

    useEffect(() => {
        /*
         * Create a randomized order.
         *
         * Each number represents one grid cell.
         */
        const order = Array.from(
            { length: totalCells },
            (_, index) => index
        );

        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(
                Math.random() * (i + 1)
            );

            [order[i], order[j]] = [
                order[j],
                order[i],
            ];
        }

        let current = 0;

        /*
         * Remove one cell at a time.
         */
        const interval = setInterval(() => {
            if (current >= order.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 150);

                return;
            }

            const cellToRemove = order[current];

            setRemovedCells((previous) => {
                const next = new Set(previous);

                next.add(cellToRemove);

                return next;
            });

            current++;
        }, 1);

        return () => {
            clearInterval(interval);
        };
    }, [totalCells, onComplete]);

    return (
        <div className="dither-overlay">
            {Array.from(
                { length: totalCells },
                (_, index) => (
                    <div
                        key={index}
                        className={`dither-cell ${
    removedCells.has(index)
        ? "dither-cell-removed"
        : ""
}`}
                    />
                )
            )}
        </div>
    );
}

/* =====================================================
   APP
   ===================================================== */

function App() {
    const [showConsole, setShowConsole] = useState(true);
    const [showDither, setShowDither] = useState(false);

    const finishConsole = () => {
        setShowConsole(false);
        setShowDither(true);
    };

    const finishDither = () => {
        setShowDither(false);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<SplashPage />}
                />

                <Route
                    path="/Site"
                    element={<SitePage />}
                />

                <Route
                    path="/Socials"
                    element={<SocialsPage />}
                />

                <Route
                    path="/Gallery"
                    element={<GalleryPage />}
                />
            </Routes>

            {showConsole && (
                <ConsoleIntro
                    onComplete={finishConsole}
                />
            )}

            {showDither && (
                <DitherReveal
                    onComplete={finishDither}
                />
            )}
        </Router>
    );
}

export default App;
