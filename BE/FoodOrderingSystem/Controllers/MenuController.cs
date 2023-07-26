using FoodOrderingSystem.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrderingSystem.Controllers
{
    [ApiController]
    [Route("api/menuItems")]
    public class MenuController : ControllerBase
    {
        private readonly IMenuManager _menuManager;

        public MenuController(IMenuManager menuManager)
        {
            _menuManager = menuManager;
        }

        [HttpGet("categories")]
        public async Task<ActionResult> GetAllCategories()
        {
            List<string> categories = await _menuManager.GetAllCategories();
            return new JsonResult(categories);
        }

        [HttpGet("{category}")]
        public async Task<ActionResult> GetFoodPerCategory(string category)
        {
            throw new NotImplementedException();
        }
    }
}
