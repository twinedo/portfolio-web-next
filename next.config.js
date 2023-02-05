/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	withCSS: {
		cssModule: true,
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
};

module.exports = nextConfig;
