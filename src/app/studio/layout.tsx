/**
 * The site's pages live under app/[lang], each language with its own root
 * layout, so the embedded Studio needs a bare root layout of its own.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
