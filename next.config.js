/** @type {import('next').NextConfig} */
const withExportImages = require('next-export-optimize-images')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

module.exports = nextConfig;

module.exports = withExportImages(
    withMDX({
        output: 'export',
        distDir: 'dist',
        trailingSlash: true,
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    })
)
