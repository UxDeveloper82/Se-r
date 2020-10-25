using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MySiteR.Models;
using MySiteR.Models.Comments;

namespace MySiteR.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<MyMessage> MyMessages { get; set; }
        public DbSet<Post> Posts { get; set; }

        public DbSet<MainComment> MainComments { get; set; }
        public DbSet<SubComment> SubComments { get; set; }
        public DbSet<Portfolio> Portfolios { get; set; }
    }
}
