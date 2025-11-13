import axios from "axios";
import type { Bolo } from "../types/Bolo";

export const getBolos = async (): Promise<Bolo[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/bolos")
        return resposta.data
    } catch (error) {
        console.error("erro ao buscar os dados: ")
        throw error;
    }
}