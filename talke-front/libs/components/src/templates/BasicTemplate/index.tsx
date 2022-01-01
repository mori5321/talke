import styles from './index.modules.scss'

type BasicTemplateProps = {
  children: JSX.Element;
};

export const BasicTemplate = ({ children }: BasicTemplateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Talke</h1>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
