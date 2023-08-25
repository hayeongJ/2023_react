import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Day from "./component/Day";
import Main01 from "./component/Main01";
import Main02 from "./component/Main02";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Main03 from "./component/Main03";

// 1. App을 BrowserRouter로 감싼다.
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>REACT 연습하기</h1>
      <hr />
      <button style={{marginLeft:"20px"}}><Link to="/main01">Main01</Link></button>
      <button style={{marginLeft:"20px"}}><Link to="/main02">Main02</Link></button>
      <button style={{marginLeft:"20px"}}><Link to="/main03">Main03</Link></button>
    </div>
    <Routes>
      <Route path="/" />
      <Route path="/main01" element={<Main01 />} />
      <Route path="/main02" element={<Main02 />} />
      <Route path="/main03" element={<Main03 />} />
      <Route path="/day/:day" element={<Day />} />
      <Route path="/daylist" element={<DayList />} />
      {/* 이외에 url이 들어오면 받아들이는 페이지 */}
      <Route path="/" element={<EmptyPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
