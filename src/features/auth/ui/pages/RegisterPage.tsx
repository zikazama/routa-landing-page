import styles from './RegisterPage.module.css'
import Input from '../../../../shared/ui/Input/Input.component'
import Button from '../../../../shared/ui/Button/Button.component'
import ImageSlider from '../../../../shared/ui/ImageSlider/ImageSlider.component'

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

        <form className={styles.form}>
          <Input label="Nama" placeholder="Nama" type="text" />
          <Input label="Email" placeholder="Email" type="email" />

          <div className={styles.dateField}>
            <label className={styles.dateLabel}>Tanggal Lahir</label>
            <input type="date" className={styles.dateInput} />
          </div>

          <Input label="Password" placeholder="Password" type="password" />
          <Input label="Konfirmasi Password" placeholder="Konfirmasi Password" type="password" />

          <Button type="submit" variant="primary">
            Daftar Akun
          </Button>

          <div className={styles.separator}>
            <span>or</span>
          </div>

          <Button type="button" variant="google">
            Daftar Dengan Google{' '}
            <img
              src="../../../../../google-icon.webp"
              alt="Google Icon"
              style={{ width: '1.5rem' }}
            />
          </Button>
        </form>

        <p className={styles.signin}>
          Sudah Punya Akun? <a href="/login">Yuk Masuk</a>
        </p>
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
