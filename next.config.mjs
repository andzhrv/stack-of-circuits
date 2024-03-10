/** @type {import('next').NextConfig} */

const CSP_HEADER = `
  default-src 'self';
  script-src 'self' um.stackofcircuits.com 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  connect-src 'self' um.stackofcircuits.com;
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: CSP_HEADER.replace(/\n/g, ''),
          },
        ],
      },
    ]
  }
};

export default nextConfig;
