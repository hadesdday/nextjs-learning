// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';
import { deleteCookie } from 'cookies-next';

// type Data = {
//     name: string
// }

export const config = {
    api: {
        bodyParser: false,
        // externalResolver: true //using this to avoid "API resolved without 
        // sending a response for /api/students ? _page = 1, this may result in stalled requests." or using the down below soluion proxy.once
    }
}

const proxy = httpProxy.createProxyServer();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== 'POST') {
        return res.status(404).json({ error: "method was not allowed" })
    }

    deleteCookie('access_token', { req, res });
    res.status(200).json({ message: "logout success" })
}
