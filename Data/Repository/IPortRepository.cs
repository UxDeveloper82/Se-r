using MySiteR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MySiteR.Data.Repository
{
    public interface IPortRepository
    {
        Portfolio GetPort(int id);
        List<Portfolio> GetAllPortfolios();
        void AddPortfolio(Portfolio portfolio);
        void UpdatePortfolio(Portfolio portfolio);
        void RemovePost(int id);
        Task<bool> SaveChangeAsync();
    }
}
