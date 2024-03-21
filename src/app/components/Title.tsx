import * as React from 'react';
import Typography from '@mui/material/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Button from '@mui/material/Button';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography
      component="h2"
      variant="h6"
      color="white"
      gutterBottom
      style={{ backgroundColor: '#1560bd' }}
    >
      <PersonAddAltIcon />
      {props.children}
    </Typography>
  );
}
