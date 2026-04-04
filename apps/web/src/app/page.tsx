import Header from "./Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px" }}>Welcome to Test Firm</h2>
        <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", maxWidth: "600px", marginBottom: "32px" }}>We are a professional services company dedicated to excellence.</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="/services" style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>Our Services</a>
          <a href="/about" style={{ border: "2px solid var(--primary)", color: "var(--primary)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none" }}>About Us</a>
        </div>
      </div>
      <section style={{ maxWidth: "600px", margin: "48px auto", padding: "0 24px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px", textAlign: "center" }}>Contact Us</h2>
        <form style={{ display: "flex", flexDirection: "column", gap: "16px", background: "var(--card)", padding: "32px", borderRadius: "12px", border: "1px solid var(--border)" }}>
          <div>
            <label htmlFor="name" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", boxSizing: "border-box" }}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", boxSizing: "border-box" }}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              style={{ width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", resize: "vertical", fontFamily: "inherit", boxSizing: "border-box" }}
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "14px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "1rem", cursor: "pointer", border: "none", marginTop: "8px" }}
          >
            Send Message
          </button>
        </form>
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
        <p>&copy; 2025 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
