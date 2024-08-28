import { Stack } from "@mui/material";
import styles from "./assets/style.module.css";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <>
      <div className={styles.contact}>
        <hr />
        <h3>Contact US</h3>
        <hr />
      </div>
      <div className={styles.input}>
        <input type="text" name="" placeholder="Enter your Name" />
        <input type="text" name="" placeholder="Enter a Valid Mobile No." />
        <input type="text" name="" placeholder="Industry" />
        <input
          type="text"
          name=""
          className={styles.last_input}
          placeholder="Enter your Message"
        />
        <Stack className={styles.button}>
          <Button variant="contained">Send</Button>
        </Stack>
      </div>
    </>
  );
};

export default Contact;
