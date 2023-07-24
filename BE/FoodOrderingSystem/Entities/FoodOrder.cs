namespace FoodOrderingSystem.Entities
{
    public class FoodOrder
    {
        public int Id { get; set; }
        public Order Order { get; set; }
        public int OrderId { get; set; }
        public Food Food { get; set; }
        public int FoodId { get; set; }
    }
}
