import styles from './RegisterPage.module.css'
import ImageSlider from '../../../../shared/ui/ImageSlider/ImageSlider.component'
import RegisterForm from '../components/RegisterForm/RegisterForm'

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <img src="../../../../../logo-routa.webp" alt="Routa Logo" />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Daftar</h1>
          <p className={styles.subtitle}>Buat akun routa kamu sekarang!</p>
        </div>
        <RegisterForm register={(values) => void values} isLoading={false} error={null} />
      </div>

      <aside className={styles.visual}>
        <ImageSlider
          images={[
            '../../../../../login.webp',
            '../../../../../register.webp',
            '../../../../../gallery-2.webp',
          ]}
          interval={5000}
        />
      </aside>
    </div>
  )
}
