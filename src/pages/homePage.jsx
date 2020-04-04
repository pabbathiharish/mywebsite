import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import bibleSagrada1 from '../assets/images/bible_sagrada1.png'
import bibleSagrada2 from '../assets/images/bible_sagrada2.png'
import bibleSagrada3 from '../assets/images/bible_sagrada3.png'

import santaBible1 from '../assets/images/santa_bible_1.png'
import santaBible2 from '../assets/images/santa_bible_2.png'
import santaBible3 from '../assets/images/santa_bible_3.png'
import santaBible4 from '../assets/images/santa_bible_4.png'




const useStyles = theme => ({
    root: {
        flexGrow: 1,
      },
    appbar: {
        height: 60,
        background: "transparent",
        boxShadow: "none",paddingTop:20,
    },
    body1: {
        backgroundImage: "url(" + "http://www.qubag.com/img/bg-pattern.png" + ")",
        height: window.innerHeight,
    },
    body1text: {
        fontSize:55,
        color:"black"
    },
    body2: {
        backgroundColor: "#fdc944",
        height: "auto",
        paddingTop:"5%",
        paddingBottom:"5%",
        textAlign:"center"
    },
    body3: {
        backgroundColor: "#fff",
        height: "auto",
        textAlign:"center",
        paddingTop:"5%",
        paddingBottom:"5%",
    },
    body4: {        
        backgroundImage: "url(" + "http://www.qubag.com/img/cycle.png" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:595,
        textAlign:"right"

    },
    body5: {
        backgroundColor: "#fdc841",
        height: "auto",
        textAlign:"center",
        paddingTop:"5%",
        paddingBottom:"5%",
    },
    footer: {
        backgroundColor: "#212121",
        height: "auto",
        textAlign:"center",
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    heading: {
        color: "#00ab80",
        fontSize: 16,
        textAlign:"center"
    },
    menu: {
        color: "#00ab80",
        fontSize: 14,
        textAlign:"center"
    },
    button:{
        fontSize:15,
        textTransform:"none",
        marginTop:15,
        borderRadius:40,
        padding:"10px 40px 10px 40px",
        borderColor:"black",
        color:"black"
    },
    discover:{
        fontSize:60,
    },
    description:{
        fontSize:16,
        marginTop:15

    },
    unique:{
        fontSize:43,
    },
    uniqueDesc:{
        fontSize:16,
        marginTop:15,
        color:"grey"
    },
    uniqueTitle:{
        fontSize:32,
        marginTop:15,
        color:"black"
    },
    footerText:{
        fontSize:12,
        color:"grey"
    }

});


export class homePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Grid container>
                        <Grid item lg={4}> 
                            <Typography className={classes.heading}>HOME</Typography>
                        </Grid>
                        <Grid item lg={4}></Grid>
                        <Grid item lg={4}>
                            <Grid container>
                                <Grid item lg={3}> <Typography className={classes.menu}>DOWNLOAD</Typography></Grid>
                                <Grid item lg={3}> <Typography className={classes.menu}>PORTFILIO</Typography></Grid>
                                <Grid item lg={3}> <Typography className={classes.menu}>CONTACT</Typography></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
                <Grid container justify="center" className={classes.body1}>
                    <Grid item lg={6} style={{marginTop:200}}>
                        <div className={classes.body1text}>Great Bible Apps</div>
                        {/* <div className={classes.body1text}>Shopping Experience!</div> */}
                        <Typography className={classes.body1text}>We build Bible Apps</Typography>
                         <Button variant="outlined"
                         className={classes.button}
                         onClick = {() =>{
                            window.open("https://apps.apple.com/us/developer/harish-chandra/id1498300651")  
                         }}
                         >Download Now!</Button>
                    </Grid>
                </Grid> 
                <Grid className={classes.body2}>
                    <Grid item lg={12}>
                        <Typography className={classes.discover}>Discover what is in store!</Typography>
                        <Typography className={classes.description}>Our app is available on App Store! Download now to get started!</Typography>
                        <Typography style={{marginTop:20}}>
                             {/* <img src="http://www.qubag.com/img/play_store.png" style={{width:160,height:60}}></img>     */}
                             <Button onClick={()=>{
                                 window.open("https://apps.apple.com/us/developer/harish-chandra/id1498300651")
                             }}> 
                             <img src={"http://www.qubag.com/img/app_store.png"} style={{marginLeft:5,width:160,height:60}}></img>
                             </Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.body3}>
                <Typography className={classes.unique}>Our Portfolio</Typography>
                    <Grid item lg={10}>
                        <div style={{marginLeft:'32px',display:'flex'}}>
                        <Typography className={classes.uniqueTitle}>1.Santa Biblia en Español</Typography>
                        </div>
                        <Grid container justify = "center" style={{marginLeft:'32px'}}>
                        <Typography className={classes.uniqueDesc}>La aplicación cuenta con una interfaz muy amigable que te permitirá leer en cualquier momento la Biblia en español y alimentar el alma con sus hermosos versículos y las enseñanzas de nuestro señor Jesús. Puedes leer en cualquier momento en tu celular y compartir la sagrada escritura con quien desees.
                         La Biblia no necesita conexión a Internet para leer.
                         Guarde sus versículos favoritos e incluya notas. Todo muy fácil de compartir.
                         - La Santa Biblia en español.
                         - Buscador para encontrar versículos, Salmos o por palabras.
                         - Contiene el Antiguo y el Nuevo Testamento al completo- Disfruta ahora de tu nueva Santa Biblia Reina Valera 1960!
                         </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                            <Grid item lg={3}>
                                <img src={santaBible1} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                            <Grid item lg={3}>
                                <img src={santaBible3} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                            <Grid item lg={3}>
                                <img src={santaBible4} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                        </Grid>
                        <Button variant="outlined"
                         className={classes.button}
                         onClick = {() =>{
                            window.open("https://apps.apple.com/us/app/santa-biblia-en-español/id1484294310")  
                         }}
                         >Download Now!</Button>

                </Grid>
                <Grid className={classes.body3}>
                    <Grid item lg={10}>
                        <div style={{marginLeft:'32px',display:'flex'}}>
                        <Typography className={classes.uniqueTitle}>2.Biblia Sagrada</Typography>
                        </div>
                        <Grid container justify = "center" style={{marginLeft:'32px'}}>
                        <Typography className={classes.uniqueDesc}>Biblia Sagrada is a free bible, no need of  internet connection you can use anytime, anywhere without worrying about mobile data.</Typography>
                        <Typography className={classes.uniqueDesc}>This Bible Contains GeoChurch from your current location to near by 5000 meters, you can easily find the near by church’s and navigate from your location to near by church by select direction option.</Typography>
                        <Typography className={classes.uniqueDesc}>also this bible contains features like.</Typography>
                        <Typography className={classes.uniqueDesc}>1. you can change the text size</Typography>
                        <Typography className={classes.uniqueDesc}>2. you can change  font name </Typography>
                        <Typography className={classes.uniqueDesc}>3. you can speech the bible verse</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                            <Grid item lg={4}>
                                <img src={bibleSagrada1} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                            <Grid item lg={4}>
                                <img src={bibleSagrada2} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                            <Grid item lg={4}>
                                <img src={bibleSagrada3} style={{width:"100%",marginTop:100}}></img>
                            </Grid>
                        </Grid>
                    <Button variant="outlined"
                         className={classes.button}
                         onClick = {() =>{
                            window.open("https://apps.apple.com/us/app/biblia-sagrada/id1498300652")  
                         }}
                         >Download Now!</Button>
                </Grid>

                {/* <Grid justify="center" className={classes.body4}>
                    <Grid item lg={10}>
                    <Button variant="outlined"
                         className={classes.button} style={{marginTop:300}}
                         >Let's Get Started!</Button>
                    </Grid>
                </Grid> */}
                <Grid className={classes.body5}>
                    <Grid item lg={12}>
                        <Typography className={classes.discover}>We 
                        <FavoriteIcon style={{color:"#dd4a39",fontSize:45,marginLeft:10,marginRight:10}}></FavoriteIcon>
                         new friends!</Typography>
                        <Typography className={classes.description}>Our app is available on AppStore! Download now to get started!</Typography>
                        <Typography style={{marginTop:20}}>
                            <FacebookIcon style={{
                                fontSize: 80,
                                color: "#3b5998"
                            }}></FacebookIcon>
                            <InstagramIcon style={{
                                fontSize: 80,
                                color: "#dd2b7f"
                            }}></InstagramIcon>
                            <TwitterIcon style={{
                                fontSize: 80,
                                color: "#1da1f2"
                            }}></TwitterIcon>
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.footer}>
                <Typography className={classes.footerText}>© 2019 harshPabbathi.com. All Rights Reserved.</Typography>
                <Typography className={classes.footerText} style={{marginTop:5}}>Contact Us: harishpabbathi@gmail.com</Typography>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles, { withTheme: true })(homePage);
