
document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("footer-placeholder");

    if (!placeholder) return;

    placeholder.innerHTML = `
        <footer class="site-footer">
            <div class="footer-directory">
                <div class="footer-column">
                    <h3>HOOP DTM</h3>
                    <a href="index.html">Home</a>
                    <a href="teams.html">All Teams</a>
                    <a href="players.html">All Players</a>
                </div>

                <div class="footer-column">
                    <h3>STATISTICS</h3>
                    <a href="leaders.html">Player Leaders</a>
                    <a href="stats.html">Team Stats</a>
                    <a href="standings.html">Standings</a>
                </div>

                <div class="footer-column">
                    <h3>COMPETITION</h3>
                    <a href="playoffs.html">Playoffs</a>
                    <a href="playoffs.html">NBA Finals</a>
                    <a href="playoffs.html">Champions</a>
                </div>

                <div class="footer-column">
                    <h3>EXPLORE</h3>
                    <a href="index.html">Latest Season</a>
                    <a href="teams.html">Teams Directory</a>
                    <a href="players.html">Players Directory</a>
                </div>
            </div>

            
<div class="footer-social">
    <span>FOLLOW HOOP DTM:</span>

    <a href="#" aria-label="YouTube" title="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
        </svg>
    </a>

    <a href="#" aria-label="Instagram" title="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 3.1a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2.2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.1-3.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>
        </svg>
    </a>

    <a href="#" aria-label="X" title="X">
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
                d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.8 4.8 22H1.7l7.3-8.4L.8 2h6.5l4.5 7.5L18.9 2Zm-1.1 17.9h1.7L6.3 4H4.5l13.3 15.9Z"/>
        </svg>
    </a>
</div>


            <div class="footer-bottom">
                <p>© 2026 Hoop DTM. All rights reserved.</p>
                <div>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </div>
            </div>
        </footer>
    `;
});
