import styles from './LoginPage.module.css'
import Input from '../../../../shared/ui/Input/Input.component'
import Button from '../../../../shared/ui/Button/Button.component'

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

        <form className={styles.form}>
          <Input label="Email" placeholder="Email" type="email" />
          <Input label="Password" placeholder="Password" type="password" />

          <label className={styles.remember}>
            <input type="checkbox" />
            <span>Biarkan saya tetap masuk</span>
          </label>

          <Button type="submit" variant="primary">
            Masuk
          </Button>

          <div className={styles.separator}>
            <span>or</span>
          </div>

          <Button type="button" variant="google">
            Masuk Dengan Google{' '}
            <img
              src="../../../../../google-icon.webp"
              alt="Google Icon"
              style={{ width: '1.5rem' }}
            />
          </Button>
        </form>

        <p className={styles.signup}>
          Belum Punya Akun? <a href="#">Yuk Buat Sekarang</a>
        </p>
      </div>

      <aside className={styles.visual}>
        <div className={styles.imagePlaceholder}>
          Image Placeholder
          <span className={styles.placeholderHint}>Illustration Area</span>
        </div>
        <div className={styles.dots}>
          <span className={styles.dotActive} aria-hidden="true"></span>
          <span className={styles.dot} aria-hidden="true"></span>
          <span className={styles.dot} aria-hidden="true"></span>
        </div>
      </aside>
    </div>
  )
}
