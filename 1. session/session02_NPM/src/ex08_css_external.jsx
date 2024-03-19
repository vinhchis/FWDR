import "./css/style.css"

const ExternalCss = "myStyle"

function SetStyle(props) {
    return <h1 className={ExternalCss}>{props.msg}</h1>
}

const TestStyle = <SetStyle msg="Example of Enternal Style!"/>

export default TestStyle