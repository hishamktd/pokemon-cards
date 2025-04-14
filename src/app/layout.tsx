import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { Analytics } from '@vercel/analytics/next';

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
