import { useSelector, useDispatch, useReducer } from 'react-redux';
import React, {useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core/';
import { getUserData } from './action';
import {faArrowAltCircleDown, faCircle, faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    top: '30%',
    position: 'absolute',
    background: '#d3d3d3'
  },
  paper: {
    color: theme.palette.text.secondary,
    background: '#ffffff',
    borderRadius: "8px 8px 0px 0"
  },
  infoSection : {
    marginTop: 2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#444',
    background: '#ffffff',
    borderRadius: "0 0 8px 8px",
  },
  username: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  city :{
    color: theme.palette.text.secondary,
  },
  selectOptions : {
    padding: 20
  }
}));
const styles = makeStyles(theme => ({
  option: 
  {
    border: "1px solid black",
    borderRadius: "5%",
    backgroundColor:'lightgrey',
  },
}));
const SelectInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 32,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: '0.9em',
    padding: '12px 22px 12px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 32,
      padding: '12px 22px 12px 16px',
      background: '#ffffff',
      
    },
  },
  option : {
    background: 'yellow'
  }
}))(InputBase);

export const UserCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    dispatch(getUserData())
  },[])
  const [status, setStatus] = React.useState(10);
  const handleChange = event => {
    setStatus(event.target.value);
    handleClick();
  };
  const {userData} = useSelector((state) => ({userData: state.UserData ? state.UserData.userData: {}}));

  return (
    <div className={classes.root}>
      <Grid container style={{
        "padding" : 8
      }}>
        <Grid item xs={12}>
          <Grid container className={classes.paper} >
               <Grid item xs={12}>
                 <div className={classes.username}>
                   <Grid container justify="flex-start" style={{
                     paddingTop: 4
                   }} >
                     <Grid item xs={1}  style={{
                     textAlign : "center"}}>
                    <FontAwesomeIcon icon={faArrowAltCircleDown} size='2x' style={{color: 'rgb(245, 218, 26)'}} />
                    </Grid >
                      <Grid item xs={11}>
                        {
                          userData && 
                          <Grid container direction={"column"} >
                             <Grid item >
                                <Typography style={{
                                fontWeight: 'bold'
                              }} className={classes.titleIntro} variant="span"> {userData.name}</Typography>
                              </Grid>
                              <Grid item>
                                <Grid container justify="space-between">
                                  <Grid item>
                                    <Typography  className={classes.titleIntro} variant="span"> {userData.username}</Typography>
                                  </Grid>
                                  <Grid item>
                                    <FontAwesomeIcon icon={faArrowAltCircleDown} size='1x' style={{color: '#508f59', marginRight:8}} />
                                  </Grid>
                              </Grid>
                             </Grid>
                             <Grid item >
                               <Typography style={{
                               
                              }} className={classes.titleIntro} variant="span"> {userData.email} | {userData.phone}</Typography>
                             </Grid>
                              <Grid item >
                             <Typography style={{
                                fontWeight: 'normal'
                              }} className={classes.city} variant="span"> {userData.address.city}</Typography>
                            </Grid>
                         </Grid> 
                        }
                      </Grid>
                    </Grid>
                 </div>
               </Grid>
               <Grid item xs={12}>
                 <Grid container justify="flex-end" alignItems="center"  style={{
                   "padding" : 8
                 }}>
                   <Grid item>
                   <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.titleIntro} variant="span"> Application Status</Typography>
                       <FontAwesomeIcon icon={faCircle} size='1x' style={{color: '#42f569', padding: '0 8px 0 8px'}} />
                    <NativeSelect
                       value={status}
                       onChange={handleChange}
                       input={<SelectInput />}
                       selectMenu={styles}
                       >
                       <option className={classes.selectOptions} value={"Shortlisted"}>Shortlisted</option>
                       <option className={classes.selectOptions} value={"In Interview"}>In Interview</option>
                       <option className={classes.selectOptions} value={"Offered"}>Offered</option>
                       <option className={classes.selectOptions} value={"Joined"}>Joined</option>
                       <option className={classes.selectOptions} value={"On Hold"}>On Hold</option>
                       <option className={classes.selectOptions} value={"Rejected"}>Rejected</option>
                    </NativeSelect>
                   </Grid>
                </Grid>
               </Grid>
               </Grid>
              <Grid container className={classes.infoSection} >
               <Grid item xs={12}>
                 <Grid container justify="space-around">
                 
                    <Grid item xs={1}>
                      <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.actionInfo} variant="body2"> 
                     View Profile
                     </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.actionInfo} variant="body2"> 
                      Screening Response
                     </Typography>
                    </Grid>
                    <Grid item xs={1}>
                    <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.actionInfo} variant="body2"> 
                     Send Messages
                     </Typography>
                     
                    </Grid>
                    <Grid item xs={1}>
                    <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.actionInfo} variant="body2"> 
                      Schedule Interviews
                     </Typography>
                    
                    </Grid>
                    <Grid item xs={1}>
                    <Typography style={{
                         fontWeight: 'normal'
                       }} className={classes.actionInfo} variant="body2"> 
                      View Activities
                     </Typography>
                     
                    </Grid>
                  </Grid>
               </Grid>
              </Grid>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={()=> {
              setOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} size={'1x'}/>
          </IconButton>,
        ]}
        message={<span id="message-id">Candidate {status}</span>}
      />
    </div>
  );
}
