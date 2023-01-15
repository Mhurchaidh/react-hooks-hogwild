import { useState } from "react";

function Form ({onFormSubmit}) {

    const initialFormValues = {
        name: "",
        specialty: "",
        greased: false,
        weight: "",
        medal: "Wood",
        image: "",
    }

    const [ formData, setFormData ] = useState(initialFormValues)

    const { name, specialty, weight, 'highest medal achieved': medal, image} = formData;

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleChecked = (e) => {
        setFormData({...formData, greased: e.target.checked})
    }

    const handleSubmit = () => {
        onFormSubmit(formData);
    }

    return (
        <div>
            <input onChange={handleFormData} value={name} type="text" name="name" placeholder="Name"></input>
            <input onChange={handleFormData} value={specialty} type="text" name="specialty" placeholder="Specialty"></input>
            <label>Greased?</label>
            <input onChange={handleChecked} name='greased' type="checkbox"></input>
            <input onChange={handleFormData} value={weight} type="number" name="weight" placeholder="Weight"></input>
            <label>Medal</label>
            <select onChange={handleFormData} value={medal} type="text" name="medal">
                <option value="wood">Wood</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>
                <option value="diamond">Diamond</option>
            </select>
            <input onChange={handleFormData} value={image} type="text" name="image" placeholder="Image Link"></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>

        </div>
        
    )

}

export default Form;