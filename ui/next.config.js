const { i18n } = require('./next-i18next.config')

module.exports = {
    i18n,
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: ['s3.ap-south-1.amazonaws.com'],
    },
    productionBrowserSourceMaps: true,
}