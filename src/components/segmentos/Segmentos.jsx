import "./segmentos.scss";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Segmentos() {


  return (
    <div className="segmentos" id="segmentos">
      <h1>Segmentos</h1>
      <div className="container">
          <Card sx={{ maxWidth: 220, boxShadow: 0 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/segmento1.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Vinos y Licores
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Vestimos vinos y licores que llevan  una historia detrás y forman parte de momentos únicos.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 220,boxShadow: 0 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/segmento2.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Alimentos y Bebidas
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Entendemos los retos de la industria de etiquetas para alimentos y te asesoramos con las soluciones más atractivas.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 220, boxShadow: 0 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/segmento3.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Salud y Belleza
              </Typography>
              <Typography variant="body2" color="text.secondary">
              La industria cosmética y farmacéutica es  altamente competitiva  el mantenerse a la vanguardia es la clave del éxito para estos productos.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 220, boxShadow: 0 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/segmento4.png"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Industrial
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Conocemos las diversas condiciones a las que se enfrentan los productos de uso industrial.
              </Typography>
            </CardContent>
          </Card>
          
      </div>
      
    </div>
  );
}
