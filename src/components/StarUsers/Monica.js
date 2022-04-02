import { useState, useEffect } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles.css"

export default function StarTwo() {

    const [monica, setMonica] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/M0nica`)
        .then(res => res.json())
        .then(data => {
        setMonica(data)
        console.log(data)
        })
    }, [])

  return (
      <div>
        <Card sx={{ maxWidth: 345, border: "yellow 1px solid" }}>
            <CardMedia
            component="img"
            height="180"
            image={monica?.avatar_url}
            alt="monica"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {monica?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {monica?.bio}
            </Typography>
            </CardContent>
            <Typography gutterBottom color="text.secondary">
                <strong className="counts">Followers:</strong>{monica?.followers}
                <strong className="counts">Following:</strong>{monica?.following}
            </Typography>
            <Typography gutterBottom color="text.secondary">
                <strong className="counts">Repositories:</strong>{monica?.public_repos}
                <strong className="counts">Twitter:</strong>{monica?.twitter_username}
            </Typography>
            <CardActions>
                <Button href={monica?.html_url} size="small" variant="contained">Visit Github</Button>
            </CardActions>
        </Card>
      </div>
  )
}