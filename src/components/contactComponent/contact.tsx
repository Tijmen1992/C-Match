import styles from "./styles.module.css";

interface IProps {
  firstName: string;
  phoneNumber: string;
}

export const Contact = ({ phoneNumber, firstName }: IProps) => {
  const contactUrl = "https://wa.me/" + phoneNumber;

  return (
    <div className={styles["contact"]}>
      <h2>Neem contact op met </h2>
      <h3>{firstName}</h3>
      <p>
        Contact:
        <a href={contactUrl} target="_blank" rel="noreferrer">
          Whatsapp
        </a>
      </p>
    </div>
  );
};
