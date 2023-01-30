import styles from "./card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Card({ title, coverUrl, tags, summary }) {
  return (
    <div
      className={cx("card")}
      style={{ backgroundImage: `url('${coverUrl}')` }}
    >
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
