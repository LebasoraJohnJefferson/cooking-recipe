import Link from "next/link"
import Image from "next/image"

const Layout = ({children}) => {  
  return (
    <>
      {/* navigation header */}
      <header >
        <div  className="bg-white drop-shadow h-max p-5 grid grid-row-1 grid-flow-col">
          <h1 className="flex items-center justify-self-center align-item-center"><Image src="/chef.svg" height={30} width={30} alt="chef icon"/>Cooking Recipe</h1>
          <div className='col-end-7 col-span-1'>
            <ul className="grid grid-row-1 grid-col-3">
              <li className='col-start-1 col-span-1'>
                <Link href="/">Home</Link>
              </li>
              <li className='col-start-2 col-span-1'>
                <Link href="https://www.themealdb.com/api.php">API</Link>
              </li>
              <li className='col-start-3 col-span-1'>
                <Link href="/aboutUs">About Us</Link>
              </li>
            </ul>
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
