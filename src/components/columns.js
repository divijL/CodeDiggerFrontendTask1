import { useFilters } from "react-table"


export const COLUMNS = [
    {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    columns: [
        {
            Header:'First Name',
            Footer: 'First Name',
            accessor: 'name => name.first',
            
        },
        {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last',
           
        }
    ]
  },
  {
    Header: 'Details',
    Footer: 'Details',
    accessor: 'dob',
    columns: [
        {
            Header: 'Age',
            Footer: 'Age',
            accessor: 'age'
           
        }
    ]
},
  {
    Header: 'Location',
    Footer: 'Location',
    accessor: 'location',
    columns: [
        {
            Header: 'City',
            Footer: 'City',
            accessor: 'city'
        }, 
        {
            Header: 'State',
            Footer: 'State',
            accessor: 'state'
        }, 
        {
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country'
        }
    ]
  },
    {
        Header: 'Gender',
        Footer: 'Gender',
        accessor: 'gender'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        accessor: 'email'
        
    },
    
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    columns: [
        {
            Header:'First Name',
            Footer: 'First Name',
            accessor: 'first',
            
        },
        {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last',
           
        }
    ]
  },
  {
    Header: 'Location',
    Footer: 'Location',
    accessor: 'location',
    columns: [
        {
            Header: 'City',
            Footer: 'City',
            accessor: 'city'
        }, 
        {
            Header: 'State',
            Footer: 'State',
            accessor: 'state'
        }, 
        {
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country'
        }
    ]
  },
  {
    Header: 'Details',
    Footer: 'Details',
    accessor: 'dob',
    columns: [
        {
            Header: 'Age',
            Footer: 'Age',
            accessor: 'age'
        }
    ]
}
]




