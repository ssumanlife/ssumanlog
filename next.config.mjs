/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./shared/styles'],
    prependData: `
    @import "@/shared/styles/variables";
  `,
  },
}

export default nextConfig
