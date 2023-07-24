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

        public List<FoodOrder> FoodOrder { get; set; }
        [ForeignKey("FoodOrderId")]
        public int FoodOrderId { get; set; }

        public DeliveryMethod DeliveryMethod { get; set; }
        [ForeignKey("DeliveryId")]
        public int DeliveryId { get; set; }
        public PaymentType PaymentType { get; set; }
        [ForeignKey("PaymentId")]
        public int PaymentId { get; set; }
        public Address Address { get; set; }
        [ForeignKey("AddressId")]
        public int AddressId { get; set; }

    }
}


//Server=localhost\MSSQLSERVER05;Database=master;Trusted_Connection=True;