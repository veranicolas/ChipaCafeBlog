import { BlogContent } from "../BlogContent/BlogContent"

import mockChipaData from "../../mockData/mockChipaData"

export const ChipaPage = () => {
  return (
    <>
    <BlogContent postData={mockChipaData} type="chipa" />
    </>
  )
}
