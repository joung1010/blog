import Profile from "@/components/profile/Profile";
import {getFeaturedPosts} from "@/service/posts/posts";
import Image from "next/image";

export default async function Home() {
    const featuredPost = await getFeaturedPosts();
    return (
        <main>
            <Profile/>
            {/*서버 컴퍼넌트로 생성, 클라이언트 컴퍼넌트 + API 형식으로 생성*/}
            <h2 className="ml-4 text-2xl font-bold">Featured Posts</h2>
            <ul className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-4 p-4">
                {
                    featuredPost.map(({title, description, path, category, date}, index) => (
                        <li key={index}
                            className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105">
                            <Image src={`/images/posts/${path}.png`} alt={title} width='300' height='300'
                                   className="w-full h-2/3"/>
                            <section className="flex flex-col items-center justify-center">
                                <div className="m-2 mr-4 self-end">{date}</div>
                                <h2 className="text-xl font-bold">{title}</h2>
                                <p>{description}</p>
                                <div className="bg-green-300 px-2 py-1 rounded-xl my-2">{category}</div>
                            </section>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
