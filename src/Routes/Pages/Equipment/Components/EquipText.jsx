import React from 'react';

const EquipText = ({
    title,
    value,
    style,
}) => {

    return (
        <div className="qeuip-page-equipitem-box" style={style}>
            <p className="qeuip-page-equipitem-box-title">
                { title }
            </p>
            <p className="qeuip-page-equipitem-box-content">
                { value }
            </p>
        </div>
    );
}

export default EquipText;