import AdminPanelLayout from "@/components/layouts/AdminPanelLayout"
import BreadCrumb from "@/components/modules/breadcrumb/BreadCrumb"
// import DropDown from "@/components/modules/dropdown/DropDown"
import Nodes from "@/components/modules/nodes/Nodes"
// import Filters from "@/components/templates/Filters"
const Network = () => {

    return (
        <AdminPanelLayout>
            <div className=' mt-10 mr-10 ml-10'>
                <BreadCrumb links={
                    [
                        { id: 1, title: 'dashboards', href: '/p-admin/dashboard' },
                        { id: 2, title: 'network', href: '/p-admin/network' },
                    ]
                } />


            </div>
            {/* <Filters filteredNodes={filteredNodes} filteredEdges={filteredEdges} /> */}

            <Nodes />
        </AdminPanelLayout>
    )
}

export default Network