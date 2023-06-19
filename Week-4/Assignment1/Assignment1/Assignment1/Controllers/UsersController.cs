using Assignment1.Data;
using Assignment1.Models;
using Assignment1.Models.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Assignment1.Controllers
{
    public class UsersController : Controller
    {
        private readonly MVCDemoDbContext mvcDemoDbContext;
        public UsersController(MVCDemoDbContext mvcDemoDbContext)
        {
            this.mvcDemoDbContext = mvcDemoDbContext;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult SignIn() 
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignIn(AddUserViewModel addUserViewModel)
        {
            if (addUserViewModel.Email == null || addUserViewModel.Password == null)
            {
                TempData["Message"] = "Something Forget!!!";
                return RedirectToAction("Home");
            }
            var user = mvcDemoDbContext.Users.FirstOrDefault(u => u.Email == addUserViewModel.Email);
            if (user == null || user.Password != addUserViewModel.Password)
            {
                TempData["Message"] = "Something Wrong!!!";
                return RedirectToAction("Home");
            }
            else 
            {
                return RedirectToAction("Member");
            }
        }

        [HttpGet]
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost]
        public IActionResult SignUp(AddUserViewModel addUserViewModel)
        {
            if (addUserViewModel.Email == null || addUserViewModel.Password == null)
            {
                TempData["Message"] = "Something Forget!!!";
                return RedirectToAction("Home");
            }
            var existingUser = mvcDemoDbContext.Users.FirstOrDefault(u => u.Email == addUserViewModel.Email);

            if (existingUser != null)
            {
                TempData["Message"] = "The Email is existed";
                return RedirectToAction("Home");
            }

            var user = new User()
            {
                Id = Guid.NewGuid(),
                Email = addUserViewModel.Email,
                Password = addUserViewModel.Password,
            };

            mvcDemoDbContext.Users.Add(user);
            mvcDemoDbContext.SaveChanges();
            return RedirectToAction("Member");

        }

        [HttpGet]
        public IActionResult Member()
        { 
            var users = mvcDemoDbContext.Users.ToList();
            return View(users);
        }

        [HttpGet]
        public IActionResult Home()
        {
            return View();
        }
    }
}
