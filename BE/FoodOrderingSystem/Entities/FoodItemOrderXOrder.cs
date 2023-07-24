using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodOrderingSystem.Entities
{
    public class FoodItemOrderXOrder
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Order Order { get; set; }
        [ForeignKey("OrderId")]
        public int OrderId { get; set; }
        public FoodItemOrder FoodItemOrder { get; set; }
        [ForeignKey("FoodItemOrderId")]
        public int FoodItemOrderId { get; set; }
    }
}
