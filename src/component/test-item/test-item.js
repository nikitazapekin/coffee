import './test-item.css'
import { TestingItem } from '../testing-item/testing-item'

export const TestItem =(props)=> {
    const {data, index} = props
    const elems = data.filter(item => {if(item.id===index){
        const iscomoe= item
      return (
      <div>
        <TestingItem  />
      </div>
      )
}})
    return (
        <div className="testing">
<div>{elems}</div>
<p>fofokfokf</p>
        </div>
    )
}