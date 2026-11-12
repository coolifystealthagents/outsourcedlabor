import {Library} from '../library';
import {normalizePosts} from '../library-normalize';
import {blogPosts} from '../data';
import {Header,Footer} from '../components';
import {notFound} from 'next/navigation';
import {FeaturedComparison} from './FeaturedComparison';
export const PAGE_SIZE=20;
export function BlogListing({page=1}:{page?:number}){if(page<1||page>Math.ceil(blogPosts.length/PAGE_SIZE))notFound();return <><Header/><main id="main-content"><Library kind="blog" posts={normalizePosts(blogPosts)} page={page} pageSize={PAGE_SIZE} archive>{page===2&&<FeaturedComparison/>}</Library></main><Footer/></>}
