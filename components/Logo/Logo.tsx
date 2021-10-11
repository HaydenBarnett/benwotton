import styles from "./Logo.module.css";

export type LogoProps = {
  name?: string;
  role?: string;
};

export const Logo = ({ name, role }: LogoProps) => {
  return (
    <div className={styles.logo}>
      <span className={styles.namewrap}>
        <span className={styles.name}>{name}</span>
        <span className={styles.shadow}>{name}</span>
      </span>
      <span className={styles.role}>{role}</span>
    </div>
  );
};

export default Logo;
