// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
    error?: string | null;
    value?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== "GET") {
        return res.status(404).json({ name: "method not found", error: "errorr" });
    }

    const data = await fetch("https://js-post-api.herokuapp.com/api/products/?_page=1");
    const dat = await data.json();
    res.status(200).json({ name: 'Get product  list', value: dat })
}
