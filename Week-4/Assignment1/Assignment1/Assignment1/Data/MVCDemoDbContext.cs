using Assignment1.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Assignment1.Data
{
    public class MVCDemoDbContext : DbContext
    {
        public MVCDemoDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
