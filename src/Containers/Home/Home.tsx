import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostApi } from '../../types';
import axiosApi from '../../axiosApi.ts';
import Grid from '@mui/material/Grid2';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchData = useCallback(async() => {
    const response: {data: IPostApi} = await axiosApi<IPostApi>('posts.json');

    if (response.data) {
      const postsFromApi = Object.keys(response.data).map(postKey => {
        return {
          ...response.data[postKey],
          id: postKey,
        };
      });
      setPosts(postsFromApi);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      {posts.length === 0 ? <p>No posts</p> :
        <Grid>
          {posts.map((post) => (
            <Grid key={post.id} sx={{mb: 4}}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
                    {post.date}
                  </Typography>
                  <Typography gutterBottom sx={{ fontSize: 19 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {post.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={NavLink} to={`/posts/${post.id}`}>Read more</Button>
                  <Button size="small" component={NavLink} to={`/posts/${post.id}/edit`}>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      }
    </>
  );
};

export default Home;