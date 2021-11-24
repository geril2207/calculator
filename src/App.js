import CalcGrid from './components/CalcGrid'
import CalcHeader from './components/CalcHeader'

function App() {
  return (
    <div className="App">
      <div className="calc__wrapper">
        <div className="calc__content">
          <CalcHeader />
          <CalcGrid />
        </div>
      </div>
    </div>
  )
}

export default App
