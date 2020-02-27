using StudentsManager.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StudentsManager.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        StudentDbContext db = new StudentDbContext();

        public ActionResult Index()
        {
            var users = db.Students.ToList();
            return View(users);
        }
        public ActionResult AddStudent()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddStudent(Student studentForm)
        {
            if (ModelState.IsValid)
            {
                //Logic to send data
                db.Students.Add(studentForm);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View(studentForm);
            }
        }
        public ActionResult Edit(int id)
        {
            var getRow = db.Students.Single(m => m.StudentId == id);
            return View(getRow);
        }
        [HttpPost]
        public ActionResult Edit(int id, Student studentUpdate)
        {
            var updateValue = db.Students.Single(m => m.StudentId == id);
            if (ModelState.IsValid && TryUpdateModel(updateValue))
            {  
                //db.Students.Add(studentUpdate);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View();
            }
        }
        public ActionResult Delete(int id)
        {
            db.Students.Remove(db.Students.Single(m => m.StudentId == id));
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}