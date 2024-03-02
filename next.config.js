/** @type {import('next').NextConfig} */
const nextConfig = {
    //to allow external image use from pexels.com
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "www.images.pexels.com",
            }
        ]
    }
}

module.exports = nextConfig
