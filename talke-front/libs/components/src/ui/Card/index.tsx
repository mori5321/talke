import styles from './index.modules.scss'

type CardProps = {
  title: string;
  description: string;
  actions?: {
    title: string;
    onClick: () => void;
  }[];
};

export const Card = ({ title, description, actions }: CardProps) => (
  <div className={styles.wrapper}>
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
    {actions && actions.length > 0 && (
      <>
        <hr className={styles.separator} />
        <div className={styles.actionGroup}>
          {actions.map((action) => (
            <button onClick={action.onClick}>{action.title}</button>
          ))}
        </div>
      </>
    )}
  </div>
)
