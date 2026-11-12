import {ServicesExperience} from '../refresh-experience';
import {Header,Footer} from '../components';
export const metadata={title:'Services',description:"Ten focused services for the records, coordination, and follow-through that keep an operation moving. Start with one recurring workflow and connect related responsibilities as the role settles in.",alternates:{canonical:'/services'}};
export default function Page(){return <><Header/><main id="main-content"><ServicesExperience/></main><Footer/></>}
