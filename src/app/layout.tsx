import ThemeProvider from "@core/provider/components/ThemeProvider";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
