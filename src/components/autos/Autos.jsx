import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import "./autos.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 1,
          m: 1,
          justifyContent: "center", 
          alignItems:"center",
          border: 0,
          borderRadius: '5%',
          boxShadow: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="autos" id="autos">
      <h1>Modelos disponibles</h1>
      <Box
        sx={{ bgcolor: 'background.paper', display: 'flex' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="VDRIVE" {...a11yProps(0)} />
          <Tab label="AVEO" {...a11yProps(1)} />
          <Tab label="MARCH" {...a11yProps(2)} />
          <Tab label="ATTITUD" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            <div className="unidad">
                <h2>NISSAN</h2>
                <h2>V-DRIVE</h2>
            </div>
            <div className="plazo">
                <img src="assets/vdrive.png" className="imgAutoGrande" alt="V-Drive" />  
            </div>
                         
            <div className="deposito">
                <h3>$3,550 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <p className="textoAviso">*Precio sujeto a cambios sin previo aviso</p>
                <Link className='enlace' to={'/formulario/1'}>Más Información</Link>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <div className="unidad">
                <h2>CHEVROLET</h2>
                <h2>AVEO</h2>
            </div>
            <div className="plazo">
                <img src="assets/aveo2.png" className="imgAutoGrande" alt="Aveo" />  
            </div>
                         
            <div className="deposito">
                <h3>$3,500 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <p className="textoAviso">*Precio sujeto a cambios sin previo aviso</p>
                <Link className='enlace' to={'/formulario/2'}>Más Información</Link>
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div className="unidad">
                <h2>NISSAN</h2>
                <h2>MARCH</h2>
            </div>
            <div className="plazo">
                <img src="assets/march2.png" className="imgAutoGrande" alt="March" />  
            </div>
                         
            <div className="deposito">
                <h3>$3,250 / Semanal</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <p className="textoAviso">*Precio sujeto a cambios sin previo aviso</p>
                <Link className='enlace' to={'/formulario/3'}>Más Información</Link>
            </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <div className="unidad">
                <h2>DODGE</h2>
                <h2>ATTITUD</h2>
            </div>
            <div className="plazo">
                <img src="assets/attitude.png" className="imgAutoGrande" alt="Attitud" />  
            </div>
                         
            <div className="deposito">
                <h3>$3,550 / Semanal aprox</h3>
                <h4><img src="assets/calendarioicon2.png" alt="calendario" className="iconCalendario"/> 36 Meses con opción a compra</h4>
                <p className="textoAviso">*Precio sujeto a cambios sin previo aviso</p>
                <Link className='enlace' to={'/formulario/4'}>Más Información</Link>
            </div>
        </TabPanel>
      </Box>
    </div>
  );
}
