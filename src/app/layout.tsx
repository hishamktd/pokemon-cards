import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

import { ReduxProvider } from '@core/providers/ReduxProvider';
import { SettingsProvider } from '@core/providers/SettingsProvider';

export const metadata = {
  title: 'Pokemon cards',
  description: 'Pokemon cards',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
          strategy="lazyOnload"
        />
        <ReduxProvider>
          <AppRouterCacheProvider>
            <SettingsProvider>{children}</SettingsProvider>
          </AppRouterCacheProvider>
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
