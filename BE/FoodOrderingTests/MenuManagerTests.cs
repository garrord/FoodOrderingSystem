using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Managers;
using Moq;

namespace FoodOrderingTests
{
    [TestClass]
    public class MenuManagerTests
    {
        [TestMethod]
        public async Task GetAllCategories_Test()
        {
            //arrange
            Mock<IMenuQueryRepository> mockMenuQueryRepo = new Mock<IMenuQueryRepository>();
            MenuManager menuManager = new MenuManager(mockMenuQueryRepo.Object);
            mockMenuQueryRepo.Setup(x => x.GetAllCategories()).Returns(Task.FromResult(new List<string>() { "1", "2", "3" }));

            //act
            List<string> categories = await menuManager.GetAllCategories();

            //assert
            Assert.AreEqual(3, categories.Count);
        }
    }
}