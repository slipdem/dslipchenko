import React, { forwardRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import Box from "../components/Box";
import { externalLinkIcon } from "../assets/svgIcons";

const Education = forwardRef((props, ref) => {
  return (
    <>
      <SectionTitle title="Education, Courses and trainings" id="education" />
      <section
        className="wrapper grid education"
        ref={ref}
        id="educationIntersection"
      >
        <Box
          title="Education"
          className="education"
          location="Cherkasy, Ukraine"
          date="2004 - 2006"
        >
          <h2 className="box__children-title">
            Cherkasy State Technological University
          </h2>
          <p className="box__children-info">
            Software engineering for automated systems
          </p>
        </Box>

        <Box
          title="Education"
          className="education"
          location="Smila, Cherkasy region, Ukraine"
          date="2000 - 2004"
        >
          <h2 className="box__children-title">
            Smila Technical Secondary School of Food Technologies NUFT
          </h2>
          <p className="box__children-info">
            Developing and programming of the automated systems
          </p>
        </Box>

        <Box
          title="Courses and trainings"
          className="courses"
          date="03/2023 - 07/2023"
        >
          <h2 className="box__children-title">
            Front-end. The Ultimate Bootcamp for Beginners by Ciklum
          </h2>
          <p className="box__children-info">
            <a
              href="https://drive.google.com/file/d/1cDT0my8efcKVq4niA6ExnJciCa07sMFr/view?usp=sharing"
              target="_blank"
              className="link"
            >
              Certificate with honor {externalLinkIcon}
            </a>
          </p>
        </Box>
      </section>
    </>
  );
});

export default Education;
