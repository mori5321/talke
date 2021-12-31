type TopLayoutProps = {
  title: string;
};

const TopLayout = ({ title }: TopLayoutProps): JSX.Element => (
  <div>{title}</div>
)

export { TopLayout }
