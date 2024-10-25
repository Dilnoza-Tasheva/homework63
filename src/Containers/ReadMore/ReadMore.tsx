import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostApi } from '../../types';
import { NavLink, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';
import { Button, Card, CardContent, Typography } from '@mui/material';


const ReadMore = () => {
  const [post, setPost] = useState<IPost>({});
  const params = useParams<{idPost: string}>();

  const fetchOnePost = useCallback(async(id: string) => {
    const response: {data: IPostApi} = await axiosApi<IPostApi>(`posts/${id}.json`);
    if (response.data) {
      setPost(response.data);
    }
  }, []);

  useEffect(() => {
    if (params.idPost) {
      void fetchOnePost(params.idPost);
    }
  }, [params.idPost, fetchOnePost]);

  return (
    <Card sx={{ minWidth: 275, width: '100%', mt: 4 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Date created: {post.date}
        </Typography>
        <Typography variant="h5" gutterBottom>{post.title}</Typography>
        <Typography variant="body1">{post.description}</Typography>
        <Button size="small" component={NavLink} to={"/"}>Delete</Button>
        <Button size="small" component={NavLink} to={"/"}>Edit</Button>
      </CardContent>
    </Card>
  );
};

export default ReadMore;