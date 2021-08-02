import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  fall: {
    text: "Leaves are starting to change!",
    iconName: "leaf",
  },
  winter: {
    text: "Burr it's cold!",
    iconName: "snowflake",
  },
  spring: {
    text: "Lets go smell the flowers!",
    iconName: "tree",
  },
};

const getSeason = (lat, month) => {
  if (month > 4 && month < 8) {
    return lat > 0 ? "summer" : "winter";
  } else if (month > 7 && month < 11) {
    return lat > 0 ? "fall" : "spring";
  } else if (month > 10 || month < 2) {
    return lat > 0 ? "winter" : "summer";
  } else if (month > 1 && month < 5) {
    return lat > 0 ? "spring" : "fall;";
  }
};
//11 to 1 = dec to feb, winter
//2 to 4 = mar to may, spring
//5 to 7 = june to aug, summer
//8 to 10 = sep to nov, fall
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
