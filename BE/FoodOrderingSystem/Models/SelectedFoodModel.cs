namespace FoodOrderingSystem.Models
{
    public class SelectedFoodModel
    {
        public string Name { get; set; }
        public decimal IndividualPrice { get; set; }
        public int Quantity { get; set; }
        public string? Message { get;set; }
    }
}
