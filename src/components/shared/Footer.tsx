import { Link, useLocation } from "react-router-dom";
import { bottombarLinks } from "@/constants/";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="bottom-bar">
      {bottombarLinks.map(({ link }: any) => {
        const { imgURL, route, label } = link;
        const isActive = pathname === route;
        return (
          <Link
            to={route}
            key={label}
            className={`${
              isActive && "bg-primary-500 rounded-[10px]"
            } flex-center flex-col gap-1 p-2 transition`}
          >
            <img
              src={imgURL}
              alt={label}
              width={16}
              height={16}
              className={`${isActive && "invert-white"}`}
            />
            <p className="tiny-medium text-light-2">{label}</p>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
