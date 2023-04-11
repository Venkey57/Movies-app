import React from "react"
import _ from "lodash"

const Page =(props)=>{
    const{pageSize,itemcount,onPageChange,currentpage}=props

    const pagecount=Math.ceil(itemcount/pageSize)
    // console.log(currentpage)
    const page=_.range(1,pagecount+1)
    // console.log(page);
    // console.log(pagecount);

    return(
       
         <>
         <nav>
            <ul className="pagination">
            {page.map(page=>(
                <li key={page} className= {page===currentpage? "page-item active":"page-item"}>
                    <a className="page-link" onClick={()=>onPageChange(page)} href="/#">{page}</a>
                    </li>
           ) )}           
            </ul>
         </nav>
         </>
    )
}
export default Page;