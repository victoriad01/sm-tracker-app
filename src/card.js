import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export default function ActionAreaCard(appDetail) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: '12px' }}>
      <>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={appDetail.item.img}
            alt='picturial-description'
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {appDetail.item.header}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {appDetail.item.bodyText}
            </Typography>
          </CardContent>
        </CardActionArea>
      </>
    </Card>
  )
}
