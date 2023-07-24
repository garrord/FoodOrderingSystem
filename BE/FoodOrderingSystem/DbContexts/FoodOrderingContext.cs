using FoodOrderingSystem.Entities;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingSystem.DbContexts
{
    public class FoodOrderingContext : DbContext
    {
        public DbSet<FoodMenu> FoodMenu { get; set; }
        public DbSet<CategoryMenu> CategoryMenu { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<PaymentType> PaymentTypes { get; set; }
        public DbSet<FoodOrder> FoodOrders { get; set; }
        public DbSet<Food> Foods { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }
        public DbSet<Address> Addresses { get; set; }


        public FoodOrderingContext(DbContextOptions options) :base(options)
        {

        }
    }
}
