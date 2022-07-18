const Paginator = ({onClick,currentPage,totalRecords,pageSize,paginatorSize}) => {
    
    const totalPages =  Math.ceil(totalRecords/pageSize);
    if(paginatorSize>totalPages) paginatorSize=totalPages;
    const goToPage = (pageNumber) => {
        if(pageNumber >= 1 && pageNumber <= paginatorSize && pageNumber != currentPage)
            onClick(pageNumber);
    }
    
    return (
        <div className="flex items-center justify-center mb-4">
            <button
                className="px-4 py-2 mb-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-100 rounded-l outline-none text-trueGray-600 hover:bg-trueGray-300 hover:text-trueGray-600 active:bg-trueGray-300 focus:outline-none"
                type="button" onClick={() => goToPage(1)}>
                <i className="fas fa-angle-double-left">{`<<`}</i>
            </button>
            <button
                className="px-4 py-2 mb-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-100 outline-none text-trueGray-600 hover:bg-trueGray-300 hover:text-trueGray-600 active:bg-trueGray-300 focus:outline-none"
                type="button" onClick={() => goToPage(currentPage-1)}>
                <i className="fas fa-angle-left">{`<`}</i>
            </button>
            {[...Array(paginatorSize)].map((page,i)=>(
                <button disabled={currentPage==i+1} key={i}
                className={`${currentPage == i+1 ? 'bg-trueGray-300 cursor-text' : 'bg-gray-100'} text-trueGray-600 hover:bg-trueGray-300 hover:text-trueGray-600 active:bg-trueGray-300 font-bold uppercase text-xs px-4 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150`}
                    type="button" onClick={() => goToPage(i+1)}>
                    {i+1}
                </button>
            ))}
            <button
                className="px-4 py-2 mb-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-100 outline-none text-trueGray-600 hover:bg-trueGray-300 hover:text-trueGray-600 active:bg-trueGray-300 focus:outline-none"
                type="button" onClick={() => goToPage(currentPage+1)}>
                <i className="fas fa-angle-right">{`>`}</i>
            </button>
            <button
                className="px-4 py-2 mb-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-100 rounded-r outline-none text-trueGray-600 hover:bg-trueGray-300 hover:text-trueGray-600 active:bg-trueGray-300 focus:outline-none"
                type="button" onClick={() => goToPage(totalPages)}>
                <i className="fas fa-angle-double-right">{`>>`}</i>
            </button>
        </div>
    )
}

export default Paginator;