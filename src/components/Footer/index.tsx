import { Col, Image, Row } from "antd";
import Logo from "../../assets/images/logoBMN.svg";
import IconTwitter from "../icons/icon_twitter";
import IconLinkin from "../icons/icon_linkin";
import IconFacebook from "../icons/icon_facebook";
import IconGithub from "../icons/icon_github";
import IconSocial1 from "../icons/icon_social1";
import IconSocial2 from "../icons/icon_social2";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="footer__content">
        <Col md={11}>
          <div className="footer__content-left">
            <Image src={Logo} width={60} height={60} />
            <div className="text-logofooter">
              TRANG QUẢN LÝ TĂNG NI PHẬT TỬ CỦA <br /> GIÁO HỘI PHẬT GIÁO VIỆT
              NAM
            </div>
          </div>
        </Col>
        <Col md={13} className="footer__content-right">
          <div className="text-16">VĂN PHÒNG LIÊN LẠC</div>
          <div className="text-14">
            <b>- Văn phòng trung ương GHPGVN</b> - Chùa Quán Sứ, số <br /> 73
            phố Quán Sứ, Hà Nội. <br /> ĐT: (04) 39422427; Fax: (04) 38223345;{" "}
            <br /> Email: vp1giaohoi@gmail.com.{" "}
          </div>
          <div className="text-14">
            <b>- Văn phòng 2 trung ương GHPGVN</b> - Thiền Viện Quảng <br />{" "}
            Đức, số 294 Nam Kỳ Khởi Nghĩa, Quận 3, TP.HCM <br /> ĐT: (08)
            38483080; Fax: (08) 28469931; <br /> Email: vitinhvp2@yahoo.com
          </div>
        </Col>
      </Row>
      <hr className="hr-footer" />
      <Row className="footer__copyright">
        <Col>© Copyright 2023 Giáo hội Phật giáo Việt Nam</Col>
        <Col md={6} className="footer__copyright-contact">
          <IconTwitter />
          <IconLinkin />
          <IconFacebook />
          <IconGithub />
          <IconSocial1 />
          <IconSocial2 />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
