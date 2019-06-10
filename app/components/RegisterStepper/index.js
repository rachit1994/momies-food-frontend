import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const theme = createMuiTheme({
    palette: {
      primary: blue,
    },
});
const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Your Basic Details', 'Your Address', 'Your dishes'];
}

function getStepContent(step, values, handleChange) {
  switch (step) {
    case 0:
      return (
            <Grid container spacing={4}>
                <Grid item>
                    <TextField
                        required
                        label="Email Address"
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleChange('email')}
                        variant="outlined"
                        color="secondary"
                        error={values.error.email}
                        autoFocus
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        label="Full Name"
                        value={values.name}
                        onChange={handleChange('name')}
                        onBlur={handleChange('name')}
                        variant="outlined"
                        error={values.error.name}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        label="Mobile Number"
                        value={values.number}
                        onChange={handleChange('number')}
                        onBlur={handleChange('number')}
                        variant="outlined"
                        error={values.error.number}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        label="Password (min 6 character)"
                        value={values.password}
                        onChange={handleChange('password')}
                        onBlur={handleChange('password')}
                        variant="outlined"
                        type="password"
                        error={values.error.password}
                    />
                </Grid>
            </Grid>
      );
    case 1:
      return (
          <Grid container spacing={4}>
            <Grid item>
                <TextField
                    required
                    label="Address"
                    value={values.address}
                    onChange={handleChange('address')}
                    onBlur={handleChange('address')}
                    variant="outlined"
                    error={values.error.address}
                    autoFocus
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    label="Area"
                    value={values.area}
                    onChange={handleChange('area')}
                    onBlur={handleChange('area')}
                    variant="outlined"
                    error={values.error.area}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    label="City"
                    value={values.city}
                    onChange={handleChange('city')}
                    onBlur={handleChange('city')}
                    variant="outlined"
                    error={values.error.city}
                />
            </Grid>
          </Grid>
      )
    case 2:
      return (
          <Grid container spacing={4}>
            <Grid item>
                <TextField
                    required
                    label="Which dishes you will cook?"
                    value={values.dishes}
                    onChange={handleChange('dishes')}
                    onBlur={handleChange('dishes')}
                    variant="outlined"
                    error={values.error.dishes}
                    autoFocus
                />
            </Grid>
            <Grid item>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="often">
                    How often will you cook?
                    </InputLabel>
                    <Select
                        value={values.often}
                        onChange={handleChange('often')}
                        onBlur={handleChange('often')}
                        input={<OutlinedInput name="often" id="often"/>}
                    >
                        <MenuItem value='Daily'>Daily</MenuItem>
                        <MenuItem value='Occasionally'>Occasionally</MenuItem>
                        <MenuItem value='Request'>On Request</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextField
                    label="Comments"
                    value={values.comments}
                    onChange={handleChange('comments')}
                    variant="outlined"
                />
            </Grid>
          </Grid>
      )
    default:
      return 'Unknown step';
  }
}

function disableNext(step, values) {
    if (step == 0) {
        return values.error.email || values.error.name || values.error.number || values.error.password
    } else if (step == 1) {
        return values.error.address || values.error.area || values.error.city
    } else if (step == 2) {
        return values.error.dishes
    }
    return false;
}

export function VerticalLinearStepper({ values, handleChange, registerApi }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function api() {
    registerApi();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                <>{getStepContent(index, values, handleChange)}</>
                <div className={classes.actionsContainer}>
                    <div>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={activeStep === steps.length - 1 ? api : handleNext }
                        className={classes.button}
                        disabled={disableNext(index, values)}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    </div>
                </div>
                </StepContent>
            </Step>
            ))}
        </Stepper>
        {activeStep === steps.length && values.success && (
            <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
                Reset
            </Button>
            </Paper>
        )}
        {activeStep === steps.length && values.error.message && (
            <Paper square elevation={0} className={classes.resetContainer}>
            <Typography color="error">Some error occurred</Typography>
            <Button onClick={handleReset} className={classes.button}>
                Reset
            </Button>
            </Paper>
        )}
        </div>
    </ThemeProvider>
  );
}

export default VerticalLinearStepper;