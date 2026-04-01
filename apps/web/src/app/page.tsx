export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <nav className="w-full bg-primary text-primary-foreground py-3 px-6 flex justify-between items-center fixed top-0">
        <h1 className="font-bold text-lg">Test Firm</h1>
        <a href="/contact" className="bg-primary-foreground text-primary px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
          Contact Us
        </a>
      </nav>
      <div className="text-center space-y-6 mt-20">
        <h2 className="text-5xl font-bold">Welcome to Test Firm</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          We are a professional services company dedicated to excellence.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/services" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90">
            Our Services
          </a>
          <a href="/about" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10">
            About Us
          </a>
        </div>
      </div>
      <section className="mt-24 grid grid-cols-3 gap-8 max-w-5xl px-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Service One</h3>
          <p className="text-muted-foreground text-sm">High quality professional consulting for your business needs.</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Service Two</h3>
          <p className="text-muted-foreground text-sm">Strategic planning and implementation support.</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-2">Service Three</h3>
          <p className="text-muted-foreground text-sm">End-to-end project management and delivery.</p>
        </div>
      </section>
      <footer className="mt-24 py-8 border-t border-border w-full text-center text-sm text-muted-foreground">
        <p>&copy; 2026 Test Firm. All rights reserved.</p>
        <p className="mt-1">(555) 123-4567 &middot; info@test-firm.com</p>
      </footer>
    </main>
  );
}
