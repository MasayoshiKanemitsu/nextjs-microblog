//Header
import styles from "./header.module.scss";

const Header = ({ is_show = true }) => {
  return (
    <>
      {is_show ? (
        <>
          <div className={styles.container}>Header</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
