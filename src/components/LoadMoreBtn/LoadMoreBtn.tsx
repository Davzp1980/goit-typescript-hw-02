import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMoreBtn: () => void;
}
function LoadMoreBtn({ onLoadMoreBtn }: LoadMoreBtnProps) {
  return (
    <div className={css.div}>
      <button className={css.btn} type="button" onClick={onLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
