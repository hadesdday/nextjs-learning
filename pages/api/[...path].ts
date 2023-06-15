// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy';
import { getCookie } from 'cookies-next';

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
    return new Promise((resolve) => {
        //convert cookies to Authorization header
        //get cookies from server side ( nodejs server)
        const accessToken = getCookie('access_token', { req, res });

        if (accessToken) {
            req.headers.authorization = `Bearer ${accessToken}`;
        }

        //don't send cookies to api server
        req.headers.cookie = '';

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false //response trả về thì proxy server này sẽ nhận 
        })
        // res.status(200).json({ name: 'Match ALL' })

        //when completely process, this will notify that the process was completed
        proxy.once('proxyRes', () => {
            resolve(true);
        })
    })
}
