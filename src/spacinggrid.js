import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Dragon from './dragon.gif'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <div>
    <Paper variant="outlined">
    <img src={Dragon} />
    </Paper>
    <Grid direction='column' container spacing={5}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
        <Paper
          sx={{
            height: 700,
            width: 710,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        />
        <Paper
          sx={{
            height: 700,
            width: 710,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
