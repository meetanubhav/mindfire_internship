using BlogApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BlogApplication.Controllers
{
    public class BlogsController : Controller
    {
        // GET: Blogs
        public ActionResult Index()
        {
            var blogsList = GetBlogsList();
            return View(blogsList);
        }
        public ActionResult Details(int id)
        {
            var blog = GetBlogsList().First(x=>x.ID == id);
            return View(blog);
        }
        public ActionResult Edit(int id)
        {
            List<Blogs> blogList = GetBlogsList();
            var blog = blogList.Single(m => m.ID == id);
            return View(blog);
        }
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                List<Blogs> blogList = GetBlogsList();
                var blog = blogList.Single(m => m.ID == id);
                if (TryUpdateModel(blog))
                {
                    blog.BlogName = Request.Form["BlogName"];
                    blog.BlogText = Request.Form["BlogText"];
                    blog.PostDate = DateTime.Now;
                    return RedirectToAction("Index");
                }
                return View(blog);
            }
            catch
            {
                return View();
            }
        }
        [NonAction]
        public List<Blogs> GetBlogsList(){
           return new List<Blogs>{
              new Blogs{
                 ID = 1,
                 BlogName = "Allen",
                 BlogText = "I'm a Full Stack Developer",
                 PostDate = DateTime.Parse(DateTime.Today.ToString()),
              },
		
              new Blogs{
                 ID = 2,
                 BlogName = "Carson",
                 BlogText = "I'm a Data Analyst",
                 PostDate = DateTime.Parse(DateTime.Today.ToString()),
              },
		
              new Blogs{
                 ID = 3,
                 BlogName = "Dave",
                 BlogText = "I'm a Angular Developer",
                 PostDate = DateTime.Parse(DateTime.Today.ToString()),
              },
		
              new Blogs{
                 ID = 4,
                 BlogName = "Mark",
                 BlogText = "I'm a Cloud Architect",
                 PostDate = DateTime.Parse(DateTime.Today.ToString()),
              },
           };
        }
    }
}