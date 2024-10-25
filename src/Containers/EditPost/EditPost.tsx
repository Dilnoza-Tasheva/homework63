import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostApi, IPostForm } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';
import PostForm from '../../Components/PostForm/PostForm.tsx';


const EditPost = () => {
  const [post, setPost] = useState<IPost>({});
  const params = useParams<{idPost: string}>();
  const navigate = useNavigate();

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

  const submitForm = async (post: IPostForm) => {
    try {
      if (params.idPost) {
        await axiosApi.put(`posts/${params.idPost}.json`, {...post});
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };


  return post && (
    <div>
      <PostForm submitForm={submitForm} postToEdit={post}/>
    </div>
  );
};

export default EditPost;