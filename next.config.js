/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    disableStaticImages: true, // 변경된 부분
  },
  // 나머지 설정...
};

module.exports = nextConfig;
