let myEvent = (msg) => {
    alert(msg)
}

function GetEvent() {
    return <button onClick={() => myEvent("Wow, I'd like it!")}>Then, Click here!</button>
}

export default GetEvent;