import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import { useFavoritoContext } from "contexto/Favoritos";
import styles from "./Favoritos.module.css";

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    
    function valor(){
        if(favorito.length === 0){
            return <h1 className={styles.aviso}> Nenhum filme foi favoritado </h1>
        } else {
            return (favorito.map((fav) => {
                return <Card {...fav} key={fav.id} />
            }))
        }
    }

    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {valor()}
            </section>
        </>
    )
}
//Resolver Css do nenhum filme favoritado