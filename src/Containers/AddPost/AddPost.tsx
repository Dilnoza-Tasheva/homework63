import PostForm from '../../Components/PostForm/PostForm.tsx';
import { IPostForm } from '../../types';
import axiosApi from '../../axiosApi.ts';


const AddPost = () => {
  const submitForm = async (post: IPostForm) => {
    await axiosApi.post('posts.json', {...post});
  };

  return (
    <div>
      <PostForm submitForm={submitForm}/>
    </div>
  );
};

export default AddPost;