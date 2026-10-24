import { useEffect } from 'react';

/**
 * ArticleMeta
 * 
 * Dynamically updates <head> metadata for each article:
 * - <title>
 * - <meta name="description">
 * - Open Graph tags
 * - Twitter Card tags
 * - Canonical <link>
 * - JSON-LD structured data injection
 * 
 * Props: { meta } object per article.
 */
export default function ArticleMeta({ meta }) {
  useEffect(() => {
    if (!meta) return;

    // ── Page title ──
    document.title = meta.title;

    // ── Helper: upsert <meta> tag ──
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [, attr, val] = selector.match(/\[(\w+)="([^"]+)"\]/);
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Helper: upsert <link> tag ──
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard SEO ──
    setMeta('[name="description"]', meta.description);
    setMeta('[name="keywords"]', meta.keywords?.join(', ') || '');
    setMeta('[name="author"]', meta.author || 'Sunflower Clinic Medical Team');
    setMeta('[name="robots"]', 'index, follow');

    // ── Open Graph ──
    setMeta('[property="og:title"]', meta.title);
    setMeta('[property="og:description"]', meta.description);
    setMeta('[property="og:url"]', `https://sunflowerclinic.com${meta.slug}`);
    setMeta('[property="og:type"]', 'article');
    setMeta('[property="og:site_name"]', 'Sunflower Clinic');
    setMeta('[property="og:image"]', meta.ogImage || 'https://sunflowerclinic.com/og-default.jpg');

    // ── Twitter Card ──
    setMeta('[name="twitter:card"]', 'summary_large_image');
    setMeta('[name="twitter:site"]', '@sunflowersober');
    setMeta('[name="twitter:title"]', meta.title);
    setMeta('[name="twitter:description"]', meta.description);
    setMeta('[name="twitter:image"]', meta.ogImage || 'https://sunflowerclinic.com/og-default.jpg');

    // ── Canonical link ──
    setLink('canonical', `https://sunflowerclinic.com${meta.slug}`);

    // ── JSON-LD Structured Data ──
    const existingLd = document.getElementById('article-jsonld');
    if (existingLd) existingLd.remove();

    if (meta.jsonLd) {
      const script = document.createElement('script');
      script.id = 'article-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(meta.jsonLd, null, 2);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const ldScript = document.getElementById('article-jsonld');
      if (ldScript) ldScript.remove();
    };
  }, [meta?.slug]);

  return null; // purely side-effect component
}
