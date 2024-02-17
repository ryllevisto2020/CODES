using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            
            HttpRequest req = HttpContext.Request;

            //QUERY
            Console.WriteLine(req.Query["id"].ToString()); // website.com/index<?id=1>

            //ROUTE PARAMETERS
            try
            {
                Console.WriteLine(req.RouteValues["id"].ToString()); // website.com/index/<1>
            }
            catch (Exception)
            {

            }

            //COOKIE
            IRequestCookieCollection cookies = req.Cookies;
            Console.WriteLine(cookies["Cookie_1"]); //cookies[<key>]

            //HEADERS
            IHeaderDictionary headers = req.Headers;
            Console.WriteLine(headers["test"]); //headers[<key>]

            //BODY ,  FORM-DATA ,  X-WWW-FORM-URLENCODED
            Console.WriteLine(req.Body);
            
            return View("Index");
        }
    }
}
