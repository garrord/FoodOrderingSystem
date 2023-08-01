using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface IPlaceOrderManager
    {
        Task CreateOrder(CheckoutItemModel checkout);
    }
}
