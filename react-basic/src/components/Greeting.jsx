const Greeting = ({ name, age }) => //props = {name: "Alice", age: 25}
{
    // let ageParagraph = null;
    // if (age) {
    //     ageParagraph = (<p>You are {age} years old.</p>)
    // }
    return (
        <> {/*fragment, allows us to group multiple elements, parent element without adding extra nodes to the DOM, useful when we want to return multiple elements from a component without wrapping them in a div or other container. */}
            <h1>Hello {name}</h1>
            <p>Welcome to React!</p>
            {age ? <p>You are {age} years old.</p> : null} {/*conditional rendering, if age is truthy, the paragraph will be rendered; if age is falsy (like null, undefined, 0, etc.), the paragraph will not be rendered. */}
        </>
    )
};

export default Greeting;