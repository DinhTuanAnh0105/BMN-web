import type { MenuProps } from "antd";

interface FieldDropdownProps {
  onClick?: MenuProps["onClick"];
  items: MenuProps["items"];
  trigger?: ("click" | "hover" | "contextMenu")[];
  title: string;
}

export default FieldDropdownProps;
