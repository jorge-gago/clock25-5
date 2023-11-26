const ActionButtons = ( {id = null, vals = [], text=null}) => {

    const handleClick = () => {
        vals.forEach(element => {
            element[0](element[1])
        })
    }

    const playStop = () => {
        if (vals[0][1]) {
            return 'play'
        }
        return `stop`
    }

    return <div id={id} onClick={handleClick}  className="button-action">{text?text:playStop()}</div>
}

export default  ActionButtons