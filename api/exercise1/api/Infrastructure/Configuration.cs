namespace StargateAPI.Infrastructure
{
    public static class Configuration
    {

        public static string GetDBConnectionString()
        {
            // return $"Server={GetEnv("MSSQL_HOST")};Database={GetEnv("MSSQL_DB")};User Id={GetEnv("MSSQL_USER")};Password={GetEnv("MSSQL_PASS")};TrustServerCertificate=True;";
            return $"Server=RHYSTHURYN;Database=starbase;User Id=starbase_user;Password=your_secure_password;TrustServerCertificate=True;";
        }

        private static string GetEnv(string name) =>
            Environment.GetEnvironmentVariable(name);

    }

}