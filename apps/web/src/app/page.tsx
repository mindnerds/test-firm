export default function Home() {
  return (
    <main>
      <nav style={{ width: "100%", background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, zIndex: 10 }}>
        <h1 style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Test Firm</h1>
        <a href="/contact" style={{ background: "var(--primary-foreground)", color: "var(--primary)", padding: "8px 16px", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Contact Us</a>
      </nav>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px" }}>Welcome to Test Firm</h2>
        <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", maxWidth: "600px", marginBottom: "32px" }}>We are a professional services company dedicated to excellence.</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/services" style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Our Services</a>
          <a href="/about" style={{ border: "2px solid var(--primary)", color: "var(--primary)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>About Us</a>
        </div>
      </div>
      <section style={{ padding: "64px 24px", background: "var(--secondary)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "48px", textAlign: "center", color: "var(--foreground)" }}>What Our Customers Say</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              {
                quote: "Test Firm exceeded our expectations with their professional service and attention to detail.",
                name: "Sarah Johnson",
                company: "Tech Solutions Inc."
              },
              {
                quote: "Outstanding work and excellent communication throughout the entire project.",
                name: "Michael Chen",
                company: "Global Enterprises"
              },
              {
                quote: "Highly recommended! They delivered quality results on time and within budget.",
                name: "Emily Rodriguez",
                company: "Strategic Partners"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "12px", padding: "32px", display: "flex", flexDirection: "column" }}>
                <p style={{ color: "var(--foreground)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "24px", flex: 1 }}>"{testimonial.quote}"</p>
                <div>
                  <p style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "1rem", marginBottom: "4px" }}>{testimonial.name}</p>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "960px", margin: "0 auto", padding: "0 24px 64px" }}>
        {["Service One", "Service Two", "Service Three"].map((name) => (
          <div key={name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
            <h3 style={{ color: "var(--primary)", fontSize: "1.125rem", fontWeight: 600, marginBottom: "8px" }}>{name}</h3>
            <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>High quality professional consulting for your business needs.</p>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2026 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
