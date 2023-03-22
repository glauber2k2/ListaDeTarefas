import styles from './App.module.css'
import { Header } from './components/Header';
import { Retorno } from './components/Retorno';
import { Complete } from './components/Complete';

import { ChangeEvent, FormEvent, useState } from 'react'
import { ArrowCircleRight } from "phosphor-react";

import './global.css';
import { Nothing } from './components/Nothing';

export function App() {

const [verified, setVerified] = useState<string[]>([])

const [itens, setItens] = useState<string[]>([]);

const [newItens, setNewItens] = useState ('');

function handleCreateItem(event: FormEvent) {
  event.preventDefault()

  setItens([...itens, newItens])
  setNewItens('');
}

function handleNewItemChange (event: ChangeEvent<HTMLTextAreaElement>) {
  setNewItens(event.target.value)
}

function handleVerifiedItem (itemToVerified: string) {
  const complete = itens.filter(item => {
    return item == itemToVerified;
  })
  setVerified([...verified, complete])
  

  const itemNotDeleted = itens.filter(item => {
    return item != itemToVerified;
  })
  setItens(itemNotDeleted)
}

function handleDeleteItem (itemToDelete: string) {
  const itemNotDeleted = verified.filter(item => {
    return item != itemToDelete;
  })
  setVerified(itemNotDeleted)

}

 return (
  <div>
    <Header />
  
    <div className={styles.counter}>
      
      { verified.length + itens.length != 0 && verified.length != verified.length + itens.length &&
        <p>{verified.length} de {verified.length + itens.length} realizadas!</p>
      }
    </div> 

    <div className={styles.insert}>
    
    <form className={styles.send} onSubmit={handleCreateItem}>
        <textarea 
        name="activity"
        value={newItens}
        onChange={handleNewItemChange}
        required
        />
        
        
        
        <button type="submit"> <ArrowCircleRight size={32}/> </button>
    </form>
  </div>

<div className={styles.results}>
  
  
  
  {verified.length == 0 && itens.length == 0 &&
    <Nothing checked="nothingAdd"/>
  }
  
  {verified.length != 0 && itens.length == 0 &&
    <Nothing checked="allComplete"/>
  } 
  <div className={styles.notComplete}>
  {itens.map(item => {
    return ( 
        <Retorno key={item} content={item} btnVerified={handleVerifiedItem}/> 
    )
  })}
</div>

{verified.length == 0 && itens.length != 0 &&
  <Nothing checked="nothingComplete"/>
}
<div className={styles.complete}>
{verified.map(item => {
    return (
      <Complete key={item} content={item} btnDelete={handleDeleteItem}/>
    )
  })}
</div>




</div>
  </div>
 )
}