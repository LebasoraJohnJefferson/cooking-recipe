import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Layout = ({children}) => {
  return (
    <>
      {/* navigation header */}
      <header>
        <div  className="bg-white drop-shadow h-max p-5 grid grid-row-1 grid-flow-col">
          <h1>Learn to Cook</h1>
          <div className="w-100 grid grid-row-1 grid-col-6 gap-3">
            <input name="searchContent" className="col-start-1 col-span-4 drop-shadow rounded outline-0 indent-3" placeholder='Search ...'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="ms" className='col-start-5 col-span-1' />
            <div className='col-end-7 col-span-1'>
              menuBar
            </div>
          </div>
        </div>
      </header>
      <main>
          {children}
      </main>
    </>
  )
}

export default Layout
