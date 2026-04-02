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
      <section style={{ padding: "64px 24px" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "48px" }}>What Our Customers Say</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
          {[
            { quote: "Working with Test Firm has been an absolute game-changer for our business. Their expertise and professionalism exceeded our expectations.", name: "Sarah Johnson", company: "TechStart Inc." },
            { quote: "The team at Test Firm delivered exceptional results on time and within budget. I highly recommend their services to anyone seeking quality solutions.", name: "Michael Chen", company: "Global Solutions LLC" },
            { quote: "Test Firm's innovative approach helped us solve complex challenges we had been struggling with for years. Truly remarkable work!", name: "Emily Rodriguez", company: "Innovate Corp" }
          ].map((testimonial, index) => (
            <div key={index} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>
              <p style={{ fontSize: "0.9375rem", color: "var(--muted-foreground)", fontStyle: "italic", marginBottom: "16px", flexGrow: 1 }}>"{testimonial.quote}"</p>
              <div>
                <p style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "4px" }}>{testimonial.name}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>{testimonial.company}</p>
              </div>
            </div>
          ))}
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
