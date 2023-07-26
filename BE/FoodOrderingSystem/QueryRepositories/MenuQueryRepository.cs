using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.DbContexts;
using FoodOrderingSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingSystem.Repositories
{
    public class MenuQueryRepository : IMenuQueryRepository
    {
        private readonly FoodOrderingContext _context;

        public MenuQueryRepository(FoodOrderingContext context)
        {
            _context = context;
        }

        public async Task<List<string>> GetAllCategories()
        {
            List<string> categories = await (from c in _context.Categories
                                             select c.Name).ToListAsync();

            return categories;
        }

        //public async Task<List<MenuItemModel>> GetFoodPerCategory(string category)
        //{
        //    List<MenuItemModel> menuItems = await (from )
        //}
    }
}
