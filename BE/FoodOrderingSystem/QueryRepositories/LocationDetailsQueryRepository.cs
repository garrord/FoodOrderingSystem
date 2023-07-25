using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.DbContexts;
using FoodOrderingSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodOrderingSystem.QueryRepositories
{
    public class LocationDetailsQueryRepository : ILocationDetailsQueryRepository
    {
        private readonly FoodOrderingContext _orderingContext;

        public LocationDetailsQueryRepository(FoodOrderingContext orderingContext)
        {
            _orderingContext = orderingContext;
        }

        public async Task<List<HoursOfOperationModel>> GetHoursOfOperation()
        {
            List<HoursOfOperationModel> hoursOfOperation = await (from hoo in _orderingContext.HoursOfOperation
                                                                  select new HoursOfOperationModel()
                                                                  {
                                                                      DayOfWeek = hoo.DayOfWeek,
                                                                      Hours = hoo.Hours
                                                                  }).ToListAsync();
            return hoursOfOperation;
        }

        public async Task<LocationDetailsModel> GetLocationDetails()
        {
            LocationDetailsModel details = await (from ld in _orderingContext.LocationDetails
                                                  select new LocationDetailsModel()
                                                  {
                                                      AddressLine1 = ld.AddressLine1,
                                                      AddressLine2 = ld.AddressLine2,
                                                      City = ld.City,
                                                      State = ld.State,
                                                      ZipCode = ld.ZipCode,
                                                      PhoneNumber = ld.PhoneNumber
                                                  }).FirstAsync();
            return details;
        }
    }
}
