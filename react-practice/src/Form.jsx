function handleFormSubmit (e) {
    e.preventDefault();
}

function Form () {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}

export default Form;