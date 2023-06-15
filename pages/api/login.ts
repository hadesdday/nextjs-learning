// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy';
import { setCookie } from 'cookies-next';

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

    return new Promise((resolve) => {
        console.log("login req");

        //don't send cookies to api server
        req.headers.cookie = '';

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body: any = [];
            proxyRes.on('data', function (chunk) {
                body += chunk;
            })
            proxyRes.on('end', function () {
                try {
                    const { accessToken, expiredAt } = JSON.parse(body);
                    //convert token to cookies
                    setCookie('access_token', accessToken, {
                        req,
                        res,
                        secure: process.env.NODE_ENV !== "development",
                        httpOnly: true,
                        sameSite: "lax",
                        expires: new Date(expiredAt)
                    });

                    (res as NextApiResponse).status(200).json({ message: "login success" });

                } catch (error) {
                    (res as NextApiResponse).status(500).json({ error });
                }
                resolve(true);
            })
        }

        //when completely process, this will notify that the process was completed
        proxy.once('proxyRes', handleLoginResponse)
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true // proxy này tự xử lý lấy
        })

    })
}
