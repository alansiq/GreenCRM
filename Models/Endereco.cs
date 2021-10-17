using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenCRM.Models
{
    public class Endereco
    {
        public string Logradouro { get; private set; }
        public string Cep { get; private set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public string PontoReferencia { get; set; }
        public bool Matriz { get; set; }

        public Endereco ()
        {

        }

    }
}
