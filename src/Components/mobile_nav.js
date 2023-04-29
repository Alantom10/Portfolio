import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

// const styles = {
//   stickToBottom: {
//     width: '100%',
//     position: 'fixed',
//     bottom: 0,
//   },
// };

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation id='mobile_nav' className={classes.stickToBottom} value={value} onChange={handleChange}>
      <BottomNavigationAction href='/about' id='nav_icons' icon={<PersonIcon />} />
      <BottomNavigationAction href='/resume' id='nav_icons' icon={<ReceiptIcon />} />
      <BottomNavigationAction href='/skills' id='nav_icons' icon={<BuildIcon />} />
      <BottomNavigationAction href='/projects' id='nav_icons' icon={<FolderIcon />} />
      <BottomNavigationAction href='/contacts' id='nav_icons' icon={<PhoneIphoneIcon />} />
    </BottomNavigation>
  );
}