const errors = {
  401: {
    tipo: 'Não autorizado',
    mensagem: 'Ocorreu um imprevisto em sua sessão.\nDeseja recarregar a página? \nNa maioria dos casos isso resolve o problema',
  },
  400: {
    tipo: 'Ocorreu um imprevisto',
    mensagem: 'Tente atualizar a página ou tentar novamente.\nSe o erro continuar, entre em contato conosco',
  },
  500: {
    tipo: 'Ocorreu um erro interno no servidor',
    mensagem: 'Por conta de um imprevisto, tente novamente em alguns minutos.',
  },
  404: {
    tipo: 'Erro grave',
    mensagem: 'Parece que aconteceu um problema em nosso sistema, favor entrar em contato.',
  }
};

export default errors;
