
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

    const [eddie, setEddie] = useState();

    useEffect(() => {
        fetch(`https://api.github.com/users/eddiejaoude`)
        .then(res => res.json())
        .then(data => {
        setEddie(data)
        console.log(data)
        })
    }, [])

  return (
      <div>
        <Card sx={{ maxWidth: 345, border: "yellow 1px solid"}}>
            <CardMedia
                component="img"
                height="180"
                image={eddie?.avatar_url}
                alt="eddie"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {eddie?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {eddie?.bio}
            </Typography>
            </CardContent>
            <Typography gutterBottom color="text.primary">
                <strong className="counts">Followers:</strong>{eddie?.followers}
                <strong className="counts">Following:</strong>{eddie?.following}
            </Typography>
            <Typography gutterBottom color="text.primary">
                <strong className="counts">Repositories:</strong>{eddie?.public_repos}
                <strong className="counts">Twitter:</strong>{eddie?.twitter_username}
            </Typography>
            <CardActions>
                <Button href={eddie?.html_url} size="small" variant="contained">Visit Github</Button>
            </CardActions>
        </Card>
    </div>
  )
}