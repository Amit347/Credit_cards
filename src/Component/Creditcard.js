import React , {useState} from 'react'
import Cards from 'react-credit-cards';


export default function Creditcard() {
 
   const [number, setNumber] = useState('')
   const [name, setName] = useState('')
   const [expiry, setExpiry] = useState('')
   const [cvc, setCvc] = useState('')
   const [focus, setFocus] = useState('')



  return (
    <div className="App">

      <Cards
       number = {number}
       name = {name}
       expiry = {expiry}
       cvc = {cvc}
       focused = {focus}
     />
     
     <form>
     
       <input 
         type = 'tel'
         name = 'number'
         label = "card holder name"
         placeholder = 'Card Number'
         value = {number}
         minLength = '12'
         maxLength = '16'
         onChange = {e => setNumber(e.target.value)}
         onFocus = {e => setFocus(e.target.name)}
       />
        
        <input 
         type = 'text'
         name = 'name'
         placeholder = 'Name'
         value = {name}
         minLength = '8'
         maxLength = '14'
         onChange = {e => setName(e.target.value)}
         onFocus = {e => setFocus(e.target.name)}
       />  
    
         <input 
         type = 'month'
         name = 'expiry'
         placeholder = 'MM/YY Expiry'
         value = {(expiry)}
         onChange = {e => setExpiry(e.target.value)}
         onFocus = {e => setFocus(e.target.name)}
       />  
       
        <input 
         type = 'tel'
         name = 'cvc'
         placeholder = 'CVC'
         value = {cvc}
         minLength = '3'
         maxLength = '4'
         onChange = {e => setCvc(e.target.value)}
         onFocus = {e => setFocus(e.target.name)}
       /> 
     </form>      
    </div>
  );
            
}
