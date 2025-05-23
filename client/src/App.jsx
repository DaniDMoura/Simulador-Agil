import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import styles from './App.module.css'
import Simulado from './Simulado.jsx'
import { PDFDownloadLink } from '@react-pdf/renderer'


const fetchUsers = async (number) => {
  const res = await axios.get(`https://api-simulado-generator.fly.dev/api/v1/gerar_simulado?numero=${number}`)
  return res.data
}

export function App() {
  const [numero, setNumero] = useState(1)

  const mutation = useMutation({
    mutationFn: fetchUsers,
  })

  const handleClick = () => {
    mutation.mutate(numero)
  }

  const handleUpdate = e => {
    setNumero(Number(e.target.value))
  }

  console.log(mutation.data)

  return (
    <div>
      <div className={styles.title}>
        <h1><span>Simulado Ágil</span><span className={styles.lightning}>⚡</span></h1>
        <span>Crie sua própia prova do Enem</span>
      </div>
      <div className={styles.container}>
        <div className={styles.generator}>
        <div className={styles.result}>
          {mutation.isPending && <div className={styles.loader}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" strokeDasharray="300 385" strokeDashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg></div>}
          {mutation.isError && <p>Erro ao carregar</p>}
          {mutation.data &&

            <div className={styles.ready}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
              </svg>
              <span>Simulado Pronto</span>
              <PDFDownloadLink className={styles.pdf}
                  document={<Simulado questions={mutation.data}/>}
                  fileName="simulado.pdf"
              >
                {({ loading }) => (
                <button  disabled={loading}>
                  {loading ? 'Gerando PDF...' : 'Baixar'}
                </button>
                      )}
              </PDFDownloadLink>

            </div>
          }
        </div>
        <div className={styles.form}>
          <label>N.º de questões</label>
          <input onChange={handleUpdate} type='number' min='1'/>
        </div>
        <button onClick={handleClick} disabled={mutation.isPending}>
          <span>Gerar Simulado</span>
        </button>
      </div>
      </div>
      <div className={styles.bottom}>
          <div>© 2025 Simulado Ágil</div>
          <div>Site desenvolvido por Danilo Santos</div>
          <div className={styles.links}>
            <a rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/in/danilosantos-moura/'>LinkedIn</a>
            <a rel="noopener noreferrer" target="_blank" href='https://github.com/DaniDMoura'>Github</a>
            <a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/danilosmoura_/'>Instagram</a>
          </div>
      </div>
    </div>
  )
}

export default App
