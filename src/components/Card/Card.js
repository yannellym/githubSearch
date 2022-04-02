import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles.css"


const Cards = ({ user }) => {

    return (
      <div className="profile-card">
         <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400 }}>
            <CardMedia
            component="img"
            height="180"
            image={user.avatarUrl}
            alt="eddie"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {user.name? user.name : "No name provided"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.bio ? user.bio.slice(0,22) : `Profile has no bio.`}
              </Typography>
            </CardContent>
              <Typography gutterBottom color="text.primary">
                  <strong className="counts">Followers:</strong>{user.followers.totalCount}
                  <strong className="counts">Following:</strong>{user.following.totalCount}
              </Typography>
              <Typography gutterBottom color="text.primary">
                  <strong className="counts">Pull Requests:</strong>{user.pullRequests.totalCount}
                  <strong className="counts">Repositories:</strong>{user.repositories.totalCount}
              </Typography>
            <CardActions>
                <Button size="small" href={user.url} variant="contained">Github</Button>
                <Typography gutterBottom color="text.secondary">
            </Typography>
            </CardActions>
          </Card>
      </div>
    );
  };
  
  export default Cards;