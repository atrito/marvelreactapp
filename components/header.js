// Next Modules
import Image from "next/image";
import Link from "next/link";
// Header
const Header = () => (
  <div className="flex justify-center w-full my-10">
    <Link href="/">
      <span className="inline-flex flex-col w-2/3 lg:w-1/3 cursor-pointer">
        <Image src="/marvel_logo.png" alt="Marvel" width="1024" height="258" />
      </span>
    </Link>
  </div>
);
export default Header;
