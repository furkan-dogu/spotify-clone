import { Icon } from "helpers/Icons";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <Link
      to={""}
      className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6"
    >
      <Icon name={"download"} size={20} />
      Uygulamayı Yükle
    </Link>
  );
};

export default DownloadApp;
