import Error from './Error'
import { Link, useParams } from 'react-router'

function CapitalDetails({ cntData }) {

    // Get ID
    const { alpha3Code } = useParams()

    // Find Object by id
    const countryByCode = cntData.find(item => item.alpha3Code == alpha3Code)
    console.log(countryByCode)

    if(!countryByCode) return <Error />

  return (
    <>
    <div className="py-5 flex justify-center bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden border-2 cursor-pointer transition-all duration-200 hover:shadow-md rounded-lg shadow-0 shadow-black dark:shadow-white bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
        <div>
            <img src={countryByCode?.flag} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-100 dark:bg-gray-800" />
            <h2 className="mb-1 text-3xl font-semibold">{countryByCode?.name}</h2>
            <p className="text-md dark:text-gray-300">Capital --- {countryByCode?.capital}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <Link to='/countries' className='bg-violet-600 py-3 px-6 rounded-full hover:bg-violet-800 bg-violet-600 text-gray-50'>Go Back</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default CapitalDetails