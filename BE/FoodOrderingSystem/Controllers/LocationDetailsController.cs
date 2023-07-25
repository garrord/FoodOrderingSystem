using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrderingSystem.Controllers
{
    [ApiController]
    [Route("api/locationDetails")]
    public class LocationDetailsController : ControllerBase
    {
        private readonly ILocationDetailsManager _locationDetailsManager;

        public LocationDetailsController(ILocationDetailsManager locationDetailsManager)
        {
            _locationDetailsManager = locationDetailsManager;
        }

        [HttpGet("hours")]
        public async Task<ActionResult> GetHoursOfOperation()
        {
            List<HoursOfOperationModel> hoursOfOperation = await _locationDetailsManager.GetHoursOfOperation();
            return new JsonResult(hoursOfOperation);
        }

        [HttpGet("details")]
        public async Task<ActionResult> GetLocationDetails()
        {
            LocationDetailsModel details = await _locationDetailsManager.GetLocationDetails();
            return new JsonResult(details);
        }
    }
}
