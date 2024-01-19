/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol:'https',
            hostname:'anak2u.s3-ap-southeast-1.amazonaws.com'
        }
    ]
    }
}

module.exports = nextConfig
