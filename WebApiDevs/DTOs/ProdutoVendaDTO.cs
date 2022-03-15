using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiDevs.DTOs
{
    public class ProdutoVendaDTO
    {
        public string ProdutoPrincipal { get; set; }

        public string ProdutoSecundario { get; set; } 

        public double ValorVenda { get; set; }

        public double ValorDesconto { get; set; }

        public int Estoque { get; set; }  

    }
}