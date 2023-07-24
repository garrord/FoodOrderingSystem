using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodOrderingSystem.Entities
{
    public class MenuItem
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int? Number { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public bool IsSpicy { get; set; }
        public Category Category { get; set; }
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
    }
}
