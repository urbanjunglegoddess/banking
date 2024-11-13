// Author: [Omegea Hunter]

// Date: 2022-11-10

// Description: Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
