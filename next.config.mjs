/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://*.oncehub.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://acrtracking.stealthagents.us https://*.oncehub.com https://cloudflareinsights.com; frame-src https://go.oncehub.com https://*.oncehub.com; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" },
];

const nextConfig = {
  async redirects() {
    return [
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/about', destination: '/services', permanent: true },
      { source: '/services/admin-support', destination: '/services/crm-data-stewardship', permanent: true },
      { source: '/services/recruitment-support', destination: '/services/workforce-scheduling', permanent: true },
      { source: '/services/finance-operations', destination: '/services/order-operations', permanent: true },
      { source: '/services/finance-operations-support', destination: '/services/order-operations', permanent: true },
      { source: '/services/reporting-and-qa', destination: '/services/quality-audit-support', permanent: true },
      { source: '/services/customer-support', destination: '/services/operations-dispatch', permanent: true },
      { source: '/services/operations-support', destination: '/services/operations-dispatch', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.outsourcedlabor.com' }], destination: 'https://outsourcedlabor.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }], destination: 'https://outsourcedlabor.com/:path*', permanent: true },
    ];
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
export default nextConfig;
