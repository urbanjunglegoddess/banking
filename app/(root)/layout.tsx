// Author: [Omegea Hunter]

// Date: 2022-11-10

// Description: Homepage layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SIDEBAR
      {children}
      </main> 
  );
}
