
import React from 'react'
import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import LineChartAxis from '@/components/templates/LineChartAxis'
import PieChart1 from '@/components/templates/PieChart1'
import HomeContentBox from '@/components/templates/home/HomeContentBox'
import { contentRole } from '@/data/data'
import { piechartinfo } from '@/data/data'
import BreadCrumb from '@/components/modules/breadcrumb/BreadCrumb'
import Nodes from '@/components/modules/nodes/Nodes'

const Home = () => {
    return (
        <>
            <AdminPanelLayout>
                {/*home page breadcrumb */}
                <div className='container'>
                    <div className=' mt-10 '>
                        <BreadCrumb links={
                            [
                                { id: 1, title: "mainPage", href: '/p-admin' },

                            ]}
                        />
                    </div>

                    {/*homeContentBox */}
                    <div className=' flex justify-between flex-wrap pt-10  mb-[40px] '>
                        {contentRole.map((role) => {
                            return (
                                <HomeContentBox key={role.id} {...role} />
                            )
                        })
                        }
                    </div>

                    {/*piecharts*/}
                    <div className="w-full h-auto container  justify-between flex flex-col md:flex-row items-center mt-[60px] space-y-5 md:space-y-0">

                        <div className="w-full md:w-1/3 h-full rounded-[30px] flex justify-center items-center">
                            <PieChart1 />
                        </div>
                        <div className="w-full md:w-2/3 flex justify-center items-center">
                            <div className="home-node bg-purple-300 rounded-[30px] h-[300px] md:h-[500px] w-full md:w-[770px]">
                            <Nodes />
                                
                            </div>
                        </div>
                    </div>


                    {/*line chart*/}
                    <LineChartAxis />


                </div>


            </AdminPanelLayout>







        </>
    )
}

export default Home