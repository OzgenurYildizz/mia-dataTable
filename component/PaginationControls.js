import { useRouter } from 'next/router';
import style from '../styles/table-style.module.css';

export default function PaginationControls({ hasNextPage, hasPrevPage, totalItems }) {
  const router = useRouter();
  const { query } = router;
  const page = query.page ? Number(query.page) : 1;
  const per_page = query.per_page ? Number(query.per_page) : 10;

  const totalPages = Math.ceil(totalItems / per_page);

  const goToPrevPage = () => {
    if (page > 1) {
      router.push(`/?page=${page - 1}&per_page=${per_page}`);
    }
  };

  const goToNextPage = () => {
    if (hasNextPage) {
      router.push(`/?page=${page + 1}&per_page=${per_page}`);
    }
  };

  return (
    <div className={style.paginationControls}>
      <button
        disabled={!hasPrevPage}
        onClick={goToPrevPage}>
        Prev Page
      </button>

      <div>
        {page} / {totalPages}
      </div>

      <button
        disabled={!hasNextPage}
        onClick={goToNextPage}>
        Next Page
      </button>
    </div>
  );
}
