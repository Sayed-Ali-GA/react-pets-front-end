import { useState } from "react"

const PetForm = (props) => {
  
    const initialState = {
        name: '',
        age: '',
        breed: '',
    }


 const [fromData, setFromData] = useState(initialState)

 const handleChange = (evt) => {
  console.log(evt.target.name)
   setFromData({...fromData,
     [evt.target.name]: evt.target.value })
 }


 const handelSubmit = (evt) => {
    evt.preventDefault()
    console.log('THE FORM WAS SUBMITED!!!!!!!!!!!!!!')
    props.handleAddPet(fromData)
    setFromData(initialState)
 }

 return(
        <>
          <h1>Pet Form</h1>
          <form onSubmit={handelSubmit}>
            
            <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" 
                value={fromData.name}  
                onChange={handleChange}/>
               
             
             <label htmlFor="age" >Age:</label>
              <input type="text" name="age" id="age" 
               value={fromData.age}
             onChange={handleChange}/>
                
             
             <label htmlFor="breed">Breed:</label>
              <input type="text" name="breed" id="breed"
              value={fromData.breed}
              onChange={handleChange}/>
                  
               <button type="submit">{props.selected ? 'Update Pet' : 'Add New Pet'}</button>
          </form>
        </>
    )
}


export default PetForm 