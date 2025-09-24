using StargateAPI.Controllers;
using MediatR;

namespace StargateAPI.Business.Queries
{

    public class UpdatePersonRequest : IRequest<UpdatePersonResult>
    {
        public string Name { get; set; } // Required: unique identifier

        // Optional fields to update
        public string CurrentRank { get; set; }
        public string CurrentDutyTitle { get; set; }
        public DateTime? CareerStartDate { get; set; }
        public DateTime? CareerEndDate { get; set; }
    }

    public class UpdatePersonResult : BaseResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; }
    }

}