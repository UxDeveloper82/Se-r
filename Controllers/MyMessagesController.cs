using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MySiteR.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MySiteR.Controllers
{
    public class MyMessagesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult New()
        {
            var viewModel = new MyMessagesViewModel();
            return View(viewModel);
        }
    }
}
