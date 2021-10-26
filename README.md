# ReStore - React & .NET 5 project

- Create dotnet project

  - dotnet new sln(root folder of project)
  - dotnet new webapi -o API (root folder of project)

- Install Sqlite (NuGet Gallery)

  - Micrsoft.EntityFrameworkCode.Sqlite
  - Microsoft.EntityFrameworkCore.Design

- Install DB migration tool

  - Googling 'nuget dotnet-ef'
  - Copy paste the cli on the terminal
    - Type 'dotnet tool list -g' on the terminal to check version
    - Type 'dotnet ef' on the terminal to check command list

- DB migration
  - Type 'dotnet ef migrations add InitialCreate -o Data/Migrations' on the terminal
    - This will create migration folder and files in the Data folder
  - Type 'dotnet ef database update'
    - This will update DB using migration file that was created previously
      and if there is not database, it will create the DB
