using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class ProductDBContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

    }
}
