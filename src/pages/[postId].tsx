function PostDetail({ postId }) {
  console.log(postId);

  return <div>{postId}</div>;
}

export default PostDetail;

export function getServerSideProps(ctx) {
  const postId = ctx.query.postId;

  return {
    props: { postId },
  };
}
