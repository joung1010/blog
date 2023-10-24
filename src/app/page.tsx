import Profile from "@/components/profile/Profile";
import {getFeaturedPosts} from "@/service/posts/posts";
export default async function Home() {
    const featuredPost = await getFeaturedPosts();
  return (
      <main>
        <Profile/>
          {/*서버 컴퍼넌트로 생성, 클라이언트 컴퍼넌트 + API 형식으로 생성*/}
          <ul>
              {
                  featuredPost.map(({title,description,path},index) => (
                      <li key={index}>
                          {title}
                      </li>
                  ))
              }
          </ul>
      </main>
  )
}
