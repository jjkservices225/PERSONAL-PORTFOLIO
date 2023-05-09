import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "HTML5",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "React JS",
    numberPercent: "76",
    startCount: "0",
    endCount: "76",
  },
  {
    name: "Node JS",
    numberPercent: "68",
    startCount: "0",
    endCount: "68",
  },
  {
    name: "React Native",
    numberPercent: "69",
    startCount: "0",
    endCount: "69",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
