using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace FoodOrderingTests
{
    [TestClass]
    public class MenuControllerTests
    {
        [TestMethod]
        public async Task GetAllCategories_Test()
        {
            //arrange
            Mock<IMenuManager> mockMenuManager = new Mock<IMenuManager>();
            MenuController menuController = new MenuController(mockMenuManager.Object);
            List<string> categories = new List<string>() { "1", "2", "3" };
            mockMenuManager.Setup(x => x.GetAllCategories()).Returns(Task.FromResult(categories));

            //act
            ActionResult result = await menuController.GetAllCategories();
            JsonResult json = result as JsonResult;

            //assert
            Assert.IsNotNull(result);
            List<string> categoriesResult = json.Value as List<string>;
            Assert.IsNotNull(categoriesResult);
            Assert.AreEqual(categories.Count, categoriesResult.Count);
        }
    }
}
