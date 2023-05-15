import { BlogContent } from "../BlogContent/BlogContent"

import mockChipaData from "../../mockData/mockChipaData"

export const ChipaPage = () => {

  document.title = "Chipa - CafeChipa MDP"

  return (
    <>
    <BlogContent postData={mockChipaData} type="chipa" />
    </>
  )
}
