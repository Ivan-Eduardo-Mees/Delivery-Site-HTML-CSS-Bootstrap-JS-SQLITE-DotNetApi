using Microsoft.AspNet.OData;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiDevs.DTOs;
using WebApiDevs.Models;
using System.Data.Entity;
using System.Data;
using System.Web.Http.Cors;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Nancy.Json;

namespace WebApiDevs.Controllers
{
   [EnableCors("*","*","*")]
    public class ValuesController : ApiController
    {
        // GET api/values/5
        public string Get(int id)
        {
            return "value";

        }
        // requisição que realiza a verificação dos dados de login
        public object GetLogin(string email, string senha)
        {
            Login login = new Login();

            string cs = ConfigurationManager.ConnectionStrings["DEVS"].ConnectionString;

            SQLiteConnection con = new SQLiteConnection(cs);

            string sql = "SELECT Codigo, Email, Senha FROM Cadastro WHERE Email = '" + email + "' AND Senha = '" + senha + "'";

            SQLiteDataAdapter dap = new SQLiteDataAdapter(sql, con);

            DataTable table = new DataTable();

            dap.Fill(table);

            var teste = JsonConvert.SerializeObject(table);

            JavaScriptSerializer js = new JavaScriptSerializer();

            Login[] logins = js.Deserialize<Login[]>(teste);

            if(logins.Length == 0)
            {
                return "Erro Email ou Senha incorreta";
            }

            if(logins[0].Email == "" || logins[0].Email == null || logins[0].Senha == "" || logins[0].Senha == null)
            {
                return "Erro email ou senha incorreto"; 
            }
            else
            {
                return GetCadastro(logins[0].Codigo);
            }
            //return table;

                //return ListarProdutos().Where(p => p.Codigo == codigo).FirstOrDefault();


        }
        // realizo a inserção do meu cadastro no banco
        public string PostCadastro([FromBody] Cadastro values)
        {

            try
            {
                var emails = GetEmail(values.Email);

                string cs = ConfigurationManager.ConnectionStrings["DEVS"].ConnectionString;

                SQLiteConnection con = new SQLiteConnection(cs);


                if (emails.Length == 0)
                {

                    string sql = "INSERT INTO CADASTRO (Nome,DataNascimento,Endereco,Numero,Bairro,Cidade,Estado,Cep,Apelido,CPF,RG,Foto,Email,Senha)" +
                        "VALUES ('" + values.Nome + "','" + values.DataNascimento + "','" + values.Endereco + "','" + values.Numero + "','" + values.Bairro + "','"
                        + values.Cidade + "','" + values.Estado + "','" + values.Cep + "','" + values.Apelido + "','" + values.CPF + "'," + values.RG + ",'" + values.Foto + "','" + values.Email + "','" + values.Senha + "')";

                    SQLiteDataAdapter dap = new SQLiteDataAdapter(sql, con);

                    DataTable table = new DataTable();

                    dap.Fill(table);

                    return "Correto";
                }
                else
                {
                    return "Email ja cadastrado";
                }
                    
            }
            catch (Exception ex)
            {
                return "ERRO" + ex;
            }
        }
        //uso para que a partir do login me retorne todos os dados da pessoa // posterirmente dividir a tabela em 2 
        //uma com informações pessoais e outro com os dados do login
        public Cadastro[] GetCadastro(int codigo)
        {
            string cs = ConfigurationManager.ConnectionStrings["DEVS"].ConnectionString;

            SQLiteConnection con = new SQLiteConnection(cs);

            string sql = "SELECT * FROM Cadastro WHERE Codigo =" + codigo;

            SQLiteDataAdapter dap = new SQLiteDataAdapter(sql, con);

            DataTable table = new DataTable();

            dap.Fill(table);

            var convertCadastro = JsonConvert.SerializeObject(table);

            JavaScriptSerializer js = new JavaScriptSerializer();

            Cadastro[] cadastro = js.Deserialize<Cadastro[]>(convertCadastro);

            return cadastro;
        }

        //Uso para validar se o email ja existe na hora do cadastro
        public Login[] GetEmail(string email)
        {
            string cs = ConfigurationManager.ConnectionStrings["DEVS"].ConnectionString;

            SQLiteConnection con = new SQLiteConnection(cs);

            string sql = "SELECT * FROM Cadastro WHERE email ='" + email + "'";

            SQLiteDataAdapter dap = new SQLiteDataAdapter(sql, con);

            DataTable table = new DataTable();

            dap.Fill(table);

            var convertJaExiteEmail = JsonConvert.SerializeObject(table);

            JavaScriptSerializer js = new JavaScriptSerializer();

            Login[] emails = js.Deserialize<Login[]>(convertJaExiteEmail);

            return emails;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
