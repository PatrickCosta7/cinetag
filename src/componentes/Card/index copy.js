import styles from "./Card.module.css";

export default function Card({ id, titulo, capa }) {
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={iconeFavoritar}
                alt="Favoritar Filme"
                className={styles.favoritar} />

        </div>
    )

}