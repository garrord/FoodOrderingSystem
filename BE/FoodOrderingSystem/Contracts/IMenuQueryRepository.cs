namespace FoodOrderingSystem.Contracts
{
    public interface IMenuQueryRepository
    {
        Task<List<string>> GetAllCategories();
    }
}
