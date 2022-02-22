import getConfig from 'next/config'

const SENTRY_DSN: string =
  ''

export const sentryBaseConfig = {
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
  release: process.env.SENTRY_RELEASE || getConfig()?.publicRuntimeConfig?.sentryRelease,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
}