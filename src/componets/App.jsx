import { useState } from 'react'
import '../componets/App.css'
import quotes from './quotes.json'
function App() {
  console.log(quotes);
  const ramdomPhrase = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(ramdomPhrase)

  const changesPhrase = () => {
    const anotherRamdom = Math.floor(Math.random() * quotes.length)
    setIndex(anotherRamdom)
  }

  const colors = [
    '#717EC3',
    '#87255B',
    '#E53D00',
    '#63B4D1',
    '#30011E',
    '#7F7EFF',
    '#1B998B',
    '#E84855',
    '#FF7F51',
    '#4F000B',
    '#720026',
    '#0F1108',
    '#241909',
    '#645853',
    '#25283D',
    '#011627',
    '#2ec4b6',
   '#e71d36',
    '#D90368',
    '#C1DF1F'
  ]

  const ramdomColors = Math.floor(Math.random() * colors.length)

  document.body.style = `background : ${colors[ramdomColors]}`;

  return (
    <div className="App" style={{ color: colors[ramdomColors] }}>
      <div className='card'>
        <h1>
          <i class="fa-solid fa-quote-left"></i> {' '}
          {quotes[index].quote}  {' '}
        </h1>

        <h2>
          {quotes[index].author}
        </h2>

        <div className='Contenier'>
          <ul>
            <button onClick={changesPhrase} style={{ background: colors[ramdomColors] }} >
              <i class="fa-sharp fa-solid fa-angle-right" style={{ color: 'white' }}></i></button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
