import Footer from "@/components/shared/Footer";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <main className="flex flex-1 h-full">
        <Outlet />
      </main>

      <Footer />
    </main>
  );
};

export default RootLayout;
