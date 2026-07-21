import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedlabor.com'), title: { default: 'Outsourced Labor | Filipino staffing plans', template: '%s | Outsourced Labor' }, description: 'Plan recurring operations roles for Filipino talent, with clear tasks, approval limits, onboarding, and review rules.', openGraph: { title: 'Outsourced Labor', description: 'Practical role planning for businesses hiring talent in the Philippines.', url: 'https://outsourcedlabor.com', siteName: 'Outsourced Labor', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
