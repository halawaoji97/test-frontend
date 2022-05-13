import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Table = ({ book }) => {
  const token = localStorage.getItem('token', 'data')
  const api = 'http://159.223.57.121:8080/books'
  const navigate = useNavigate()
  const id = localStorage.getItem('id', 'data')

  const removeBook = (id) => {
    axios
      .delete(api + '/' + id, {
        headers: {
          Authorization: `${token}`
        }
      })
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div class='flex flex-col shadow-md p-4'>
      <div class='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div class='overflow-hidden'>
            <table class='min-w-full'>
              <thead class='border-b'>
                <tr>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    No
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    ISBN
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Author
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Publiser
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Description
                  </th>
                  <th
                    scope='col'
                    class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {book.data &&
                  book.data.map((item, index) => {
                    return (
                      <tr>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='#'
                        >
                          {index + 1}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='First'
                        >
                          {item.isbn}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='First'
                        >
                          {item.title}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='Last'
                        >
                          {item.author}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='Last'
                        >
                          {item.publisher}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='Handle'
                        >
                          {item.description}
                        </td>
                        <td
                          class='px-6 py-4 whitespace-no-wrap border-b border-gray-200'
                          data-label='Handle'
                        >
                          <button
                            className='bg-red-500 p-2 mr-2'
                            onClick={() => removeBook(item.id)}
                          >
                            Delete
                          </button>
                          <button
                            className='bg-blue-500 p-2 text-white mr-2'
                            onClick={() =>
                              navigate(`/edit/${item.id}`, {
                                state: {
                                  book: item
                                }
                              })
                            }
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
