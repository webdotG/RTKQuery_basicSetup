import { useGetPostsQuery } from './STORE/postsApi'
import style from './App.module.scss'

function App() {

  const { data, isLoading } = useGetPostsQuery()

  if (isLoading) return <h2 className={style.isLoading}>Загружаю ...</h2>

  return (
    <div className={style.app_wrapper}>
    <h2 className={style.main_title}>All posts</h2>
      <ul className={style.posts_list} >
        {
          data.map( post => (
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
