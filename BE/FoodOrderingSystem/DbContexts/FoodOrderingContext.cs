using FoodOrderingSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingSystem.DbContexts
{
    public class FoodOrderingContext : DbContext
    {
        public DbSet<FoodMenu> FoodMenu { get; set; }
        public DbSet<CategoryMenu> CategoryMenu { get; set; }

        public FoodOrderingContext(DbContextOptions options) :base(options)
        {

        }
    }
}
