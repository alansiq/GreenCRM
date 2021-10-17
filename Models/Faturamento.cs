using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenCRM.Models
{
    public class Faturamento
    {
        public bool BoletoAccepted { get; set; }
        public string BoletoPreferred { get; set; }
        public bool CreditoAccepted { get; set; }
        public string CreditoPreferred { get; set; }
        public bool PixAccepted { get; set; }
        public string PixPreferred { get; set; }

        public string EmailFinanceiro { get; set; }
        public string EmailPedido { get; set; }

        public Faturamento()
        {

        }
    }
}
