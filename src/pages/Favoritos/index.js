import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <h3>Cards ficam aqui...</h3>
            </section>
        </>
    )
}