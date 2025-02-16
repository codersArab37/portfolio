import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

export const WhatsAppLink = () => {
  const classes = useStyles();
  const whatsappLink = 'https://wa.me/+963985998304'; // Replace with your actual WhatsApp number

  return (
    <Link
      color='inherit'
      underline='none'
      href={whatsappLink}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <WhatsAppIcon />
      <Typography component='span'>
        <TextDecrypt text={' WhatsApp'} />
      </Typography>
    </Link>
  );
};
