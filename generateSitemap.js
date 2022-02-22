
const sitemap = require('nextjs-sitemap-generator')

try {
  sitemap({
    baseUrl: 'https:/${process.env.NEXT_PUBLIC_DOMAIN}',
    pagesDirectory: `.next/server/pages`,
    targetDirectory: 'public/',
    // TODO: remove '/earn' exclusion below when enabling EarnProduct feature
    ignoredPaths: ['/api', '404', '/[address]', '/terms', '/swap', '/save', '/earn', '/errors'],
    // other apps routes 
    extraPaths: ['/blog'],
    nextConfigPath: `${__dirname}/next.config.js`,
    ignoreIndexFiles: true,
  })

  console.info(`✅ sitemap.xml generated!`)
} catch (err) {
  console.error('Something went wrong while generating sitemap')
}