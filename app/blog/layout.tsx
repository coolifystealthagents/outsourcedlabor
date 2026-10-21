import type { ReactNode } from 'react';
import { BlogBanner } from '../blog-banners';
import { EditorialNavigator } from '../editorial-navigator';

export default function BlogLayout({children}:{children:ReactNode}){return <>
  <BlogBanner position="top"/>
  {children}
  <EditorialNavigator family="blog"/>
  <BlogBanner position="middle"/>
  <BlogBanner position="bottom"/>
</>}
