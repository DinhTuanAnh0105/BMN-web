import { FunctionComponent } from "react";
import FieldDropdownProps from "./Dropdown.interface";
import { Dropdown as DropdownAnrd, Space } from "antd";
import IconChevronDown from "../icons/icon_chevron_down"

const Dropdown: FunctionComponent<FieldDropdownProps> = ({
  items,
  onClick,
  title,
  trigger
}) => {
  return (
    <DropdownAnrd menu={{ items, onClick }} trigger={trigger}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          <IconChevronDown />
        </Space>
      </a>
    </DropdownAnrd>
  );
};

export default Dropdown;

// const onClick: MenuProps['onClick'] = ({ key }) => {
//     message.info(`Click on item ${key}`);
//   };
