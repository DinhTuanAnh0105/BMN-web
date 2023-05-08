import { Field, Form, Formik } from "formik";
import withAuthentication from "../../HOCs/withAuthentication";
import Button from "../../components/CustomButton";
import IconRepeat from "../../components/icons/icon_repeat";
import IconSave from "../../components/icons/icon_save";
import IconCancel from "../../components/icons/icon_xcircle";
import DefaultLayout from "../../layout/DefautLayout";
import Input from "../../components/CustomField/InputField";
import { Col, Row } from "antd";
import Select from "../../components/CustomSelect";
const Dashboard = () => {
  //! define

  //! state

  //! function
  const options = [
    {
      label: "Tuấn Anh",
      value: 1,
    },
    {
      label: "Diễn",
      value: 1,
    },
  ];

  //! useEffect

  //! render
  return (
    <DefaultLayout>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className="form-management">
            <div className="form-management__title">
              NHẬP THÔNG TIN PHẬT TỬ ĐÃ QUY Y TAM BẢO
            </div>
            <hr />
            <div className="form-management__info">
              <div className="form-management__info-header">
                <span className="text-24">Thông tin cá nhân</span>
                <Button
                  title="Xác thực với CSDLQG về dân cư"
                  className="custom-button"
                />
                <Button
                  title="Nhập lại"
                  icon={<IconRepeat />}
                  className="custom-button"
                />
              </div>
              <Row
                className="form-management__info-form grid"
                gutter={[16, 24]}
              >
                <Col span={6}>
                  <Field
                    component={Input}
                    label="Họ và tên"
                    isRequied
                    name="hoTen"
                  />
                </Col>
                <Col span={6}>
                  <Field
                    component={Input}
                    label="Ngày sinh"
                    isRequied
                    name="ngaySinh"
                  />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="CCCD/CMND" name="soCccd" />
                </Col>
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Giới tính"
                    isRequied
                    options={[{ label: "Nam", value: 1 }]}
                    name="gioiTinh"
                  />
                </Col>
                <Col span={6} style={{ display: "flex", alignItems: "center" }}>
                  <div className="text-16">Địa chỉ hiện nay</div>
                </Col>
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Tỉnh/Thành phố"
                    isRequied
                    options={[{ label: "Nam", value: 1 }]}
                    name="tinh"
                  />
                </Col>
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Quận/Huyện"
                    isRequied
                    options={[{ label: "Nam", value: 1 }]}
                    name="tinh"
                  />
                </Col>
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Phường/Xã"
                    isRequied
                    options={[{ label: "Nam", value: 1 }]}
                    name="tinh"
                  />
                </Col>
                <Col span={24}>
                  <Field
                    component={Input}
                    label="Số nhà, thôn xóm"
                    name="diaChi"
                  />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Số điện thoại" name="sdt" />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Email" name="email" />
                </Col>
              </Row>
              <div className="form-management__info-header">
                <span className="text-24">Thông tin đạo</span>
              </div>
              <Row
                className="form-management__info-form grid"
                gutter={[16, 24]}
              >
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Tỉnh/Thành phố"
                    isRequied
                    options={[{ label: "Nam", value: 1 }]}
                    name="tinh"
                  />
                </Col>
                <Col span={6}>
                  <Field
                    component={Select}
                    label="Chùa nơi quy y"
                    options={[{ label: "Nam", value: 1 }]}
                    name="tinh"
                  />
                </Col>
                <Col span={12}>
                  <Field component={Input} label="Địa chỉ" name="diaChi" />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Pháp danh" name="phapDanh" />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Ngày quy y" name="ngayQuyY" />
                </Col>
                <Col span={8}>
                  <Field
                    component={Input}
                    label="Giới sư truyền thụ"
                    name="gioiSuTruyenThu"
                  />
                </Col>
                <Col span={6}>
                  <Field
                    component={Input}
                    label="Số chứng điệp"
                    name="soChungDiep"
                  />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Ngày cấp" name="ngayCap" />
                </Col>
                <Col span={6}>
                  <Field component={Input} label="Phật lịch" name="phatLich" />
                </Col>
              </Row>
            </div>
            <div className="form-management__groupbutton">
              <Button title="Lưu" icon={<IconSave />} className="distance-button" />
              <Button title="Huỷ" icon={<IconCancel />} className="distance-button" />
            </div>
          </div>
        </Form>
      </Formik>
    </DefaultLayout>
  );
};

export default withAuthentication(Dashboard);
