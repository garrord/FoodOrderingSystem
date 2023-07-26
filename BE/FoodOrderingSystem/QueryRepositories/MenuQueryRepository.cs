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

        public async Task<List<MenuItemModel>> GetFoodPerCategory(string category)
        {
            int categoryId = await (from c in _context.Categories
                             where c.Name == category
                             select c.Id).FirstOrDefaultAsync();

            List<MenuItemModel> menuItems = await (from mi in _context.MenuItems
                                                   where mi.CategoryId == categoryId
                                                   select new MenuItemModel()
                                                   {
                                                       Number = mi.Number,
                                                       Name = mi.Name,
                                                       Price = mi.Price,
                                                       IsSpicy = mi.IsSpicy
                                                   }).ToListAsync();
            return menuItems;
        }
    }
}
