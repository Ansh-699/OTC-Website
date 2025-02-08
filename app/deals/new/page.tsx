import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Deal",
  description: "Create a new deal",
}

export default function NewDealPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <h1 className="text-2xl font-bold mb-5 text-center">New Deal</h1>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Deal
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
