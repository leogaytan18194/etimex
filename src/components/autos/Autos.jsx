import * as React from "react";
import PropTypes from "prop-types";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./autos.scss";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
    <ThemeProvider theme={theme}>
        <Box sx={{  p: 1,
                    m: 2,
                    justifyContent: "center", 
                    alignItems:"center",
                    border: 0,
                    borderRadius: '5%',
                    boxShadow: 3,
                    width: 360
                     }}>
          <Typography>{children}</Typography>
        </Box>
    </ThemeProvider>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  

  return (
        <div className="autos" id="autos">
          <h1>Modelos disponibles</h1>
          <Box sx={{ maxWidth: { xs: 500, sm: 480 }, bgcolor: 'background.paper' }}>
          <Tabs 
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons='on' >
          >
              
              <Tab  style={{ minWidth: 30 }} label="V-Drive" {...a11yProps(0)} />
              <Tab  style={{ minWidth: 30 }} label="Aveo" {...a11yProps(1)} />
              <Tab  style={{ minWidth: 30 }} label="March" {...a11yProps(2)} />
              <Tab  style={{ minWidth: 30 }} label="Attitude" {...a11yProps(3)} />
              <Tab  style={{ minWidth: 30 }} label="Kwid" {...a11yProps(4)} />
              
          </Tabs>
          </Box>
        <Box>
        <TabPanel value={value} index={0}>
            <div className="unidad">
                <h2>Nissan</h2>
                <h2>V-DRIVE</h2>
            </div>
            <div className="plazo">
                <img src="assets/v-drive4.png" className="imgAutoGrande"alt="vdrive besta" /> 
            </div>
                          
            <div className="deposito">
                <h3>$3,200 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="unidad">
                <h2>CHEVROLET</h2>
                <h2>AVEO LS 2022</h2>
            </div>
            <div className="plazo">
                <img src="assets/aveo2.png" className="imgAutoGrande" alt="March" />  
            </div>
                         
            <div className="deposito">
                <h3>$3,200 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="unidad">
                <h2>Chevrolet</h2>
                <h2>Aveo</h2>    
            </div>
            <div className="plazo">
                <img src="assets/march2.png" className="imgAutoGrande" alt="Aveo" /> 
            </div>
                        
            <div className="deposito">
                <h3>$3,200 / Semanal</h3>
                
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <div className="unidad">
                <h2>DODGE</h2>
                <h2>Attitude</h2>    
            </div>
            <div className="plazo">
                <img src="assets/attitude2.png" className="imgAutoGrande" alt="Aveo" /> 
            </div>
                            
            <div className="deposito">
                <h3>$3,200 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
        <div className="unidad">
                <h2>Renault</h2>
                <h2>Kwid</h2>    
            </div>
            <div className="plazo">
                <img src="assets/kwid.png" className="imgAutoGrande" alt="Aveo" /> 
            </div>
                        
            <div className="deposito">
                <h3>$3,250 / Semanal aprox</h3>
                
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
            </TabPanel>
        </Box>
    </div>
  );
}
