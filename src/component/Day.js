import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

export default function Day() {
    // url에 포함된 day값을 가져오기 위해서 useParams()
    // useParams()는 라우터에서 제공
    const day = useParams().day;

    const wordList = dummy.words.filter(k => (k.day === Number(day)));
    return(
       <>
       <h2>Day {day}</h2>
        <table>
            <tbody>
                {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용,
                k는 배열에서 꺼내진 하나의 요소를 의미한다. */}
                {wordList.map(k =>(
                    // 컴포넌트에 속성을 부여하는 것
                    <Word word={k} key={k.id} />
                ))}
            </tbody>
        </table>
       </>
    );
}