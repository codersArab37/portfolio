/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import tickting from '../../assets/recentprojects/tickting2.png';
import shakee from '../../assets/recentprojects/shakee.png';
import bazel from '../../assets/recentprojects/bazel.png';
import realstate from '../../assets/recentprojects/realstate.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Customers Tickting', 
      description: `Designed and developed a ReactJS  Tickting System 
      with Laravel for the backend.`,
      alter: 'React Portfolio',
      image: `${tickting}`,
    },
    { 
      id: 2,
      title: 'Bazel Alnada Charity', 
      description: `An advocacy project website built using
      MEAN stack with fact-checking tool to promote actions against
      fake news.`,
      alter: 'VeriTru Project',
      image: `${bazel}`,
    },
    { 
      id: 3,
      title: 'Shake Shake', 
      description: `Experience a whole new world of mystery boxes with Shake Shake. Whether you're on the quest for an exciting mystery box or seeking the perfect special gift, Shake Shake has changed the experience from chance to win`,
      image: `${shakee}`,
    },
    {
      id: 4,
      title: 'realstate', 
      description: `A real estate website built using ReactJS and Firebase for the backend. It allows users to search for properties, view details, and book appointments.`
      ,image: `${realstate}`,
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
