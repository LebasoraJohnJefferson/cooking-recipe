import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white drop-shadow fixed w-full z-40 ">
      <div className="py-4 flex justify-between items-center max-w-[1200px] mx-auto">
        <h1 className="flex items-center">
          <Image src="../../chef.svg" height={30} width={30} alt="chef icon" />
          Cooking Recipe
        </h1>

        <ul className="flex gap-3">
          <li className="py-2 px-3 hover:text-purple-400">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-3 hover:text-purple-400">
            <Link href="https://www.themealdb.com/api.php">API</Link>
          </li>
          <li className="py-2 px-3 hover:text-purple-400">
            <Link href="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
