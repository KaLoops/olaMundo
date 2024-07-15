import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.jpg";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Karla!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Karla"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedora Front-end iniciante e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Sou forte entusiasta da beleza e da tecnologia. Fui profissional da beleza por muitos anos e adentrei há pouco tempo na área de desenvolvimento.
            </p>
            <p className={styles.paragrafo}>
                Comecei como aprendiz no desenvolvimento de um jogo eletrônico multiplataforma utilizando Unity, Krita e Aseprite. Fiz algumas artes conceito, desenhei trechos de cenário, personagens, criei alguns níveis e resolvi me aventurar. 
            </p>
            <p className={styles.paragrafo}>
                Atuei em uma Outsourcer por quase 1 ano como estagiária, e foi minha primeira experiência como Dev. O Sênior que eu auxiliava me incentivou muito a estudar programação, dizia que eu "levava jeito". Aprendi muito com ele. Então, seguindo seu conselho, me inscrevi no Programa ONE da Oracle + Alura para adquirir conhecimento e me preparar para o mercado, para uma transição de carreira. Tenho aprendido as tecnologias HTML, CSS, React, JavaScript, Git e trabalho com sistemas Linux. 
            </p>
            <p className={styles.paragrafo}>
                Escolhi o Front-end pois me identifico com a parte visual. É uma forma de arte, e arte é beleza... 

            </p>
            <p className={styles.paragrafo}>
                Noutras palavras, sou uma nerd que ama embelezar o mundo e o faço por meio da tecnologia... É poético!
            </p>
        </PostModelo>
    )
}