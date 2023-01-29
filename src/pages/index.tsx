import { fetchAllPosts } from "@/api/request";
import Image from "next/image";
import Head from "next/head";
export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>Home :: In9yuBlog</title>
      </Head>
      <main>
        {allPosts.map((post) => (
          <div
            key={post.id}
            style={{ backgroundImage: `url('${post.coverUrl}')` }}
          >
            <h1>{post.title}</h1>
            <div>
              {post.tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
            <p>{post.summary}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchAllPosts();
  const allPosts = data?.map((post) => {
    return {
      id: post.id,
      title: post.properties.title.title[0].plain_text,
      coverUrl: post.cover.external.url,
      summary: post.properties.summary.rich_text[0].plain_text,
      tags: post.properties.tags.multi_select,
    };
  });
  return {
    props: {
      allPosts,
    },
  };
}
