import { useState } from "react"
import { useEffect } from "react"
import './styles.css'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) {
      return []
    }
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <h1 className="header">To-do List</h1>
      <form>
        <div className="newTask">
          <label htmlFor="item">New task: </label>
          <p>Title: <input id="item" type="text" /></p>
          <p>Category:
            <select>
                <option>School</option>
                <option>Sport</option>
                <option>Work</option>
            </select>
          </p>
          <p><button className="extra">+ Add notes</button></p>
          <p><button className="extra">+ Add deadline</button></p>
        </div>
        <button className="task-btn">Add</button>
      </form>
      <div className="category">
        Category:
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" />
              Task 1
            </label>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        </ul>
      </div>
    </>
  )
}
