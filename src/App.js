import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";



function App() {

const [contacts, setContacts] = useState(contactsData.slice(0,5))

  const AñadirRandom = () => {
    const newArray = [...contacts]
    const selectRandom = contactsData[Math.floor(Math.random()*contactsData.length)]

    //We don't want to repeat
    if( newArray.includes(selectRandom)===false){
      newArray.push(selectRandom)
      setContacts(newArray)
    }
  }

 
const SortByName = () => {
        const newArray = [...contacts]
         
        function comparar (a, b) {
                if  (a.name < b.name) {
                        return -1
                }
                if (a.name > b.name) {
                        return 1
                }
                return 0
        }
        newArray.sort(comparar)
        setContacts(newArray)

}

const SortByCategory = () => {
        const newArray = [...contacts]
        function comparar(a, b) {
                return b.popularity-a.popularity
        }
        newArray.sort(comparar);
        setContacts(newArray)
}

const DeleteContact = (contactId) => {
        const contactsFilter = contacts.filter(contact => {
                return contact.id !== contactId
        })
        setContacts(contactsFilter)
}


  return (
    <div>
      <h1>IronContacts </h1>
      <button onClick={() => { AñadirRandom() }}  >
        Add random contact
      </button>
        <button onClick={() => { SortByName() }}  >
        Order by name
      </button>
              <button onClick={() => { SortByCategory() }}  >
        Order by popularity
      </button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emy</th>
          <th> Actions</th>
        </tr>
        {contacts.map((contact) => (
          <tr>
            <td>
              <img
                className="imagenes"
                src={contact.pictureUrl}
                alt="imagenContact"
              />
            </td>
            <td className="name"> {contact.name} </td>
            <td className="name">  {Math.round(contact.popularity * 100) / 100}
            </td>
            <td className="name"> {contact.wonOscar ? " 🏆 " : " "} </td>
            <td className="name"> {contact.wonEmmy ? " 🏆 " : " "} </td>
             <td className="name">  <button onClick={() => { DeleteContact(contact.id) }}  >
                Delete contact
                </button> 
                </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
