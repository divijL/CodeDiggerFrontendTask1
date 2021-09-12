import React from 'react'
import './App.css'
import { BaiscTable } from './components/BasicTable'
import { Checkbox } from './components/Checkbox'
import { ColumnFilter } from './components/ColumnFilter'
import { ColumnHiding } from './components/ColumnHiding'
import { ColumnOrder } from './components/ColumnOrder'
import { FilteringTable } from './components/FilteringTable'
import { GlobalFilter } from './components/GlobalFilter'
import { PaginationTable } from './components/PaginationTable'
import { RowSelection } from './components/RowSelection'
import { SortingTable } from './components/SortingTable'
import { StickyTable } from  './components/StickyTable'



function App() {
  return (
    <div className='App'>
    <Checkbox />
      <ColumnHiding />
      <ColumnOrder />
      <FilteringTable />
      <GlobalFilter />
      <PaginationTable />
      <RowSelection />
      <SortingTable />
   
      <StickyTable />
      
         
         

    </div>
  )
}

export default App