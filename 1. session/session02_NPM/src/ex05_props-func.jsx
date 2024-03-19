function GetProps(props) {
    return <h1>{props.msg}</h1>
}

const TestProps = <GetProps msg="Example of Props to Function Component!"/>;

export default TestProps;