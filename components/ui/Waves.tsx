import styles from "./Waves.module.css";

const waveColours = {
  color1: "#091246",
  color2: "#3b1073",
  color3: "#170839",
};

const Waves = () => {
  return (
    <div>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
              58-18 88-18s
              58 18 88 18 
              58-18 88-18 
              58 18 88 18
              v44h-352z"
          />
        </defs>
        <g className={styles.waves}>
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            fill={waveColours.color1}
            fill-opacity=".3"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            fill={waveColours.color2}
            fill-opacity=".2"
          />
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            fill={waveColours.color3}
            fill-opacity=".2"
          />
        </g>
      </svg>
    </div>
  );
};
export default Waves;
