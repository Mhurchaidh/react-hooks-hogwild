import React from "react";

function HogDetails ({pig}) {

    return (
        <div className="normalText">
            <h3>Specialty: {pig.specialty}</h3>
            <h3>Weight: {pig.weight}</h3>
            <h3>{pig.greased? "Greased" : "Not Greased"}</h3>
        </div>
    )
}

export default HogDetails;