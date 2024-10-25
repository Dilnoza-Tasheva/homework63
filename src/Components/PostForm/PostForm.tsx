import { useState } from 'react';
import { IPostForm } from '../../types';
import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import axiosApi from '../../axiosApi.ts';
import dayjs from 'dayjs';


const initialForm = {
  title: '',
  description: '',
  date: '',
};

const PostForm = () => {
  const [post, setPost] = useState<IPostForm>({...initialForm});

  const onChangeField = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axiosApi.post('posts.json', {...post, date: dayjs().format('YYYY-MM-DD')});

    setPost({...initialForm});
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
        Add new post
      </Typography>

      <Grid container spacing={2} sx={{mx: "auto", width: "50%", mt: 4}}>
        <Grid size={12}>
          <TextField
            sx={{width: "100%"}}
            id="outlined-basic"
            label="Title"
            name="title"
            variant="outlined"
            value={post.title}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: "100%"}}
            id="outlined-basic"
            label="Description"
            name="description"
            variant="outlined"
            value={post.description}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Button type="submit" variant="contained" sx={{width: "100%"}}>
            Save
          </Button>
        </Grid>
      </Grid>

    </form>
  );
};

export default PostForm;