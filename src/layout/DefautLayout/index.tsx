import React, { Fragment, Suspense } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import { IDefaultLayout } from "../../interfaces";

const DefaultLayout: React.FC<IDefaultLayout> = ({ children, isNoDefault }) => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
