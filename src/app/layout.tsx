import { SettingsProvider } from "@core/providers/SettingsProvider";

export const metadata = {
  title: "Pokemon cards",
  description: "Pokemon cards",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
