using FoodOrderingSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingSystem.DbContexts
{
    public class FoodOrderingContext : DbContext
    {
        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<FoodItemOrderXOrder> FoodItemOrderXOrders { get; set; }
        public DbSet<FoodItemOrder> FoodItemOrders { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<PaymentType> PaymentTypes { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
        public DbSet<Address> Addresses { get; set; }

        public FoodOrderingContext(DbContextOptions options) :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FoodItemOrderXOrder>().HasKey(x => new { x.OrderId, x.FoodItemOrderId });
        }
    }
}
