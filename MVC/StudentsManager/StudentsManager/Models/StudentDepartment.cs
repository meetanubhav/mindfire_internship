using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentsManager.Models
{
    public class StudentDepartment
    {
        public int StudentId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string EmailAddress { get; set; }

        public int Age { get; set; }

        public string Gender { get; set; }

        public int? DepartmentId { get; set; }

        public string DepartmentName { get; set; }

        public string DepartmentLocation { get; set; }
    }
}