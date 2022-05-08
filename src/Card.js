import React from "react";

const Card = ({name, email, id}) => {
    // const { name, email, id} = props;
    return (
        <div className="bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 tc">
            <img alt="{props.name}" src={`https://robohash.org/${id}test?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;