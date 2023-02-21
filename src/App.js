import { useState } from "react"
import data from "./contacts.json"
import './App.css';


function App() {

  const contacts = data.slice(0, 5)

  const [contactsInfo, setContactsInfo] = useState(contacts)


  const getRandomContact = () => {

    //  1
    const random = data[Math.floor(Math.random() * data.length)]
    // 2
    const newContacts = [...contactsInfo]
    // 3
    newContacts.push(random)
    // 4
    setContactsInfo(newContacts)

  }


  const sortName = () => {

    const newContacts = [...contactsInfo]
    newContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (b.name > a.name) {
        return -1
      }
      else {
        return 0
      }
    })
    setContactsInfo(newContacts)
  }




const sortPopularity = () => {
 
  const newContacts = [...contactsInfo]

  newContacts.sort((a, b) => {
    return a.popularity > b.popularity ? -1 : 1
    
  })

  setContactsInfo(newContacts)

}



const deleteContact =(contactId) =>{

  const newContacts = [...contactsInfo]
   const filteredContactes = newContacts.filter(contact => {
    return contact.id !== contactId
   })

   setContactsInfo(filteredContactes)
}






  console.log(contacts)

  return (

    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandomContact}> Add Random Contact</button>
      <button onClick={sortPopularity}>sort by popularity</button>
      <button onClick={sortName}>sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {contactsInfo.map((contact) => {
            return (

              <tr key={contact.id} className="contactCard" >
                <td><img src={contact.pictureUrl} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                {contact.wonOscar && <td>🏆</td>}
                {!contact.wonEmmy && <td>-</td>}
                {contact.wonEmmy && <td>🏆</td>}
                {!contact.wonEmmy && <td>-</td>}
                <th>
                  <button onClick={() => deleteContact(contact.id)}>Remove</button>
                </th>
              </tr>

            )
          })}


        </tbody>
      </table>

    </div>
  );
}

export default App;
