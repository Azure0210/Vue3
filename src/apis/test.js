import httpInstance from "@/utils/http";
export function getCategoryList() {
 return httpInstance({
    url:'home/category/head'
  })
}
