import React from 'react'
import './ProductDesc.css'
import { productsListData } from '../../Data/productsdata'

const ProductDesc = ({ pid, flag }) => {
  console.log(pid)
  return (
    <>
      {flag == 'desc' ? (
        productsListData.map((img) => {
          if (pid == img.id) {
            return (<div style={{ textAlign: 'justify', margin: '4rem', fontSize: '16px' }}>{img.description}<br /><br /><span style={{ fontWeight: 'bold' }}>Materials used: </span>{img.materials}</div>)
          }
        })
      ) : (
        productsListData.map((img) => {
          if (pid == img.id) {
            return (<div style={{ textAlign: 'justify', margin: '4rem', whiteSpace: 'pre', fontSize: '16px' }}>{img.items}</div>)
          }
        })
      )}
    </>
  )
}

export default ProductDesc