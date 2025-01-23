import styles from './Result.module.css'
import PropTypes from 'prop-types'

const Result = ({ decimoTerceiro }) => {
  return (
    <div className={styles.pageContainer}>
      {decimoTerceiro !== null ? (
        <div className={styles.pageContent}>
          <h3>
            Seu 13º salário (total) será: <span>R$ {decimoTerceiro}</span>
          </h3>
        </div>
      ) : null}
    </div>
  )
}

Result.propTypes = {
  decimoTerceiro: PropTypes.string,
}

export default Result
