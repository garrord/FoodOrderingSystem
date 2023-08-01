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

        public void CreateOrder(CheckoutItemModel checkout)
        {
            _placeOrderRepo.CreateOrder(checkout);
        }
    }
}
