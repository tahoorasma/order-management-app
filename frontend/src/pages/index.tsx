import type { NextPage } from 'next'
import HomePage from '../components/HomePage/HomePage'


const label = { inputProps: { "aria-label": "Switch demo" } };


const IndexPage: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  )
}


export default IndexPage