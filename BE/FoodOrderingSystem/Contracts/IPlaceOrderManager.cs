using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface IPlaceOrderManager
    {
        void CreateOrder(CheckoutItemModel checkout);
    }
}
