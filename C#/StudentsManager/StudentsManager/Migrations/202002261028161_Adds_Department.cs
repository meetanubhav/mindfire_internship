﻿namespace StudentsManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Adds_Department : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Departments",
                c => new
                    {
                        DepartmentId = c.Int(nullable: false, identity: true),
                        DepartmentName = c.String(nullable: false, maxLength: 50),
                        DepartmentLocation = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.DepartmentId);
            
            AddColumn("dbo.Students", "DepartmentId", c => c.Int());
            CreateIndex("dbo.Students", "DepartmentId");
            AddForeignKey("dbo.Students", "DepartmentId", "dbo.Departments", "DepartmentId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Students", "DepartmentId", "dbo.Departments");
            DropIndex("dbo.Students", new[] { "DepartmentId" });
            DropColumn("dbo.Students", "DepartmentId");
            DropTable("dbo.Departments");
        }
    }
}
