import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { ListSubheader,
  List, 
  ListItem, 
  ListItemText, 
  Collapse
} from '@material-ui/core';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const ProductNav = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openTwo, setOpenTwo] = React.useState(false);
    const [openThree, setOpenThree] = React.useState(false);
  
    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickTwo = () => {
        setOpenTwo(!openTwo);
    };
    const handleClickThree = () => {
        setOpenThree(!openThree);
    };
  
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className={classes.listLabel}>
            Shop By Category
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button>
          <ListItemText primary="Accessories" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Batteries" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chin Straps" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Clearner" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Clearance Products" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="CPAP Masks" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Direct Seal Pillow Masks" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Full Face Masks" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Infant Masks" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Nasal Masks" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Oral Masks" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="Cushions" />
        </ListItem>
        <ListItem button onClick={handleClickTwo}>
          <ListItemText primary="Filters" />
          {openTwo ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTwo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Fisher & Paykel Filters" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Phillips/Respironics Filters" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Resmed Filters" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="Humidified Chambers" />
        </ListItem>
        <ListItem button onClick={handleClickThree}>
          <ListItemText primary="Replacement Parts" />
          {openThree ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openThree} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Fisher & Paykel Parts" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Phillips/Respironics Parts" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Resmed Parts" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemText primary="Tubing" />
        </ListItem>
      </List>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#1970bb',
    boxShadow: '2px 3px 16px #bcbcbc',
    color: 'white'
  },
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor: '#1264aa'
  },
  listLabel : {
    color: 'white',
    fontSize: '20px',
    borderBottom: '1px solid white'
  } 
}));

export default ProductNav