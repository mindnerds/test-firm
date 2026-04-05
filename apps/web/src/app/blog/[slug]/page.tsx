import Header from '../../Header';
import { client } from '@/sanity/client';
import { notFound } from 'next/navigation';

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  author: string;
  categories: string[];
  excerpt: string;
  content: Array<{
    _key: string;
    _type: string;
    style?: string;
    children: Array<{
      _type: string;
      text: string;
    }>;
    level?: number;
    listItem?: string;
  }>;
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    author,
    categories,
    excerpt,
    content
  }`;
  return client.fetch(query, { slug });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Test Firm Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const renderContent = (content: Post['content']) => {
    return content.map((block) => {
      const text = block.children.map((child) => child.text).join('');

      if (block.style === 'h1') {
        return (
          <h1
            key={block._key}
            style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginTop: '32px',
              marginBottom: '16px',
              color: 'var(--foreground)',
            }}
          >
            {text}
          </h1>
        );
      }

      if (block.style === 'h2') {
        return (
          <h2
            key={block._key}
            style={{
              fontSize: '1.875rem',
              fontWeight: '600',
              marginTop: '24px',
              marginBottom: '12px',
              color: 'var(--foreground)',
            }}
          >
            {text}
          </h2>
        );
      }

      if (block.style === 'h3') {
        return (
          <h3
            key={block._key}
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '20px',
              marginBottom: '10px',
              color: 'var(--foreground)',
            }}
          >
            {text}
          </h3>
        );
      }

      if (block.listItem === 'bullet') {
        return (
          <li
            key={block._key}
            style={{
              marginLeft: '24px',
              marginBottom: '8px',
              color: 'var(--foreground)',
            }}
          >
            {text}
          </li>
        );
      }

      if (block.listItem === 'number') {
        return (
          <li
            key={block._key}
            style={{
              marginLeft: '24px',
              marginBottom: '8px',
              color: 'var(--foreground)',
              listStyleType: 'decimal',
            }}
          >
            {text}
          </li>
        );
      }

      return (
        <p
          key={block._key}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.7',
            marginBottom: '16px',
            color: 'var(--foreground)',
          }}
        >
          {text}
        </p>
      );
    });
  };

  return (
    <main>
      <Header />
      <article style={{ minHeight: "100vh", padding: "120px 24px 64px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <a
            href="/blog"
            style={{
              display: "inline-block",
              marginBottom: "24px",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Back to Blog
          </a>

          {post.categories && post.categories.length > 0 && (
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
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
              marginBottom: "16px",
            }}
          >
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "24px",
              lineHeight: "1.2",
              color: "var(--foreground)",
            }}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                marginBottom: "32px",
                lineHeight: "1.6",
              }}
            >
              {post.excerpt}
            </p>
          )}

          {post.author && (
            <div
              style={{
                padding: "24px 0",
                borderBottom: "1px solid var(--border)",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                  marginBottom: "4px",
                }}
              >
                Written by
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--foreground)",
                  fontWeight: 600,
                }}
              >
                {post.author}
              </p>
            </div>
          )}

          <div style={{ fontSize: "1.125rem", lineHeight: "1.8" }}>
            {renderContent(post.content)}
          </div>
        </div>
      </article>
    </main>
  );
}
