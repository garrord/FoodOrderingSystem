using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface IMenuQueryRepository
    {
        Task<List<string>> GetAllCategories();
        Task<List<MenuItemModel>> GetFoodPerCategory(string category);
    }
}
