using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrderingSystem.Controllers
{
    [ApiController]
    [Route("api/placeOrder")]
    public class PlaceOrderController : ControllerBase
    {
        private readonly IPlaceOrderManager _placeOrderManager;
        public PlaceOrderController(IPlaceOrderManager placeOrderManager)
        {
            _placeOrderManager = placeOrderManager;
        }

        [HttpPost("create")]
        public async Task<ActionResult> PlaceOrder(CheckoutItemModel checkout)
        {
            await _placeOrderManager.CreateOrder(checkout);
            return new OkResult();
        }
    }
}
