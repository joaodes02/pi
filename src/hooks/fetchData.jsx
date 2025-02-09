// fetchData.js
import axios from "axios";

export const fetchData = async (setDados) => {
  try {
    const response = await axios.get(
      "http://localhost:3322/operacao/consultar"
    );
    const operacoesFormatadas = response.data.map((operacao) => ({
      id: operacao.id,
      toc: operacao.TOC,
      tom: operacao.TOM,
      dados: {
        equipamento: operacao.dados.equipamento,
        horario: operacao.dados.horario,
        item: operacao.dados.item,
        bobina: operacao.dados.bobina,
      },
      nominal: {
        superior: operacao.nominal.superior.toString(),
        inferior: operacao.nominal.inferior.toString(),
      },
      rev: {
        esqSup: operacao.rev.esqSup.toString(),
        centroSup: operacao.rev.centroSup.toString(),
        dirSup: operacao.rev.dirSup.toString(),
        esqInf: operacao.rev.esqInf.toString(),
        centroInf: operacao.rev.centroInf.toString(),
        dirInf: operacao.rev.dirInf.toString(),
        ligaSup: operacao.rev.ligaSup.toString(),
        ligaInf: operacao.rev.ligaInf.toString(),
        mediaSup: operacao.rev.mediaSup.toString(),
        mediaInf: operacao.rev.mediaInf.toString(),
        dispSup: operacao.rev.dispSup.toString(),
        dispInf: operacao.rev.dispInf.toString(),
      },
      dureza: {
        esq: operacao.dureza.esq,
        centro: operacao.dureza.centro,
        dir: operacao.dureza.dir,
      },
      oil: {
        esqSup: operacao.oil.esqSup.toString(),
        centroSup: operacao.oil.centroSup.toString(),
        dirSup: operacao.oil.dirSup.toString(),
        mediaSup: operacao.oil.mediaSup.toString(),
        esqInf: operacao.oil.esqInf.toString(),
        centroInf: operacao.oil.centroInf.toString(),
        dirInf: operacao.oil.dirInf.toString(),
        mediaInf: operacao.oil.mediaInf.toString(),
      },
    }));

    setDados(operacoesFormatadas);
  } catch (error) {
    console.error("Erro ao buscar operações:", error);
  }
};
