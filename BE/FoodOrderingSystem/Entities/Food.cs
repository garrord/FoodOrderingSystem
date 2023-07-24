namespace FoodOrderingSystem.Entities
{
    public class Food
    {
        public int Id { get; set; }
        public FoodMenu FoodOrder { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
