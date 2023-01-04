import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
    *[_type == 'pageInfo'][0] {
        "URL": resume.asset -> url
    }
`

type Data = {
    resumeURL: String
}

export default async function handler(
    req:NextApiRequest, 
    res:NextApiResponse<Data>) 
{
    const resumeURL = await sanityClient.fetch(query);

    res.status(200).json({ resumeURL })
}