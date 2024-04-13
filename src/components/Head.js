import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  COUNTRY_META,
  SEARCH_OPTIONS,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const response = await fetch(
      YOUTUBE_SEARCH_API + searchQuery + COUNTRY_META,
      SEARCH_OPTIONS
    );
    const data = await response.json();
    console.log(data);
  };
  const dispatch = useDispatch();
  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex flex-row justify-between p-5 shadow-lg px-6">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandeler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <Link to={"/"}>
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div className="flex justify-center">
        <input
          className="w-96 border border-gray-400 rounded-l-full px-2"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-300 px-5">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
