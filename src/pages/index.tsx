import { fetchAllPosts } from "@/api/request";
import Head from "next/head";
import Card from "@/components/card";
import styles from "@/styles/home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home({ allPosts }) {
  console.log(allPosts);
  return (
    <>
      <Head>
        <title>Home :: In9yuBlog</title>
      </Head>
      <main>
        <section className={cx("allPostSection")}>
          {allPosts.map(({ id, title, coverUrl, tag, summary }) => (
            <Card
              key={id}
              title={title}
              coverUrl={coverUrl}
              tag={tag}
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
      tag: post.properties.tag.select.name,
    };
  });
  return {
    props: {
      allPosts,
    },
  };
}
