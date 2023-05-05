import PropTypes from "prop-types";
import React from "react";
import styles from "./Zodiac.module.css";

const Zodiac = ({ zodiacArray }) => {
  return (
    <>
      <h2 className={styles.title}>Знаки зодіаку</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.ceil}>Назва знаку</th>
            <th className={styles.ceil}>Період</th>
          </tr>
        </thead>
        <tbody>
          {zodiacArray.map((el) => {
            const { id, name, dates } = el;

            return (
              <tr key={id}>
                <td className={styles.ceil}>{name}</td>
                <td className={styles.ceil}>{dates}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

Zodiac.propTypes = {
  zodiacArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Zodiac;
