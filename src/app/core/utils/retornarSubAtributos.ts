const retornarSubAtributos = (
  acessor: string,
  objeto: any,
) => {
  const conteudoArr = acessor.split('.');
  let propriedade: string;

  const ehObjeto = (conteudoProp: any, indice: number, objetoFilho: any = objeto) => {
    if (!objetoFilho[conteudoProp]) { return ''; }

    if (typeof objetoFilho[conteudoProp] === 'object') {
      propriedade = conteudoArr[indice + 1];
      return ehObjeto(propriedade, ++indice, objetoFilho[conteudoArr[indice - 1]]);
    }

    return propriedade = objetoFilho[propriedade];

  };

  ehObjeto(conteudoArr[0], 0);

  return propriedade;
};

export default retornarSubAtributos;
