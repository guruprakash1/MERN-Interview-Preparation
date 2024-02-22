import HigherOrderIncreaseCounter from "../HOC/HigherOrderIncreaseCounter";

const ComponentB = ({ count, increaseCounter }) => {
    return (<>
        <button onMouseOver={increaseCounter}>Increase Counter Value</button>
        <p>{count}</p>
    </>)
}

export default HigherOrderIncreaseCounter(ComponentB);