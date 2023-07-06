import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contexto/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/player" element={<Player />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;