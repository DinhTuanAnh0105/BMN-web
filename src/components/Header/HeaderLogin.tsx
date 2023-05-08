import { Image, MenuProps } from "antd";
import { useDispatch } from "react-redux";
import Logo from "../../assets/images/logoBMN.svg";
import { actions } from "../../redux/Actions";
import Button from "../CustomButton";
import Dropdown from "../CustomDropdown";
import IconBell from "../icons/icon_bell_ringing";
import IconUserCircle from "../icons/icon_user_circle";

const items: MenuProps["items"] = [
  {
    label: "Danh sách chờ duyệt",
    key: "1",
  },
  {
    label: "Danh sách đang xử lý",
    key: "2",
  },
  {
    label: "Danh sách đã duyệt",
    key: "3",
  },
];

const HeaderLogin = () => {
  //! define
  const dispatch = useDispatch();

  //! state

  //! function
  const handleLogout = () => {
    dispatch({ type: actions.LOGOUT });
  };

  //! useEffect

  //! render
  return (
    <div className="header-login">
      <div className="header-login__logo">
        <Image src={Logo} preview={false} />
        <div className="text-18 text-welcome">
          Chào mừng bạn đến với hệ thống quản lý Tăng Ni Phật tử
        </div>
      </div>
      <div className="header-login__button">
        <Button title="Đăng nhập" className="custom-button btn-nocolor" />
        <Button
          title="Đăng ký"
          className="custom-button btn-logout"
        //   onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default HeaderLogin;
