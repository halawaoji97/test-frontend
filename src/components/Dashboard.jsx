import React from 'react'
import DashboardContent from './DashboardContent'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div className='my-28 md:mx-10 w-full'>
          <DashboardContent />
        </div>
      </div>
    </>
  )
}

export default Dashboard
