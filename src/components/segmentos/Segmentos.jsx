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
              <h3 className="ITBold"> 
                Vinos y Licores
              </h3>
              <Typography variant="body2" color="text.secondary">
              Vestimos vinos y licores que llevan  una historia detrás y forman parte de momentos únicos.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 230,boxShadow: 0 }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/segmento2.png"
              title="green iguana"
            />
            <CardContent>
              <h3 className="ITBold">
                Alimentos y Bebidas
                </h3>
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
              <h3 className="ITBold">
                Salud y Belleza
                </h3>
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
              <h3 className="ITBold">
                Industrial
                </h3>
              <Typography variant="body2" color="text.secondary">
              Conocemos las diversas condiciones a las que se enfrentan los productos de uso industrial.
              </Typography>
            </CardContent>
          </Card>
          
      </div>
      
    </div>
  );
}
