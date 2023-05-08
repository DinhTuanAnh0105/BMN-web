import { FastField, Form, Formik, FormikValues } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/CustomButton";
import InputField from "../../components/CustomField/InputField/index";
import { PathRoute } from "../../constants/router/path";
import { ButtonHTMLTypes } from "../../interfaces";
import { actions } from "../../redux/Actions";
import { GetAuthSelector } from "../../redux/Selectors";
import HeaderLogin from "../../components/Header/HeaderLogin";
import ImagePhat from "../../assets/images/image_phat_login.svg";
import { Image } from "antd";

const Login = () => {
  //! define
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = GetAuthSelector();

  //! state

  //! function
  //   if (isLogin) {
  //   }

  const handleSubmit = (values: FormikValues) => {
    const { username, password } = values;
    dispatch({
      type: actions.LOGIN,
      payload: {
        username,
        password,
      },
    });
  };
  //! useEffect
  useEffect(() => {
    dispatch({ type: actions.CHECK_AUTH, payload: {} });
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate(PathRoute.Home);
    }
  }, [isLogged]);

  const handleLogin = () => {
    dispatch({
      type: actions.LOGIN,
      payload: {
        username: "anhdt",
        password: "anhdt",
      },
    });
  };

  //! render
  return (
    // <Formik
    //   validateOnBlur={false}
    //   validateOnChange={false}
    //   initialValues={{
    //     username: "",
    //     password: "",
    //   }}
    //   onSubmit={handleSubmit}
    // >
    //   {(propFormik) => {
    //     return (
    //       <Form>
    //         <div>username: anhdt && password: anhdt</div>
    //         <div>
    //           <label htmlFor="username">Username</label>
    //           <FastField component={InputField} name="username" />
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <FastField
    //             component={InputField}
    //             name="password"
    //             type="password"
    //           />
    //         </div>
    //         <Button title="Đăng nhập" htmlType={ButtonHTMLTypes.Submit} />
    //       </Form>
    //     );
    //   }}
    // </Formik>
    <div className="login">
      <HeaderLogin />
      <div className="login__content">
        <div className="login__content-left">
          <div className="text-system">HỆ THỐNG QUẢN LÝ TĂNG NI PHẬT TỬ</div>
          <div className="text-license">
            Bản quyền của Giáo hội Phật giáo Việt Nam
          </div>
          <div className="login-vneid">
            <div className="text-login-with">
              Xin vui lòng đăng nhập bằng tài khoản VNEID
            </div>
            <Button
              title="Đăng nhập"
              className="btn-login-vneid"
              onClick={handleLogin}
            />
          </div>
        </div>
        <div className="login__content-right">
          <Image src={ImagePhat} preview={false} height={657} width={571} />
        </div>
      </div>
    </div>
  );
};

export default Login;
