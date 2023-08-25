import {useState} from "react";

export default function Word({word}){
    // 보였다가 안보였다가 하기 위해서
    // isShow 상태값을 만들어주고 props로 word를 받아와
    // isShow가 true 일 때만 보이게 하자.

    const[isShow, setIsShow] = useState(false);

    function toggleShow(){
        setIsShow(! isShow)
    }
    return(
        <tr>
            <td><input type="checkbox" /></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} style={{marginLeft:"20px"}}>뜻 {isShow? '숨기기':'보기'}</button>
                <button>삭제</button>
            </td>
        </tr>
    );

}