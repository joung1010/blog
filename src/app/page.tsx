import Profile from "@/components/profile/Profile";
import {getFeaturedPosts} from "@/service/posts/posts";
import Image from "next/image";
export default async function Home() {
    const featuredPost = await getFeaturedPosts();
  return (
      <main>
        <Profile/>
          {/*서버 컴퍼넌트로 생성, 클라이언트 컴퍼넌트 + API 형식으로 생성*/}
          <ul>
              {
                  featuredPost.map(({title,description,path,category,date},index) => (
                      <li key={index}>
                          <Image src={`/images/posts/${path}.png`} alt={title} width='300' height='300'/>
                          {date}
                          {title}
                          {description}
                          {category}
                      </li>
                  ))
              }
          </ul>
      </main>
  )
}
