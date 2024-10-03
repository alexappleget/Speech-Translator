import "./globals.css";

export const metadata = {
  title: "Speech Translator",
  description: "Convert speech to text and translate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
