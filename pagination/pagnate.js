import _ from "lodash"

export function paginate (items,currentPage,pageSize){
 const startIndex=(currentPage-1)*pageSize
console.log(items)
 return _(items).slice(startIndex).take(pageSize).value()
}