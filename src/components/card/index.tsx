import styles from "./card.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export default function Card({ postId, title, coverUrl, tag, summary }) {
  const router = useRouter();

  const onClickCard = (postId) => {
    router.push(`/${postId}`);
  };
  return (
    <div
      className={cx("card")}
      style={{ backgroundImage: `url('${coverUrl}')` }}
      onClick={() => {
        onClickCard(postId);
      }}
    >
      <div className={cx("card__over")}>
        <div className={cx("card__tag")}>{tag}</div>
        <strong className={cx("card__title")}>{title}</strong>
        <p className={cx("card__summary")}>{summary}</p>
      </div>
    </div>
  );
}
