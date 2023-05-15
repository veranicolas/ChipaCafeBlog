import { BlogContent } from "../BlogContent/BlogContent"

import mockCafeData from "../../mockData/mockCafeData"

export const CafePage = () => {
  return (
    <>
      <BlogContent postData={mockCafeData} type="cafe" />
    </>
  )
}
