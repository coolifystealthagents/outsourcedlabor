import { sep14BlogTopics } from '../../sep14-records';
import { september14ResearchRecords } from '../../research/sep14-research-records';

const validSlugs = new Set([
  ...sep14BlogTopics.map(([slug]) => slug),
  ...september14ResearchRecords.map(({ slug }) => slug),
]);

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character] || character);

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!validSlugs.has(slug)) return new Response('Not found', { status: 404 });
  const label = slug.replace(/^research-/, '').replaceAll('-', ' ');
  const hue = [...slug].reduce((sum, character) => sum + character.charCodeAt(0), 0) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">${escapeXml(label)}</title><desc id="desc">Outsourced Labor operations field note published September 14, 2026</desc><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue} 42% 19%)"/><stop offset="1" stop-color="hsl(${(hue + 38) % 360} 62% 34%)"/></linearGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="1010" cy="120" r="210" fill="rgba(249,115,22,.22)"/><rect x="80" y="90" width="1040" height="450" rx="32" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.24)"/><text x="130" y="175" fill="#fb923c" font-family="Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="4">OUTSOURCED LABOR · FIELD NOTE</text><foreignObject x="126" y="215" width="900" height="190"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 48px/1.13 Arial,sans-serif;color:white;text-transform:capitalize">${escapeXml(label)}</div></foreignObject><text x="130" y="475" fill="#f4f4f5" font-family="Arial,sans-serif" font-size="25">Published September 14, 2026</text></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000, immutable' } });
}
