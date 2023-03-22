import styles from './complete.module.css';
import {useState} from 'react';
import { Trash } from "phosphor-react";

interface BallonProps {
  content: string;
  btnDelete: (itemNotDeleted: string) => void;
}

export function Complete ({content, btnDelete}: BallonProps) {
  
  function deleteItem () {
    btnDelete(content)
  }

  return (
  
    
    <div>
      <div className={styles.list}>
        {content}
        <button onClick={deleteItem}> <Trash size={32}  weight="bold" /></button>
      </div>
    </div>
  )
}