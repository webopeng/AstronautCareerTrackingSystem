using Microsoft.EntityFrameworkCore;
using StargateAPI.Business.Data; // for StargateContext
using StargateAPI.Business.Commands; // for CreateLogEntry + Handler

public class CreateLogEntryHandlerTests
{
    [Fact]
    public async Task Handle_CreatesLogEntrySuccessfully()
    {
        var options = new DbContextOptionsBuilder<StargateContext>()
            .UseInMemoryDatabase(databaseName: "TestDB")
            .Options;

        using var context = new StargateContext(options);
        var handler = new CreateLogEntryHandler(context);

        var request = new CreateLogEntry
        {
            Level = "Info",
            Message = "Test log",
            Context = "UnitTest"
        };

        var result = await handler.Handle(request, CancellationToken.None);

        Assert.True(result.Success);
        Assert.Equal("Test log", context.LogEntries.First().Message);
    }
}