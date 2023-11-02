import { useRouter } from 'next/router';
import style from '../styles/table-style.module.css'

export default function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const { query } = router;
  const page = query.page ? Number(query.page) : 1;
  const per_page = query.per_page ? Number(query.per_page) : 5;

  const handlePrevPage = () => {
    if (page > 1) {
      router.push(`/?page=${page - 1}&per_page=${per_page}`);
    }
  };

  const handleNextPage = () => {
    if (hasNextPage) {
      router.push(`/?page=${page + 1}&per_page=${per_page}`);
    }
  };

  return (
    <div className={style.paginationControls}>
      <button
        disabled={!hasPrevPage}
        onClick={handlePrevPage}>
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / per_page)}
      </div>

      <button
        disabled={!hasNextPage}
        onClick={handleNextPage}>
        next page
      </button>
    </div>
  );
}
