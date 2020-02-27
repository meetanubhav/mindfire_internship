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
            //var users = db.Students.Include("Department").ToList();
            var data = (from user in db.Students.Include("Department").ToList()
                        select new StudentDepartment
                        {
                            StudentId = user.StudentId,
                            FirstName = user.FirstName,
                            LastName = user.LastName,
                            EmailAddress = user.EmailAddress,
                            Age = user.Age,
                            Gender = user.gender,
                            DepartmentName = (user.Department != null) ? user.Department.DepartmentName : "N/A",
                            DepartmentLocation = (user.Department != null) ? user.Department.DepartmentLocation : "N/A"
                        }).ToList();
            return View(data);
        }
        public ActionResult AddStudent()
        {
            ViewBag.DepartmentName = db.Department.Select(m => new { m.DepartmentName, m.DepartmentId }).ToList();
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
        public ActionResult AddDepartment()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddDepartment(Department departmentForm)
        {
            if (ModelState.IsValid)
            {
                //Logic to send data
                db.Department.Add(departmentForm);
                db.SaveChanges();
                //return RedirectToAction("Index");
                return RedirectToAction("ViewDepartment");
            }
            else
            {
                return View(departmentForm);
            }
        }
        public ActionResult ViewDepartment()
        {
            var user = db.Department.ToList();
            return View(user);
        }
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            try
            {
                var getRow = (from user in db.Students.Include("Department").ToList()
                              select new StudentDepartment
                              {
                                  StudentId = user.StudentId,
                                  FirstName = user.FirstName,
                                  LastName = user.LastName,
                                  EmailAddress = user.EmailAddress,
                                  Age = user.Age,
                                  Gender = user.gender,
                                  DepartmentId = (user.Department != null) ? user.Department.DepartmentId : 0,
                                  DepartmentName = (user.Department != null) ? user.Department.DepartmentName : "N/A",
                                  DepartmentLocation = (user.Department != null) ? user.Department.DepartmentLocation : "N/A"
                              }).Single(m => m.StudentId == id);
                ViewBag.DepartmentName = db.Department.Select(m => new { m.DepartmentName, m.DepartmentId }).ToList();
                //ViewBag.DepartmentName = db.Department;
                return View(getRow);
            }
            catch
            {
                return RedirectToAction("Index");
            }
        }
        [HttpPost]
        public ActionResult Edit(int id, StudentDepartment studentUpdate)
        {


            if (ModelState.IsValid)
            {
                var studentFromDB = db.Students.FirstOrDefault(x => x.StudentId == id);
                studentFromDB.FirstName = studentUpdate.FirstName;
                studentFromDB.LastName = studentUpdate.LastName;
                studentFromDB.EmailAddress = studentUpdate.EmailAddress;
                studentFromDB.gender = studentUpdate.Gender;
                studentFromDB.Age = studentUpdate.Age;
                studentFromDB.DepartmentId = studentUpdate.DepartmentId;
                db.Entry(studentFromDB).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();

                return RedirectToAction("Index");
            }
            else
            {
                return View();
            }
        }
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return RedirectToAction("Index");
            }
            try
            {
                db.Students.Remove(db.Students.Single(m => m.StudentId == id));
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return RedirectToAction("Index");
            }
        }
    }
}