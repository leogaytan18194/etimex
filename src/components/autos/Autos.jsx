import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./autos.scss";

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
        <Box sx={{ p: 2,
                    ml: 1,
                    justifyContent: "center", 
                    alignItems:"center",
                    borderRadius: '16px',
                    border: 0
                     }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className="autos" id="autos">
          <h1>Autos</h1>
          <div className="container">
              
        <Box
        sx={{
            flexGrow: 1,
            display: "flex",
            height: 620,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: '16px',
        }}
        >
        <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{   p: 1,
                    borderRight: 1, 
                    border: 0, 
                    boxShadow: 2, 
                    borderRadius: 3 }}
        >
            <Tab label="V-Drive" {...a11yProps(0)} />
            <Tab label="March" {...a11yProps(1)} />
            <Tab label="Aveo" {...a11yProps(2)} />

        </Tabs>
        <TabPanel value={value} index={0}>
            <div className="unidad">
                <h5>Nissan</h5>
                <h2>V-DRIVE</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio"><b>$3,300</b></p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                <img src="assets/v-drive4.png" className="autoImagen" alt="vdrive besta" />           
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className="unidad">
                <h5>Nissan</h5>
                <h2>March Sense TM</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/march2.png" className="autoImagen" alt="March" />               
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className="unidad">
                <h5>Chevrolet</h5>
                <h2>Aveo</h2>    
                <img src="assets/yearCalendar.png" className="imgAuto" alt="calendario"/>
                <p className="descAuto"> 2022</p>
                <img src="assets/estandaricono.png" className="imgAuto" alt="transmición"/>
                <p className="descAuto"> Estándar</p>
                <img src="assets/nuevoicono.png" className="imgAuto" alt="uso"/>
                <p className="descAuto"> Nuevo</p>
            </div>
            <div className="plazo">
                <h3>Plazo</h3>
                <p>36 Meses</p>
                <div className="vehicle-card">
                <h4>Pago fijo semanal</h4>
                    <div className="v-drive-offer">
                        <div className="top">
                            <p className="precio">$3,300</p>
                        </div>
                        <div className="bottomAutos">
                            <p className="iva">Incluye IVA</p>
                        </div>
                    </div>
                </div>
            </div>
                <img src="assets/aveo2.png" className="autoImagen" alt="Aveo" />             
            <div className="deposito">
                <h3>Deposito en garantia</h3>
                <h3>$17,000</h3>
                <h6>*Consulta términos y condiciones</h6>
                <a href="https://google.com" className="botonInfo">Más Información</a>
            </div>
        </TabPanel>
        </Box>
        </div>
    </div>
  );
}
