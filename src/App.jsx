import { useAddPostMutation, useGetPostsQuery } from './STORE/postsApi'
import style from './App.module.scss'
import { useState } from 'react'

function App() {
  const [newPost, setNewPost] = useState('')
  const { data, isLoading } = useGetPostsQuery()
  const [addPost, {isError}] = useAddPostMutation()

  const handleAddPost = async () => {
    if(newPost) {
      await addPost({name: newPost}).unwrap()
      setNewPost('')
      console.log("post adding", newPost)
    }
  } 

  if (isLoading) return <h2 className={style.isLoading}>Загружаю ...</h2>

  return (
    <div className={style.app_wrapper}>
      <h2 className={style.main_title}>All posts</h2>
      <div className={style.input_wrapper}>
        <input className={style.input_post}
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder='write here'
        />
        <button className={style.input_btn}
          onClick={handleAddPost}
        >add post</button>
      </div>
      <ul className={style.posts_list} >
        {
          data.map(post => (
            <li key={post.id} className={style.post_item}>
              <h4 className={style.post_id}>post id : {post.id}</h4>
              <h6 className={style.post_title}>{post.title}</h6>
              <p className={style.post_text}>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
