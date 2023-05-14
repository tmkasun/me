/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  async rewrites() {
    return [
      {
        source: '/(resume|cv)',
        destination: '/cv/Kasun_Thennakoon.pdf',
      },
      {
        source: '/cvd',
        destination: '/cv/Kasun_Thennakoon.docx'
      }
    ]
  },
})
