import styles from './Form.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import axios from 'axios'
import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { LuCalculator } from 'react-icons/lu'

const Form = ({ setDecimoTerceiro }) => {
  const [valores, setValores] = useState({
    salarioIntegral: '',
    mesesTrabalhados: '',
    horaExtra: '',
    valorHoraExtra: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValores((prevValores) => ({
      ...prevValores,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:3000', {
        salarioIntegral: parseFloat(valores.salarioIntegral.replace(',', '.')),
        mesesTrabalhados: parseInt(valores.mesesTrabalhados, 10),
        horaExtra: parseInt(valores.horaExtra, 10),
        valorHoraExtra: parseFloat(valores.valorHoraExtra.replace(',', '.')),
      })

      setDecimoTerceiro(res.data.decimoTerceiro)

      setValores({
        salarioIntegral: '',
        mesesTrabalhados: '',
        horaExtra: '',
        valorHoraExtra: '',
      })
    } catch (error) {
      alert(
        'Erro ao calcular o décimo terceiro. Verifique os valores inseridos.'
      )
      console.error(error)
    }
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Calcule seu 13º salário</h1>

      <div className={styles.formContent}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{ width: 300, maxWidth: '100%', display: 'flex', flexWrap: 'wrap' }}
            className={styles.formInput}
          >
            <TextField
              type='text'
              name='salarioIntegral'
              label='Salário integral:'
              value={valores.salarioIntegral}
              onChange={handleChange}
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position='start'>R$ </InputAdornment>
                }
              }}
            />

            <TextField
              type='number'
              name='mesesTrabalhados'
              label='Meses trabalhados no ano:'
              value={valores.mesesTrabalhados}
              onChange={handleChange}
              inputProps={{ min: 0, max: 12 }}
              required
              fullWidth
            />

            <TextField
              type='number'
              name='horaExtra'
              label='Horas extras trabalhadas:'
              value={valores.horaExtra}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              type='text'
              name='valorHoraExtra'
              label='Valor da hora extra:'
              value={valores.valorHoraExtra}
              onChange={handleChange}
              inputProps={{ min: 0 }}
              required
              fullWidth
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position='start'>R$ </InputAdornment>
                }
              }}
            />
          </Box>

          <Button
            type='submit'
            variant='contained'
            size='large'
            endIcon={<LuCalculator />}
          >
            Calcular 13º
          </Button>
        </form>
      </div>
    </div>
  )
}

Form.propTypes = {
  setDecimoTerceiro: PropTypes.func.isRequired,
}

export default Form
