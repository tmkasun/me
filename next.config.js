/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
    dest: "public",
    runtimeCaching: require("next-pwa/cache"),
    disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,

    async rewrites() {
        return [
            {
                source: "/(resume|cv)",
                destination: "/cv/Kasun_Thennakoon.pdf",
            },
            {
                source: "/cvd",
                destination: "/cv/Kasun_Thennakoon.docx",
            },
        ];
    },
};

module.exports = withPWA(nextConfig);