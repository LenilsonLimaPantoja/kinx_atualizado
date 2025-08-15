import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";
import Home from "../pages/publico/home/Home";
import Login from "../pages/publico/login/Login";
import SolicitarAlteracaoSenha from "../pages/publico/solicitar_alteracao_senha/SolicitarAlteracaoSenha";
import BemVindo from "../pages/privado/bem_vindo/BemVindo";
import Base from "../pages/publico/base/Base";
import TelaCadastrarUsuario from "../pages/publico/cadastro/usuario/TelaCadastrarUsuario";
import AjudaFAQ from "../pages/publico/ajuda/AjudaFAQ";
import { UsuarioContext } from "../pages/publico/cadastro/usuario/usuarioContext/UsuarioContext.js";
import DarkroomFeedPrincipal from "../pages/publico/home/feed_principal/DarkroomFeedPrincipal.js";
import DarkroomFeed from "../pages/publico/home/dark_room_feed/DarkroomFeed.js";
import EventosFeed from "../pages/publico/home/eventos_feed/EventosFeed.js";
import InserirLocal from "../pages/publico/cadastro/local/InserirLocal.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RotasPrivadas />,
        children: [
            {
                path: "",
                element: <Base />, // layout padrão
                children: [
                    {
                        path: "",
                        index: true,
                        element: <BemVindo />
                    },
                    {
                        path: "home",
                        index: true,
                        element: <Home />
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <RotasPublicas />,
        children: [
            {
                path: "",
                element: <Base />, // layout padrão para rotas públicas
                children: [
                    {
                        path: "",
                        index: true,
                        element: (
                            <UsuarioContext>
                                <TelaCadastrarUsuario />
                            </UsuarioContext>
                        )
                    },
                    {
                        path: "senha/esqueceu",
                        element: <SolicitarAlteracaoSenha />
                    },
                    {
                        path: "home",
                        element: <Home />
                    },
                    {
                        path: "darkroom/feed",
                        element: <DarkroomFeedPrincipal />
                    },
                    {
                        path: "darkroom/feed/logado",
                        element: <DarkroomFeed />
                    },
                    {
                        path: "local/inserir",
                        element: <InserirLocal />
                    },
                    {
                        path: "feed/eventos",
                        element: <EventosFeed />
                    },
                    {
                        path: "cadastro/usuario",
                        element: (
                            <UsuarioContext>
                                <TelaCadastrarUsuario />
                            </UsuarioContext>
                        )
                    },
                    {
                        path: "ajuda",
                        element: <AjudaFAQ />
                    }
                ]
            }
        ]
    }
]);

const Rotas = () => <RouterProvider router={router} />;
export default Rotas;
