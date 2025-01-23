import { useState } from 'react'
import Form from './components/Form/Form'
import Result from './components/Result/Result'
import Footer from './components/Footer/Footer'

function App() {
  const [decimoTerceiro, setDecimoTerceiro] = useState(null)

  return (
    <>
      <Form setDecimoTerceiro={setDecimoTerceiro} />
      <Result decimoTerceiro={decimoTerceiro} />
      <Footer />
    </>
  )
}

export default App
