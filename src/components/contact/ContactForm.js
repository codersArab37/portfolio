import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: '3em',
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

function ContactForm() {
  const classes = useStyles();
  const [state, handleSubmit] = useForm('xkgoqlew'); // Replace with your Formspree form ID

  if (state.succeeded) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your email has been sent!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextField
                id="name"
                label="Name"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <TextField
                id="email"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <TextField
                id="message"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting} className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Send Message</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <Typography variant="h4">Reach Out To Us.</Typography>
          </h1>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;