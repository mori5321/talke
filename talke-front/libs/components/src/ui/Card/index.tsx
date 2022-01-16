import styles from './index.module.scss'

type CardProps = {
  title: string;
  description: string;
  actions?: {
    title: string;
    testId: string;
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
            <button data-testid={action.testId} onClick={action.onClick}>
              {action.title}
            </button>
          ))}
        </div>
        <div>
          <input type="text" data-testid="input" />
        </div>
      </>
    )}
  </div>
)
