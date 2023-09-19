'use client';

import { useCallback, useMemo } from 'react';

import { Pagination as PaginationModel } from '@/core/types/models';
import { useMediaQuery, chalk, log } from '@/core/utils';
import { MAX_TOTAL_PAGES } from '@/core/config';

const Pager = ({
  pageNo,
  pageSize,
  totalCount,
  onPageChange,
}: PaginationModel & {
  onPageChange?(page: number): void;
}) => {
  const isLgAndAbove = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMdAndAbove = useMediaQuery({ query: '(min-width: 768px)' });
  log.debug(chalk.red('isLgAndAbove'), isLgAndAbove);
  log.debug(chalk.red('isMdAndAbove'), isMdAndAbove);

  const totalPages = useMemo(
    () => Math.min(Math.floor((totalCount - 1) / pageSize) + 1, MAX_TOTAL_PAGES),
    [pageSize, totalCount],
  );
  log.debug('totalPages', totalPages);

  const pagingPanelSize = Math.min(isLgAndAbove ? 10 : isMdAndAbove ? 5 : 0, totalPages);
  log.debug('pagingPanelSize', pagingPanelSize);

  const pagingPanel = useMemo(() => {
    if (pagingPanelSize < 3) {
      return null;
    }

    const leftPanelSize = Math.floor((pagingPanelSize - 1) / 2);
    const rightPanelSize = pagingPanelSize - 1 - leftPanelSize;
    log.debug('leftPanelSize', leftPanelSize);
    log.debug('rightPanelSize', rightPanelSize);

    if (pageNo <= leftPanelSize + 1) {
      return Array.from(Array(pagingPanelSize + 1).keys()).slice(1);
    }
    if (pageNo >= totalPages - rightPanelSize) {
      return Array.from(Array(totalPages + 1).keys()).slice(-pagingPanelSize);
    }

    return [
      ...Array.from(Array(pageNo).keys()).slice(-leftPanelSize),
      pageNo,
      ...Array.from(Array(pageNo + rightPanelSize + 1).keys()).slice(-rightPanelSize),
    ];
  }, [pageNo, pagingPanelSize, totalPages]);
  log.debug('pagingPanel', pagingPanel);

  const changePage = useCallback(
    (newPageNo: number) => {
      onPageChange?.(Math.min(Math.max(newPageNo, 1), totalPages));
    },
    [onPageChange, totalPages],
  );

  const previousPage = useCallback(() => {
    changePage(Math.max(pageNo - 1, 1));
  }, [changePage, pageNo]);

  const nextPage = useCallback(() => {
    changePage(Math.min(pageNo + 1, totalPages));
  }, [changePage, pageNo, totalPages]);

  const firstPage = useCallback(() => {
    changePage(1);
  }, [changePage]);

  const lastPage = useCallback(() => {
    changePage(totalPages);
  }, [changePage, totalPages]);

  return (
    <div className="flex justify-between border-t border-gray-300 ">
      {/* Previous */}
      <div
        className="flex cursor-pointer gap-3 pt-5 text-gray-500 hover:-mt-px hover:border-t-2 hover:border-gray-400 hover:pt-[19px]"
        onClick={previousPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p className="hover:text-gray-600">Previous</p>
      </div>
      <div className="flex gap-5">
        {/* First */}
        <div
          className="flex cursor-pointer gap-3 pt-5 text-gray-500 hover:-mt-px hover:border-t-2 hover:border-gray-400 hover:pt-[19px]"
          onClick={firstPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>

          <p className="hover:text-gray-600">First</p>
        </div>
        {/* Paging Window */}
        {pagingPanel && (
          <div className="flex gap-0">
            {pagingPanel.map((v) => (
              <div
                key={v}
                className={`px-2 pt-5 ${
                  v === pageNo
                    ? '-mt-px cursor-default border-t-2 border-sky-600 pt-[19px] text-sky-600'
                    : 'cursor-pointer text-gray-500'
                } hover:-mt-px hover:border-t-2 hover:${
                  v === pageNo ? 'border-sky-600' : 'border-gray-400'
                } hover:pt-[19px] hover:${v === pageNo ? 'text-sky-600' : 'text-gray-600'}`}
                onClick={() => changePage(v)}
              >
                <span>{v}</span>
              </div>
            ))}
          </div>
        )}
        {/* Last */}
        <div
          className="flex cursor-pointer gap-3 pt-5 text-gray-500 hover:-mt-px hover:border-t-2 hover:border-gray-400 hover:pt-[19px]"
          onClick={lastPage}
        >
          <p className="hover:text-gray-600">Last</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      {/* Next */}
      <div
        className="flex cursor-pointer gap-3 pt-5 text-gray-500 hover:-mt-px hover:border-t-2 hover:border-gray-400 hover:pt-[19px]"
        onClick={nextPage}
      >
        <p className="hover:text-gray-600">Next</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pager;
