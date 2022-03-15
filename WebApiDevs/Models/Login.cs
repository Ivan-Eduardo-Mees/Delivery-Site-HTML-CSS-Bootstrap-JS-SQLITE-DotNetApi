using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiDevs.Models
{
    [Table("CADASTRO")]
    public class Login
    {
        public int Codigo { get; set; } 
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}