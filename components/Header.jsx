import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="bg-slate-800 drop-shadow py-5 px-2">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <h1>Learn to Cook</h1>

          <div className="grid grid-cols-[1fr_30px] items-center">
            <div className="relative w-fit">
              <input
                name="searchContent"
                className="w-[350px] drop-shadow outline-0 py-3 px-4 text-sm rounded-lg bg-slate-900"
                placeholder="Search ..."
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="ms"
                className="absolute top-3 right-3 text-slate-5500"
              />
            </div>
            <div className="col-end-7 col-span-1">menuBar</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
