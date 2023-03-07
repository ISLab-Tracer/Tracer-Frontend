import React from 'react';

const Equip = ({
    childrun
}) => {

    return (
            {childrun}
    );
}

Equip.List = ( {
    img,
    title,
    price,
    team,
    category,
    count,
    
} ) => {

    return (
            <div className="equip-page-itembox-left-list">
                <img
                    className="equip-page-itembox-left-img"
                    src={img}
                    alt="img"
                />
                <div className="equip-page-itembox-left-info">
                    <p className="equip-page-itembox-left-info-title">
                        {title}
                    </p>
                    <p className="equip-page-itembox-left-info-property">
                        {price}원 / {team} / {category}
                    </p>
                </div>
                <div className="equip-page-itembox-left-countbox">
                    <p>
                        {count}
                    </p>
                </div>
            </div>
    );
}

Equip.Text = ({
    title,
    value,
    style,
}) => {

    return (
        <div className="equip-page-equipitem-box" style={style}>
            <p className="equip-page-equipitem-box-title">
                { title }
            </p>
            <p className="equip-page-equipitem-box-content">
                { value }
            </p>
        </div>
    );
}

Equip.Input = ({
    title,
    name,
    value,
    style,
}) => {

    return (
        <div className="equip-page-equipitem-box" style={style}>
            <p className="equip-page-equipitem-box-title">
                { title }
            </p>
            <input
                className="equip-page-equipitem-box-input"
                type="text"
                name={name}
                placeholder={value}
                defaultValue={value}
            />
        </div>
    );

}

export default Equip;