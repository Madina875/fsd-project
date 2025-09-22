import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/ui/Header";
import Footer from "../../widgets/footer/ui/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FFFFFF]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default memo(MainLayout);
