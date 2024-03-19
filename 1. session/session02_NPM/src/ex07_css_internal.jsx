const myStyle = {
    color: 'red',
    fontStyle: 'italic',
    textDecoration: 'underline'
}

function SetStyle(props) {
    return <h1 style={myStyle}>{props.msg}</h1>
}

const TestStyle = <SetStyle msg="Example of Style!"/>

export default TestStyle