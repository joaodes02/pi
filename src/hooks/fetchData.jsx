import axios from "axios";

export const fetchData = async (setDados) => {
  try {
    const response = await axios.get(
      "http://localhost:3322/operacao/consultar"
    );
    const operacoesFormatadas = response.data.map((operacao) => ({
      id: operacao.id,
      toc: operacao.toc,
      tom: operacao.tom,
      dados: {
        equipamento: operacao.dados?.equipamento ?? "N/A", // Usa "N/A" se for null ou undefined
        horario: operacao.dados?.horario ?? "N/A",
        item: operacao.dados?.item ?? "N/A",
        bobina: operacao.dados?.bobina ?? "N/A",
      },
      nominal: {
        superior: operacao.nominal?.superior?.toString() ?? "0",
        inferior: operacao.nominal?.inferior?.toString() ?? "0",
      },
      rev: {
        esqSup: operacao.rev?.esqSup?.toString() ?? "0",
        centroSup: operacao.rev?.centroSup?.toString() ?? "0",
        dirSup: operacao.rev?.dirSup?.toString() ?? "0",
        esqInf: operacao.rev?.esqInf?.toString() ?? "0",
        centroInf: operacao.rev?.centroInf?.toString() ?? "0",
        dirInf: operacao.rev?.dirInf?.toString() ?? "0",
        ligaSup: operacao.rev?.ligaSup?.toString() ?? "0",
        ligaInf: operacao.rev?.ligaInf?.toString() ?? "0",
        mediaSup: operacao.rev?.mediaSup?.toString() ?? "0",
        mediaInf: operacao.rev?.mediaInf?.toString() ?? "0",
        dispSup: operacao.rev?.dispSup?.toString() ?? "0",
        dispInf: operacao.rev?.dispInf?.toString() ?? "0",
      },
      dureza: {
        esq: operacao.dureza?.esq ?? "0",
        centro: operacao.dureza?.centro ?? "0",
        dir: operacao.dureza?.dir ?? "0",
      },
      oil: {
        esqSup: operacao.oil?.esqSup?.toString() ?? "0",
        centroSup: operacao.oil?.centroSup?.toString() ?? "0",
        dirSup: operacao.oil?.dirSup?.toString() ?? "0",
        mediaSup: operacao.oil?.mediaSup?.toString() ?? "0",
        esqInf: operacao.oil?.esqInf?.toString() ?? "0",
        centroInf: operacao.oil?.centroInf?.toString() ?? "0",
        dirInf: operacao.oil?.dirInf?.toString() ?? "0",
        mediaInf: operacao.oil?.mediaInf?.toString() ?? "0",
      },
    }));

    setDados(operacoesFormatadas);
  } catch (error) {
    console.error("Erro ao buscar operações:", error);
  }
};
