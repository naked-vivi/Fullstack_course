const TabButton = ({ children, ...props }) =>
(
    <>
        {children} {/*can accept not only string but also any valid JSX, such as HTML elements, React components, or even JavaScript expressions. */}
        <button {...props}>Submit</button>
    </>
)


export default TabButton