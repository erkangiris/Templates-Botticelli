import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'b6s54eznn8xq.merlincdn.net',
            port: '',
          },
        ],
      },  
};

 
export default withNextIntl(nextConfig);



// b6s54eznn8xq.merlincdn.net