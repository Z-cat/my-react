import { useNavigate } from "react-router-dom";

 function Login() {
  const navigate = useNavigate()
  function tonavget (){
    navigate("/layout?id=1001")
  }
  return (
    <div>
      <div onClick={tonavget}>登录</div>
    </div>
  );
}
export default Login;