import express from 'express'
import cors from 'cors'

async function main() {
  const hostname = 'localhost'
  const port = '3000'

  const app = express()

  app.use(express.json())
  app.use(cors())

  app.get('/', (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: 'Bem vindo à calculadora Meu Décimo Terceiro',
    })
  })

  app.listen(port, () => {
    console.log(`Servidor rodando em: http://${hostname}:${port}`)
  })

  app.post('/', (req, res) => {
    const { salarioIntegral, mesesTrabalhados, horaExtra, valorHoraExtra } =
      req.body

    if (
      ![salarioIntegral, mesesTrabalhados, horaExtra, valorHoraExtra].every(
        (valor) => typeof valor === 'number' && valor >= 0
      )
    ) {
      return res.status(400).json({ error: 'Insira um valor maior que zero' })
    }

    if (mesesTrabalhados < 0 || mesesTrabalhados > 12) {
      return res
        .status(400)
        .json({ error: 'Meses trabalhados deve ser entre 0 e 12' })
    }

    const valorA = salarioIntegral / 12

    const valorB = valorA * mesesTrabalhados

    const adicional = (horaExtra / mesesTrabalhados) * valorHoraExtra

    const valorC = valorB + adicional

    res.json({ decimoTerceiro: valorC.toFixed(2) })
  })
}

main()
