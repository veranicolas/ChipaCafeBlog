import { BlogContent } from "../BlogContent/BlogContent"

import mockCafeData from "../../mockData/mockCafeData"

export const CafePage = () => {

  document.title = "Cafes - CafeChipa MDP"

  return (
    <>
      <BlogContent postData={mockCafeData} type="cafe" />
    </>
  )
}
