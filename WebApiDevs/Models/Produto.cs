using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiDevs.Models
{   
    [Table("PRODUTOS")]
    public class Produto
    {
        [Key]
        public string Codigo { get; set; }

        public string Descricao { get; set; }

        [Column("VALOR_VENDA")]
        public double ValorVenda { get; set; }

    }
}