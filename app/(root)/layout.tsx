// Author: [Omegea Hunter]



// Date: 2022-11-10

// Description: Homepage layout
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Add user information to Sidebar component for authenticated users
  const loggedIn = {firstName: 'Omegea', lastName: 'Hunter', username: 'UrbanJungleGoddess'};

  // Render the layout with Sidebar component and children
  return (
    <main className="flex h-screen w-full font-inter" >
      <Sidebar user={loggedIn}/>

<div className="flex size-fll flex-col">
  <div className="root-layout">
    <Image src="/icons/logo.svg" alt="menu" width={30} height={30} className="" />
    <div className="">
      <MobileNav user={loggedIn} />
    </div>
  </div>
  {children}
</div>
      </main> 
  );
  
}