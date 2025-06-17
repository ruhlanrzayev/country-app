import Card from "../Card/Card"
import { useState, useEffect } from "react";
import Title from "../Title/Title";
import RandomCard from "../Card/RandomCard";

function Main({ cntData, region }) {

  const [value, setValue] = useState('');
  const [status, setStatus] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredData = cntData
    .filter(item => (region ? item.region === region : true))
    .filter(item => item.name.toLowerCase().includes(value.toLowerCase()));

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  useEffect(() => {
    setCurrentPage(1);
  }, [region, value]);

  return (
    <>
      {/* Top Title */}
      
      {
        !region && <Title status={status} setStatus={setStatus} setValue={setValue} />
      }

      {/* Random Card */}

      {
        !status && !region && <RandomCard cntData={cntData} />
      }

      {/* Cards Container */}
      <div className="py-7 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 flex justify-center items-center flex-wrap gap-5">
        {currentItems.map((item, i) => <Card key={i} {...item} />)}
      </div>

      {/* Next, Prev Container */}
      <div className="py-7 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 flex justify-center items-center gap-4">
        <button onClick={handlePrev} disabled={currentPage === 1} className={`px-4 py-2 border rounded disabled:opacity-50 ${currentPage !== 1 ? "cursor-pointer" : "cursor-not-allowed"}`} > Prev </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNext} disabled={currentPage === totalPages} className={`px-4 py-2 border rounded disabled:opacity-50 ${currentPage !== totalPages ? "cursor-pointer" : "cursor-not-allowed"}`}> Next </button>
      </div>
    </>
  )
}

export default Main
