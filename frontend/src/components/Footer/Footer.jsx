import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>©2025 | Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://portfolio-front-swart-rho.vercel.app">Fernanda Vaz</a></p>
            <p>Foto de <a href="https://unsplash.com/pt-br/@homajob?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Scott Graham</a> na <a href="https://unsplash.com/pt-br/fotografias/pessoa-segurando-lapis-perto-do-computador-portatil-5fNmWej4tAA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            </p>
        </footer>
    )
}

export default Footer