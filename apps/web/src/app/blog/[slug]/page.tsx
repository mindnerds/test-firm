import { client, POST_BY_SLUG_QUERY } from "../../../sanity/client";
import Header from "../../Header";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  return await client.fetch(POST_BY_SLUG_QUERY, { slug });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Header />
      <div style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 24px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--muted-foreground)",
              textDecoration: "none",
              fontSize: "0.875rem",
              marginBottom: "24px",
              ":hover": { color: "var(--primary)" },
            }}
          >
            ← Back to Blog
          </Link>

          {post.categories && post.categories.length > 0 && (
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
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

          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "16px", lineHeight: 1.2, color: "var(--foreground)" }}>
            {post.title}
          </h1>

          <div style={{ display: "flex", gap: "24px", fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "32px" }}>
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {post.author && <span>By {post.author}</span>}
          </div>

          <div
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "var(--foreground)",
            }}
          >
            {post.content &&
              post.content.map((block: any) => {
                if (block._type === "block") {
                  if (block.style === "h2") {
                    return (
                      <h2 key={block._key} style={{ fontSize: "1.75rem", fontWeight: 600, marginTop: "48px", marginBottom: "16px", color: "var(--foreground)" }}>
                        {block.children.map((child: any) => child.text).join("")}
                      </h2>
                    );
                  } else if (block.style === "h3") {
                    return (
                      <h3 key={block._key} style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "32px", marginBottom: "12px", color: "var(--foreground)" }}>
                        {block.children.map((child: any) => child.text).join("")}
                      </h3>
                    );
                  } else if (block.listItem === "bullet") {
                    return (
                      <li key={block._key} style={{ marginBottom: "8px", marginLeft: "24px" }}>
                        {block.children.map((child: any) => child.text).join("")}
                      </li>
                    );
                  } else if (block.listItem === "number") {
                    return (
                      <li key={block._key} style={{ marginBottom: "8px", marginLeft: "24px" }}>
                        {block.children.map((child: any) => child.text).join("")}
                      </li>
                    );
                  } else {
                    return (
                      <p key={block._key} style={{ marginBottom: "16px" }}>
                        {block.children.map((child: any) => {
                          if (child.marks && child.marks.includes("strong")) {
                            return <strong key={child._key}>{child.text}</strong>;
                          } else if (child.marks && child.marks.includes("code")) {
                            return (
                              <code key={child._key} style={{
                                background: "var(--muted)",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                fontFamily: "monospace",
                                fontSize: "0.9em"
                              }}>
                                {child.text}
                              </code>
                            );
                          } else {
                            return <span key={child._key}>{child.text}</span>;
                          }
                        })}
                      </p>
                    );
                  }
                }
                return null;
              })}
          </div>
        </article>
      </div>
    </main>
  );
}
