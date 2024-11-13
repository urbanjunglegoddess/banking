import React from 'react'
import HeaderBox from '@/components/HeaderBox'
const Dashboard= () => {
  const loggedIn = {firstName: 'Omegea', lastName: 'Hunter', username: 'UrbanJungleGoddess'};
  
  return (
    <section className='home'>Dashboard
<div className="home-content">
  <header className="home-header">
   <HeaderBox
   type='greeting'
   title='Welcome'
   user= {loggedIn.username || 'Guest'}
   subtext='Your personal banking dashboard'
   />
  </header>
</div>
    </section>
  )
}

export default Dashboard
