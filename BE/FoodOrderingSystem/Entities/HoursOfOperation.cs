using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FoodOrderingSystem.Entities
{
    public class HoursOfOperation
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string DayOfWeek { get; set; }
        public string Hours { get; set; }
    }
}
