import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  text: {
    padding: '0 0 0 5%',
  }
}));



export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> { props.panel1Heading }</Typography>
          <Typography className={classes.secondaryHeading}>{ props.panel1Subheading }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={ classes.text } component={'article'}>
                { props.panel1Text }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>{ props.panel2Heading }</Typography>
          <Typography className={classes.secondaryHeading}>
            { props.panel2Subheading }
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={ classes.text } component={'article'}>
                { props.panel2Text }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>{ props.panel3Heading }</Typography>
          <Typography className={classes.secondaryHeading}>
            { props.panel3Subheading }
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={ classes.text } component={'article'}>
                { props.panel3Text }
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
