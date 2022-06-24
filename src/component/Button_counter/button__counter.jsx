import { useState } from "react";



function Button_counter(params) {

    //хук useState (меняет состояние)

    const [counter, setCounter] = useState(0)

    const [obj, setStateObj] = useState({
        name: "lena",
        string: 'hello'
    })

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    function renameObj(...prev) {
        setStateObj(prev => {
           return (
            {...prev, 
            name: "Kate"})})
    }

    return (
        <div>
            <h3 className='count'>{counter}</h3>
            <div className="counter__block">
                <button onClick={increment} className="btn_count">Добавить</button>
                <button onClick={decrement} className="btn_count">Удалить</button>
            </div>

            <h3 className='obj_title'>{JSON.stringify(obj)}</h3>
            <div className="obj__block">
                <button onClick={renameObj} className="obj_btn">Изменить</button>
            </div>
        </div>

    )
}
export default Button_counter;