using MediatR;
using MediatR.Pipeline;
using Microsoft.EntityFrameworkCore;
using StargateAPI.Business.Data;
using StargateAPI.Business.Dtos;
using StargateAPI.Controllers;

namespace StargateAPI.Business.Commands
{

    public class CreateLogEntry : IRequest<CreateLogEntryResult>
    {
        public string Level { get; set; } // e.g., Info, Warning, Error
        public string Message { get; set; }
        public string Context { get; set; } // o
    }

    public class CreateLogEntryHandler : IRequestHandler<CreateLogEntry, CreateLogEntryResult>
    {
        private readonly StargateContext _context;

        public CreateLogEntryHandler(StargateContext context)
        {
            _context = context;
        }

        public async Task<CreateLogEntryResult> Handle(CreateLogEntry request, CancellationToken cancellationToken)
        {
            var log = new LogEntry
            {
                Timestamp = DateTime.UtcNow,
                Level = request.Level,
                Message = request.Message,
                Context = request.Context
            };

            _context.LogEntries.Add(log);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateLogEntryResult
            {
                Id = log.Id,
                Success = true
            };
        }

    }
}