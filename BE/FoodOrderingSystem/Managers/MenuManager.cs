using FoodOrderingSystem.Contracts;

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
    }
}
