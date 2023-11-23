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
            <li key={post.id} className={style.posts_item}>
                <h6 className={style.posts_title}>{post.title}</h6>
                <p className={style.posts_text}>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
