import "./styles.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>Contact us:</p>
            <p>
                <a href="mailto:aviljugrein@ecit.no" className="footer-link">
                    aviljugrein@ecit.no
                </a>
            </p>
            <p>
                <a href="tel:+1234567890" className="footer-link">
                    +47 924 26 236
                </a>
            </p>
        </footer>
    );
}
