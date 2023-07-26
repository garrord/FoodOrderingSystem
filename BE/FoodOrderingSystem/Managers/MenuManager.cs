using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Entities;
using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Managers
{
    public class MenuManager : IMenuManager
    {
        private readonly IMenuQueryRepository _menuQueryRepo;

        public MenuManager(IMenuQueryRepository menuQueryRepo)
        {
            _menuQueryRepo = menuQueryRepo;
        }

        public async Task<List<string>> GetAllCategories()
        {
            List<string> categories = await _menuQueryRepo.GetAllCategories();
            return categories;
        }

        public async Task<List<MenuItemModel>> GetFoodPerCategory(string category)
        {
            List<MenuItemModel> menuItems = await _menuQueryRepo.GetFoodPerCategory(category);
            return menuItems;
        }
    }
}
