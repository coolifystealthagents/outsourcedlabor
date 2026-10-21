import type { ReactNode } from 'react';
import { EditorialNavigator } from '../editorial-navigator';

export default function ResearchLayout({children}:{children:ReactNode}){return <>{children}<EditorialNavigator family="research"/></>}
