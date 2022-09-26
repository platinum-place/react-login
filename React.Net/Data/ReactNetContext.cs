using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using React.Net.Models;

namespace React.Net.Data
{
    public class ReactNetContext : DbContext
    {
        public ReactNetContext (DbContextOptions<ReactNetContext> options)
            : base(options)
        {
        }

        public DbSet<React.Net.Models.Address> Address { get; set; } = default!;

        public DbSet<React.Net.Models.User> User { get; set; }
    }
}
