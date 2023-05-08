import React from "react";
import DefaultLayout from "../../layout/DefautLayout";
import withAuthentication from "../../HOCs/withAuthentication";
import Input from "../../components/CustomField/InputField";
import Button from "../../components/CustomButton";

const Home = () => {
  //! define

  //! state

  //! function

  //! useEffect

  //! render
  return (
    <DefaultLayout>
      <div className="home">
        <div className="home__content">
          <div className="text-home">Trang chủ</div>
          <div className="text-home-system">
            HỆ THỐNG QUẢN LÝ TĂNG NI PHẬT TỬ
          </div>
          <div className="text-home-des">
            Trang Quản lý Tăng Ni Phật tử dành cho Quản lý của Giáo hội Phật
            giáo Việt Nam, giúp người dùng quản lý toàn bộ các thông tin của
            Tăng Ni và Phật tử...
          </div>
          <div className="home__search">
            <Input placeholder="Nhập thông tin tìm kiếm" />
            <Button title="Tìm kiếm" className="btn-search" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuthentication(Home);
