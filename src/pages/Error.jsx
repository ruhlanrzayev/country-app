import { Link } from "react-router-dom";

function Error() {
  return (
    <>
    <section className="h-screen flex items-center p-16 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/countries' className="px-8 py-3 font-semibold rounded hover:bg-violet-800 bg-violet-600 text-gray-50">Back to homepage</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error