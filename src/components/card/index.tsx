import styles from "./card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Card({ title, coverUrl, tag, summary }) {
  console.log(tag);
  return (
    <div
      className={cx("card")}
      style={{ backgroundImage: `url('${coverUrl}')` }}
    >
      <div className={cx("card__over")}>
        <div key={tag.id} className={cx("card__tag")}>
          {tag}
        </div>
        <strong className={cx("card__title")}>{title}</strong>
        <p className={cx("card__summary")}>{summary}</p>
      </div>
    </div>
  );
}
