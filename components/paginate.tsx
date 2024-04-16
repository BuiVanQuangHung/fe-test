import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface PaginateProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Paginate = (props: PaginateProps) => {
  const { currentPage: page, setCurrentPage } = props;

  //! Function
  const handlePrevious = () => {
    setCurrentPage(page - 1);
  };
  const handleNext = () => {
    setCurrentPage(page + 1);
  };
  const handleChosePage = (page: number) => {
    setCurrentPage(page);
  };

  //! Render
  return (
    <div className="mt-6 flex justify-center items-center">
      <ul className="flex justify-center items-center">
        <li>
          {page === 1 ? (
            <span className="cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
              Previous
            </span>
          ) : (
            <p
              className="rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
              onClick={handlePrevious}
            >
              Previous
            </p>
          )}
        </li>
        {Array(10)
          .fill(0)
          .map((_, index) => {
            const pageNumber = index + 1;
            const isActive = page === pageNumber;
            return (
              <li key={pageNumber}>
                <p
                  onClick={() => handleChosePage(pageNumber)}
                  className={cn(
                    "border border-gray-300  py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 cursor-pointer",
                    {
                      "bg-gray-100 text-gray-700": isActive,
                      "bg-white text-gray-500": !isActive,
                    }
                  )}
                >
                  {pageNumber}
                </p>
              </li>
            );
          })}
        <li>
          {page === 10 ? (
            <span className="cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
              Next
            </span>
          ) : (
            <p
              className="rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
              onClick={handleNext}
            >
              Next
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
