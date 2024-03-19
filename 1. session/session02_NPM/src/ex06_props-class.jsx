import React from 'react';

class GetProps extends React.Component {
    render() {
        return <h1>{this.props.msg}</h1>
    }
}

const TestProps = <GetProps msg="Example of Props to Class Component!"/>;

export default TestProps;