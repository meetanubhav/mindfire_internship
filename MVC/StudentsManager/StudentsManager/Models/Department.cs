using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentsManager.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }

        [MaxLength(50)]
        [Required]
        public string DepartmentName { get; set; }

        [MaxLength(50)]
        [Required]
        public string DepartmentLocation { get; set; }

        public virtual List<Student> Students { get; set; }
    }
}