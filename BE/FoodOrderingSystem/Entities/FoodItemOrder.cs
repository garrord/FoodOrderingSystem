using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodOrderingSystem.Entities
{
    public class FoodItemOrder
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public MenuItem MenuItem { get; set; }
        [ForeignKey("MenuItemId")]
        public int MenuItemId { get; set; }
        public List<Order> Orders { get; set; }
        public int Quantity { get; set; }
    }
}
