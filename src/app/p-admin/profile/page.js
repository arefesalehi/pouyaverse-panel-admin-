import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import React from 'react'
import BreadCrumb from '@/components/modules/breadcrumb/BreadCrumb'

const page = () => {

  return (
    <AdminPanelLayout>
      <div className=' mt-10 mr-10 '>
        <BreadCrumb links={
          [
            { id: 1, title: 'account', href: '/p-admin/profile' },
            { id: 2, title: 'profile', href: '/p-admin/profile' },
          ]
        } />
      </div>
      <p className='mr-10'>profile</p>
    </AdminPanelLayout>
  )
}

export default page