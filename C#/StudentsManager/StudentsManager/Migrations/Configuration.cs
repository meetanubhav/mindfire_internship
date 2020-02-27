namespace StudentsManager.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<StudentsManager.Models.StudentDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(StudentsManager.Models.StudentDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            if (!context.Department.Any())
            {
                context.Department.Add(new Models.Department
                {
                    DepartmentName = "Computer Science",
                    DepartmentLocation = "Califonia"
                });
                context.Department.Add(new Models.Department
                {
                    DepartmentName = "Data Science",
                    DepartmentLocation = "San Francisco"
                });
                context.SaveChanges();
            }

            
        }
    }
}
