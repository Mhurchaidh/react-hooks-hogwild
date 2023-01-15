import { useState, useEffect } from "react";
function Filter ({hogs, handleHogsArray}) {

    const [filterGreased, setFilterGreased] = useState(false);
    const [value, setValue] = useState('none');

    const filterPiggies = (array) => {
        return [...array].filter(hog => {
            if(filterGreased === false) return true;
                        
             return hog.greased === true
                    })
    }

    const sortPiggies = (array) => {
        return [...array].sort((a, b) => a[value] > b[value]? 1 : a[value] < b[value]? -1 : 0);
    }

    useEffect(() => {
        let result = hogs;
        result = filterPiggies(result);
        result = sortPiggies(result);
        handleHogsArray(result);
    },[filterGreased, value])

    const handleChange = (e) => {
            setValue(e.target.value);
        }

    const handleFilter = () => {
        setFilterGreased(!filterGreased)
    }

    return (
            <div className="filterWrapper">
                <select onChange={handleChange}>
                  <option value="none">None</option>
                  <option value="name">Name</option>
                  <option value="weight">Weight</option>
                </select>
                <label>Filter Greased</label>
                <input type="checkbox" onClick={handleFilter}/>
            </div>
        )

                 
}
export default Filter;