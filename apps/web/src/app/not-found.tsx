export default function NotFound() {
  return (
    <main>
      <nav style={{ width: "100%", background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, zIndex: 10 }}>
        <a href="/" style={{ fontWeight: "bold", fontSize: "1.25rem", color: "var(--primary-foreground)", textDecoration: "none" }}>Test Firm</a>
        <a href="/contact" style={{ background: "var(--primary-foreground)", color: "var(--primary)", padding: "8px 16px", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Contact Us</a>
      </nav>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <p style={{ fontSize: "6rem", fontWeight: "bold", color: "var(--primary)", marginBottom: "0", lineHeight: 1 }}>404</p>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "12px" }}>Page Not Found</h2>
        <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "480px", marginBottom: "32px" }}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/" style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Back to Home</a>
          <a href="/contact" style={{ border: "2px solid var(--primary)", color: "var(--primary)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Contact Us</a>
        </div>
      </div>
      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2026 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
