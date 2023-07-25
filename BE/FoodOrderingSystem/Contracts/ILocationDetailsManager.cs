using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface ILocationDetailsManager
    {
        Task<List<HoursOfOperationModel>> GetHoursOfOperation();
        Task<LocationDetailsModel> GetLocationDetails();
    }
}
