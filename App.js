import './App.css';

import { useState } from 'react';

function App() {

  const [inputsValue,setInputsValue] = useState( {
    id: 1,
    name: "",
    phone: "",
    age: "",
    isEmp: false,
    sal: ""
  });

  const [register , setregister]= useState([
   
  ]);


  const handleChange = (e) => {
    const {name, value} = e.target;
    if(value.trim() === "")
    return;
    if (name === "name" && value.trim().length < 6)
    return;

    if (name === "phone" && Number.isNaN(value))
    return;

    if(name === "age" && Number.isNaN(value))
    return;

    setInputsValue(prev => ({...prev, [name]: value})); 

  }
const handleSubmit = (e) => {
  e.preventDefault();
  setregister([...register, inputsValue]);
}
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center   '>
      
         <divdr className=' bg-gray-700 rounded-lg shadow-md shadow-slate-800  w-full md:w-1/2   text-white'>
           <h1 className="text-orange-500 py-4 text-2xl font-bold border-solid border-b-2">Requesting a loan</h1>

          <form className='w-11/12 m-auto' onSubmit={handleSubmit}>
          <label className="text-orange-500 font-bold mt-3 block">Name:</label>
          <input type="text" name='name' value={inputsValue.name} onChange={handleChange} color='' className="block w-full  text-black  rounded-md"  />
          



          
          <label className="text-orange-500 font-bold mt-3 block">Phone:</label>
          <input type="text" name='phone' value={inputsValue.phone} onChange={handleChange} color='' className="block w-full  text-black  rounded-md"  />
          



          
          <label className="text-orange-500 font-bold mt-3 block">Age:</label>
          <input type="text" name='age' value={inputsValue.age} onChange={handleChange} color='' className="block w-full  text-black  rounded-md"  />
                    



          
          
          <label className="text-orange-500 font-bold mt-3 block">Are u an employee:</label>
          <input type="checkbox" name='isEmp'  className="block w-full  text-black  rounded-md"  checked={inputsValue.isEmp} onChange={(e)=> { setregister( {...register ,isEmp: e.target.checked})} }/>


          <label className="text-[#E28356] font-bold mt-3 block">Salary:</label>
          <select name='sal' className='text-black w-full ' value={inputsValue.sal} onChange={(e)=>{
            setregister({...inputsValue, sal: e.target.value})

          }}>
            <option>less than 500$</option>
            <option>btw 500% and 2000$</option>
            <option>above than 2000$</option>
            
          </select>


          <button  type="submit"  className="block bg-[#808080] text-white p-1 rounded-md mt-2">Submit</button>

          </form>
        </divdr>
        


      </div>


    </>     
  );
}

export default App;
