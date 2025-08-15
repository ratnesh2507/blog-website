import { useSelector, useDispatch } from "react-redux";
import {
  addPost,
  deletePost,
  updatePost,
  setPosts,
} from "../store/slices/postsSlice";

function usePosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const createPost = (post) => dispatch(addPost(post));
  const removePost = (id) => dispatch(deletePost(id));
  const editPost = (post) => dispatch(updatePost(post));
  const loadPosts = (newPosts) => dispatch(setPosts(newPosts));

  return {
    posts,
    createPost,
    removePost,
    editPost,
    loadPosts,
  };
}

export default usePosts;
