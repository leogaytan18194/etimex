import React from 'react'
import './requisitos.scss';
import {
    Box,
    Card,
    CardContent,
    Typography,
  } from "@material-ui/core";
  import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
      },
    },
  })
);

function Requisitos() {
    const classes = useStyles();
  return (
    <div className="requisitos" id="requisitos">
    <h1>¿Que necesitas para obtener un auto con BESTA?</h1>
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Tener una licencia vigente tipo C</Typography> <img src="assets/licencia.png" alt="" />
        </CardContent>
        
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Captura de tus viajes en plataformas como </Typography> <img src="assets/plataformas-conductor.png" alt="" /> 
        </CardContent>
        
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Identificación oficial vigente INE/IFE</Typography><img src="assets/identi.png" alt="" />
        </CardContent>
        
      </Card>
    </Box>
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Contar con comprobante de domicilio</Typography> <img src="assets/licencia.png" alt="" />
        </CardContent>
        
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Captura de tus viajes en plataformas como </Typography> <img src="assets/plataformas-conductor.png" alt="" /> 
        </CardContent>
        
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1">Identificación oficial vigente INE/IFE</Typography><img src="assets/identi.png" alt="" />
        </CardContent>
        
      </Card>
    </Box>
    </div>
  )
}

export default Requisitos