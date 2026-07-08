# Product Management API - .NET 9 DDD Architecture

A clean **Domain-Driven Design (DDD)** implementation of a Product and Category management system using **.NET 9 Web API** and **PostgreSQL**.

## Architecture

```
src/
├── Domain/              # Domain Layer (Entities, Interfaces)
│   ├── Entities/
│   │   ├── Category.cs
│   │   └── Product.cs
│   └── Repositories/
│       ├── ICategoryRepository.cs
│       └── IProductRepository.cs
│
├── Application/         # Application Layer (DTOs, Services)
│   ├── DTOs/
│   │   ├── CategoryDto.cs
│   │   └── ProductDto.cs
│   └── Services/
│       ├── ICategoryService.cs
│       ├── CategoryService.cs
│       ├── IProductService.cs
│       └── ProductService.cs
│
├── Infrastructure/      # Infrastructure Layer (EF Core, Repositories)
│   ├── Data/
│   │   └── AppDbContext.cs
│   └── Repositories/
│       ├── CategoryRepository.cs
│       └── ProductRepository.cs
│
└── Presentation/        # Presentation Layer (API Controllers)
    ├── Controllers/
    │   ├── CategoryController.cs
    │   └── ProductController.cs
    └── Program/
        ├── Program.cs
        ├── appsettings.json
        └── appsettings.Development.json
```

## Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [PostgreSQL](https://www.postgresql.org/download/)

## Setup

### 1. Configure Database Connection

Edit `src/Presentation/appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=ProductManagementDb;Username=postgres;Password=yourpassword"
  }
}
```

Replace with your PostgreSQL credentials.

### 2. Create Database

Run the following commands:

```bash
# Navigate to Presentation project
dotnet ef migrations add InitialCreate --project src/Infrastructure --startup-project src/Presentation

# Apply migrations
dotnet ef database update --project src/Infrastructure --startup-project src/Presentation
```

### 3. Run the Application

```bash
cd src/Presentation
dotnet run
```

The API will be available at:
- **Swagger UI**: `https://localhost:5001/swagger`
- **API Base URL**: `https://localhost:5001/api`

## API Endpoints

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/category` | Get all categories |
| GET | `/api/category/{id}` | Get category by ID |
| POST | `/api/category` | Create a new category |
| PUT | `/api/category/{id}` | Update a category |
| DELETE | `/api/category/{id}` | Delete a category |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/product` | Get all products |
| GET | `/api/product/{id}` | Get product by ID |
| GET | `/api/product/category/{categoryId}` | Get products by category |
| POST | `/api/product` | Create a new product |
| PUT | `/api/product/{id}` | Update a product |
| DELETE | `/api/product/{id}` | Delete a product |

## Request/Response Examples

### Create Category

**Request:**
```http
POST /api/category
Content-Type: application/json

{
  "name": "Electronics",
  "description": "Electronic devices and gadgets"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Electronics",
  "description": "Electronic devices and gadgets",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": null
}
```

### Create Product

**Request:**
```http
POST /api/product
Content-Type: application/json

{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "stockQuantity": 10,
  "categoryId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "stockQuantity": 10,
  "categoryId": 1,
  "categoryName": "Electronics",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": null
}
```

## Technologies Used

- **.NET 9** - Latest .NET version
- **ASP.NET Core Web API** - REST API framework
- **Entity Framework Core** - ORM for PostgreSQL
- **Npgsql** - PostgreSQL provider for EF Core
- **Swagger** - API documentation
- **DDD Architecture** - Clean separation of concerns

## Project Structure

- **Domain Layer**: Contains business entities and repository interfaces
- **Application Layer**: Contains DTOs and business services
- **Infrastructure Layer**: Contains EF Core implementation and repositories
- **Presentation Layer**: Contains API controllers and configuration

## License

MIT License
