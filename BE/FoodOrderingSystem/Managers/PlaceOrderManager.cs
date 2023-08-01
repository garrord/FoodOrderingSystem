using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Managers
{
    public class PlaceOrderManager : IPlaceOrderManager
    {
        private readonly IPlaceOrderRepository _placeOrderRepo;

        public PlaceOrderManager(IPlaceOrderRepository placeOrderRepo)
        {
            _placeOrderRepo = placeOrderRepo;
        }

        public async Task CreateOrder(CheckoutItemModel checkout)
        {
            await _placeOrderRepo.CreateOrder(checkout);
        }
    }
}
