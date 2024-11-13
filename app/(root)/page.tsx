import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
const Dashboard= () => {
  const loggedIn = {firstName: 'Omegea', lastName: 'Hunter', username: 'UrbanJungleGoddess'};
  
  return (
    <section className='home'>
<div className="home-content">
  <header className="home-header">
   <HeaderBox
   type='greeting'
   title='Welcome'
   user= {loggedIn.username || 'Guest'}
   subtext='Your personal banking dashboard'
   />
   <TotalBalanceBox
   accounts={[]}
   totalBanks={22}
   totalCurrentBalance={12345.95}

   />
  </header>

  RECENT TRANSACTIONS
</div>
<RightSideBar user={loggedIn}
transactions={[]}
banks={[]}
/>
    </section>
  )
}

export default Dashboard
