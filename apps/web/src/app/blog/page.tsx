import Header from "../Header";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-digital-transformation",
    title: "Getting Started with Digital Transformation",
    excerpt: "Learn the essential steps to begin your company's digital transformation journey and stay competitive in today's market.",
    date: "2025-04-01",
    author: "Sarah Johnson",
    category: "Strategy"
  },
  {
    slug: "5-ways-to-improve-your-online-presence",
    title: "5 Ways to Improve Your Online Presence",
    excerpt: "Discover actionable strategies to enhance your digital footprint and attract more customers to your business.",
    date: "2025-03-28",
    author: "Michael Chen",
    category: "Marketing"
  },
  {
    slug: "the-importance-of-cybersecurity-for-small-businesses",
    title: "The Importance of Cybersecurity for Small Businesses",
    excerpt: "Understanding why cybersecurity matters for small businesses and practical steps to protect your data.",
    date: "2025-03-25",
    author: "Emily Rodriguez",
    category: "Security"
  },
  {
    slug: "building-a-strong-company-culture",
    title: "Building a Strong Company Culture",
    excerpt: "Tips and best practices for creating a positive and productive work environment that drives success.",
    date: "2025-03-20",
    author: "David Williams",
    category: "Management"
  }
];

export default function Blog() {
  return (
    <main>
      <Header />
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px", color: "var(--foreground)" }}>
          Our Blog
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", marginBottom: "48px" }}>
          Insights, tips, and industry news to help your business thrive
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "32px",
                transition: "transform 0.2s ease",
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <span style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                }}>
                  {post.category}
                </span>
              </div>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "12px", color: "var(--foreground)" }}>
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: "var(--primary)",
                    textDecoration: "none",
                  }}
                >
                  {post.title}
                </Link>
              </h2>

              <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", marginBottom: "16px", lineHeight: 1.6 }}>
                {post.excerpt}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                <span>{post.author}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2025 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
