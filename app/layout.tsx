import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedlabor.com'), title: { default: 'Outsourced Labor | Offshore outsourcing guides', template: '%s | Outsourced Labor' }, description: 'Stealth Agents-style guides for outsourced labor: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Outsourced Labor', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedlabor.com', siteName: 'Outsourced Labor', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
