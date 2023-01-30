export default function Card({ title, coverUrl, tags, summary }) {
  return (
    <div style={{ backgroundImage: `url('${coverUrl}')` }}>
      <h1>{title}</h1>
      <div>
        {tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </div>
      <p>{summary}</p>
    </div>
  );
}
