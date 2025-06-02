import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState, useEffect, useMemo } from "react";
import styles from "./App.module.css";
import Simulado from "./Simulado.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const frases = [
  "Grandes conquistas começam com pequenos cliques...",
  "A paciência é uma virtude... principalmente esperando PDF.",
  "Você está a poucos segundos de virar o rei do simulado.",
  "Esse Danilo é um cara muito maneiro 😎👍",
  "Já seguiu @danilosmoura_ no Instagram?",
  "E no Github? @DaniDMoura",
  "Seu esforço está prestes a virar um arquivo .pdf!",
  "Esse Danilo é um cara muito maneiro 😎👍",
  "A jornada é longa... mas o simulado é gerado em breve.",
  "A excelência leva tempo... e o seu PDF também (infelizmente).",
  "Respira fundo, que o sistema tá processando com carinho.",
  "Está lento? Calma, o servidor tá correndo com chinelo!",
  "Já foi... só falta o universo alinhar os bytes agora.",
  "Você clicou. Agora é fé, foco e F5 (mentira, não aperta).",
  "Mais rápido que uma tartaruga com sono.",
  "O PDF tá vindo... só parou pra tomar um café antes. ☕",
  "Não é magia, é processamento assíncrono!",
  "Aguarde enquanto invocamos o espírito do Enem.",
  "Relaxa... até foguete tem tempo de espera.",
  "Simulado quase pronto... já pode pensar na desculpa pra não fazer.",
  "Esse Danilo é um cara muito maneiro 😎👍",
];

const fetchUsers = async ({
  number,
  cienciasNatureza,
  matematica,
  linguagens,
  cienciasHumanas,
}) => {
  const res = await axios.get(
    "https://api-simulado-generator.onrender.com/api/v1/gerar_simulado",
    {
      params: {
        numero: number,
        ciencias_natureza: cienciasNatureza,
        matematica: matematica,
        linguagens: linguagens,
        ciencias_humanas: cienciasHumanas,
      },
    }
  );
  return res.data;
};

function App() {
  const [numero, setNumero] = useState(1);

  const [activeSettings, setActiveSettings] = useState(false);

  const [cienciasNatureza, setCienciasNatureza] = useState(true);
  const [matematica, setMatematica] = useState(true);
  const [linguagens, setLinguagens] = useState(true);
  const [cienciasHumanas, setCienciasHumanas] = useState(true);

  const [frase, setFrase] = useState("ㅤ");
  const i = useRef(0);
  const intervalId = useRef(null);
  const timeoutId = useRef(null);

  const mutation = useMutation({
    mutationFn: fetchUsers,
  });

  const pdfDocument = useMemo(() => {
    if (!mutation.data) return null;
    return <Simulado questions={mutation.data} />;
  }, [mutation.data]);

  const handleClick = () => {
    mutation.mutate({
      number: numero,
      cienciasNatureza: cienciasNatureza,
      matematica: matematica,
      linguagens: linguagens,
      cienciasHumanas: cienciasHumanas,
    });
  };

  const handleUpdate = (e) => {
    setNumero(Number(e.target.value));
  };

  useEffect(() => {
    if (mutation.isPending) {
      setTimeout(() => {
        setFrase(frases[0]);
        intervalId.current = setInterval(() => {
          i.current += 1;
          setFrase(frases[i.current % frases.length]);
        }, 5000);
      }, 5000);
    } else {
      clearInterval(intervalId.current);
      i.current = 0;
    }
    return () => {
      clearInterval(intervalId.current);
      clearTimeout(timeoutId);
    };
  }, [mutation.isPending]);

  return (
    <div>
      <div className={styles.title}>
        <h1>
          <span>Simulado Ágil</span>
          <span className={styles.lightning}>⚡</span>
        </h1>
        <span>Crie sua própria prova do Enem</span>
      </div>
      <div className={styles.container}>
        <div className={styles.generator}>
          <div className={styles.result}>
            {mutation.isPending && (
              <div className={styles.loader}>
                <div className={styles.inloader}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150">
                    <path
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeDasharray="300 385"
                      strokeDashoffset="0"
                      d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        calcMode="spline"
                        dur="2"
                        values="685;-685"
                        keySplines="0 0 1 1"
                        repeatCount="indefinite"
                      ></animate>
                    </path>
                  </svg>
                  <span>{frase}</span>
                </div>
              </div>
            )}
            {mutation.isError && <p>Erro ao carregar</p>}
            {mutation.data && (
              <div className={styles.ready}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                </svg>
                <span>Simulado Pronto</span>
                <PDFDownloadLink
                  className={styles.pdf}
                  document={pdfDocument}
                  fileName="simulado.pdf"
                >
                  {({ loading }) => (
                    <button disabled={loading}>
                      {loading ? "Gerando PDF..." : "Baixar"}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>
            )}
          </div>
          <div className={styles.form}>
            <label>N.º de questões</label>
            <input onChange={handleUpdate} type="number" min="1" />
          </div>
          <button onClick={handleClick} disabled={mutation.isPending}>
            <span>Gerar Simulado</span>
          </button>
          {activeSettings && (
            <div className={styles.activeSettings}>
              <div className={styles.inActiveSettings}>
                <div className={styles.close}>
                  <button
                    onClick={() => {
                      setActiveSettings(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </button>
                  <br />
                  <span style={{color:'white'}}>
                    Filtros
                  </span>
                  <hr/>
                </div>
                <div className={styles.settingsButtons}>
                  <button
                    style={{
                      textDecoration: cienciasNatureza
                        ? "none"
                        : "line-through",
                    }}
                    onClick={() => setCienciasNatureza(!cienciasNatureza)}
                  >
                    Ciências da Natureza
                  </button>
                  <button
                    style={{
                      textDecoration: matematica ? "none" : "line-through",
                    }}
                    onClick={() => setMatematica(!matematica)}
                  >
                    Matemática
                  </button>

                  <button
                    style={{
                      textDecoration: linguagens ? "none" : "line-through",
                    }}
                    onClick={() => setLinguagens(!linguagens)}
                  >
                    Linguagens
                  </button>

                  <button
                    style={{
                      textDecoration: cienciasHumanas ? "none" : "line-through",
                    }}
                    onClick={() => setCienciasHumanas(!cienciasHumanas)}
                  >
                    Ciências Humanas
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className={styles.settings}>
            <button
              onClick={() => {
                setActiveSettings(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-settings2-icon lucide-settings-2"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>© 2025 Simulado Ágil</div>
        <div>Site desenvolvido por Danilo Santos</div>
        <div className={styles.links}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/danilosantos-moura/"
          >
            LinkedIn
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DaniDMoura"
          >
            Github
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/danilosmoura_/"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
