import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import React from 'react'
import BreadCrumb from '@/components/modules/breadcrumb/BreadCrumb'
import DynamicTable from '@/components/modules/tables/Tables'
import { columnsTable1 } from '@/data/data'
import { dataTable1 } from '@/data/data'
import { columnsTable2 } from '@/data/data'
import { dataTable2 } from '@/data/data'

const page = () => {
  return (
    <>
      <AdminPanelLayout>
        <div className=' mt-10 mr-10 ml-10 '>
          <BreadCrumb links={
            [
              { id: 1, title: 'assets', href: '/p-admin/equipment' },
              { id: 2, title: 'network', href: '/p-admin/equipment' },
            ]
          } />
        </div>

        <div className="p-4 mt-10">
          <DynamicTable columns={columnsTable1} data={dataTable1} />
          <DynamicTable columns={columnsTable2} data={dataTable2} />

        </div>

      </AdminPanelLayout>

    </>
  )
}

export default page