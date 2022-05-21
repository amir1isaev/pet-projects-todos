import { TodoAppContext } from 'core/context'
import { useContext } from 'react'

const useTodoApi = () => useContext(TodoAppContext)

export default useTodoApi
