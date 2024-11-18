function Greeter({person, from = "anonymous"}) {
    return (
    <>
        <h1>HELLO, {person}!</h1>
        <h2>-{from}</h2>
    </>
    )
}

//export default allows you to import it with 
//whatever name you would like it to be but only one fn can be imported
export default Greeter