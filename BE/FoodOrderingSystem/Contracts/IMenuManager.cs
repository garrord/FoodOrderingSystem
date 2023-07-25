namespace FoodOrderingSystem.Contracts
{
    public interface IMenuManager
    {
        Task<List<string>> GetAllCategories();
    }
}
