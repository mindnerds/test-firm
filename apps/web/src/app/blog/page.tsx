import Header from '../Header';
import { client } from '@/sanity/client';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  author: string;
  categories: string[];
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    author,
    categories
  }`;
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <Header />
      <div style={{ minHeight: "100vh", padding: "120px 24px 64px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "48px", color: "var(--primary)" }}>Blog</h1>

          {posts.length === 0 ? (
            <p style={{ color: "var(--muted-foreground)" }}>No posts yet. Check back soon!</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {posts.map((post) => (
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
                  <a
                    href={`/blog/${post.slug.current}`}
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <div style={{ marginBottom: "16px" }}>
                      {post.categories && post.categories.length > 0 && (
                        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                          {post.categories.map((category) => (
                            <span
                              key={category}
                              style={{
                                background: "var(--primary)",
                                color: "var(--primary-foreground)",
                                padding: "4px 12px",
                                borderRadius: "9999px",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                              }}
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      <time
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <h2
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 600,
                        marginBottom: "16px",
                        color: "var(--foreground)",
                      }}
                    >
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p
                        style={{
                          color: "var(--muted-foreground)",
                          fontSize: "1.125rem",
                          lineHeight: "1.6",
                          marginBottom: "16px",
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}

                    {post.author && (
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--primary)",
                          fontWeight: 500,
                        }}
                      >
                        By {post.author}
                      </p>
                    )}
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
