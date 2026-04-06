import { client, POST_QUERY } from "../../sanity/client";
import Header from "../Header";
import Link from "next/link";

async function getPosts() {
  return await client.fetch(POST_QUERY);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <Header />
      <div style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "64px 24px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "16px", color: "var(--foreground)" }}>
            Our Blog
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--muted-foreground)", marginBottom: "48px" }}>
            Insights and thoughts on technology, business, and innovation
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {posts.map((post: any) => (
              <article
                key={post._id}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "32px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  {post.categories && post.categories.length > 0 && (
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                      {post.categories.map((category: string) => (
                        <span
                          key={category}
                          style={{
                            background: "var(--muted)",
                            color: "var(--muted-foreground)",
                            padding: "4px 12px",
                            borderRadius: "16px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                          }}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 style={{ fontSize: "1.75rem", fontWeight: 600, marginBottom: "12px", color: "var(--foreground)" }}>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      style={{
                        color: "var(--foreground)",
                        textDecoration: "none",
                      }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.publishedAt && (
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  )}
                </div>

                {post.excerpt && (
                  <p style={{ fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.6, marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                )}

                <Link
                  href={`/blog/${post.slug.current}`}
                  style={{
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
