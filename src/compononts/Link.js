import React from 'react';

const Link = (props) =>{
const {url, title} = props.data;
    return(
        <div>
            <p>
                <a href={url}>{title}</a>
            </p>
        </div>
    )
}
export default Link