import img from "../images/logo.png";
import Button from "react-bootstrap/Button";
import Find from "./Find";
import { useNavigate } from "react-router-dom";

// const handleSubmit = (e) => {
//   e.preventDefault();
//   try {
//     if (confirm("are you sure logout?")) {
//       window.location.reload();
//     } else {
//       alert("logout is faild");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      if (window.confirm("Are your sure logout?")) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <img src={img} style={{ height: "150px", width: "200px" }} />s
        </div>
        <div className="btn ">
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Logout
          </Button>
        </div>
      </div>
      <Find />
    </>
  );
};

export default Header;
