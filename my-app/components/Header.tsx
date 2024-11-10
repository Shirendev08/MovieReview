import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      

      <div className="flex space-x-2">
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
