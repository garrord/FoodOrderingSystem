using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FoodOrderingSystem.Migrations
{
    /// <inheritdoc />
    public partial class stilltryingtofigureoutEF : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodItemOrderXOrders_FoodItemOrders_FoodItemOrderId",
                table: "FoodItemOrderXOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_FoodItemOrderXOrders_Orders_OrderId",
                table: "FoodItemOrderXOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FoodItemOrderXOrders",
                table: "FoodItemOrderXOrders");

            migrationBuilder.RenameTable(
                name: "FoodItemOrderXOrders",
                newName: "FoodItemOrderXOrder");

            migrationBuilder.RenameIndex(
                name: "IX_FoodItemOrderXOrders_FoodItemOrderId",
                table: "FoodItemOrderXOrder",
                newName: "IX_FoodItemOrderXOrder_FoodItemOrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FoodItemOrderXOrder",
                table: "FoodItemOrderXOrder",
                columns: new[] { "OrderId", "FoodItemOrderId" });

            migrationBuilder.CreateTable(
                name: "FoodItemOrderOrder",
                columns: table => new
                {
                    FoodItemOrdersId = table.Column<int>(type: "int", nullable: false),
                    OrdersId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodItemOrderOrder", x => new { x.FoodItemOrdersId, x.OrdersId });
                    table.ForeignKey(
                        name: "FK_FoodItemOrderOrder_FoodItemOrders_FoodItemOrdersId",
                        column: x => x.FoodItemOrdersId,
                        principalTable: "FoodItemOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FoodItemOrderOrder_Orders_OrdersId",
                        column: x => x.OrdersId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FoodItemOrderOrder_OrdersId",
                table: "FoodItemOrderOrder",
                column: "OrdersId");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItemOrderXOrder_FoodItemOrders_FoodItemOrderId",
                table: "FoodItemOrderXOrder",
                column: "FoodItemOrderId",
                principalTable: "FoodItemOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItemOrderXOrder_Orders_OrderId",
                table: "FoodItemOrderXOrder",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodItemOrderXOrder_FoodItemOrders_FoodItemOrderId",
                table: "FoodItemOrderXOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_FoodItemOrderXOrder_Orders_OrderId",
                table: "FoodItemOrderXOrder");

            migrationBuilder.DropTable(
                name: "FoodItemOrderOrder");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FoodItemOrderXOrder",
                table: "FoodItemOrderXOrder");

            migrationBuilder.RenameTable(
                name: "FoodItemOrderXOrder",
                newName: "FoodItemOrderXOrders");

            migrationBuilder.RenameIndex(
                name: "IX_FoodItemOrderXOrder_FoodItemOrderId",
                table: "FoodItemOrderXOrders",
                newName: "IX_FoodItemOrderXOrders_FoodItemOrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FoodItemOrderXOrders",
                table: "FoodItemOrderXOrders",
                columns: new[] { "OrderId", "FoodItemOrderId" });

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItemOrderXOrders_FoodItemOrders_FoodItemOrderId",
                table: "FoodItemOrderXOrders",
                column: "FoodItemOrderId",
                principalTable: "FoodItemOrders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FoodItemOrderXOrders_Orders_OrderId",
                table: "FoodItemOrderXOrders",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
