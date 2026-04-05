export default function Header() {
  return (
    <nav style={{ width: "100%", background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, zIndex: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Test Firm</h1>
        <a href="/blog" style={{ color: "var(--primary-foreground)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}>Blog</a>
        <a href="tel:5551234567" style={{ color: "#2563eb", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "1.1rem" }}>📞</span>
          (555) 123-4567
        </a>
      </div>
      <a href="/contact" style={{ background: "var(--primary-foreground)", color: "var(--primary)", padding: "8px 16px", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Contact Us</a>
    </nav>
  );
}
