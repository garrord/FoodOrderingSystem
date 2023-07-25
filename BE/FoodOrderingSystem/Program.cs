using FoodOrderingSystem.Contracts;
using FoodOrderingSystem.Data;
using FoodOrderingSystem.DbContexts;
using FoodOrderingSystem.Managers;
using FoodOrderingSystem.QueryRepositories;
using FoodOrderingSystem.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FoodOrderingContext>(dbContextOptions => dbContextOptions
    .UseSqlServer("Server=localhost\\MSSQLSERVER05;Database=master;Trusted_Connection=True;TrustServerCertificate=True"));
builder.Services.AddTransient<IMenuQueryRepository, MenuQueryRepository>();
builder.Services.AddTransient<IMenuManager, MenuManager>();
builder.Services.AddTransient<ILocationDetailsQueryRepository, LocationDetailsQueryRepository>();
builder.Services.AddTransient<ILocationDetailsManager, LocationDetailsManager>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//DbSeeder.SeedDeliveryMethodData();
//DbSeeder.SeedPaymentMethodData();
//DbSeeder.SeedCategoryData();
//DbSeeder.SeedLocationDetails();
//DbSeeder.SeedHoursOfOperation();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
