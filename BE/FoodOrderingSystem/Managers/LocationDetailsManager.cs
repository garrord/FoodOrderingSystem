using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Models;

namespace FoodOrderingSystem.Managers
{
    public class LocationDetailsManager : ILocationDetailsManager
    {
        private readonly ILocationDetailsQueryRepository _detailsQueryRepo;

        public LocationDetailsManager(ILocationDetailsQueryRepository detailsQueryRepo)
        {
            _detailsQueryRepo = detailsQueryRepo;
        }

        public async Task<List<HoursOfOperationModel>> GetHoursOfOperation()
        {
            List<HoursOfOperationModel> hoursOfOperation = await _detailsQueryRepo.GetHoursOfOperation();
            return hoursOfOperation;
        }

        public async Task<LocationDetailsModel> GetLocationDetails()
        {
            LocationDetailsModel details = await _detailsQueryRepo.GetLocationDetails();
            return details;
        }
    }
}
