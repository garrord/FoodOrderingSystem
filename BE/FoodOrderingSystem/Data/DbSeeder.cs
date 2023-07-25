using FoodOrderingSystem.DbContexts;
using FoodOrderingSystem.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace FoodOrderingSystem.Data
{
    public static class DbSeeder
    {
        public static void SeedDeliveryMethodData()
        {
            using (FoodOrderingContext context = new FoodOrderingContext(new DbContextOptionsBuilder<FoodOrderingContext>().
                UseSqlServer("Server=localhost\\MSSQLSERVER05;Database=master;Trusted_Connection=True;TrustServerCertificate=True").Options))
            {
                string dataFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data\\SeedData", "DeliveryMethods.json");
                string json = File.ReadAllText(dataFilePath);
                List<DeliveryMethod> deliveryMethods = JsonConvert.DeserializeObject<List<DeliveryMethod>>(json);
                context.DeliveryMethods.AddRange(deliveryMethods);
                context.SaveChanges();
            }
        }

        public static void SeedPaymentMethodData()
        {
            using (FoodOrderingContext context = new FoodOrderingContext(new DbContextOptionsBuilder<FoodOrderingContext>().
                UseSqlServer("Server=localhost\\MSSQLSERVER05;Database=master;Trusted_Connection=True;TrustServerCertificate=True").Options))
            {
                string dataPathFile = Path.Combine(Directory.GetCurrentDirectory(), "Data/SeedData", "PaymentMethods.json");
                string json = File.ReadAllText(dataPathFile);
                List<PaymentMethod> paymentMethods = JsonConvert.DeserializeObject<List<PaymentMethod>>(json);
                context.PaymentTypes.AddRange(paymentMethods);
                context.SaveChanges();
            }
        }

        public static void SeedCategoryData()
        {
            using (FoodOrderingContext context = new FoodOrderingContext(new DbContextOptionsBuilder<FoodOrderingContext>()
                .UseSqlServer("Server=localhost\\MSSQLSERVER05;Database=master;Trusted_Connection=True;TrustServerCertificate=True").Options))
            {
                string dataFilePath = Path.Combine(Directory.GetCurrentDirectory(), "Data/SeedData", "Categories.json");
                string json = File.ReadAllText(dataFilePath);
                List<Category> categories = JsonConvert.DeserializeObject<List<Category>>(json);
                context.Categories.AddRange(categories);
                context.SaveChanges();
            }
        }
    }
}
