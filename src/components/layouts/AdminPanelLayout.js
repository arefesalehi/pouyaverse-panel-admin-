
import Sidebars from "../modules/Sidebar/Sidebars"

const AdminPanelLayout = async ({ children }) => {
  return (
    <>
      <div className=" w-full h-auto   ">
        <Sidebars children={children} />
      </div>
    </>
  )
}

export default AdminPanelLayout