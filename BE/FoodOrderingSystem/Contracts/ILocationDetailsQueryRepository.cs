using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Contracts
{
    public interface ILocationDetailsQueryRepository
    {
        Task<List<HoursOfOperationModel>> GetHoursOfOperation();
        Task<LocationDetailsModel> GetLocationDetails();
    }
}
