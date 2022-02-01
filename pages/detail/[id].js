// Modules
import axios from "axios";
//Next modules
import Image from "next/image";
// Api
import { api } from "../../services/api";
// Functions
import { sortByPublishDate } from "../../utils/functions";
// Detail
const Detail = ({ character, comics }) => {
  const { thumbnail, name, description } = character;

  return (
    <div className=" px-5 lg:p-5 w-full flex justify-center">
      <div className="lg:w-3/4">
        <div className="w-full justify-between flex flex-col lg:flex-row my-10 space-y-5 lg:space-y-0 lg:space-x-5">
          <Image
            width="300"
            height="300"
            alt="Marvel"
            objectFit="cover"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            className="rounded-md"
          ></Image>

          <div className="flex flex-col justify-center bg-[#191919] rounded-lg lg:w-2/3 text-white ">
            <h1 className="text-center text-xl lg:text-5xl my-3">{name}</h1>

            {description != "" && (
              <div className="rounded-md m-5 p-3 text-center lg:text-left bg-[#484848]">
                <h1 className="text-base lg:text-lg my-3">Description</h1>
                <p className="text-sm lg:text-base my-3">
                  {description ? description : "Description not found"}
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`bg-[#191919] text-white p-5 w-full items-center rounded-lg pointer-events-none flex flex-col`}
        >
          {comics.length > 0 ? (
            <h1 className="w-full text-center lg:text-left text-xl lg:text-3xl my-3">
              Related Comics
            </h1>
          ) : (
            <h1 className="w-full min-h-[15vh] text-center text-xl lg:text-3xl my-3 inline-flex justify-center items-center">
              No Related Comics Found
            </h1>
          )}
          {comics.map((comic) => (
            <div
              className="bg-[#484848] w-full rounded-md text-white p-2 text-base my-2 font-semibold flex flex-col lg:flex-row"
              key={comic.id}
            >
              {comic.images.length > 0 ? (
                <Image
                  src={`${comic.images[0].path}.${comic.images[0].extension}`}
                  width="100"
                  height="100"
                  objectFit="cover"
                ></Image>
              ) : (
                <div className="lg:w-[100px] h-[100px] flex justify-center text-center text-[#191919] items-center border border-[#191919] text-sm">
                  Image not found
                </div>
              )}
              <div className="mx-4 flex flex-col justify-center">
                <h1 className=" text-sm my-2 lg:my-0 lg:text-base text-center lg:text-left">
                  {comic.title}
                </h1>
                {comic.description ? (
                  <p className="text-xs lg:text-sm">
                    {comic.description.length > 150
                      ? comic.description.substring(0, 150) + "..."
                      : comic.description}
                  </p>
                ) : (
                  <p className="text-xs text-center lg:text-left lg:text-sm">
                    No description
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// ServerSideProps
export const getServerSideProps = async (context) => {
  // Character && Comics
  const character = (await axios(api.character(context.query.id))).data.data
    .results[0];
  const comics = sortByPublishDate(
    (await axios(api.detail(context.query.id))).data.data.results
  );
  // Return
  return { props: { character, comics } };
};
// Export
export default Detail;
