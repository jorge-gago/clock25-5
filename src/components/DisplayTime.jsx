const DisplayTime = ( {time = 0} ) => {

    const display = () => {
        const min = Math.floor(((time/1000)/60)%60)
        const sec = Math.floor((time/1000)%60)

        const mins = min>0?min:0
        const secs = sec>0?sec:0

        return `${mins<10?`0${mins}`:mins}:${secs<10?`0${secs}`:secs}`
    }

    return (
        <>
            <div id="time-left" className="time-display">{display()}</div>
        </>
    )

}

export default DisplayTime