using System.ComponentModel.DataAnnotations.Schema;

namespace FoodOrderingSystem.Entities
{
    public class Address
    {
        public int Id { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public Order Order { get; set; }
        [ForeignKey("OrderId")]
        public int OrderId { get; set; }
    }
}
