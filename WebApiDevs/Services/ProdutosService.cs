using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SQLite;
using System.Linq;
using System.Web;
using WebApiDevs.Models;
using System.Data;
using WebApiDevs.DTOs;

namespace WebApiDevs.Services
{
    public class ProdutosService
    {
        private SQLiteContext db = new SQLiteContext();

        public Produto GetProduto(string codigo)
        {
            return ListarProdutos().Where(p => p.Codigo == codigo).FirstOrDefault();
        }

        public ProdutoVendaDTO GetProdutoVenda(string codigo)
        {
            Produto prod = GetProduto(codigo);

            double desconto = 1;

            ProdutoVendaDTO venda = new ProdutoVendaDTO()
            {
                ProdutoPrincipal = prod.Codigo,
                ProdutoSecundario = prod.Codigo + prod.Codigo,
                ValorVenda = prod.ValorVenda,
                ValorDesconto = desconto,
                Estoque = 120
            };
            return venda;
        }

        public IEnumerable<Produto> ListarProdutos()
        {
           return db.Produtos.AsEnumerable();
            
            /*string cs = ConfigurationManager.ConnectionStrings["DEVS"].ConnectionString;

            SQLiteConnection con = new SQLiteConnection(cs);

            string sql = "select * from PRODUTOS";

            SQLiteDataAdapter dap = new SQLiteDataAdapter(sql, con);

            DataTable table = new DataTable();

            dap.Fill(table);

            return table.AsEnumerable().Select(row => new Produto
            {
                Codigo = Convert.ToString(row["Codigo"]),
                Descricao = Convert.ToString(row["Descricao"]),
                ValorVenda = Convert.ToDouble(row["Valor_Venda"])
            });*/
        }


    }
}