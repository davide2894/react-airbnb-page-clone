1. What do `props` help us accomplish? `props` help us pass dynamic data to jsx components in order to make them more reusable



2. How do you pass a prop into a component? To pass a prop into a component you need to do the followint:
    1. pass the `props` as custom attribute values like
    const propValue = "value";
    <customElement propName={propValue}>
    2. specify the `props` parameter in the component definition. For example:


    export default function (`props`) {
        return (
            <div>
                Hello {props.propName}
            </div>
        )
    }

    Note: parameter name can be anything. The important thing to note is that `props` are passed as one object to the component function, and every single prop is an actual object property with a key and a value



3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   No because native DOM elements don't understand JSX syntax. JSX custom components return JS objects under the hood, which in turn will be transpiled into real DOM elements
   


4. How do I receive `props` in a component?
function Navbar() {
    Look answer to question 2
}


5. What data type is `props` when the component receives it? `props` is an object. The component receives it as a function parameter