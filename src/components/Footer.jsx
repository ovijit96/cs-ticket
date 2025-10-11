export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-grid">
        <section className="footer-brand">
          <h3>CS — Ticket System</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard dummy text since the 1500s.
          </p>
        </section>

        <nav className="footer-col" aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact Sales</a></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Services">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Products & Services</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Download Apps</a></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Information">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </nav>

        <section className="footer-col" aria-label="Social Links">
          <h4>Social Links</h4>
          <ul className="social">
            <li>🟢 <a href="#">@CS — Ticket System</a></li>
            <li>🔵 <a href="#">@CS — Ticket System</a></li>
            <li>⚫ <a href="#">@CS — Ticket System</a></li>
            <li>✉️ <a href="mailto:support@cst.com">support@cst.com</a></li>
          </ul>
        </section>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</small>
      </div>
    </footer>
  );
}
