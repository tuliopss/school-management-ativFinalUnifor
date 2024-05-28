import styles from "./Message.module.css";

// const Message = ({ msg, type }) => {
//   <div className={`${styles.message} ${styles[type]}`}>
//     <p>oi {msg}</p>
//   </div>;
// };
import React from "react";

const Message = ({ msg, type }) => {
  return <div className={`${styles.message} ${styles[type]}`}>{msg}</div>;
};

export default Message;

// export default Message;
