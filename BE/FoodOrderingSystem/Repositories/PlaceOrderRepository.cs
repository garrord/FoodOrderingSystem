using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.DbContexts;
using FoodOrderingSystem.Entities;
using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Repositories
{
    public class PlaceOrderRepository : IPlaceOrderRepository
    {
        private readonly FoodOrderingContext _context;

        public PlaceOrderRepository(FoodOrderingContext context)
        {
            _context = context;
        }

        public async Task CreateOrder(CheckoutItemModel checkout)
        {
            CreateAddress(checkout.Address);

            Address address = _context.Addresses.Where(x => x.AddressLine1 == checkout.Address.AddressLine1).First();

            DeliveryMethod delivery = _context.DeliveryMethods.Where(x => x.Name == checkout.DeliveryMethod).First();

            PaymentMethod payment = _context.PaymentTypes.Where(x => x.Name == checkout.PaymentMethod).First();

            List<FoodItemOrder> items = CreateOrderedFoodItems(checkout.FoodItemsOrdered);

            Order entityToUpdate = new Order();
            entityToUpdate.FirstName = checkout.FirstName;
            entityToUpdate.LastName = checkout.LastName;
            entityToUpdate.CellPhone = checkout.Cellphone;
            entityToUpdate.EmailAddress = checkout.EmailAddress;
            entityToUpdate.Tip = checkout.Tip;
            entityToUpdate.Total = checkout.TotalPrice;
            entityToUpdate.DeliveryMethod = delivery;
            entityToUpdate.PaymentMethod = payment;
            entityToUpdate.Address = address;
            entityToUpdate.DateOrdered = DateTime.Now;
            entityToUpdate.FoodItemOrders = items;

            _context.Orders.Add(entityToUpdate);
            _context.SaveChanges();
        }

        private List<FoodItemOrder> CreateOrderedFoodItems(List<SelectedFoodModel> items)
        {
            List<FoodItemOrder> foodItemOrders = new List<FoodItemOrder>();

            foreach (SelectedFoodModel item in items)
            {
                int menuItemId = _context.MenuItems.Where(x => x.Name == item.Name)
                    .Select(x => x.Id).First();

                FoodItemOrder food = new FoodItemOrder()
                {
                    MenuItemId = menuItemId,
                    Quantity = item.Quantity,
                };

                foodItemOrders.Add(food);

                //_context.FoodItemOrders.Add(food);

                //FoodItemOrderXOrder foodItemOrderXOrder = new FoodItemOrderXOrder
                //{
                //    FoodItemOrder = food
                //};

                //foodItemOrderXOrders.Add(foodItemOrderXOrder);
                //_context.FoodItemOrderXOrders.Add(foodItemOrderXOrder);
            }          
            //_context.SaveChanges();

            return foodItemOrders;
        }

        private void CreateAddress(Address address)
        {
            Address entityToUpdate = new Address();
            if (!_context.Addresses.AsEnumerable().Any(row => row.AddressLine1 == address.AddressLine1))
            {
                entityToUpdate.AddressLine1 = address.AddressLine1;
                entityToUpdate.AddressLine2 = address.AddressLine2;
                entityToUpdate.State = address.State;
                entityToUpdate.City = address.City;
                entityToUpdate.ZipCode = address.ZipCode;

                _context.Addresses.Add(entityToUpdate);
                _context.SaveChanges();
            }
        }
    }
}
