

import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import LineChartAxis from '@/components/templates/LineChartAxis'
import PieChart1 from '@/components/templates/PieChart1'


const page =async () => {

  return (
   <AdminPanelLayout>
    <PieChart1 />
    <LineChartAxis/>
   </AdminPanelLayout>
  )
}

export default page