export default function About() {
  const team = [
    { name: "Sarah Chen", role: "Managing Partner", bio: "With over 20 years of experience in strategic consulting, Sarah founded Test Firm to help businesses unlock their full potential." },
    { name: "David Okafor", role: "Director of Operations", bio: "David brings a decade of operational expertise, streamlining processes and driving efficiency for clients across industries." },
    { name: "Maria Gonzalez", role: "Head of Client Services", bio: "Maria is passionate about building lasting client relationships and ensuring every engagement delivers measurable results." },
    { name: "James Whitfield", role: "Senior Consultant", bio: "James specializes in market analysis and growth strategy, helping companies navigate complex competitive landscapes." },
  ];

  return (
    <main>
      <nav style={{ width: "100%", background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed", top: 0, zIndex: 10 }}>
        <a href="/" style={{ fontWeight: "bold", fontSize: "1.25rem", textDecoration: "none", color: "inherit" }}>Test Firm</a>
        <a href="/contact" style={{ background: "var(--primary-foreground)", color: "var(--primary)", padding: "8px 16px", borderRadius: "6px", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Contact Us</a>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "100px", paddingBottom: "48px", textAlign: "center", maxWidth: "720px", margin: "0 auto", padding: "100px 24px 48px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px" }}>About Us</h2>
        <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
          Test Firm was founded in 2018 with a simple mission: deliver honest, results-driven consulting that makes a real difference. We partner with businesses of all sizes to solve tough problems, seize new opportunities, and build strategies that last.
        </p>
      </section>

      {/* Values */}
      <section style={{ background: "var(--card)", padding: "48px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "32px" }}>Our Values</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {[
              { title: "Integrity", desc: "We believe trust is earned through transparency, honest advice, and always putting our clients' interests first." },
              { title: "Excellence", desc: "Every project receives our full attention. We hold ourselves to the highest standards and never cut corners." },
              { title: "Collaboration", desc: "The best results come from working together. We treat every client relationship as a true partnership." },
            ].map((v) => (
              <div key={v.title} style={{ background: "var(--background)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
                <h4 style={{ color: "var(--primary)", fontSize: "1.125rem", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>{v.title}</h4>
                <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "32px" }}>Meet the Team</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {team.map((member) => (
            <div key={member.name} style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "24px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--primary)", color: "var(--primary-foreground)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.25rem", marginBottom: "12px" }}>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 600, margin: "0 0 4px" }}>{member.name}</h4>
              <p style={{ color: "var(--primary)", fontSize: "0.875rem", fontWeight: 500, margin: "0 0 8px" }}>{member.role}</p>
              <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--card)", padding: "48px 24px", textAlign: "center" }}>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "12px" }}>Ready to work together?</h3>
        <p style={{ color: "var(--muted-foreground)", marginBottom: "24px" }}>Get in touch and let&apos;s talk about how we can help your business grow.</p>
        <a href="/contact" style={{ background: "var(--primary)", color: "var(--primary-foreground)", padding: "12px 24px", borderRadius: "8px", fontWeight: 500, textDecoration: "none", display: "inline-block" }}>Contact Us</a>
      </section>

      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2026 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 &middot; info@test-firm.com</p>
      </footer>
    </main>
  );
}
