import { useState } from "react";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Download", href: "#" },
  { label: "Contact", href: "#" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar" role="navigation">
      <div className="nav-row">
        <div className="brand">CS — Ticket System</div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-right ${open ? "open" : ""}`}>
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <a className="btn cta" href="#">+ New Ticket</a>
        </nav>
      </div>
    </header>
  );
}
