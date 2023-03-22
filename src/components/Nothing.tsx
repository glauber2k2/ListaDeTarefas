import { ArchiveBox } from 'phosphor-react';
import styles from './Nothing.module.css';

interface attributes {
  checked: string;
}

export function Nothing ({checked}: attributes) {
return (
  
    <div>
      
    {checked == "allComplete" &&
    <div className={styles.allComplete}>
      <ArchiveBox size={50}/>
      <p>Todas atividades concluidas!</p>
    </div>
      }

    {checked == "nothingComplete" &&
    <div className={styles.nothingComplete}>
      <ArchiveBox size={50}/>
      <p>Nenhuma atividade realizada!</p>
    </div>
      }

    {checked == "nothingAdd" &&
    <div className={styles.nothingAdd}>
      <ArchiveBox size={50}/>
      <p>Nenhuma atividade adicionada!</p>
    </div>
      }
      
    
    
    
    
    
    </div>
  )
}