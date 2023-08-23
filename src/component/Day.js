import dummy from "../db/data.json";

export default function DayList() {
   // 날짜가 1인 것만 출력하기 위함
    const day = 1;

    // fileter는 해석 그대로 걸러주는 역할을 한다.
    // 주로 특정 조건을 만족하는 새로운 배열을 필요로 할 때 사용한다.
    // SQL로 치면 where 절에서 하는 행위를 하는 함수이다.

    const wordList = dummy.words.filter(k => (k.day === day));
    return(
       <>
        <table>
            <tbody>
                {/* map은 배열의 요소를 하나씩 꺼내서 처리할 때 사용,
                k는 배열에서 꺼내진 하나의 요소를 의미한다. */}
                {wordList.map(k => (
                    <tr key={k.id}>
                    <td>{k.eng}</td>
                    <td>{k.kor}</td>
                     </tr>
                ))}
            </tbody>
        </table>
       </>
    );
}