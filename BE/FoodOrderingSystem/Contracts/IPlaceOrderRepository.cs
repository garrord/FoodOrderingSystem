using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface IPlaceOrderRepository
    {
        Task CreateOrder(CheckoutItemModel checkout);
    }
}
