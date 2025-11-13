export const formatosService = {
    PreciBR: (preco: number): string => {
        return `${preco.toLocaleString('pt-br',{
            
                style: 'currency',
                currency: 'BRL'
            })}`
    },
    pesoEmkg: (valorPeso: number): string =>{
    return `${valorPeso.toLocaleString('pt-BR', { minimumFractionDigits: 3 })}Kg`
    }
}