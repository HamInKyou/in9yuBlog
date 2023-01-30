import { fetchAllPosts } from "@/api/request";
import Head from "next/head";
import Card from "@/components/card";

export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>Home :: In9yuBlog</title>
      </Head>
      <main>
        <section>
          {allPosts.map(({ id, title, coverUrl, tags, summary }) => (
            <Card
              key={id}
              title={title}
              coverUrl={coverUrl}
              tags={tags}
              summary={summary}
            />
          ))}
        </section>
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
