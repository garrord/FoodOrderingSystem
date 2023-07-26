using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface IMenuManager
    {
        Task<List<string>> GetAllCategories();
        Task<List<MenuItemModel>> GetFoodPerCategory(string category);
    }
}
