import { Link } from "react-router-dom";

function Card({ flag, alpha3Code, capital }) {
  return (
    <>
    <div className="max-w-xs rounded-md shadow-md bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <img src={flag} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{alpha3Code} , {capital}</h2>
          <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
        </div>
        <Link to={`/details/${alpha3Code}`} className="flex items-center justify-center w-full cursor-pointer p-3 font-semibold tracking-wide rounded-md transition-all duration-200 hover:bg-violet-800 bg-violet-600 text-gray-50">Read more</Link>
      </div>
    </div>
    </>
  )
}

export default Card