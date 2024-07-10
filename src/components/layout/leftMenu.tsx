import { useRouter } from 'next/router'
import React from 'react'

type LeftMenuProps = {
children: React.ReactNode
}

const LeftMenu = ({children}: LeftMenuProps) => {
const router = useRouter()

return (
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <div className='h-full w-full'>
      {children}
    </div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li onClick={() => router.push("/siswa")}><a>Siswa</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
)
}

export default LeftMenu