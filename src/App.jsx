import data from "../data.json"
import Summary from "./components/Summary/Summary"
import Result from "./components/Result/Result"

import "./App.css"

function App() {
  console.log(data)

  return (
    <div className="container">
      <Result />
      <Summary data={data} />
    </div>
  )
}

export default App
