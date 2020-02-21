using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentsManager.Models
{
    public class Student
    {
        //[Key]
        public int StudentId { get; set; }

        [MaxLength(50)]
        [Required]
        public string FirstName { get; set; }

        [MaxLength(50)]
        [Required]
        public string LastName { get; set; }

        [MaxLength(50)]
        public string EmailAddress { get; set; }

        [Required]
        public int Age { get; set; }
        
        [MaxLength(10)]
        [Required]
        public string gender { get; set; }
    }
}