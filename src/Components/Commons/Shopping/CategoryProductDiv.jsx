import React from 'react';

import CategoryProductDivStyle from './CategoryProductDivStyle.css'

const CategoryProductDiv = ({ title }) => {
    return (
        <div className='CategoryProductDivStyle'>
            <p style={{ color: "#555" }}>{title}</p>
        </div>
    );
}
 
export default CategoryProductDiv;