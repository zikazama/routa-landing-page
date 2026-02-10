import styles from './LoginPage.module.css'
import ImageSlider from '../../../../shared/ui/ImageSlider/ImageSlider.component'
import LoginForm from '../components/LoginForm/LoginForm'

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <img src="../../../../../logo-routa.webp" alt="Routa Logo" />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Masuk</h1>
          <p className={styles.subtitle}>Silahkan login dengan akun routa kamu!</p>
        </div>

        <LoginForm login={() => {}} isLoading={false} error={null} />
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
