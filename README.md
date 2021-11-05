# ReStore - React & .NET 5 project

# Back-End

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
  - Adding another migrations
    - Type 'dotnet ef migrations add "migration's name"'
  - Remove migrations
    - Type 'dotnet ef migrations remove'

- Passing localhost cookies to front end
  - adding '.AllowCredetial()' in the Startup.cs filse where Cors setup states.

# Front-End

- Create application

  - Type 'npx create-react-app client --template typescript --use-npm'
  - Means 'npx create-react-app <'folder name'> --template <'using script name'> --use-npm'

- Installing React-Router

  - type 'npm install react-router-dom @types/react-router-dom' in client folder

- Install Axios to fetch the data

  - type 'npm install axios' on the terminal in client folder

- Usiing toast notification
  - type 'npm install react-toastify' on the terminal in client folder
