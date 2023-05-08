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

const Header = () => {
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
    <div className="header">
      {/* <Link to={PathRoute.Home}>Home</Link>
    <Link to={PathRoute.Login}>Login</Link>
    <div onClick={handleLogout}>Logout</div> */}
      <Image src={Logo} preview={false} />
      <div className="group-menu">
        <Dropdown title="HỆ THỐNG" items={items} trigger={["hover"]} />
        <Dropdown title="QUẢN LÝ TĂNG NI" items={items} trigger={["hover"]} />
        <Dropdown title="QUẢN LÝ PHẬT TỬ" items={items} trigger={["hover"]} />
        <Dropdown title="QUẢN LÝ HỒ SƠ" items={items} trigger={["hover"]} />
        <Dropdown title="BÁO CÁO THỐNG KÊ" items={items} trigger={["hover"]} />
      </div>
      <div className="header-operation">
        <div className="current-user">
          <IconUserCircle />
          <div className="current-name">Đinh Tuấn Anh</div>
        </div>
        <Button title="Đăng xuất" className="custom-button btn-logout" onClick={handleLogout} />
        <IconBell />
      </div>
    </div>
  );
};

export default Header;
