import '../App.css'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, grey } from '@mui/material/colors';
import { display } from '@mui/system';
import tmd from '../tmd.svg'
import adoni from '../adoni.svg'

import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Contact = () => {




    const theme = createTheme({
        palette: {
          primary: {
            main: grey[50],
          },
        },
      });

    return (
        <div className="contact">

        
            <div style={{display: 'flex', flexDirection: 'row', gap: '.5vw'}}><h1 style={{color: 'white'}}>SAVE YOUR SPOT </h1> <h1 style={{color: '#d3901c'}}>TODAY</h1></div>
              
               <ThemeProvider theme={theme}>
            <FormControl style={{width: '60%', display: 'flex', gap: '2vh', marginBottom: '2vh'}}>
         
            <TextField sx={{ color: 'white', borderBottom: '.2px solid white',  input: { color: 'white' } }}   InputLabelProps={{ style: { color: '#fff'}, }} id="standard-basic" label="Name" variant="standard" margin='dense' className='textOne' required/>
            <TextField sx={{ color: 'white', borderBottom: '.2px solid white',  input: { color: 'white' } }}  InputLabelProps={{ style: { color: '#fff' }, }}  id="standard-basic" label="Phone Number" variant="standard" margin='dense'required/>
            <TextField sx={{ color: 'white', borderBottom: '.2px solid white',  input: { color: 'white' } }} InputLabelProps={{ style: { color: '#fff' }, }} id="standard-basic" label="E-mail" variant="standard" margin='dense' required/>
            <TextField sx={{ color: 'white', borderBottom: '.2px solid white',  input: { color: 'white' } }} InputLabelProps={{ style: { color: '#fff' }, }} id="standard-basic" label="Move-In-Date" variant="standard" margin='dense' />
            <TextField sx={{ color: 'white', borderBottom: '.2px solid white',  input: { color: 'white' } }} InputLabelProps={{ style: { color: '#fff' }, }} id="standard-basic" label="Message" variant="standard" margin='dense' />
            <Button style={{color: '#d3901c', fontSize: 'xx-large', fontWeight: 'bolder', display: 'flex', alignSelf: 'flex-start' }} variant="text" endIcon={<ArrowForwardIosIcon style={{width:'3vw', color: 'white', fontSize: 'xx-large'}}/>}>SUBMIT</Button>
            
            </FormControl>
            <div style={{width: '60%'}}>
            <Button style={{color: '#d3901c', fontSize: 'xx-large', fontWeight: 'bolder', display: 'flex', alignSelf: 'flex-start' }} variant="text" endIcon={<ArrowForwardIosIcon style={{width:'3vw', color: 'white', fontSize: 'xx-large'}}/>}>VIEW DIGITAL BROCHURE</Button></div>
            <footer style={{color: 'white', display: 'flex', flexDirection: 'column',  }}>
                <div style={{whiteSpace: "nowrap", display: 'flex', flexDirection: 'row', gap: '1vw'}}><h2>10 North Ave, Westfield NJ 07090</h2><h2 style={{color: '#d3901c'}}>|</h2><h2>Info@TheFranklinNJ.com</h2><h2 style={{color: '#d3901c'}}>|</h2><h2>908.555.5555</h2></div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '1vw', alignSelf: 'center'}}><img src={adoni} alt='logo'/> <img src={tmd} alt='logo'/><p style={{fontSize: 'x-small'}}>*Offering 1 month free on a 13-month lease and 2 months free on a 14-month lease. Rents reflect net effective pricing. <br/> All images are a combination of photography and artist renderings and are provided for illustrative purposes <br/>  only.</p> </div>

            </footer>
</ThemeProvider>
        </div>
    )



    
}

export default Contact