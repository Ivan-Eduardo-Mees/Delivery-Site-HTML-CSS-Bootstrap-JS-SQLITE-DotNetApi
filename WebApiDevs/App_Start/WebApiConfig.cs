using Microsoft.AspNet.OData.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApiDevs
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            config.EnableCors();
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // ODATA MICROSOFT.ASP.NET.ODATA CONFIGURATION -- addIvan
            config.EnableDependencyInjection();
            config.Select().Expand().Filter().OrderBy().MaxTop(null).Count();

        }
    }
}
