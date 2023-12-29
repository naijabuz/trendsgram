import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const TopBar = () => {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <header className="topbar">
      <nav className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="assets/images/trendsgram-logo.png"
            alt="app-logo"
            className="w-[100px] h-auto"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>

          <Link to={`/profile/${user.id}`} className="flex-center">
            <img
              src={user.imageUrl || "assets/icons/profile-placeholder.svg"}
              alt="profile-logo"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;
