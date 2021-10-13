/** @type {import('next').NextConfig} */
const { createSecureHeaders } = require('next-secure-headers');
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com'],
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
}
