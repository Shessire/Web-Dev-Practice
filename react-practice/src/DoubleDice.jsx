export default function DoubleDice () {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    return (
        <>
            {num1 === num2 && <h2>You win</h2>}
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
        </>
    )
}


// export default function DoubleDice () {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <>
//             <h2>{num1 === num2 ? "You win" : "You lose :("}</h2>
//             <p>Num 1: {num1}</p>
//             <p>Num 2: {num2}</p>
//         </>
//     )
// }