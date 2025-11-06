export interface Bolo {
    nome: string | undefined;
    id: string | undefined;
    categoria: string[];
    imagens: string[];
    preco: number ;
    peso: number | null;
}