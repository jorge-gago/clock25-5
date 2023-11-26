const CountButtons = ({componentName = null, value, set, act}) => {

    const id = `${componentName}-label`
    const length = `${componentName}-length`
    const increment = `${componentName}-increment`
    const decrement = `${componentName}-decrement`

    const handleIncrement = () => {
        if (value < 60) {
            set( value + 1)
            act(false)
            return null
        }
    }

    const handleDecrement = () => {
        if (value > 1) {
            set( value - 1)
            act(false)
            return null
        }
    }

    return (
        <div id={id} className="flex-c times-box">
            <div>{componentName}</div>
            <div id={length} className="time-number">{Number(value)}</div>
            <div className="button-box">
                
                <div onClick={handleDecrement} id={decrement} className="button-action " >-</div>
                <div onClick={handleIncrement} id={increment} className="button-action">+</div>
            </div>
            
        </div>
    )
}

export default CountButtons