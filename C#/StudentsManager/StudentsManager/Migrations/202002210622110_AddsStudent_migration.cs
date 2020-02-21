namespace StudentsManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddsStudent_migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        StudentId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false, maxLength: 50),
                        LastName = c.String(maxLength: 50),
                        EmailAddress = c.String(maxLength: 50),
                        Age = c.Int(nullable: false),
                        gender = c.String(maxLength: 10),
                    })
                .PrimaryKey(t => t.StudentId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Students");
        }
    }
}
