// Next Modules
import router from "next/router";
import Image from "next/image";
// List Item
const ListItem = (props) => (
  <a
    href="#"
    onClick={(e) => [router.push(`/detail/${props.id}`), e.preventDefault()]}
    className="relative flex flex-col lg:flex-row items-center py-2 lg:p-2 rounded-lg  hover:bg-[#E81126] lg:space-x-6 my-4 w-full transition transform lg:hover:translate-x-6 duration-500 hover:cursor-pointer"
  >
    <span className="lg:w-3/12">
      <span className="relative overflow-hidden inline-flex flex-col w-[150px] h-[150px] rounded-md">
        <Image
          src={`${props.img.path}.${props.img.extension}`}
          width="150"
          height="150"
          alt="Marvel"
          objectFit="cover"
        />
      </span>
    </span>
    <div className="lg:w-9/12 lg:p-5 rounded-md text-center text-white inline-flex items-center justify-center text-xl lg:text-4xl">
      {props.name}
    </div>
  </a>
);
export default ListItem;
