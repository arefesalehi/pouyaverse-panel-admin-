import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import React from 'react'
import BreadCrumb from '@/components/modules/breadcrumb/BreadCrumb'

const page = () => {
  return (
   <AdminPanelLayout>
       <div className=' mt-10 mr-10 '>
        <BreadCrumb links={
          [
            { id: 1, title: 'حساب کاربری', href: '/p-admin/profile' },
            { id: 2, title: ' سازمان ها', href: '/p-admin/organizations' },
          ]
        } />
      </div>
      <p className='mr-10'>organizations</p>
   </AdminPanelLayout>
  )
}

export default page