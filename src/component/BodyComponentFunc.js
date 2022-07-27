// kalo pake function ga perlu import
function BodyComponentFunc (props){ // props di func menjadi parameter
    return(
        <>
        <h1>Body Component Function</h1>
        <p>welcome {props.firstName}</p>
        </>
    )
}

export default BodyComponentFunc;