import { useState } from "react";

function ShoppingListForm () {

    const [formData, setFormData] = useState({ product:"", quantity: 0 });
    
    const handleChange = (e) => {
        const changedField = e.target.name;
        const newValue = e.target.value

        setFormData((currData) => {
            return {
                ...currData,
                [changedField]: newValue,
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <form>
            <h1>Product is: {formData.product} and quantity is: {formData.quantity}</h1>
            <label htmlFor="product">Product Name</label>
            <input 
                type="text" 
                placeholder="product name" 
                name="product" 
                id="product" 
                value={formData.product}
                onChange={handleChange}/>

            <label htmlFor="quantity">Quantity</label>
            <input 
                type="number" 
                placeholder="1" 
                name="quantity" 
                id="quantity" 
                value={formData.quantity}
                onChange={handleChange}/>

            <button onClick={handleSubmit}>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;