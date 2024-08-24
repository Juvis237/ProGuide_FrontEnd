// Configuration options for Next.js
const nextConfig = {
    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true, // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log in production
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'be.studentproguide.site',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

// Import next-pwa as an ES module
import withPWA from 'next-pwa'

// Configuration object tells the next-pwa plugin
const nextPWAConfig = {
    dest: 'public', // Destination directory for the PWA files
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
}

// Combine Next.js configuration with PWA configuration
const configWithPWA = withPWA(nextPWAConfig)

// Export the combined configuration for Next.js with PWA support
export default {
    ...nextConfig,
    ...configWithPWA,
}
