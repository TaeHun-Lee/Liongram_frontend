import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class Base extends React.Component {

    state = {
        posts : []
    }

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/backend/');
            const _posts = await res.json();
            this.setState({
                posts : _posts
            });
        } catch (e) {
            console.log(e);
        }
    }


    
    render () {
        return(
            <div>
                <CssBaseline />
                <Container maxWidth="xl">
                    {this.state.posts.map(item => (
                        <Card key={item.id}>
                            <CardActionArea>
                                <CardMedia image="{item.foto}"/>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.content}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Container>
            </div>
        );
    }
}

export default Base;