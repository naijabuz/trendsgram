import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="assets/images/trendsgram-logo.png"
            alt="app-logo"
            className="w-[100px] h-auto"
            width={170}
            height={36}
          />
        </Link>

        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img
            src={user.imageUrl || "assets/icons/profile-placeholder-svg"}
            alt="profile-logo"
            className="h-10 w-10 rounded-full"
          />

          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>

            <p className="small-regular text-light-3">@{user.name}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-4">
          {sidebarLinks.map((link: INavLink) => {
            const { imgURL, route, label } = link;
            const isActive = pathname === route;
            return (
              <li
                key={label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink to={route} className="flex gap-4 items-center p-2">
                  <img
                    src={imgURL}
                    alt={label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" alt="logout" />{" "}
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
