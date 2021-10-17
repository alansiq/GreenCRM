using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenCRM.Models
{
    public class Cliente
    {
        public string NomeFantasia { get; private set; }
        public string RazaoSocial { get; private set; }
        public string Cnpj { get; private set; }
        public DateTime DataFundacao { get; private set; }
        public Endereco Endereco { get; set; }
        public Faturamento Faturamento { get; set; }


        public Cliente()
        {

        }
    }
}
