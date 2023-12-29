import Footer from "@/components/shared/Footer";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopBar from "@/components/shared/TopBar";

const RootLayout = () => {
  return (
    <div>
      <TopBar />
      <LeftSidebar />
      <Footer />
    </div>
  );
};

export default RootLayout;
