import { Link } from "react-router-dom";
import Top from "./Top";
import "./Notfound.css"

function Notfound() {
  return (
    <div>
      <Top />
      <div className="not_text">
        <h1>해당 페이즈를 찾지 못했습니다</h1>
        <p>주소가 잘못되었거나 더이상 제공 되지 않는 페이지 입니다.</p>
        <Link to="/">메인 화면으로 돌아가기</Link>
      </div>
    </div>
  );
}

export default Notfound;
