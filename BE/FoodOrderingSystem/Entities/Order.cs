using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderingSystem.Entities
{
    public class Order
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CellPhone { get; set; }
        public string EmailAddress { get; set; }
        public decimal Tip { get; set; }
        public decimal Total { get; set; }
        public DateTime DateOrdered { get; set; }
        public List<FoodItemOrder> FoodItemOrders { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public Address Address { get; set; }
    }
}