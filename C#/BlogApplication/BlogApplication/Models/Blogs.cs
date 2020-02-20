using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogApplication.Models
{
    public class Blogs
    {
        public int ID { get; set; }
        public string BlogName { get; set; }
        public string BlogText { get; set; }
        public DateTime PostDate { get; set; }
    }
}