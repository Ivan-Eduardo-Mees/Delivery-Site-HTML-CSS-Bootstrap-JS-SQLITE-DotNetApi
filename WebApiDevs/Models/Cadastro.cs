using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiDevs.Models
{   
    [Table("CADASTRO")]
    public class Cadastro
    {
        [Key]
        public int Codigo { get; set; }

        public string Nome { get; set; }

        public string DataNascimento { get; set; }
        
        public string Endereco { get; set; }

        public string Numero { get; set; }

        public string Bairro { get; set; }

        public string Cidade { get; set; }
        
        public string Estado { get; set; }

        public string Cep { get; set; }

        public string Apelido { get; set; }

        public string CPF { get; set; }

        public int RG { get; set; }

        public string Foto { get; set; }

        public string Email {get; set; }

        public string Senha { get; set; }

    }
}