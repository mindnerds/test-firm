import Header from "../../Header";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-digital-transformation",
    title: "Getting Started with Digital Transformation",
    excerpt: "Learn the essential steps to begin your company's digital transformation journey and stay competitive in today's market.",
    date: "2025-04-01",
    author: "Sarah Johnson",
    category: "Strategy",
    content: `
      <p>Digital transformation is no longer optional—it's essential for businesses looking to remain competitive in today's rapidly evolving marketplace. But where do you begin? This guide will walk you through the foundational steps to start your digital transformation journey successfully.</p>

      <h2>Assess Your Current State</h2>
      <p>Before diving into new technologies, take time to evaluate your current operations. What processes are working well? Where are the bottlenecks? Understanding your starting point helps create a clear roadmap for improvement.</p>

      <h2>Set Clear Objectives</h2>
      <p>Define what digital transformation means for your organization. Are you looking to improve customer experience, streamline operations, or enter new markets? Clear objectives will guide your technology choices and investment decisions.</p>

      <h2>Build a Strong Foundation</h2>
      <p>Start with core systems that support your daily operations. Cloud infrastructure, customer relationship management (CRM) systems, and collaboration tools are excellent starting points for most businesses.</p>

      <h2>Invest in Your Team</h2>
      <p>Technology is only as effective as the people using it. Provide training and support to help your team adapt to new tools and processes. Consider hiring or developing digital skills within your existing workforce.</p>

      <h2>Measure and Iterate</h2>
      <p>Establish key performance indicators (KPIs) to track your progress. Regular review and adjustment of your strategy ensures you're moving in the right direction and achieving your goals.</p>

      <h2>Conclusion</h2>
      <p>Digital transformation is a journey, not a destination. Start small, learn from each step, and continuously evolve your approach. With patience and persistence, you'll build a more agile, efficient, and competitive organization.</p>
    `
  },
  {
    slug: "5-ways-to-improve-your-online-presence",
    title: "5 Ways to Improve Your Online Presence",
    excerpt: "Discover actionable strategies to enhance your digital footprint and attract more customers to your business.",
    date: "2025-03-28",
    author: "Michael Chen",
    category: "Marketing",
    content: `
      <p>Your online presence is often the first impression potential customers have of your business. Here are five proven strategies to strengthen your digital footprint and attract more customers.</p>

      <h2>1. Optimize Your Website</h2>
      <p>Ensure your website is mobile-friendly, loads quickly, and provides valuable information. A well-designed, user-friendly website builds trust and encourages visitors to take action.</p>

      <h2>2. Leverage Social Media</h2>
      <p>Choose platforms where your target audience spends time and engage consistently. Share valuable content, respond to comments, and build relationships with your followers.</p>

      <h2>3. Create Valuable Content</h2>
      <p>Develop content that addresses your audience's needs and questions. Blog posts, videos, and infographics can establish your expertise and attract organic traffic.</p>

      <h2>4. Build Local SEO</h2>
      <p>Optimize for local search by claiming your Google Business Profile, encouraging reviews, and including location-specific keywords throughout your online content.</p>

      <h2>5. Encourage Reviews and Testimonials</h2>
      <p>Positive reviews build credibility and trust. Make it easy for satisfied customers to share their experiences and showcase these testimonials prominently on your website.</p>

      <h2>Start Today</h2>
      <p>Improving your online presence is an ongoing process. Pick one strategy to start with, measure your results, and gradually expand your efforts. Consistency and quality will yield the best results over time.</p>
    `
  },
  {
    slug: "the-importance-of-cybersecurity-for-small-businesses",
    title: "The Importance of Cybersecurity for Small Businesses",
    excerpt: "Understanding why cybersecurity matters for small businesses and practical steps to protect your data.",
    date: "2025-03-25",
    author: "Emily Rodriguez",
    category: "Security",
    content: `
      <p>Many small business owners believe cybersecurity is only a concern for large corporations. However, small businesses are increasingly becoming targets for cybercriminals. Here's why cybersecurity matters and how you can protect your business.</p>

      <h2>Why Small Businesses Are Targets</h2>
      <p>Cybercriminals often target small businesses because they typically have fewer security measures in place. The misconception that "we're too small to be targeted" makes many businesses vulnerable to attacks.</p>

      <h2>Common Cyber Threats</h2>
      <p>Be aware of threats such as phishing attacks, ransomware, data breaches, and social engineering. Understanding these risks is the first step in protecting your business.</p>

      <h2>Essential Security Measures</h2>
      <p>Implement strong passwords, enable two-factor authentication, keep software updated, and regularly back up your data. These basic practices can prevent many common attacks.</p>

      <h2>Employee Training</h2>
      <p>Your employees are your first line of defense. Train them to recognize phishing attempts, use secure practices, and report suspicious activity immediately.</p>

      <h2>Develop a Response Plan</h2>
      <p>Create an incident response plan before you need it. Knowing what to do in the event of a breach can minimize damage and help you recover more quickly.</p>

      <h2>Invest in Protection</h2>
      <p>Cybersecurity is an investment in your business's future. The cost of prevention is far less than the potential cost of a data breach in terms of financial loss and reputational damage.</p>
    `
  },
  {
    slug: "building-a-strong-company-culture",
    title: "Building a Strong Company Culture",
    excerpt: "Tips and best practices for creating a positive and productive work environment that drives success.",
    date: "2025-03-20",
    author: "David Williams",
    category: "Management",
    content: `
      <p>Company culture isn't just about perks and benefits—it's the foundation of your organization's success. A strong culture attracts top talent, improves retention, and drives performance.</p>

      <h2>Define Your Core Values</h2>
      <p>Start by identifying the principles that guide your business. Your core values should inform every decision, from hiring to customer service, and be reflected in daily operations.</p>

      <h2>Lead by Example</h2>
      <p>Leadership sets the tone for the entire organization. Model the behaviors and attitudes you expect from your team. Your actions speak louder than any mission statement.</p>

      <h2>Prioritize Communication</h2>
      <p>Foster open, honest communication at all levels. Regular team meetings, feedback channels, and transparent decision-making build trust and alignment.</p>

      <h2>Celebrate Success</h2>
      <p>Recognize and reward achievements, both big and small. Celebrating wins reinforces positive behaviors and motivates your team to continue performing at their best.</p>

      <h2>Support Growth and Development</h2>
      <p>Invest in your employees' professional growth. Provide training opportunities, mentorship programs, and clear career paths. When people feel they're growing, they're more engaged and committed.</p>

      <h2>Embrace Diversity and Inclusion</h2>
      <p>A diverse and inclusive workplace brings different perspectives and experiences, leading to better decision-making and innovation. Create an environment where everyone feels valued and respected.</p>

      <h2>Build a Culture of Trust</h2>
      <p>Trust is the foundation of any strong culture. Be transparent, keep your promises, and give your team autonomy. When people trust their leaders and colleagues, they're more willing to collaborate and innovate.</p>

      <h2>Conclusion</h2>
      <p>Building a strong company culture takes time and consistent effort, but the results are worth it. A positive culture not only makes your workplace more enjoyable but also contributes directly to your business's bottom line.</p>
    `
  }
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Header />
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "var(--primary)",
            textDecoration: "none",
            fontWeight: 500,
            marginBottom: "24px",
          }}
        >
          ← Back to Blog
        </Link>

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

        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "16px", color: "var(--foreground)", lineHeight: 1.2 }}>
          {post.title}
        </h1>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "var(--foreground)",
          }}
        />

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Read More Articles →
          </Link>
        </div>
      </article>

      <footer style={{ padding: "32px", borderTop: "1px solid var(--border)", textAlign: "center", fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
        <p>&copy; 2025 Test Firm. All rights reserved.</p>
        <p>(555) 123-4567 · info@test-firm.com</p>
      </footer>
    </main>
  );
}
