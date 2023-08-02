using FoodOrderingSystem.Entities;

namespace FoodOrderingSystem.Models
{
    public class CheckoutItemModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Cellphone { get; set; }
        public string EmailAddress { get; set; }
        public decimal Tip { get; set; }
        public decimal TotalPrice { get; set; }
        public string DeliveryMethod { get; set; }
        public string PaymentMethod { get; set; }
        public Address Address { get; set; }
        //public decimal IndividualPrice { get; set; }
        //public int Quantity { get; set; }
        public string? Message { get; set; }
        public DateTime TimeOrdered { get; set; }
        public List<SelectedFoodModel> FoodItemsOrdered { get; set; }
    }
}
