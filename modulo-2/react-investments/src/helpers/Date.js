export function dataFormatada(mes, ano) {
  switch (mes) {
    case 1:
      return "jan/" + ano;
    case 2:
      return "fev/" + ano;
    case 3:
      return "mar/" + ano;
    case 4:
      return "abr/" + ano;
    case 5:
      return "mai/" + ano;
    case 6:
      return "jun/" + ano;
    case 7:
      return "jul/" + ano;
    case 8:
      return "ago/" + ano;
    case 9:
      return "set/" + ano;
    case 10:
      return "out/" + ano;
    case 11:
      return "nov/" + ano;
    case 12:
      return "dez/" + ano;
    default:
      return "?";
  }
}
