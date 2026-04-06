import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px" }}>Agent Verified</h2>
        <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", maxWidth: "600px", marginBottom: "32px" }}>Agent Pipeline Verified</p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="/blog" style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Read Our Blog</a>
          <a href="/services" style={{ border: "2px solid var(--primary)", color: "var(--primary)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Our Services</a>
          <a href="/about" style={{ border: "2px solid var(--primary)", color: "var(--primary)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>About Us</a>
        </div>
      </div>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "960px", margin: "0 auto", padding: "0 24px 64px" }}>
        {["Service One", "Service Two", "Service Three"].map((name) => (
          <div key={name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
            <h3 style={{ color: "var(--primary)", fontSize: "1.125rem", fontWeight: 600, marginBottom: "8px" }}>{name}</h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>High quality professional consulting for your business needs.</p>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2025 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
