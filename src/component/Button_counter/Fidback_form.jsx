import { useState } from "react"

export function Fidback(prop) {

    const [form, setForm] = useState({
        name: "Helen",
        grade: 1,
        checkbox: false,
    })

    const handleSubmit = event => {
       event.preventDefault();
       console.log(event)
    }

    const handler = ({target}) => {
        console.log(target.type)
        const name = target.name
        const value = target.type === "checkbox" ? target.checked : target.value
        setForm(prevForm => ({...prevForm, [name]: value}))

    }
    return (<form className="fidback__form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Ваше имя</label>
        <input type="text" name="name" className="name__inpunt" value={form.name} onChange={handler}/>


        <label htmlFor="grade" className="fidback__select"> Ваша оценка</label>
        <select name="grade" id="grade" value={form.grade} onChange={handler}>
            <option value="1" key={1}>good</option>
            <option value="2" key={2}>normal</option>
            <option value="3" key={3}>bad</option>
        </select>

        <label htmlFor="checkbox">Я согласен на обработку данных
            <input type="checkbox" name="checkbox" value={form.checkbox} onChange={handler}/></label>


        <button type="submit" className="form__btn">Отправить</button>

    </form>
    )
}