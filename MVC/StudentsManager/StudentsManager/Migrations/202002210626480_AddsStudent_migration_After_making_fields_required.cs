namespace StudentsManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddsStudent_migration_After_making_fields_required : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Students", "LastName", c => c.String(nullable: false, maxLength: 50));
            AlterColumn("dbo.Students", "gender", c => c.String(nullable: false, maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Students", "gender", c => c.String(maxLength: 10));
            AlterColumn("dbo.Students", "LastName", c => c.String(maxLength: 50));
        }
    }
}
