import { PageInfo } from "../typings";
import { sanityClient } from "../sanity";
import groq from "groq";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    console.log("helloooooooooooo", res);

    const data = await res.json()
    const PageInfo: PageInfo = data.pageInfo;

    console.log("fetching", PageInfo);

    return PageInfo;
    
}