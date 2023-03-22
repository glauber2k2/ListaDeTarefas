import styles from './retorno.module.css';
import {useState} from 'react';
import { Checks } from "phosphor-react";

interface BallonProps {
  content: string;
  btnVerified: (itemNotVerified: string) => void;
}

export function Retorno ({content, btnVerified}: BallonProps) {
  
  function VerifiedItem () {
    btnVerified(content)
  }

  return (
  
    
    <div>
      <div className={styles.list}>
        
        
        {content} 
       <button onClick={VerifiedItem}> <Checks size={32}  weight="bold" /></button>
      </div>
    </div>
  )
}