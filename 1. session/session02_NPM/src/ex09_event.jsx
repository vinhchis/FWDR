const myEvent = () => {
    alert("You're just click on me!")
}

function GetEvent() {
    return <button onClick={myEvent}>Click here first!</button>
}

export default GetEvent;